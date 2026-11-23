// Video spec for /predictive-maintenance-machine-learning/. Facts from the article only.
// Pipeline: sensor on a motor driven pump -> vibration signal -> features -> ML models -> work order in CMMS,
// with maintenance records fed back to the models as failure labels.
(()=>{
const arr=(d,p='.9s')=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="7" opacity=".5"/><path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:${p}"/>`;
const T=(x,y,t,s=20,f='#fff')=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${f}" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
// vibration waveform with periodic impacts (impulsive bearing fault)
let w='M590 200';
for(let x=590;x<=910;x+=4){const k=(x-590)%80;let y=200+14*Math.sin((x-590)/9);if(k>=40&&k<48)y=200+(k%8<4?-62:58);w+=` L${x} ${y.toFixed(1)}`;}
// impeller vanes, backward curved for clockwise rotation
const vanes=[0,60,120,180,240,300].map(a=>{const [x1,y1]=P(400,230,10,a),[x2,y2]=P(400,230,36,a-40),[cx,cy]=P(400,230,28,a-5);
  return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>`;}).join('');
BLUE['predictive-maintenance-machine-learning'] = {
 pill:'AI AND DATA', title:'How <em>Predictive Maintenance</em> Works',
 svg:`<g class="part" id="machine">
  <rect x="70" y="170" width="190" height="110" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[95,120,145,170,195,220].map(x=>`<path d="M${x} 180 V270" stroke="${LB}" stroke-width="3" opacity=".7"/>`).join('')}
  <rect x="140" y="148" width="50" height="22" rx="3" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M85 280 V296 H125 V280 M205 280 V296 H245 V280" stroke="${LB}" stroke-width="4" fill="${NV}"/>
  <rect x="260" y="219" width="100" height="12" fill="#fff"/><rect x="300" y="208" width="18" height="34" rx="3" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M400 180 H470 V200 H440 A50 50 0 1 1 400 180 Z" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M470 172 V208" stroke="${LB}" stroke-width="6"/>
  <g class="spin-cw" style="--p:1.2s"><circle cx="400" cy="230" r="38" fill="none" stroke="none"/>${vanes}</g>
  <circle cx="400" cy="230" r="9" fill="${TL}" stroke="#fff" stroke-width="3"/>
  <path class="flow" d="M418 190 H480" stroke="#fff" stroke-width="4" fill="none" marker-end="url(#ahw)" style="--p:.7s"/></g>
 <g class="part" id="sensor"><g class="pulse"><rect x="226" y="146" width="28" height="24" rx="4" fill="#fff" stroke="${LB}" stroke-width="3"/></g>
  <path d="M254 156 H540 V180 H552" stroke="${LB}" stroke-width="3" fill="none"/>
  <path class="flow" d="M254 156 H540 V180 H552" stroke="#fff" stroke-width="3" fill="none" style="--p:.8s"/></g>
 <g class="part" id="signal"><rect x="560" y="110" width="380" height="190" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M585 200 H915 M585 130 V280" stroke="${LB}" stroke-width="2" opacity=".6"/>
  <path d="${w}" stroke="#fff" stroke-width="3" fill="none" stroke-linejoin="round"/></g>
 <g class="part" id="features">${arr('M750 304 V372')}<rect x="600" y="380" width="340" height="130" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[[615,'RMS'],[722,'Kurtosis'],[829,'FFT']].map(([x,t])=>`<rect x="${x}" y="395" width="96" height="100" rx="8" fill="${TL}" opacity=".35" stroke="${LB}" stroke-width="2"/>${T(x+48,422,t,18)}`).join('')}
  <path d="M627 465 Q640 440 653 465 T679 465 T705 465" stroke="#fff" stroke-width="3" fill="none"/><path d="M625 452 H703" stroke="#F5B800" stroke-width="3"/>
  <path d="M734 475 H760 L766 435 L772 475 H800" stroke="#fff" stroke-width="3" fill="none"/>
  ${[[842,30],[857,12],[872,22],[887,8],[902,16]].map(([x,h])=>`<rect x="${x}" y="${482-h}" width="9" height="${h}" fill="#fff"/>`).join('')}</g>
 <g class="part" id="models">${arr('M596 445 H408')}<rect x="120" y="380" width="280" height="130" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[[142,397],[164,412],[150,430],[178,435],[160,452]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#fff"/>`).join('')}<g class="pulse"><circle cx="198" cy="400" r="7" fill="#F5B800"/></g>
  <rect x="226" y="400" width="22" height="40" rx="3" fill="${TL}" stroke="#fff" stroke-width="2"/><rect x="254" y="415" width="22" height="25" rx="3" fill="#fff"/>
  <path d="M300 398 Q330 400 345 418 T382 440" stroke="#fff" stroke-width="3" fill="none"/><path d="M298 440 H384" stroke="#F5B800" stroke-width="3" stroke-dasharray="6 4"/>
  ${T(172,490,'Anomaly',18)}${T(251,490,'Class',18)}${T(341,490,'RUL',18)}</g>
 <g class="part" id="cmms">${arr('M330 514 V572')}<rect x="120" y="580" width="280" height="130" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="145" y="598" width="70" height="94" rx="6" fill="#fff"/><rect x="163" y="592" width="34" height="14" rx="4" fill="${NV}"/>
  ${[625,645,665].map(y=>`<path d="M157 ${y} H203" stroke="${NV}" stroke-width="4"/>`).join('')}
  ${T(305,640,'Work',24)}${T(305,670,'order',24)}</g>
 <g class="part" id="loop"><path d="M116 645 H80 V445 H112" fill="none" stroke="${LB}" stroke-width="6" opacity=".5"/>
  <path class="flow" d="M116 645 H80 V445 H112" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="10 8" marker-end="url(#ahw)" style="--p:1.6s"/></g>`,
 labels:[[240,80,'Vibration sensor',240,144,'middle'],[165,345,'Motor',165,298,'middle'],[420,345,'Pump',420,282,'middle'],
         [750,80,'Signal',750,108,'middle'],[500,410,'ML models',404,420,'middle'],[500,490,'Features',596,480,'middle'],
         [440,660,'CMMS',404,650,'start'],[96,560,'Failure labels',80,600,'start']],
 steps:[['Sensors on rotating equipment measure <b>vibration</b>, temperature, motor current and pressure.',['machine','sensor','signal']],
        ['Signal windows become <b>features</b>: RMS, kurtosis and FFT bands. Healthy kurtosis is near 3.',['features']],
        ['Models flag <b>anomalies</b>, classify faults and estimate <b>RUL</b>, raising a planned work order.',['models','cmms','loop']]],
 fact:['61 500 saved per year','Worked example: a critical pump with 2 failures a year and 75% caught early.'],
 end:'Sensors, vibration features, anomaly detection, failure classification, RUL, a cost example and pitfalls.',
 caption:'How does machine learning predict equipment failure before it happens? Sensors, features and models in 22 seconds.',
 tags:['#PredictiveMaintenance','#IndustrialAI','#ConditionMonitoring','#MachineLearning','#ZentaEngineering']};
})();
