// Video spec for /petroleum-engineering/what-is-fluid-catalytic-cracking/. Facts from the article only.
// Side by side FCC unit. Catalyst circulates: up the riser (with feed), into the reactor, down the stripper,
// through the spent catalyst standpipe into the regenerator, and back down the hot catalyst standpipe to the riser base.
BLUE['what-is-fluid-catalytic-cracking'] = {
 pill:'PETROLEUM', title:'How <em>Fluid Catalytic Cracking</em> Works',
 svg:`<g class="part" id="riser"><path d="M150 680 V110 H232" stroke="${TL}" stroke-width="22" fill="none"/>
  <path class="flow" d="M150 680 V110 H232" stroke="#fff" stroke-width="5" stroke-dasharray="14 14" fill="none" style="--p:.6s"/></g>
 <g class="part" id="feed"><path class="flow" d="M30 650 H132" stroke="#fff" stroke-width="6" stroke-dasharray="12 10" marker-end="url(#ahw)" style="--p:.7s"/></g>
 <g class="part" id="reactor"><rect x="232" y="60" width="200" height="170" rx="16" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M375 80 H405 V125 L396 155 H384 L375 125 Z" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M332 60 V25 H560" stroke="${LB}" stroke-width="5" fill="none"/>
  <path class="flow" d="M332 60 V25 H555" stroke="#fff" stroke-width="4" stroke-dasharray="12 10" fill="none" marker-end="url(#ahw)" style="--p:.6s"/></g>
 <g class="part" id="stripper"><rect x="292" y="230" width="80" height="170" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M470 370 H378" stroke="${LB}" stroke-width="5" stroke-dasharray="12 10" marker-end="url(#ah)" style="--p:.8s"/>
  ${[[315,380],[345,350],[320,320],[350,290],[325,260]].map(([x,y],i)=>`<circle class="pulse" cx="${x}" cy="${y}" r="6" fill="#fff" style="animation-delay:${i*.2}s"/>`).join('')}</g>
 <g class="part" id="spent"><path d="M332 400 V470 H620" stroke="${TL}" stroke-width="14" fill="none"/>
  <path class="flow" d="M332 400 V470 H616" stroke="#fff" stroke-width="4" stroke-dasharray="12 12" fill="none" style="--p:1s"/></g>
 <g class="part" id="regen"><rect x="620" y="240" width="260" height="380" rx="24" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="624" y="420" width="252" height="196" rx="20" fill="${TL}" opacity=".55"/>
  ${[[680,560],[750,580],[820,560],[715,500],[790,505]].map(([x,y],i)=>`<circle class="pulse" cx="${x}" cy="${y}" r="13" fill="#F5B800" style="animation-delay:${i*.25}s"/>`).join('')}
  <path d="M750 240 V170 H900" stroke="${LB}" stroke-width="5" fill="none"/>
  <path class="flow" d="M750 240 V170 H895" stroke="#fff" stroke-width="4" stroke-dasharray="12 10" fill="none" marker-end="url(#ahw)" style="--p:.7s"/>
  <path class="flow" d="M985 580 H888" stroke="${LB}" stroke-width="6" stroke-dasharray="12 10" marker-end="url(#ah)" style="--p:.6s"/></g>
 <g class="part" id="hot"><path d="M750 620 V705 H150 V682" stroke="${TL}" stroke-width="14" fill="none"/>
  <path class="flow" d="M750 620 V705 H150 V684" stroke="#fff" stroke-width="4" stroke-dasharray="12 12" fill="none" style="--p:1s"/></g>`,
 labels:[[30,610,'Feed',80,650,'start'],[40,300,'Riser',140,330,'start'],[470,140,'Reactor',425,120,'start'],[580,60,'To fractionator',560,25,'start'],
         [470,300,'Stripper',372,300,'start'],[490,425,'Steam',455,370,'start'],[380,530,'Spent catalyst',470,470,'start'],[750,320,'Regenerator',750,360,'middle'],
         [790,140,'Flue gas',850,170,'start'],[940,540,'Air',940,580,'middle'],[330,665,'Hot catalyst',420,705,'start']],
 steps:[['Hot regenerated catalyst meets the <b>VGO feed</b> at the riser base and cracks it in about <b>2 to 3 s</b>.',['hot','riser','feed']],
        ['Cyclones split catalyst from the vapours, and <b>steam strips</b> the spent catalyst.',['reactor','stripper','spent']],
        ['Air <b>burns the coke</b> at 650 to 760 °C, and the hot catalyst carries that heat back to the riser.',['regen','hot']]],
 fact:['Coke yield 4 to 6 wt% of feed','Burning it in the regenerator heats the catalyst for the next pass.'],
 end:'Riser, stripper, regenerator, cracking reactions, heat balance, products and a worked circulation example.',
 caption:'How does a refinery turn heavy gas oil into gasoline? Fluid catalytic cracking in one loop of hot catalyst.',
 tags:['#Refining','#PetroleumEngineering','#ChemicalEngineering','#EngineeringStudents','#ZentaEngineering']};
