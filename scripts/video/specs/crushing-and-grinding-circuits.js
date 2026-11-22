// Video spec for /crushing-and-grinding-circuits/. Facts from the article only.
// Primary crusher -> screen with cone crusher in closed circuit -> stockpile -> ball mill -> sump -> hydrocyclone; underflow returns to the mill.
// The mill turns clockwise, so the ball charge rides up the left side.
BLUE['crushing-and-grinding-circuits'] = {
 pill:'MINING', title:'How <em>Crushing and Grinding</em> Works',
 svg:`<g class="part" id="primary"><path d="M10 150 H90" stroke="${LB}" stroke-width="7" marker-end="url(#ah)"/>
  <path class="flow" d="M10 150 H84" stroke="#fff" stroke-width="4" style="--p:.9s"/>
  <path d="M90 90 H190 L160 220 H120 Z" fill="${NV}" stroke="${LB}" stroke-width="5"/><path d="M110 100 L132 210 M170 100 L148 210" stroke="#fff" stroke-width="4"/></g>
 <g class="part" id="screen"><path d="M140 220 V280 H280 V158 H296" fill="none" stroke="${LB}" stroke-width="7"/>
  <path class="flow" d="M140 222 V280 H280 V158 H294" fill="none" stroke="#fff" stroke-width="4" style="--p:1.2s"/>
  <path d="M300 140 L460 180 V200 L300 160 Z" fill="${TL}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="cone"><path d="M460 192 H556" stroke="${LB}" stroke-width="7"/><path class="flow" d="M460 192 H554" stroke="#fff" stroke-width="4" style="--p:1s"/>
  <path d="M560 140 H640 L620 240 H580 Z" fill="${NV}" stroke="${LB}" stroke-width="5"/><path d="M600 150 L585 230 H615 Z" fill="${LB}" opacity=".6"/></g>
 <g class="part" id="oversize"><path d="M600 140 V60 H300 V136" fill="none" stroke="#e5654f" stroke-width="7"/>
  <path class="flow" d="M600 138 V60 H300 V134" fill="none" stroke="#fff" stroke-width="4" style="--p:1.4s"/></g>
 <g class="part" id="stock"><path d="M380 178 V318" stroke="${LB}" stroke-width="7"/><path class="flow" d="M380 178 V316" stroke="#fff" stroke-width="4" style="--p:1s"/>
  <path d="M325 372 L380 320 L435 372 Z" fill="#F5B800" opacity=".85" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="mill"><path d="M380 372 V410 H230 V540 H290" fill="none" stroke="${LB}" stroke-width="7"/>
  <path class="flow" d="M380 374 V410 H230 V540 H288" fill="none" stroke="#fff" stroke-width="4" style="--p:1.4s"/>
  <circle cx="380" cy="540" r="88" fill="${NV}" stroke="${LB}" stroke-width="6"/>
  ${[[330,580,14],[352,600,14],[318,550,13],[344,560,12],[378,606,12],[326,518,12],[402,598,11],[360,580,11]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#9fb3c8"/>`).join('')}
  <g class="spin-cw"><path d="M450 540L466 540 M441 575L454 583 M415 601L423 614 M380 610L380 626 M345 601L337 614 M319 575L306 583 M310 540L294 540 M319 505L306 497 M345 479L337 466 M380 470L380 454 M415 479L423 466 M441 505L454 497" stroke="#fff" stroke-width="6"/></g></g>
 <g class="part" id="cyclone"><path d="M468 540 H595 V556" fill="none" stroke="${LB}" stroke-width="7"/>
  <rect x="560" y="560" width="70" height="80" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M630 610 H690 V380 H716" fill="none" stroke="${LB}" stroke-width="7"/>
  <path class="flow" d="M470 540 H595 V554 M630 610 H690 V380 H714" fill="none" stroke="#fff" stroke-width="4" style="--p:1.2s"/>
  <path d="M720 360 H800 V420 L768 560 H752 L720 420 Z" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <path d="M760 360 V300 H985" fill="none" stroke="${LB}" stroke-width="7" marker-end="url(#ah)"/>
  <path class="flow" d="M760 358 V300 H975" fill="none" stroke="#fff" stroke-width="4" style="--p:1s"/></g>
 <g class="part" id="under"><path d="M760 562 V700 H230 V546" fill="none" stroke="#e5654f" stroke-width="7"/>
  <path class="flow" d="M760 564 V700 H230 V548" fill="none" stroke="#fff" stroke-width="4" style="--p:1.6s"/></g>`,
 labels:[[10,120,'ROM ore',40,150],[20,330,'Primary crusher',140,222],[470,128,'Screen',430,175],[660,205,'Cone crusher',632,195],[420,40,'Oversize returns',450,60],
         [450,352,'Stockpile',412,345],[420,430,'Ball mill',430,468],[815,470,'Cyclone',782,470],[800,285,'To flotation',830,300],[300,745,'Underflow returns',500,700],[640,676,'Sump',610,640,'start']],
 steps:[['<b>Primary crushers</b> reduce run of mine ore to roughly 100 to 200 mm.',['primary']],
        ['<b>Cone crushers</b> run in closed circuit with a <b>screen</b>: oversize returns until it passes.',['screen','cone','oversize']],
        ['The <b>ball mill</b> grinds the ore and <b>hydrocyclones</b> return the coarse underflow to it.',['mill','cyclone','under']]],
 fact:['Circulating load = 233%','From cyclone streams at 35%, 70% and 20% passing 75 µm: C = (70 − 35) ÷ (35 − 20).'],
 end:'Crushing stages, open and closed circuits, SAG, ball mill and HPGR flowsheets, and Bond mill power.',
 caption:'How do crushing and grinding circuits work in a mineral processing plant? Crushers, screens, ball mills and hydrocyclones in 22 seconds.',
 tags:['#MineralProcessing','#Comminution','#MiningEngineering','#EngineeringStudents','#ZentaEngineering']};
