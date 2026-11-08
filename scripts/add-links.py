#!/usr/bin/env python3
"""Insert contextual links into article prose.

For each article, LINKS lists (candidate phrases, url). The first candidate found in a
prose line (not frontmatter, imports, headings, tables, JSX tag lines, SVG or math
blocks, and not already inside a link) becomes the anchor. A URL already present in the
file is skipped, so the script is safe to run again. Prints what it linked and missed.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / 'src/content/articles'
IB = 'https://www.instrumentationblog.in/'
E, X = '/electrical-engineering/', '/electronics-engineering/'

LINKS = {
  'electrical-engineering/ohms-law-kirchhoffs-laws': [
    (['voltage drop', 'cable'], E + 'cable-sizing/'),
    (['diode', 'non-linear', 'nonlinear'], X + 'what-is-a-diode/'),
    (['power factor', 'phasor'], E + 'power-factor/'),
    (["Thevenin", "Thévenin", 'equivalent circuit'], IB + 'thevenins-theorem-made-simple/'),
    (['star', 'delta'], IB + 'star-delta-transformation-formula/'),
    (['maximum power', 'power delivered'], IB + 'maximum-power-transfer-theorem/'),
  ],
  'electrical-engineering/induction-motor-working-principle': [
    (['power factor'], E + 'power-factor/'),
    (['cable size', 'cable sizing', 'cable'], E + 'cable-sizing/'),
    (['circuit breaker', 'breaker'], E + 'circuit-breaker-working-principle/'),
    (['insulation resistance', 'insulation'], E + 'insulation-resistance-test/'),
    (['transformer'], E + 'transformer-working-principle/'),
    (['nameplate', 'rated'], IB + 'motor-nameplate-details-explained/'),
    (['efficiency class', 'IE3', 'efficiency'], IB + 'motor-efficiency-classes-iec-60034/'),
    (['unbalance', 'unbalanced'], IB + 'voltage-unbalance-calculation-motors/'),
  ],
  'electrical-engineering/transformer-working-principle': [
    (['power factor'], E + 'power-factor/'),
    (['transmission', 'distribution'], E + 'generation-transmission-distribution/'),
    (['insulation resistance', 'insulation'], E + 'insulation-resistance-test/'),
    (['overcurrent', 'protection relay', 'relay'], E + 'overcurrent-relay/'),
    (['circuit breaker', 'breaker'], E + 'circuit-breaker-working-principle/'),
    (["Faraday's law", 'Faraday'], IB + 'faradays-law-electromagnetic-induction/'),
    (['eddy current', 'hysteresis', 'core loss'], IB + 'eddy-current-loss-hysteresis-loss/'),
    (['inrush'], IB + 'transformer-inrush-current/'),
    (['autotransformer'], IB + 'autotransformer-working-principle/'),
  ],
  'electrical-engineering/generation-transmission-distribution': [
    (['step-up transformer', 'step up transformer', 'transformer'], E + 'transformer-working-principle/'),
    (['circuit breaker', 'breaker'], E + 'circuit-breaker-working-principle/'),
    (['power factor', 'reactive power'], E + 'power-factor/'),
    (['protection', 'relay'], E + 'overcurrent-relay/'),
    (['Ferranti'], IB + 'ferranti-effect-transmission-line/'),
    (['HVDC'], IB + 'hvdc-transmission-lcc-vsc/'),
    (['corona'], IB + 'corona-effect-transmission-line/'),
    (['substation'], IB + 'gis-vs-ais-substation/'),
  ],
  'electrical-engineering/circuit-breaker-working-principle': [
    (['overcurrent relay', 'protection relay', 'relay'], E + 'overcurrent-relay/'),
    (['cable', 'conductor'], E + 'cable-sizing/'),
    (['earth fault', 'earthing', 'earth'], E + 'electrical-earthing/'),
    (['transformer'], E + 'transformer-working-principle/'),
    (['inverse time', 'IDMT', 'time-current'], IB + 'idmt-relay-characteristics-tms-psm/'),
    (['loop impedance', 'fault loop'], IB + 'earth-fault-loop-impedance-zs-testing/'),
    (['residual current', 'RCD', 'RCCB'], IB + 'rcd-types-ac-a-f-b-explained/'),
  ],
  'electrical-engineering/overcurrent-relay': [
    (['circuit breaker', 'breaker'], E + 'circuit-breaker-working-principle/'),
    (['transformer'], E + 'transformer-working-principle/'),
    (['cable'], E + 'cable-sizing/'),
    (['earth fault'], E + 'electrical-earthing/'),
    (['IDMT', 'inverse'], IB + 'idmt-relay-characteristics-tms-psm/'),
    (['directional'], IB + 'directional-overcurrent-relay-67/'),
    (['burden'], IB + 'ct-burden-calculation-va/'),
    (['open circuit', 'open-circuit', 'CT secondary'], IB + 'ct-secondary-open-circuit-risks/'),
  ],
  'electrical-engineering/electrical-earthing': [
    (['circuit breaker', 'MCB', 'breaker'], E + 'circuit-breaker-working-principle/'),
    (['cable', 'protective conductor'], E + 'cable-sizing/'),
    (['insulation resistance', 'insulation'], E + 'insulation-resistance-test/'),
    (['overcurrent', 'relay'], E + 'overcurrent-relay/'),
    (['bonding', 'equipotential'], IB + 'equipotential-bonding-electrical-safety/'),
    (['touch voltage', 'step voltage', 'touch'], IB + 'step-and-touch-voltage-ieee-80/'),
    (['loop impedance', 'fault loop'], IB + 'earth-fault-loop-impedance-zs-testing/'),
    (['neutral grounding resistor', 'resistance earthing', 'resistance grounding', 'NGR'], IB + 'neutral-grounding-resistor-sizing/'),
  ],
  'electrical-engineering/power-factor': [
    (['induction motor'], E + 'induction-motor-working-principle/'),
    (['transformer'], E + 'transformer-working-principle/'),
    (['cable'], E + 'cable-sizing/'),
    (['generation', 'transmission', 'utility'], E + 'generation-transmission-distribution/'),
    (['harmonic'], IB + 'active-harmonic-filter-working-sizing/'),
    (['synchronous condenser', 'synchronous'], IB + 'synchronous-condenser-working/'),
    (['electronic loads', 'electronic load', 'rectifier', 'power supplies'], IB + 'pfc-circuit-boost-power-factor-correction/'),
  ],
  'electrical-engineering/cable-sizing': [
    (["Ohm's law", 'resistance'], E + 'ohms-law-kirchhoffs-laws/'),
    (['circuit breaker', 'breaker', 'protective device'], E + 'circuit-breaker-working-principle/'),
    (['motor'], E + 'induction-motor-working-principle/'),
    (['earth fault', 'earthing', 'earth'], E + 'electrical-earthing/'),
    (['power factor'], E + 'power-factor/'),
    (['derating', 'correction factor'], IB + 'cable-derating-factors/'),
    (['neutral', 'harmonic'], IB + 'neutral-conductor-sizing-harmonics/'),
    (['motor starting', 'starting current', 'voltage dip'], IB + 'motor-starting-voltage-dip-calculation/'),
  ],
  'electrical-engineering/insulation-resistance-test': [
    (['motor'], E + 'induction-motor-working-principle/'),
    (['transformer'], E + 'transformer-working-principle/'),
    (['cable'], E + 'cable-sizing/'),
    (['earth', 'earthing'], E + 'electrical-earthing/'),
    (['Megger', 'megohmmeter', 'insulation tester'], IB + 'insulation-resistance-test-megger/'),
    (['maintenance'], IB + 'transformer-maintenance-checklist/'),
    (['isolate', 'isolation', 'lock'], IB + 'electrical-isolation-permit-to-work/'),
  ],
  'electronics-engineering/what-is-a-diode': [
    (['buck converter', 'switching regulator', 'freewheeling', 'flyback'], X + 'buck-converter/'),
    (["Ohm's law", 'series resistor'], E + 'ohms-law-kirchhoffs-laws/'),
    (['logic gate', 'diode logic', 'OR gate'], X + 'logic-gates/'),
    (['reverse polarity', 'reverse-polarity', 'polarity'], IB + 'reverse-polarity-protection-circuits/'),
    (['precision rectifier', 'small signals', 'rectifier'], IB + 'precision-rectifier-op-amp-circuit/'),
    (['current-limiting resistor', 'LED resistor', 'resistor'], IB + 'led-resistor-calculation/'),
  ],
  'electronics-engineering/inverting-and-non-inverting-amplifier': [
    (['sampling', 'ADC', 'analog-to-digital'], X + 'sampling-theorem/'),
    (['microcontroller'], X + 'microcontroller-vs-microprocessor/'),
    (['CMOS', 'transistor'], X + 'cmos-inverter/'),
    (["Ohm's law", 'Kirchhoff', 'KCL'], E + 'ohms-law-kirchhoffs-laws/'),
    (['inverting amplifier gain', 'inverting gain', 'gain formula'], IB + 'inverting-amplifier-gain-formula/'),
    (['instrumentation amplifier', 'differential', 'sensor'], IB + 'instrumentation-amplifier-working/'),
    (['active filter', 'filter'], IB + 'active-filter-sallen-and-key/'),
  ],
  'electronics-engineering/logic-gates': [
    (['CMOS'], X + 'cmos-inverter/'),
    (['microcontroller', 'processor'], X + 'microcontroller-vs-microprocessor/'),
    (['diode'], X + 'what-is-a-diode/'),
    (['TTL'], IB + 'ttl-vs-cmos-logic-families/'),
    (['decoder', 'display'], IB + '7-segment-display-decoder/'),
    (['high impedance', 'tri-state', 'bus'], IB + 'tri-state-buffer-high-impedance/'),
    (['Schmitt', 'noise margin', 'noise'], IB + 'schmitt-trigger-hysteresis/'),
  ],
  'electronics-engineering/buck-converter': [
    (['diode'], X + 'what-is-a-diode/'),
    (['PCB', 'layout'], X + 'pcb-design-basics/'),
    (['microcontroller', 'processor'], X + 'microcontroller-vs-microprocessor/'),
    (['synchronous rectification', 'synchronous buck', 'low-side MOSFET', 'synchronous'], IB + 'synchronous-rectification-buck-converter/'),
    (['boost converter', 'boost'], IB + 'boost-converter-working-principle-2/'),
    (['heat sink', 'heatsink', 'thermal'], IB + 'heat-sink-calculation/'),
    (['linear regulator', 'LDO'], IB + 'ldo-regulator-dropout-voltage/'),
  ],
  'electronics-engineering/pcb-design-basics': [
    (['buck converter', 'switching regulator', 'switching converter'], X + 'buck-converter/'),
    (['microcontroller'], X + 'microcontroller-vs-microprocessor/'),
    (['antenna', 'RF'], X + 'antenna-gain-and-directivity/'),
    (['logic', 'digital'], X + 'logic-gates/'),
    (['copper pour', 'ground plane', 'ground pour'], IB + 'pcb-copper-pour-guidelines/'),
    (['via'], IB + 'pcb-via-current-capacity/'),
    (['controlled impedance', 'impedance'], IB + 'controlled-impedance-pcb-traces/'),
    (['signal integrity', 'high-speed', 'high speed'], IB + 'signal-integrity-high-speed-pcb-design/'),
  ],
  'electronics-engineering/microcontroller-vs-microprocessor': [
    (['logic gate', 'logic'], X + 'logic-gates/'),
    (['ADC', 'sampling'], X + 'sampling-theorem/'),
    (['PCB', 'board'], X + 'pcb-design-basics/'),
    (['CMOS'], X + 'cmos-inverter/'),
    (['UART', 'serial'], IB + 'uart-communication-frame-baud-rate/'),
    (['button', 'switch', 'debounce'], IB + 'switch-debouncing-hardware-software/'),
    (['3.3 V', '5 V', 'logic level'], IB + 'logic-level-shifter-3v3-5v/'),
    (['PLC'], IB + 'category/automation/plc-programmable-logic-controller/'),
  ],
  'electronics-engineering/cmos-inverter': [
    (['logic gate', 'NAND', 'gate'], X + 'logic-gates/'),
    (['microcontroller', 'processor'], X + 'microcontroller-vs-microprocessor/'),
    (['diode'], X + 'what-is-a-diode/'),
    (['TTL'], IB + 'ttl-vs-cmos-logic-families/'),
    (['Schmitt', 'hysteresis', 'slow input'], IB + 'schmitt-trigger-hysteresis/'),
    (['level shift', '3.3 V', 'supply voltage'], IB + 'logic-level-shifter-3v3-5v/'),
  ],
  'electronics-engineering/sampling-theorem': [
    (['op-amp', 'op amp', 'amplifier'], X + 'inverting-and-non-inverting-amplifier/'),
    (['microcontroller'], X + 'microcontroller-vs-microprocessor/'),
    (['RC filter', 'PCB'], X + 'pcb-design-basics/'),
    (['sample-and-hold', 'sample and hold', 'track-and-hold'], IB + 'sample-and-hold-circuit/'),
    (['voltage reference', 'reference voltage', 'reference'], IB + 'voltage-reference-ic-selection/'),
    (['anti-aliasing filter', 'active filter', 'low-pass filter'], IB + 'active-filter-sallen-and-key/'),
    (['decibel', 'dB'], IB + 'decibel-in-electronics-db-dbm/'),
  ],
  'electronics-engineering/antenna-gain-and-directivity': [
    (['PCB', 'trace'], X + 'pcb-design-basics/'),
    (['sampling', 'receiver'], X + 'sampling-theorem/'),
    (['impedance matching', 'matched', 'VSWR', 'reflect'], IB + 'impedance-matching-explained/'),
    (['dBi', 'decibel', 'dB'], IB + 'decibel-in-electronics-db-dbm/'),
    (['impedance'], IB + 'what-is-impedance/'),
  ],
}

def prose_mask(lines):
    """True for lines whose text may receive a link."""
    ok, fm, block = [], 0, None
    for i, ln in enumerate(lines):
        s = ln.strip()
        if s == '---' and fm < 2:
            fm += 1; ok.append(False); continue
        if fm < 2: ok.append(False); continue
        if block:
            ok.append(False)
            if block in s: block = None
            continue
        if s.startswith('$$'):
            ok.append(False)
            if not (len(s) > 2 and s.endswith('$$') and s != '$$'): block = '$$'
            continue
        if s.startswith('<svg'):
            ok.append(False)
            if '</svg>' not in s: block = '</svg>'
            continue
        if s.startswith('```'):
            ok.append(False); block = '```'; continue
        if not s or s.startswith(('#', '|', '<', 'import ', '{', '!')):
            ok.append(False); continue
        ok.append(True)
    return ok

def protected(line):
    """Spans that must not be touched: links, inline code, inline math, JSX, URLs."""
    spans = []
    for pat in [r'\[[^\]]*\]\([^)]*\)', r'`[^`]*`', r'\$[^$]+\$', r'<[^>]+>', r'https?://\S+']:
        spans += [m.span() for m in re.finditer(pat, line)]
    return spans

def try_link(lines, mask, phrase, url):
    flags = 0 if phrase.isupper() or len(phrase) <= 3 else re.I
    rx = re.compile(r'(?<![\w/-])' + re.escape(phrase) + r'(?:s|es)?(?![\w-])', flags)
    for i, ln in enumerate(lines):
        if not mask[i] or '](' in ln and ln.count('](') >= 2:
            continue
        spans = protected(ln)
        for m in rx.finditer(ln):
            a, b = m.span()
            if any(x <= a < y or x < b <= y for x, y in spans):
                continue
            # keep bold markers outside the link: **[word](url)**
            lines[i] = ln[:a] + f'[{ln[a:b]}]({url})' + ln[b:]
            return ln[a:b]
    return None

def main():
    report, misses = [], []
    for key, links in LINKS.items():
        p = ROOT / f'{key}.mdx'
        text = p.read_text()
        lines = text.split('\n')
        n_int = n_ext = 0
        for cands, url in links:
            if f']({url})' in text:
                continue
            # Owner rule (8 Nov 2026): at most one InstrumentationBlog.in link per article.
            if 'instrumentationblog.in' in url and 'instrumentationblog.in' in '\n'.join(lines):
                continue
            mask = prose_mask(lines)
            got = None
            for c in cands:
                got = try_link(lines, mask, c, url)
                if got: break
            if got:
                ext = url.startswith('http')
                n_ext += ext; n_int += not ext
                report.append(f'  {key.split("/")[1]}: "{got}" -> {url}')
            else:
                misses.append(f'  MISS {key.split("/")[1]}: {cands} -> {url}')
        p.write_text('\n'.join(lines))
        print(f'{key}: +{n_int} internal, +{n_ext} external')
    print('\n'.join(report))
    print('\n'.join(misses) or 'no misses')

if __name__ == '__main__':
    main()
