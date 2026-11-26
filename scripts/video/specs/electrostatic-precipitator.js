// Video spec for /environmental-engineering/electrostatic-precipitator/. Facts from the article only.
// Cross-section looking along the gas flow (gas moves into the page). The TR set on the roof feeds the
// negative discharge wires hung from an HV frame on an insulator. Corona charges the dust; particles migrate
// sideways from the wire zone to the grounded plates (flow from wire towards plate), build a dust layer,
// and rapped dust falls straight down into the hoppers.
(()=>{
const plates=[230,410,590,770], wires=[320,500,680], ys=[330,410,490];
const mig=wires.map(x=>ys.map(y=>`<path class="flow" d="M${x-18} ${y} H${x-84}" stroke="#c9ccd1" stroke-width="9" stroke-linecap="round" style="stroke-dasharray:2 28;--p:1.4s"/><path class="flow" d="M${x+18} ${y} H${x+84}" stroke="#c9ccd1" stroke-width="9" stroke-linecap="round" style="stroke-dasharray:2 28;--p:1.4s"/>`).join('')).join('');
const layers=[[235,241],[399,405],[415,421],[579,585],[595,601],[759,765]].map(([a,b])=>`<rect x="${a}" y="240" width="${b-a}" height="295" fill="#c9ccd1" opacity=".85"/>`).join('');
const drop=[[238,598],[402,652],[418,652],[582,652],[598,652],[762,598]].map(([x,y],k)=>`<path class="flow" d="M${x} 548 V${y}" stroke="#c9ccd1" stroke-width="6" stroke-linecap="round" style="stroke-dasharray:2 18;--p:${.7+k*.05}s"/>`).join('');
BLUE['electrostatic-precipitator'] = {
 pill:'ENVIRONMENTAL', title:'How an <em>Electrostatic Precipitator</em> Works',
 svg:`<g class="part" id="casing"><rect x="190" y="160" width="620" height="400" fill="${NV}" opacity=".6" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="hopper"><path d="M190 560 H500 L380 700 H310 Z M500 560 H810 L690 700 H620 Z" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <path d="M322 700 L345 672 L368 700 Z M632 700 L655 672 L678 700 Z" fill="#c9ccd1"/>
  <rect x="320" y="700" width="50" height="30" fill="${NV}" stroke="${LB}" stroke-width="4"/><rect x="630" y="700" width="50" height="30" fill="${NV}" stroke="${LB}" stroke-width="4"/>${drop}</g>
 <g class="part" id="plates">${plates.map(x=>`<rect x="${x-5}" y="230" width="10" height="312" fill="${TL}" stroke="${LB}" stroke-width="3"/>`).join('')}</g>
 <g class="part" id="tr"><rect x="400" y="40" width="200" height="70" rx="8" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <text x="500" y="86" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="30">TR SET</text>
  <path d="M500 110 V195" stroke="#fff" stroke-width="5"/><rect x="486" y="142" width="28" height="36" rx="6" fill="#c9ccd1" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="wires"><path d="M320 195 H680" stroke="#fff" stroke-width="6"/>
  ${wires.map(x=>`<rect class="pulse" x="${x-14}" y="215" width="28" height="300" rx="14" fill="${LB}" opacity=".2"/><path d="M${x} 195 V520" stroke="#fff" stroke-width="4"/><rect x="${x-10}" y="520" width="20" height="20" fill="#fff"/>`).join('')}</g>
 <g class="part" id="dust">${layers}${mig}</g>
 <g class="part" id="rap">${[230,770].map(x=>`<path d="M${x} 160 V230" stroke="#c9ccd1" stroke-width="5"/><rect class="pulse" x="${x-17}" y="122" width="34" height="38" rx="4" fill="#c9ccd1" stroke="${LB}" stroke-width="3"/>`).join('')}</g>`,
 labels:[[625,84,'30 to 100 kV DC',600,75,'start'],[190,138,'Rapper',213,142,'end'],[818,300,'Discharge wire',680,300,'start'],
         [818,455,'Collection plate',775,455,'start'],[175,420,'Dust layer',238,420,'end'],[818,640,'Hopper',750,630,'start']],
 steps:[['The <b>TR set</b> puts 30 to 100 kV negative DC on the <b>discharge wires</b>, and the corona charges the dust.',['tr','wires']],
        ['The electric field drives the charged particles sideways to the grounded <b>collection plates</b>.',['dust','plates']],
        ['<b>Rappers</b> strike the plates and the dust layer slides down into the <b>hoppers</b>.',['rap','hopper']]],
 fact:['η = 1 − e<sup>−wA/Q</sup>','At 300 m³/s and w = 0.08 m/s, 99.5% needs about 19 900 m² of plate.'],
 end:'Corona charging, plates, rapping, the Deutsch-Anderson equation, dust resistivity, wet ESPs and an example.',
 caption:'How does an electrostatic precipitator clean flue gas? Corona charging, collection plates and rappers explained.',
 tags:['#AirPollutionControl','#ElectrostaticPrecipitator','#EnvironmentalEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
