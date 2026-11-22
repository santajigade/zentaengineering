// Video spec for /natural-gas-dehydration/. Facts from the article only.
// TEG loop: wet gas up the contactor against falling lean glycol, rich glycol to flash tank, exchanger and still, lean glycol pumped back.
BLUE['natural-gas-dehydration'] = {
 pill:'PETROLEUM', title:'How <em>Natural Gas Dehydration</em> Works',
 svg:`<g class="part" id="contactor"><rect x="120" y="130" width="120" height="490" rx="22" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  ${[190,240,290,340,390,440,490,540].map(y=>`<path d="M130 ${y} H230" stroke="${LB}" stroke-width="3" opacity=".8"/>`).join('')}</g>
 <g class="part" id="gas"><path d="M20 580 H120" stroke="${LB}" stroke-width="7"/><path d="M180 130 V70 H420" fill="none" stroke="${LB}" stroke-width="7" marker-end="url(#ah)"/>
  <path class="flow" d="M20 580 H118" stroke="#fff" stroke-width="4" style="--p:.9s"/>
  <path class="flow" d="M150 600 V150" stroke="#fff" stroke-width="4" style="--p:1.1s"/>
  <path class="flow" d="M180 128 V70 H410" fill="none" stroke="#fff" stroke-width="4" style="--p:.9s"/></g>
 <g class="part" id="lean"><path class="flow" d="M212 170 V600" stroke="${TL}" stroke-width="5" style="--p:1.6s"/></g>
 <g class="part" id="rich"><path d="M180 620 V650 H380 M500 650 H560 M640 650 H690 V300 H760" fill="none" stroke="#e5654f" stroke-width="7"/>
  <path class="flow" d="M180 620 V650 H380 M500 650 H560 M640 650 H690 V300 H760" fill="none" stroke="#fff" stroke-width="3" style="--p:1.6s"/></g>
 <g class="part" id="flash"><rect x="380" y="620" width="120" height="60" rx="26" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M440 620 V585" stroke="${LB}" stroke-width="4" marker-end="url(#ah)"/></g>
 <g class="part" id="hx"><rect x="560" y="615" width="80" height="110" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M570 640 L630 640 M570 670 L630 670 M570 700 L630 700" stroke="#fff" stroke-width="2" opacity=".6"/></g>
 <g class="part" id="still"><rect x="760" y="210" width="60" height="180" rx="8" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <path d="M790 210 V110" stroke="${LB}" stroke-width="6" marker-end="url(#ah)"/>
  <path class="flow" d="M790 208 V118" stroke="#fff" stroke-width="3" style="--p:1s"/></g>
 <g class="part" id="reboiler"><rect x="700" y="390" width="240" height="100" rx="14" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <g class="pulse">${[760,800,840,880].map(x=>`<path d="M${x} 525 q-10 -14 0 -26 q10 12 0 26Z" fill="#F5B800"/>`).join('')}</g></g>
 <g class="part" id="leanret"><path d="M940 440 H975 V700 H640 M560 700 H320 V200 H240" fill="none" stroke="${TL}" stroke-width="7"/>
  <path class="flow" d="M940 440 H975 V700 H640 M560 700 H320 V200 H244" fill="none" stroke="#fff" stroke-width="3" style="--p:1.6s"/>
  <circle cx="320" cy="430" r="24" fill="${NV}" stroke="${LB}" stroke-width="4"/><path d="M308 442 L320 416 L332 442 Z" fill="#fff"/></g>`,
 labels:[[10,540,'Wet gas',60,580],[440,60,'Dry gas',412,70],[20,705,'Contactor',130,600],[340,170,'Lean TEG',320,195],
         [380,565,'Flash tank',440,620],[500,752,'Exchanger',575,722,'end'],[840,240,'Still',820,280],[960,560,'Reboiler',900,490,'end'],[775,100,'Water vapour',788,118,'end'],[530,480,'Rich TEG',688,470,'end']],
 steps:[['Wet gas rises through the <b>contactor</b> trays while <b>lean TEG</b> flows down and absorbs the water.',['contactor','gas','lean']],
        ['<b>Rich glycol</b> releases dissolved gas in the <b>flash tank</b> and is heated in the <b>exchanger</b>.',['rich','flash','hx']],
        ['The <b>reboiler</b>, kept below about 204 °C, boils the water off. Lean TEG is pumped back.',['still','reboiler','leanret']]],
 fact:['7 lb/MMscf ≈ 112 mg/Sm³','A common North American pipeline water limit. TEG circulates at about 3 gal per lb of water removed.'],
 end:'TEG and molecular sieve units, design limits, operating problems and a glycol rate example.',
 caption:'How is water removed from natural gas? TEG absorption, glycol regeneration and molecular sieves in 22 seconds.',
 tags:['#NaturalGas','#GasProcessing','#PetroleumEngineering','#EngineeringStudents','#ZentaEngineering']};
