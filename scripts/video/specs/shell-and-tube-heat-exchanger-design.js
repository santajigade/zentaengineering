// Video spec for /shell-and-tube-heat-exchanger-design/. Facts from the article only.
BLUE['shell-and-tube-heat-exchanger-design'] = {
 pill:'CHEMICAL', title:'How a <em>Shell and Tube</em> Heat Exchanger Works',
 svg:`<g class="part" id="shell"><rect x="220" y="250" width="580" height="260" rx="24" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="252" y="175" width="36" height="75" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="732" y="510" width="36" height="75" fill="${NV}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="channel"><path d="M220 250 H160 Q120 250 120 290 V470 Q120 510 160 510 H220 Z" fill="${NV}" stroke="${LB}" stroke-width="4"/><rect x="120" y="375" width="100" height="10" fill="#fff"/>
  <rect x="152" y="175" width="36" height="75" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="152" y="510" width="36" height="75" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <rect x="214" y="250" width="12" height="260" fill="${TL}"/><rect x="794" y="250" width="12" height="260" fill="${TL}"/>
  <path d="M806 270 H840 Q890 270 890 320 V440 Q890 490 840 490 H806" fill="${NV}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="tubes">${[285,315,345].map(y=>`<line x1="226" y1="${y}" x2="794" y2="${y}" stroke="#ff8a50" stroke-width="12" opacity=".35"/><path class="flow" d="M794 ${y} H226" stroke="#ff8a50" stroke-width="5" style="--p:1s"/>`).join('')}
  ${[415,445,475].map(y=>`<line x1="226" y1="${y}" x2="794" y2="${y}" stroke="#ff8a50" stroke-width="12" opacity=".35"/><path class="flow" d="M226 ${y} H794" stroke="#ff8a50" stroke-width="5" style="--p:1s"/>`).join('')}
  <path class="flow" d="M806 445 Q 865 445 865 380 Q 865 315 806 315" fill="none" stroke="#ff8a50" stroke-width="5" style="--p:1s"/>
  <path class="flow" d="M170 585 V445 H220" fill="none" stroke="#ff8a50" stroke-width="6" style="--p:.9s"/><path class="flow" d="M220 315 H170 V170" fill="none" stroke="#ff8a50" stroke-width="6" marker-end="url(#ah)" style="--p:.9s"/></g>
 <g class="part" id="baffles"><rect x="335" y="252" width="10" height="200" fill="#fff"/><rect x="455" y="308" width="10" height="200" fill="#fff"/><rect x="575" y="252" width="10" height="200" fill="#fff"/><rect x="695" y="308" width="10" height="200" fill="#fff"/></g>
 <g class="part" id="shellflow"><path class="flow" d="M270 170 V485 H400 V275 H520 V485 H640 V275 H750 V590" fill="none" stroke="${LB}" stroke-width="6" stroke-linejoin="round" marker-end="url(#ah)" style="--p:1.1s"/></g>`,
 labels:[[145,150,'Hot out',168,178,'end'],[322,150,'Cold in',275,178],[170,640,'Hot in',170,590,'middle'],[750,640,'Cold out',750,592,'middle'],[460,640,'Baffles',460,500,'middle'],[640,212,'Shell',620,252],[990,212,'Tube bundle',760,286,'end'],[112,300,'Partition',138,380,'end'],[990,560,'Rear head',868,470,'end']],
 steps:[['The hot fluid flows <b>inside the tubes</b>. Here it makes <b>two passes</b>, split by a partition plate in the channel.',['tubes','channel']],
        ['The cold fluid flows through the <b>shell</b>. <b>Baffles</b> force it across the tubes, which raises heat transfer.',['shellflow','baffles']],
        ['Heat passes <b>through the tube walls</b> from the hot fluid to the cold one, along the whole bundle.',['tubes','shellflow']]],
 fact:['A = Q ÷ (U F ΔT<sub>lm</sub>)','The design equation sets the heat transfer area. F corrects the LMTD for multipass flow.'],
 end:'TEMA types, fluid allocation, tube layout, baffles and a worked sizing example.',
 caption:'How does a shell and tube heat exchanger move heat between two fluids? Tubes, passes, shell and baffles in 22 seconds.',
 tags:['#HeatExchanger','#ChemicalEngineering','#ProcessEngineering','#HeatTransfer','#ZentaEngineering']};
