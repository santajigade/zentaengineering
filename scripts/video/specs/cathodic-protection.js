// Video spec for /cathodic-protection/. Facts from the article only.
// Left: sacrificial Mg anode bonded to a buried steel pipe. Right: transformer rectifier, + to anode bed, - to pipe.
// Conventional current: anode -> soil -> pipe, returning through the cable (pipe -> anode, or pipe -> rectifier negative).
BLUE['cathodic-protection'] = {
 pill:'MATERIALS', title:'How <em>Cathodic Protection</em> Works',
 svg:`<g class="part" id="soil"><rect x="20" y="230" width="460" height="410" fill="${NV}" opacity=".75"/><rect x="520" y="230" width="460" height="410" fill="${NV}" opacity=".75"/>
  <path d="M20 230 H480 M520 230 H980" stroke="${LB}" stroke-width="4"/>
  <text x="250" y="700" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">Sacrificial anode</text>
  <text x="750" y="700" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">Impressed current</text></g>
 <g class="part" id="pipes"><rect x="40" y="540" width="420" height="50" rx="25" fill="${TL}" stroke="${LB}" stroke-width="4"/><rect x="540" y="540" width="420" height="50" rx="25" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <text x="250" y="574" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="24">Steel pipe (cathode)</text><text x="750" y="574" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="24">Steel pipe (cathode)</text></g>
 <g class="part" id="mg"><rect x="320" y="300" width="70" height="100" rx="8" fill="#c9ccd1" stroke="${LB}" stroke-width="4"/>
  <path d="M90 540 V270 H355 V300" fill="none" stroke="${LB}" stroke-width="6"/>
  <path class="flow" d="M90 540 V270 H355 V300" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/></g>
 <g class="part" id="rect"><rect x="640" y="100" width="200" height="90" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <text x="740" y="155" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">Rectifier</text>
  <text x="622" y="128" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="34">−</text>
  <text x="858" y="128" text-anchor="middle" fill="#F5B800" font-family="Open Sans" font-weight="800" font-size="34">+</text>
  <path d="M590 540 V145 H640 M840 145 H875 V300" fill="none" stroke="${LB}" stroke-width="6"/>
  <path class="flow" d="M840 145 H875 V300" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/>
  <path class="flow" d="M590 540 V145 H640" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/></g>
 <g class="part" id="bed"><rect x="840" y="300" width="70" height="100" rx="8" fill="#3d4b5c" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="current">
  ${[[355,400,355,530],[335,400,265,530],[375,400,440,530],[875,400,875,530],[855,400,790,530],[895,400,950,530]].map(([x1,y1,x2,y2])=>`<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#e5654f" stroke-width="7" marker-end="url(#ah)"/><path class="flow" d="M${x1} ${y1} L${x2} ${y2}" stroke="#fff" stroke-width="3" style="--p:.9s"/>`).join('')}</g>`,
 labels:[[205,335,'Mg anode',318,345,'end'],[775,290,'Anode bed',838,340,'end'],[130,460,'Current',292,470,'start']],
 steps:[['A <b>sacrificial anode</b> of magnesium, zinc or aluminium corrodes instead of the steel it is bonded to.',['mg','pipes']],
        ['An <b>impressed current</b> rectifier sends DC: <b>positive</b> to the anode bed, <b>negative</b> to the pipe.',['rect','bed']],
        ['In both, <b>protective current</b> flows from the anode through the soil onto the steel <b>cathode</b>.',['current','pipes']]],
 fact:['−850 mV vs CSE','Polarised potential criterion for buried steel in ISO 15589-1 and AMPP SP0169.'],
 end:'Sacrificial vs impressed current compared, protection criteria, anode design and a worked anode mass example.',
 caption:'Sacrificial anode or impressed current? How cathodic protection stops buried and immersed steel from corroding.',
 tags:['#CathodicProtection','#Corrosion','#MaterialsEngineering','#EngineeringStudents','#ZentaEngineering']};
