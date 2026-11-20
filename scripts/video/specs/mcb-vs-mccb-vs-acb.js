// Video spec for /mcb-vs-mccb-vs-acb/. Facts from the article only.
BLUE['mcb-vs-mccb-vs-acb'] = {
 pill:'ELECTRICAL', title:'<em>MCB vs MCCB vs ACB</em>: Where Each One Works',
 svg:`<g class="part" id="trafo"><circle cx="90" cy="330" r="40" fill="${NV}" stroke="${LB}" stroke-width="4"/><circle cx="140" cy="330" r="40" fill="none" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="busbar"><rect x="420" y="120" width="16" height="500" fill="#fff"/></g>
 <g class="part" id="acb"><rect x="240" y="290" width="110" height="80" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <text x="295" y="342" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="30">ACB</text></g>
 <g class="part" id="mccb"><rect x="500" y="165" width="120" height="70" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/><rect x="500" y="465" width="120" height="70" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <text x="560" y="210" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">MCCB</text><text x="560" y="510" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">MCCB</text></g>
 <g class="part" id="motor"><circle cx="760" cy="200" r="42" fill="${NV}" stroke="${LB}" stroke-width="4"/><g class="spin-cw" style="--p:2s"><path d="M760 168 V232 M728 200 H792" stroke="#fff" stroke-width="4"/></g><circle cx="760" cy="200" r="12" fill="#fff"/></g>
 <g class="part" id="db"><rect x="670" y="410" width="315" height="300" rx="16" fill="none" stroke="${LB}" stroke-width="3" stroke-dasharray="12 10"/><rect x="714" y="440" width="12" height="245" fill="#fff"/></g>
 <g class="part" id="mcb">${[460,550,640].map(y=>`<rect x="770" y="${y}" width="90" height="40" rx="6" fill="#c98a3a" stroke="${LB}" stroke-width="3"/><text x="815" y="${y+29}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="22">MCB</text>`).join('')}</g>
 <g class="part" id="loads">${[480,570,660].map(y=>`<circle cx="940" cy="${y}" r="18" fill="none" stroke="#fff" stroke-width="4"/><path d="M928 ${y-12}L952 ${y+12}M952 ${y-12}L928 ${y+12}" stroke="#fff" stroke-width="3"/>`).join('')}</g>
 <g class="part" id="power">
  <path class="flow" d="M180 330 H240" stroke="#F5B800" stroke-width="6" style="--p:.8s"/><path class="flow" d="M350 330 H420" stroke="#F5B800" stroke-width="6" style="--p:.8s"/>
  <path class="flow" d="M436 200 H500" stroke="#F5B800" stroke-width="6" style="--p:.8s"/><path class="flow" d="M620 200 H718" stroke="#F5B800" stroke-width="6" marker-end="url(#ah)" style="--p:.8s"/>
  <path class="flow" d="M436 500 H500" stroke="#F5B800" stroke-width="6" style="--p:.8s"/><path class="flow" d="M620 500 H714" stroke="#F5B800" stroke-width="6" style="--p:.8s"/>
  ${[480,570,660].map(y=>`<path class="flow" d="M726 ${y} H770" stroke="#F5B800" stroke-width="5" style="--p:.8s"/><path class="flow" d="M860 ${y} H922" stroke="#F5B800" stroke-width="5" style="--p:.8s"/>`).join('')}</g>`,
 labels:[[30,450,'Transformer',105,372],[150,230,'Main incomer',280,290],[300,690,'LV busbar',428,610,'middle'],[470,110,'Feeders',540,165],[985,110,'Motor',790,170,'end'],[985,385,'Final circuits',940,460,'end'],[815,752,'MCBs',815,682,'middle']],
 steps:[['The <b>ACB</b> sits on the main incomer: up to 6300 A, with an adjustable electronic trip unit.',['acb','trafo']],
        ['<b>MCCBs</b> protect feeders and motor circuits, up to about 1600 A, with fixed or adjustable trips.',['mccb','motor']],
        ['<b>MCBs</b> up to 125 A protect final circuits, with a fixed B, C or D trip curve.',['mcb','loads']]],
 fact:['Icu ≥ prospective I<sub>sc</sub>','The breaking capacity must be at least the fault current where the breaker is installed.'],
 end:'Ratings, breaking capacity, trip units, selectivity and a worked example.',
 caption:'MCB, MCCB or ACB? Where each low voltage breaker belongs, from the main incomer to the final circuits.',
 tags:['#CircuitBreaker','#ElectricalEngineering','#Switchgear','#EngineeringStudents','#ZentaEngineering']};
