# Energetic 128 bpm track: four-on-floor kick, claps, hats, offbeat bass, 16th arps, risers and hits
import sys, numpy as np
from scipy.io import wavfile
from scipy.signal import butter, lfilter
SR = 44100; DUR = float(sys.argv[1]); OUT = sys.argv[2]; SEED = int(sys.argv[3])
ACC = [float(x) for x in sys.argv[4].split(",")] if len(sys.argv) > 4 else []
N = int(SR * DUR); mix = np.zeros((N, 2)); rng = np.random.default_rng(SEED)
BPM = 124; BT = 60 / BPM; BAR = 4 * BT
def f(n): return 440 * 2 ** ((n - 69) / 12)
def lp(x, fc): b, a = butter(2, min(fc, SR/2-100) / (SR / 2)); return lfilter(b, a, x)
def hp(x, fc): b, a = butter(2, fc / (SR / 2), 'high'); return lfilter(b, a, x)
def add(sig, at, g=1.0, pan=0.0):
    i = int(at * SR)
    if i >= N or i < 0: return
    sig = sig[:N - i]
    mix[i:i+len(sig), 0] += sig * g * (1 - pan) ** .5; mix[i:i+len(sig), 1] += sig * g * (1 + pan) ** .5
def saw(fr, n): t = np.arange(n) / SR; return 2 * ((t * fr) % 1) - 1

PROGS = [[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],[[50,53,57],[46,50,53],[48,52,55],[45,48,52]],
         [[52,55,59],[48,52,55],[55,59,62],[50,54,57]],[[48,52,55],[57,60,64],[53,57,60],[55,59,62]],
         [[45,48,52],[41,45,48],[48,52,55],[43,47,50]]]
prog = PROGS[SEED % 5]
START = 0.0  # beat grid from 0; drums enter after the intro build
DROP = 2 * BAR  # ~3.75 s
nb = int(DUR / BT) + 1
for b in range(nb):
    t0 = b * BT; bar = int(t0 // BAR); ch = prog[bar % 4]
    if t0 > DUR - 1.2: break
    full = t0 >= DROP - 1e-6
    # kick: half time in the build, four-on-floor after
    if full or b % 2 == 0:
        n = int(.3 * SR); tt = np.arange(n) / SR
        add(np.sin(2*np.pi*(48 + 110*np.exp(-tt*35))*tt) * np.exp(-tt*9), t0, .9 if full else .6)
    if full:
        if b % 2 == 1:  # clap on 2 and 4
            n = int(.18 * SR); tt = np.arange(n) / SR
            add(hp(rng.standard_normal(n), 1200) * np.exp(-tt*22), t0, .35)
        n = int(.12 * SR); tt = np.arange(n) / SR  # open hat offbeat
        add(hp(rng.standard_normal(n), 8000) * np.exp(-tt*25), t0 + BT/2, .12, .25)
        for k in range(4):  # 16th closed hats
            n = int(.03 * SR); add(hp(rng.standard_normal(n), 9000) * np.exp(-np.arange(n)/SR*90), t0 + k*BT/4, .05, -.3)
        # bass arpeggio (8th notes through chord tones)
        for k in range(2):
            m = [ch[0], ch[1], ch[2], ch[1]][(b*2+k) % 4] - 24
            n = int(BT/2 * SR * .9); tt = np.arange(n) / SR
            add(lp(saw(f(m), n) + .5*np.sin(2*np.pi*f(m)*tt), 700) * np.exp(-tt*5), t0 + k*BT/2, .32)
    # 16th arp (from build on)
    for k in range(4):
        m = (ch + [ch[0]+12])[ (b*4 + k) % 4 ] + 12
        n = int(BT/4 * SR); tt = np.arange(n) / SR
        add(lp(saw(f(m), n), 2500 if full else 1500) * np.exp(-tt*18), t0 + k*BT/4, .07 if full else .05, pan=(.3 if k % 2 else -.3))
# pad per bar
for bar in range(int(DUR / BAR) + 1):
    ch = prog[bar % 4]; n = int(BAR * SR); tt = np.arange(n) / SR; s = np.zeros(n)
    for m in ch:
        for d in (-.1, .1): s += saw(f(m + d), n)
    e = np.minimum(1, tt / .1) * np.minimum(1, (BAR - tt) / .2)
    add(lp(s, 1800) * e / 8, bar * BAR, .3)
# riser into the drop
n = int(DROP * SR); tt = np.arange(n) / SR; nz = rng.standard_normal(n); r = np.zeros(n)
for j in range(0, n, 2205): r[j:j+2205] = lp(nz[j:j+2205], 300 + 7000 * (j / n) ** 2)
add(r * (tt / DROP) ** 2 * .45, 0)
def hit(at, g=.8):
    n = int(1.2 * SR); tt = np.arange(n) / SR
    add(np.sin(2*np.pi*(40 + 70*np.exp(-tt*14))*tt) * np.exp(-tt*4) + lp(rng.standard_normal(n), 7000) * np.exp(-tt*6) * .3, at, g)
def sweep(at, d=.5):
    n = int(d * SR); tt = np.arange(n) / SR
    add(lp(rng.standard_normal(n), 5000) * (tt / d) ** 2 * .35, at - d, .7)
hit(DROP)
for a in ACC: sweep(a); hit(a, .55)
fo = int(1.5 * SR); mix[-fo:] *= np.linspace(1, 0, fo)[:, None]
fi = int(.5 * SR); mix[:fi] *= np.linspace(0, 1, fi)[:, None]
mix = np.tanh(mix * 1.4); mix /= np.abs(mix).max() / .9
wavfile.write(OUT, SR, (mix * 32767).astype(np.int16))
