// Video spec for /biomedical-engineering/bioreactor-types/. Facts from the article only.
// Stirred tank bioreactor (side section): motor and shaft with two Rushton turbines (radial discharge, loops up and down at the wall),
// wall baffles, sparger bubbles rising, cooling jacket water in low and out high, pH/DO/T probes, exhaust gas out at the top.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const rush=y=>`<path d="M440 ${y} H560" stroke="#fff" stroke-width="8"/><rect x="432" y="${y-22}" width="18" height="44" fill="#fff"/><rect x="550" y="${y-22}" width="18" height="44" fill="#fff"/><rect x="491" y="${y-22}" width="18" height="44" fill="#fff" opacity=".7"/>`;
const loops=y=>[`M572 ${y-4} H650 V${y-75} H530 V${y-28}`,`M572 ${y+4} H650 V${y+75} H530 V${y+28}`,`M428 ${y-4} H350 V${y-75} H470 V${y-28}`,`M428 ${y+4} H350 V${y+75} H470 V${y+28}`]
 .map(d=>`<path class="flow" d="${d}" fill="none" stroke="${LB}" stroke-width="4" marker-end="url(#ah)" style="--p:1s"/>`).join('');
BLUE['bioreactor-types'] = {
 pill:'BIOMEDICAL', title:'How a <em>Stirred Tank Bioreactor</em> Works',
 svg:`<g class="part" id="jacket"><rect x="268" y="230" width="464" height="420" rx="40" fill="${TL}" opacity=".35" stroke="${LB}" stroke-width="4"/>
  <path d="M190 620 H270 M730 250 H810" stroke="${LB}" stroke-width="10"/>
  <path class="flow" d="M190 620 H284 V250 M716 630 V250 H810" fill="none" stroke="#fff" stroke-width="4" style="--p:1.4s"/></g>
 <g class="part" id="vessel"><rect x="300" y="160" width="400" height="520" rx="50" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <rect x="304" y="270" width="392" height="406" rx="46" fill="#1d5a80"/><path d="M304 270 H696" stroke="${LB}" stroke-width="3" stroke-dasharray="10 8"/>
  <path d="M380 160 V95 H300" fill="none" stroke="${LB}" stroke-width="8"/><path class="flow" d="M380 160 V95 H300" fill="none" stroke="#fff" stroke-width="3"/></g>
 <g class="part" id="baffles"><rect x="312" y="290" width="14" height="350" fill="${LB}"/><rect x="674" y="290" width="14" height="350" fill="${LB}"/></g>
 <g class="part" id="motor"><rect x="455" y="60" width="90" height="70" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(500,104,'M',28)}
  <path d="M500 130 V560" stroke="#fff" stroke-width="8"/></g>
 <g class="part" id="imp">${rush(390)}${rush(540)}${loops(390)}${loops(540)}</g>
 <g class="part" id="sparger"><path d="M150 715 H500 V650" fill="none" stroke="${LB}" stroke-width="8"/><path d="M420 645 H580" stroke="${LB}" stroke-width="10"/>
  <path class="flow" d="M150 715 H500 V654" fill="none" stroke="#fff" stroke-width="3"/>
  ${[430,470,530,570].map((x,i)=>`<path class="flow" d="M${x} 635 V290" stroke="#fff" stroke-width="9" stroke-linecap="round" style="--p:${1.1+i*.15}s;stroke-dasharray:2 28"/>`).join('')}</g>
 <g class="part" id="probes"><path d="M600 120 V330 M630 120 V350 M660 120 V320" stroke="#F5B800" stroke-width="8"/>
  <circle class="pulse" cx="600" cy="330" r="9" fill="#F5B800"/><circle class="pulse" cx="630" cy="350" r="9" fill="#F5B800"/><circle class="pulse" cx="660" cy="320" r="9" fill="#F5B800"/></g>`,
 labels:[[250,80,'Exhaust gas',300,95,'end'],[700,170,'pH, DO, T probes',662,140,'start'],[240,320,'Baffle',318,320,'end'],[250,480,'Rushton impeller',440,540,'end'],
  [760,560,'Cooling jacket',728,560,'start'],[150,690,'Sparger',440,645,'end'],[160,750,'Sterile air in',200,715,'start']],
 steps:[['A motor drives <b>Rushton impellers</b>. <b>Baffles</b> stop vortexing and improve mixing.',['motor','imp','baffles']],
        ['The <b>sparger</b> releases sterile air as bubbles. The <b>jacket</b> removes heat from metabolism and agitation.',['sparger','jacket']],
        ['<b>Probes</b> measure temperature, pH and <b>dissolved oxygen</b> so each one can be controlled.',['probes']]],
 fact:['OTR = kLa (C* - CL)','The cells\' oxygen uptake rate must not exceed the oxygen transfer rate.'],
 end:'Stirred tank, airlift, packed bed, hollow fibre and single use types, operating modes, kinetics and an oxygen transfer example.',
 caption:'What happens inside a bioreactor? Impellers, sparger, jacket and probes keep living cells growing.',
 tags:['#Bioreactor','#BiomedicalEngineering','#Bioprocess','#EngineeringStudents','#ZentaEngineering']};
})();
