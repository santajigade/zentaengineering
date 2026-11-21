// Video spec for /catalyst-types/. Facts from the article only.
BLUE['catalyst-types'] = {
 pill:'CHEMICAL', title:'How <em>Catalysts</em> Work',
 svg:`<g class="part" id="axes"><path d="M90 60 V340 H560" stroke="${LB}" stroke-width="4" fill="none"/>
  <text x="66" y="200" text-anchor="middle" transform="rotate(-90 66 200)" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">Energy</text>
  <text x="325" y="376" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">Reaction progress</text>
  <path d="M100 270 H220 M430 310 H540" stroke="#fff" stroke-width="6"/>
  <path d="M220 270 H560" stroke="${LB}" stroke-width="2" stroke-dasharray="6 6" opacity=".7"/>
  <path d="M545 274 V304" stroke="#fff" stroke-width="3" marker-end="url(#ahw)"/></g>
 <g class="part" id="uncat"><path d="M220 270 C270 270 275 90 315 90 C355 90 380 310 430 310" stroke="#e5654f" stroke-width="7" fill="none"/>
  <path d="M120 268 V102" stroke="#e5654f" stroke-width="4" marker-end="url(#ah)"/><path d="M110 90 H315" stroke="#e5654f" stroke-width="2" stroke-dasharray="6 6"/></g>
 <g class="part" id="cat"><path d="M220 270 C262 270 278 200 315 200 C352 200 385 310 430 310" stroke="${TL}" stroke-width="7" fill="none"/>
  <path class="flow" d="M220 270 C262 270 278 200 315 200 C352 200 385 310 430 310" stroke="#fff" stroke-width="4" fill="none" style="--p:1.2s"/>
  <path d="M165 268 V212" stroke="${TL}" stroke-width="4" marker-end="url(#ah)"/><path d="M155 200 H315" stroke="${TL}" stroke-width="2" stroke-dasharray="6 6"/></g>
 <g class="part" id="surface"><rect x="80" y="640" width="840" height="60" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  ${[130,200,270,360,430,500,570,640,730,800,870].map(x=>`<circle cx="${x}" cy="640" r="9" fill="#F5B800"/>`).join('')}</g>
 <g class="part" id="adsorb"><circle cx="230" cy="440" r="24" fill="#fff"/><text x="230" y="449" text-anchor="middle" fill="${NV}" font-family="Open Sans" font-weight="800" font-size="26">A</text>
  <path class="flow" d="M230 470 V618" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:1s"/></g>
 <g class="part" id="react"><circle cx="476" cy="606" r="24" fill="#fff"/><text x="476" y="615" text-anchor="middle" fill="${NV}" font-family="Open Sans" font-weight="800" font-size="26">A</text>
  <circle cx="524" cy="606" r="24" fill="${LB}"/><text x="524" y="615" text-anchor="middle" fill="${NV}" font-family="Open Sans" font-weight="800" font-size="26">B</text></g>
 <g class="part" id="desorb"><circle cx="750" cy="440" r="24" fill="#fff"/><circle cx="794" cy="440" r="24" fill="${LB}"/>
  <text x="750" y="449" text-anchor="middle" fill="${NV}" font-family="Open Sans" font-weight="800" font-size="26">A</text><text x="794" y="449" text-anchor="middle" fill="${NV}" font-family="Open Sans" font-weight="800" font-size="26">B</text>
  <path class="flow" d="M772 625 V478" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:1s"/></g>`,
 labels:[[600,100,'Without catalyst',340,105],[600,215,'With catalyst',338,211],[600,300,'ΔH unchanged',548,290],[140,40,'Activation energy Ea',122,140],
         [255,545,'Adsorb',232,560],[500,555,'Surface reaction',500,580,'middle'],[748,545,'Desorb',770,560,'end'],[540,748,'Active sites on a solid support',500,702]],
 steps:[['On a solid catalyst, reactant molecules <b>adsorb</b> on <b>active sites</b> at the surface.',['surface','adsorb']],
        ['The adsorbed species <b>react on the surface</b>, the product <b>desorbs</b> and the site is free again.',['react','desorb']],
        ['The catalysed path has a <b>lower activation energy</b>. ΔH and the equilibrium do not change.',['cat','uncat']]],
 fact:['k = A exp(−E<sub>a</sub> / RT)','Cutting Ea from 100 to 60 kJ/mol raises k about 15000 times at 500 K.'],
 end:'Homogeneous, heterogeneous and enzyme catalysts, industrial uses, deactivation and a worked example.',
 caption:'Why does a catalyst make a reaction faster without being used up? Adsorption, surface reaction, desorption and a lower energy barrier in 22 seconds.',
 tags:['#Catalysis','#ChemicalEngineering','#ReactionEngineering','#EngineeringStudents','#ZentaEngineering']};
