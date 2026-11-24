// Video spec for /instrumentation-control/bernoulli-equation-flow-measurement/. Facts from the article only.
// Horizontal pipe, flow left to right through a concentric orifice plate. Jet contracts to a vena contracta just
// downstream of the plate. Tappings upstream (p1) and downstream (p2) feed a DP transmitter. Pressure profile below:
// falls at the plate, lowest at the vena contracta, partly recovers, leaving a permanent loss.
BLUE['bernoulli-equation-flow-measurement'] = {
 pill:'INSTRUMENTATION', title:'How <em>Bernoulli</em> Measures Flow',
 svg:`<g class="part" id="pipe"><rect x="60" y="300" width="880" height="160" fill="${NV}"/>
  <path d="M60 300 H940 M60 460 H940" stroke="${LB}" stroke-width="6"/>
  <path d="M80 330 H360 C410 330 430 352 470 360 H560 C640 360 700 330 920 330" fill="none" stroke="${TL}" stroke-width="4"/>
  <path d="M80 430 H360 C410 430 430 408 470 400 H560 C640 400 700 430 920 430" fill="none" stroke="${TL}" stroke-width="4"/>
  <path class="flow" d="M80 380 H920" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:.8s"/></g>
 <g class="part" id="plate"><rect x="430" y="300" width="16" height="48" fill="#fff"/><rect x="430" y="412" width="16" height="48" fill="#fff"/></g>
 <g class="part" id="dpt"><path d="M380 300 V160 H440 M560 300 V160 H500" fill="none" stroke="${LB}" stroke-width="5"/>
  <rect x="425" y="110" width="90" height="90" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <text x="470" y="167" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="30">DP</text></g>
 <g class="part" id="profile"><path d="M80 530 H400 L440 630 C470 690 520 700 560 700 C630 700 660 610 730 600 H920" fill="none" stroke="#e5654f" stroke-width="6"/>
  <path class="flow" d="M80 530 H400 L440 630 C470 690 520 700 560 700 C630 700 660 610 730 600 H920" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/>
  <path d="M900 530 V600 M885 530 H915 M885 600 H915" stroke="#F5B800" stroke-width="4"/>
  <circle class="pulse" cx="540" cy="700" r="12" fill="#fff"/></g>`,
 labels:[[160,230,'Upstream p1',380,300,'middle'],[760,230,'Downstream p2',560,300,'middle'],[230,500,'Orifice plate',430,450,'middle'],[230,740,'Pressure profile',300,530,'middle'],[700,740,'Vena contracta',540,700,'middle'],[880,500,'Permanent loss',900,540,'end']],
 steps:[['The bore is smaller, so velocity rises and <b>static pressure falls</b> (continuity plus Bernoulli).',['pipe','plate']],
        ['The <b>DP transmitter</b> reads p1 minus p2. Flow follows the <b>square root of DP</b>.',['dpt']],
        ['Pressure only partly recovers. At β = 0.6 about <b>62% of the DP</b> is lost for good.',['profile']]],
 fact:['Q = C·E·A₂·√(2ΔP/ρ)','Double the flow and the DP rises four times.'],
 end:'The DP flow equation derived, square root extraction, venturi and pitot meters, pressure loss and a worked orifice example.',
 caption:'Why does an orifice meter need square root extraction? Bernoulli explains the whole DP flow loop.',
 tags:['#FlowMeasurement','#Instrumentation','#OrificePlate','#EngineeringStudents','#ZentaEngineering']};
