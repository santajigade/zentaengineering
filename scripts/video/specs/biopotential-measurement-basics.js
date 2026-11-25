// Video spec for /biomedical-engineering/biopotential-measurement-basics/. Facts from the article only.
// ECG front end: RA and LA electrodes -> instrumentation amplifier; right leg drive fed back to the RL electrode;
// then HPF, LPF, notch, isolation barrier, ADC and display. Signal flows left to right; RLD flows from amplifier to body.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const bx=(x,s1,s2)=>`<rect x="${x}" y="470" width="96" height="80" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(x+48,504,s1,22)}${t(x+48,534,s2,17)}`;
const el=(x,y)=>`<circle cx="${x}" cy="${y}" r="16" fill="#c9d2de" stroke="${LB}" stroke-width="4"/>`;
const ecg=x=>`H${x+40} L${x+48} ${190} L${x+56} 200 H${x+70} L${x+76} 210 L${x+86} 130 L${x+96} 222 L${x+102} 200 H${x+118} Q${x+130} 182 ${x+142} 200`;
BLUE['biopotential-measurement-basics'] = {
 pill:'BIOMEDICAL', title:'How <em>Biopotential Measurement</em> Works',
 svg:`<g class="part" id="body"><ellipse cx="140" cy="430" rx="105" ry="200" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path class="pulse" d="M150 380 C120 350 100 390 150 420 C200 390 180 350 150 380 Z" fill="#e5654f"/>
  <path class="flow" d="M30 160 Q50 130 70 160 T110 160 T150 160 T190 160" fill="none" stroke="#F5B800" stroke-width="6" style="--p:.8s"/></g>
 <g class="part" id="elec">${el(95,320)}${el(195,440)}${el(120,560)}${t(95,295,'RA',20)}${t(195,415,'LA',20)}${t(146,567,'RL',20,'start')}
  <path d="M111 320 H270 V360 H300 M211 440 H270 V410 H300" fill="none" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M111 320 H270 V360 H296 M211 440 H270 V410 H296" fill="none" stroke="#fff" stroke-width="3"/></g>
 <g class="part" id="amp"><path d="M300 320 V450 L420 385 Z" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(345,393,'In-amp',20)}
  <path d="M420 385 H450 V510 H470" fill="none" stroke="${LB}" stroke-width="4"/><path class="flow" d="M420 385 H450 V510 H466" fill="none" stroke="#fff" stroke-width="3"/></g>
 <g class="part" id="rld"><path d="M360 418 V650 H120 V576" fill="none" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M360 422 V650 H120 V580" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/></g>
 <g class="part" id="chain">${bx(470,'HPF','0.05 Hz')}${bx(585,'LPF','150 Hz')}${bx(700,'Notch','50/60 Hz')}
  <path d="M566 510 H585 M681 510 H700" stroke="${LB}" stroke-width="4"/>
  <path d="M818 440 V600" stroke="#e5654f" stroke-width="5" stroke-dasharray="12 8"/>
  <rect x="845" y="470" width="110" height="80" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(900,520,'ADC',24)}
  <path d="M796 510 H845" stroke="${LB}" stroke-width="4"/><path class="flow" d="M566 510 H585 M681 510 H700 M796 510 H841" stroke="#fff" stroke-width="3"/></g>
 <g class="part" id="display"><rect x="560" y="90" width="400" height="190" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M900 470 V284" stroke="${LB}" stroke-width="4"/><path class="flow" d="M900 470 V288" stroke="#fff" stroke-width="3"/>
  <path d="M580 200 ${ecg(580)} ${ecg(722)} H940" fill="none" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M580 200 ${ecg(580)} ${ecg(722)} H940" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/></g>`,
 labels:[[260,140,'Mains interference',190,160,'start'],[300,260,'Ag/AgCl electrode',108,312,'start'],[560,700,'Right leg drive',360,650,'start'],[818,640,'Isolation',818,600,'middle']],
 steps:[['<b>Ag/AgCl electrodes</b> convert ionic currents in the body into electronic currents in the leads.',['body','elec']],
        ['An <b>instrumentation amplifier</b> with high CMRR amplifies the difference. <b>Right leg drive</b> cuts interference.',['amp','rld']],
        ['<b>Filters</b> remove baseline wander and noise, then an <b>isolation barrier</b> and ADC protect and digitise.',['chain','display']]],
 fact:['G = 1 + 2R1 ÷ RG','The classic three op-amp design sets its gain with a single resistor.'],
 end:'Signal sources, electrodes, in-amps and CMRR, filtering, patient safety and an ECG front end design example.',
 caption:'How does an ECG pick up a 1 mV signal from your heart? Electrodes, in-amp, filters and isolation explained.',
 tags:['#ECG','#BiomedicalEngineering','#Biopotential','#EngineeringStudents','#ZentaEngineering']};
})();
