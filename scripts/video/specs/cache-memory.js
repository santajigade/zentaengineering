// Video spec for /cache-memory/. Facts from the article only.
BLUE['cache-memory'] = {
 pill:'COMPUTER SCIENCE', title:'How <em>Cache Memory</em> Works',
 svg:`<g class="part" id="core"><rect x="330" y="40" width="340" height="110" rx="14" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${[0,1].map(r=>[0,1,2,3].map(c=>`<rect x="${355+c*42}" y="${62+r*34}" width="32" height="22" rx="4" fill="${LB}" opacity=".75"/>`).join('')).join('')}
  <path d="M540 62 H640 L615 128 H565 Z" fill="${TL}" stroke="${LB}" stroke-width="3"/><path d="M580 62 L590 80 L600 62" fill="${NV}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="l1"><rect x="330" y="210" width="160" height="70" rx="10" fill="${TL}" stroke="${LB}" stroke-width="3"/><rect x="510" y="210" width="160" height="70" rx="10" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  ${[0,1,2].map(r=>`<path d="M345 ${228+r*17} H475 M525 ${228+r*17} H655" stroke="#fff" stroke-width="5" opacity=".8"/>`).join('')}</g>
 <g class="part" id="l2"><rect x="330" y="340" width="340" height="70" rx="10" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  ${[0,1,2].map(r=>`<path d="M345 ${358+r*17} H655" stroke="#fff" stroke-width="5" opacity=".8"/>`).join('')}</g>
 <g class="part" id="l3"><rect x="300" y="470" width="400" height="70" rx="10" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  ${[0,1,2].map(r=>`<path d="M315 ${488+r*17} H685" stroke="#fff" stroke-width="5" opacity=".8"/>`).join('')}</g>
 <g class="part" id="mem"><rect x="260" y="610" width="480" height="100" rx="12" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${282+i*56}" y="630" width="44" height="60" rx="4" fill="${TL}" stroke="${LB}" stroke-width="2"/>`).join('')}</g>
 <g class="part" id="req"><g stroke="${LB}" stroke-width="5" fill="none">
  ${[[380,152,202],[560,152,202],[380,282,332],[560,282,332],[460,412,462],[460,542,602]].map(([x,a,b])=>`<path d="M${x} ${a} V${b}" marker-end="url(#ah)"/>`).join('')}</g></g>
 <g class="part" id="data"><g stroke="#fff" stroke-width="5" fill="none">
  ${[[440,208,158],[620,208,158],[440,338,288],[620,338,288],[540,468,418],[540,608,548]].map(([x,a,b])=>`<path class="flow" d="M${x} ${a} V${b}" marker-end="url(#ahw)" style="--p:.8s"/>`).join('')}</g></g>`,
 labels:[[290,100,'CPU core',330,95,'end'],[290,250,'L1 instruction',330,245,'end'],[710,250,'L1 data',670,245],[710,380,'L2 cache',670,375],[260,510,'L3 shared cache',300,505,'end'],[290,445,'Miss request',460,440,'end'],[710,445,'Block returned',540,440],[780,665,'Main memory',740,660]],
 steps:[['The core checks the small, fast <b>L1 cache</b> first; on a <b>hit</b> the data returns in the hit time.',['core','l1']],
        ['On a <b>miss</b> the request goes to <b>L2</b>, then <b>L3</b>, then <b>main memory</b>.',['req','l2','l3','mem']],
        ['The <b>block</b> holding the address is copied back up; the <b>mapping</b> scheme sets where it can go.',['data','l1','l2','l3']]],
 fact:['AMAT = t<sub>hit</sub> + m × t<sub>penalty</sub>','In the worked example, adding an L2 cache cuts AMAT from 6 cycles to 2.5 cycles.'],
 end:'Cache levels, direct, fully associative and set associative mapping, write policies and AMAT.',
 caption:'Why is cache memory so fast? L1, L2, L3, hits, misses and mapping in 22 seconds.',
 tags:['#CacheMemory','#ComputerArchitecture','#ComputerScience','#EngineeringStudents','#ZentaEngineering']};
