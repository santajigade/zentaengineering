// Video spec for /cold-storage-design-basics/. Facts from the article only.
// Cold room cross section. Heat gains flow inward (transmission, infiltration at the door, product and respiration
// heat, lights). The evaporator absorbs it; refrigerant vapour goes out to the condensing unit, which rejects heat
// outside; liquid returns through the expansion valve to the evaporator.
(()=>{
const HOT='#ff9d3d', BR='#c98a3a';
const fan=(cx,cy,r,p)=>`<circle cx="${cx}" cy="${cy}" r="${r+4}" fill="${NV}" stroke="${LB}" stroke-width="3"/><g class="spin-cw" style="--p:${p}"><circle cx="${cx}" cy="${cy}" r="${r}" fill="none"/>
  ${[0,90,180,270].map(a=>`<ellipse cx="${cx}" cy="${cy-r*.52}" rx="${r*.2}" ry="${r*.44}" fill="#fff" transform="rotate(${a} ${cx} ${cy})"/>`).join('')}</g><circle cx="${cx}" cy="${cy}" r="${r*.16}" fill="${LB}"/>`;
BLUE['cold-storage-design-basics'] = {
 pill:'AGRICULTURAL', title:'How a <em>Cold Storage</em> Room Works',
 svg:`<g class="part" id="room"><rect x="84" y="174" width="572" height="462" fill="${LB}" opacity=".08"/>
  <rect x="60" y="150" width="620" height="24" fill="${TL}" stroke="${LB}" stroke-width="3"/><rect x="60" y="150" width="24" height="510" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <rect x="60" y="636" width="620" height="24" fill="${TL}" stroke="${LB}" stroke-width="3"/><rect x="656" y="150" width="24" height="320" fill="${TL}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="door">${[660,668,676].map(x=>`<path d="M${x} 474V632" stroke="#fff" stroke-width="3" stroke-dasharray="14 6" opacity=".8"/>`).join('')}</g>
 <g class="part" id="produce">${[120,230,340].map(x=>[466,550].map(y=>`<rect x="${x}" y="${y}" width="90" height="80" rx="4" fill="${BR}" stroke="${LB}" stroke-width="3"/><path d="M${x} ${y+40}H${x+90}" stroke="${LB}" stroke-width="2"/>`).join('')).join('')}</g>
 <g class="part" id="lights"><rect x="250" y="176" width="70" height="12" rx="4" fill="#fff"/><ellipse class="pulse" cx="285" cy="196" rx="30" ry="8" fill="#F5B800" opacity=".7"/></g>
 <g class="part" id="gains">
  ${[250,380].map(x=>`<path class="flow" d="M${x} 66V140" stroke="${HOT}" stroke-width="5" marker-end="url(#ah)" style="--p:1s"/>`).join('')}
  <path class="flow" d="M0 400H54" stroke="${HOT}" stroke-width="5" marker-end="url(#ah)" style="--p:1s"/></g>
 <g class="part" id="infil"><path class="flow" d="M800 560H692" stroke="${HOT}" stroke-width="5" marker-end="url(#ah)" style="--p:1s"/></g>
 <g class="part" id="resp">${[165,275,385].map(x=>`<path class="flow" d="M${x} 460V404" stroke="${HOT}" stroke-width="4" marker-end="url(#ah)" style="--p:1.1s"/>`).join('')}</g>
 <g class="part" id="evap"><rect x="440" y="180" width="200" height="90" rx="8" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${[528,544,560,576,592,608,624].map(x=>`<path d="M${x} 188V262" stroke="${LB}" stroke-width="3"/>`).join('')}${fan(480,225,30,'.6s')}</g>
 <g class="part" id="air"><path class="flow" d="M440 225H110" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:.8s"/><path class="flow" d="M560 430V282" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:.8s"/></g>
 <g class="part" id="cu"><rect x="760" y="140" width="220" height="200" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>${fan(840,240,58,'.5s')}
  <rect x="915" y="250" width="50" height="78" rx="12" fill="${TL}" stroke="${LB}" stroke-width="3"/><path d="M920 290H904" stroke="#fff" stroke-width="5"/></g>
 <g class="part" id="out">${[820,870].map(x=>`<path class="flow" d="M${x} 134V72" stroke="${HOT}" stroke-width="5" marker-end="url(#ah)" style="--p:.7s"/>`).join('')}</g>
 <g class="part" id="refr"><path d="M640 200H940V250" stroke="${LB}" stroke-width="6" fill="none"/><path d="M800 340V380H620V270" stroke="#fff" stroke-width="6" fill="none"/>
  <path class="flow" d="M640 200H940V246" stroke="#fff" stroke-width="3" fill="none" style="--p:.7s"/><path class="flow" d="M800 340V380H620V272" stroke="${NV}" stroke-width="3" fill="none" style="--p:.7s"/>
  <path d="M604 304L636 336H604L636 304Z" fill="${TL}" stroke="${LB}" stroke-width="3"/></g>`,
 labels:[[60,50,'Transmission',250,100],[540,120,'Evaporator',540,180,'middle'],[880,420,'Condensing unit',880,340,'middle'],[985,52,'Heat rejected',870,96,'end'],
  [985,520,'Infiltration',740,560,'end'],[100,380,'Respiration heat',165,428],[420,300,'Expansion valve',604,320,'middle'],[40,720,'Insulated panels',72,600]],
 steps:[['Heat leaks in by <b>transmission</b> through the insulated panels and by <b>infiltration</b> at the door.',['room','gains','infil','door']],
        ['Produce adds <b>product cooling</b> and <b>respiration heat</b>; lights, people and fans add internal load.',['produce','resp','lights']],
        ['<b>Vapour compression</b>: the evaporator absorbs the heat and the <b>condensing unit</b> rejects it outside.',['evap','air','refr','cu','out']]],
 fact:['Q<sub>trans</sub> = U × A × ΔT','The plant is sized to remove the daily load in about 16 to 20 hours.'],
 end:'Storage conditions, insulation, heat load calculation, refrigeration systems and a worked example.',
 caption:'How does a cold store stay cold? Heat gains, the refrigeration load and the evaporator and condensing unit.',
 tags:['#ColdStorage','#Refrigeration','#ColdChain','#AgriculturalEngineering','#ZentaEngineering']};
})();
