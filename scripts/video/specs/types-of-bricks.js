// Video spec for /types-of-bricks/. Facts from the article only.
BLUE['types-of-bricks'] = {
 pill:'CIVIL', title:'How <em>Burnt Clay Bricks</em> Are Made',
 svg:`<g class="part" id="clay"><path d="M30 320 Q120 150 210 320 Z" fill="#c98a3a" stroke="${LB}" stroke-width="3"/>
  ${[[90,290],[130,270],[160,300],[110,305]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#8a5a24"/>`).join('')}</g>
 <g class="part" id="mould"><rect x="265" y="250" width="150" height="70" fill="none" stroke="#fff" stroke-width="5"/>
  <rect x="275" y="262" width="130" height="50" fill="#c98a3a"/>
  <g class="finger"><path d="M340 150 V200" stroke="#fff" stroke-width="8"/><rect x="285" y="200" width="110" height="22" rx="4" fill="#fff"/></g></g>
 <g class="part" id="dry">${[[480,290],[550,290],[515,258],[585,258],[480,226],[550,226]].map(([x,y])=>`<rect x="${x}" y="${y}" width="62" height="28" fill="#d9a066" stroke="${LB}" stroke-width="2"/>`).join('')}
  ${[500,540,580,620].map(x=>`<path class="flow" d="M${x} 218 Q ${x-12} 200 ${x} 182" fill="none" stroke="${LB}" stroke-width="3" style="--p:1.2s"/>`).join('')}</g>
 <g class="part" id="kiln"><path d="M700 320 V215 L740 185 H900 L940 215 V320 Z" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="880" y="115" width="30" height="72" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <path class="flow" d="M895 180 V100" stroke="${LB}" stroke-width="3" opacity=".7" style="--p:1.2s"/>
  ${[[730,232],[800,232],[765,258],[835,258]].map(([x,y])=>`<rect x="${x}" y="${y}" width="66" height="24" fill="#b5532f" stroke="#fff" stroke-width="1.5"/>`).join('')}
  ${[745,790,835,880].map(x=>`<path class="pulse" d="M${x} 312 Q ${x-14} 296 ${x} 284 Q ${x+14} 296 ${x} 312 Z" fill="#F5B800"/>`).join('')}</g>
 <g class="part" id="conveyor"><path class="flow" d="M60 365 H930" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:1s"/></g>
 <g class="part" id="brick"><path d="M300 520 L380 460 H700 L620 520 Z" fill="#d9825a" stroke="${LB}" stroke-width="3"/>
  <path d="M300 520 H620 V640 H300 Z" fill="#b5532f" stroke="${LB}" stroke-width="3"/>
  <path d="M620 520 L700 460 V580 L620 640 Z" fill="#8f3f22" stroke="${LB}" stroke-width="3"/>
  <path d="M435 503 L458 485 H568 L545 503 Z" fill="#8f3f22" stroke="#fff" stroke-width="2"/>
  <path d="M300 668 H620 M300 658 V678 M620 658 V678 M276 520 V640 M266 520 H286 M266 640 H286 M642 656 L722 596 M636 648 L648 664 M716 588 L728 604" stroke="#fff" stroke-width="2"/>
  <text x="460" y="708" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="26">190 mm</text>
  <text x="262" y="590" text-anchor="end" fill="#fff" font-family="Open Sans" font-weight="700" font-size="26">90 mm</text>
  <text x="732" y="650" fill="#fff" font-family="Open Sans" font-weight="700" font-size="26">90 mm</text></g>`,
 labels:[[120,150,'Clay',120,232,'middle'],[340,125,'Mould',340,152,'middle'],[560,150,'Drying',560,182,'middle'],[770,150,'Kiln',780,186,'middle'],[560,432,'Frog',510,492,'middle']],
 steps:[['Clay is dug, weathered and tempered, then <b>moulded</b> by hand or by machine.',['clay','mould']],
        ['The green bricks are <b>dried in air</b> first, because a wet brick cracks in the kiln.',['dry','conveyor']],
        ['Burning at about <b>900 to 1100 °C</b> in a clamp or kiln turns the clay into a hard ceramic.',['kiln','brick']]],
 fact:['Modular brick: 190&nbsp;×&nbsp;90&nbsp;×&nbsp;90&nbsp;mm','With a 10 mm joint it takes up 200 × 100 × 100 mm. IS 1077 classes run from 35 to 3.5 N/mm².'],
 end:'Brick classes, fly ash, sand lime, engineering and fire bricks, tests and a worked example.',
 caption:'How are burnt clay bricks made? Clay preparation, moulding, drying and burning at 900 to 1100 °C, plus the IS 1077 modular size.',
 tags:['#Bricks','#CivilEngineering','#ConstructionMaterials','#EngineeringStudents','#ZentaEngineering']};
