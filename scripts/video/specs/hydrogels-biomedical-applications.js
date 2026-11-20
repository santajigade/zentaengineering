// Video spec for /hydrogels-biomedical-applications/. Facts from the article only.
BLUE['hydrogels-biomedical-applications'] = {
 pill:'BIOMEDICAL', title:'How <em>Hydrogels</em> Work',
 svg:`<g class="part" id="dry"><rect x="50" y="300" width="190" height="190" rx="18" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M75 330 L145 380 L215 325 M75 460 L145 410 L215 465 M145 380 V410 M70 395 H220" fill="none" stroke="${TL}" stroke-width="5"/></g>
 <g class="part" id="xl">${[[145,380],[145,410],[112,395],[180,395]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="#fff"/>`).join('')}</g>
 <g class="part" id="water">
  <path class="flow" d="M255 395 H405" stroke="${LB}" stroke-width="7" marker-end="url(#ah)" style="--p:1s"/>
  <path class="flow" d="M265 250 L405 320" stroke="${LB}" stroke-width="7" marker-end="url(#ah)" style="--p:1s"/>
  <path class="flow" d="M265 540 L405 470" stroke="${LB}" stroke-width="7" marker-end="url(#ah)" style="--p:1s"/></g>
 <g class="part" id="gel"><rect x="430" y="170" width="400" height="450" rx="26" fill="rgba(19,168,158,.25)" stroke="${LB}" stroke-width="4"/>
  <path d="M470 240 L630 320 L790 230 M470 560 L630 470 L790 565 M630 320 V470 M450 395 H810 M520 190 L535 600 M740 190 L725 600" fill="none" stroke="${TL}" stroke-width="6"/>
  ${[[630,320],[630,470],[530,395],[730,395]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="13" fill="#fff"/>`).join('')}</g>
 <g class="part" id="drug">${[[580,265],[690,265],[580,530],[690,530]].map(([x,y])=>`<circle class="pulse" cx="${x}" cy="${y}" r="14" fill="#F5B800"/>`).join('')}
  <path class="flow" d="M705 258 L955 140" stroke="#F5B800" stroke-width="6" marker-end="url(#ah)" style="--p:1.6s"/>
  <path class="flow" d="M705 537 L955 655" stroke="#F5B800" stroke-width="6" marker-end="url(#ah)" style="--p:1.6s"/></g>`,
 labels:[[145,560,'Dry network',145,492,'middle'],[40,240,'Crosslinks',140,372],[330,610,'Water in',330,505,'middle'],[630,690,'Swollen hydrogel',630,622,'middle'],[990,105,'Drug diffuses out',900,166,'end']],
 steps:[['A hydrogel is a network of <b>hydrophilic polymer chains</b> tied together by <b>crosslinks</b>.',['dry','xl']],
        ['Water flows in and the network <b>swells</b>. The crosslinks stop the chains from dissolving.',['water','gel']],
        ['Drug held in the swollen mesh <b>diffuses out</b> into the surrounding fluid.',['drug']]],
 fact:['M<sub>t</sub> ÷ M<sub>∞</sub> = k t<sup>n</sup>','For a thin slab, n = 0.5 means Fickian release and n = 1 means Case II.'],
 end:'Swelling ratio, water content, natural and synthetic types, drug release and biomedical uses.',
 caption:'How do hydrogels hold water and release drugs? Crosslinks, swelling and diffusion in 22 seconds.',
 tags:['#Hydrogels','#BiomedicalEngineering','#Biomaterials','#DrugDelivery','#ZentaEngineering']};
