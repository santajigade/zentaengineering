// Video spec for /grain-drying-methods/. Facts from the article only.
// End view of a continuous cross flow dryer: grain falls down two perforated columns,
// heated air (upper section) and ambient air (lower section) blow from the central plenum outward across the columns.
(()=>{
const GR='#c98a3a', HOT='#ff7a45';
const hot=(x0,x1,y)=>`<path class="flow" d="M${x0} ${y} H${x1}" stroke="${HOT}" stroke-width="6" marker-end="url(#ah)" style="--p:.9s"/>`;
const cool=(x0,x1,y)=>`<path class="flow" d="M${x0} ${y} H${x1}" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:.9s"/>`;
BLUE['grain-drying-methods'] = {
 pill:'AGRICULTURAL', title:'How a <em>Cross Flow Grain Dryer</em> Works',
 svg:`<g class="part" id="hopper"><path d="M300 150 H700 L670 215 H330 Z" fill="${GR}" stroke="${LB}" stroke-width="4"/><rect x="480" y="70" width="40" height="82" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <path class="flow" d="M500 75 V200" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:1s"/></g>
 <g class="part" id="columns">${[330,590].map(x=>`<rect x="${x}" y="215" width="80" height="390" fill="${GR}"/><path d="M${x} 215V605M${x+80} 215V605" stroke="${LB}" stroke-width="4" stroke-dasharray="10 7"/>
  <path class="flow" d="M${x+40} 220 V600" stroke="#fff" stroke-width="5" style="--p:1.6s"/>`).join('')}</g>
 <g class="part" id="plenum"><path d="M410 240 L500 215 L590 240 V470 H410 Z" fill="#5a2a22" stroke="${LB}" stroke-width="3"/><rect x="410" y="480" width="180" height="125" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="410" y="470" width="180" height="10" fill="#fff"/></g>
 <g class="part" id="fan"><circle cx="500" cy="320" r="44" fill="${NV}" stroke="${LB}" stroke-width="4"/><g class="spin-cw" style="--p:.8s">${[0,90,180,270].map(a=>`<path d="M500 320 Q ${P(500,320,30,a-25).join(' ')} ${P(500,320,38,a+10).join(' ')} Z" fill="#fff"/>`).join('')}</g><circle cx="500" cy="320" r="8" fill="${LB}"/>
  <path class="pulse" d="M500 455 C 478 440 486 418 500 395 C 514 418 522 440 500 455 Z" fill="${HOT}"/><path d="M470 460 H530" stroke="#fff" stroke-width="4"/></g>
 <g class="part" id="hotair">${[275,365,440].map(y=>hot(420,262,y)+hot(580,738,y)).join('')}</g>
 <g class="part" id="coolfan"><circle cx="500" cy="545" r="32" fill="${NV}" stroke="${LB}" stroke-width="4"/><g class="spin-cw" style="--p:.8s">${[0,90,180,270].map(a=>`<path d="M500 545 Q ${P(500,545,22,a-25).join(' ')} ${P(500,545,28,a+10).join(' ')} Z" fill="#fff"/>`).join('')}</g><circle cx="500" cy="545" r="6" fill="${LB}"/></g>
 <g class="part" id="coolair">${[515,580].map(y=>cool(455,262,y)+cool(545,738,y)).join('')}</g>
 <g class="part" id="rolls">${[370,630].map(x=>`<circle cx="${x}" cy="622" r="16" fill="${NV}" stroke="#fff" stroke-width="4"/><g class="spin-cw" style="--p:2s"><path d="M${x-12} 622H${x+12}M${x} 610V634" stroke="#fff" stroke-width="4"/></g>`).join('')}</g>
 <g class="part" id="outlet"><path d="M320 648 H680 L520 700 H480 Z" fill="${NV}" stroke="${LB}" stroke-width="4"/><path class="flow" d="M500 656 V745" stroke="${GR}" stroke-width="6" marker-end="url(#ah)" style="--p:1s"/></g>`,
 labels:[[530,95,'Wet grain in',505,110],[90,205,'Grain column',338,232],[985,170,'Fan and burner',536,302,'end'],[985,330,'Heated air',720,365,'end'],
         [20,420,'Moist exhaust',275,440],[985,650,'Ambient cooling air',720,580,'end'],[60,700,'Metering roll',356,628],[540,742,'Dry grain out',504,720]],
 steps:[['<b>Wet grain</b> enters at the top and flows <b>down by gravity</b> through two perforated columns.',['hopper','columns']],
        ['Air heated to about <b>50 to 100 °C</b> blows from the <b>plenum</b> across the grain, carrying moisture out.',['fan','hotair','plenum']],
        ['<b>Ambient air</b> cools the grain below, and dry grain at a safe <b>12 to 14%</b> leaves for storage.',['coolfan','coolair','rolls','outlet']]],
 fact:['About 4 to 7 MJ per kg of water','Typical high temperature dryer use, against a latent heat of about 2.4 MJ/kg.'],
 end:'Sun, natural air, low and high temperature drying, dryer types, energy use and a worked example.',
 caption:'How does a cross flow dryer take wet grain down to safe storage moisture? Gravity, hot air, then cooling air.',
 tags:['#GrainDrying','#PostHarvest','#AgriculturalEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
