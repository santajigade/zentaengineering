// Video spec for /gas-detector-types/. Facts from the article only.
// Left: catalytic bead sensor (detector and compensator beads) in a Wheatstone bridge. Right top: NDIR gas cell with lamp, active and reference detectors.
// Right bottom: three electrode electrochemical cell; electrons flow WE to CE through the external meter, H+ ions WE to CE through the electrolyte.
BLUE['gas-detector-types'] = {
 pill:'SAFETY', title:'How a <em>Gas Detector</em> Works',
 svg:`<g class="part" id="gas1"><path d="M180 50 V118" stroke="${LB}" stroke-width="8" marker-end="url(#ah)"/><path class="flow" d="M180 50 V112" stroke="#fff" stroke-width="4" style="--p:.8s"/></g>
 <g class="part" id="bead"><rect x="110" y="128" width="280" height="22" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${[130,160,190,220,250,280,310,340,370].map(x=>`<path d="M${x} 150 L${x+14} 128" stroke="${LB}" stroke-width="2"/>`).join('')}
  <rect x="110" y="150" width="280" height="140" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M204 225 H296 M250 225 V180" stroke="${LB}" stroke-width="4"/>
  <text x="262" y="190" fill="#fff" font-family="Open Sans" font-weight="700" font-size="22">+V</text>
  <g class="pulse"><circle cx="180" cy="225" r="24" fill="#F5B800" stroke="#fff" stroke-width="3"/></g>
  <circle cx="320" cy="225" r="24" fill="${TL}" stroke="#fff" stroke-width="3"/>
  <text x="180" y="233" text-anchor="middle" fill="#0b2545" font-family="Open Sans" font-weight="800" font-size="22">D</text>
  <text x="320" y="233" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="22">C</text></g>
 <g class="part" id="bridge"><path d="M180 249 V690 H320 V249 M180 430 H216 M284 430 H320" fill="none" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M180 252 V688 M320 252 V688" stroke="#fff" stroke-width="3" style="--p:1s"/>
  <rect x="166" y="530" width="28" height="90" fill="${NV}" stroke="${LB}" stroke-width="4"/><rect x="306" y="530" width="28" height="90" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <circle cx="250" cy="430" r="34" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <text x="250" y="440" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">V</text>
  <text x="250" y="725" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="22">0 V</text></g>
 <g class="part" id="gas2"><path d="M680 50 V118" stroke="${LB}" stroke-width="8" marker-end="url(#ah)"/><path d="M740 50 V118" stroke="${LB}" stroke-width="8" marker-end="url(#ah)"/><path class="flow" d="M680 50 V120 M740 50 V120" stroke="#fff" stroke-width="4" style="--p:.8s"/></g>
 <g class="part" id="ndir"><rect x="620" y="128" width="180" height="22" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${[635,665,695,725,755].map(x=>`<path d="M${x} 150 L${x+14} 128" stroke="${LB}" stroke-width="2"/>`).join('')}
  <rect x="560" y="150" width="380" height="120" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[[660,175],[710,240],[760,190],[820,225],[700,205]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#cfe6f5"/>`).join('')}
  <path d="M615 205 L880 185 M615 215 L880 235" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M615 205 L880 185 M615 215 L880 235" stroke="#fff" stroke-width="3" style="--p:.7s"/>
  <g class="pulse"><circle cx="595" cy="210" r="20" fill="#F5B800" stroke="#fff" stroke-width="3"/></g>
  <rect x="882" y="170" width="8" height="30" fill="#e5654f"/><rect x="882" y="220" width="8" height="30" fill="${TL}"/>
  <rect x="895" y="170" width="34" height="30" fill="#fff"/><rect x="895" y="220" width="34" height="30" fill="#fff"/></g>
 <g class="part" id="gas3"><path d="M650 370 V430" stroke="${LB}" stroke-width="8" marker-end="url(#ah)"/><path class="flow" d="M650 370 V432" stroke="#fff" stroke-width="4" style="--p:.8s"/></g>
 <g class="part" id="echem"><rect x="600" y="440" width="300" height="20" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${[620,650,680,710,740,770,800,830,860].map(x=>`<path d="M${x} 460 L${x+14} 440" stroke="${LB}" stroke-width="2"/>`).join('')}
  <rect x="600" y="460" width="300" height="240" rx="8" fill="${TL}" fill-opacity=".45" stroke="${LB}" stroke-width="4"/>
  <path d="M620 490 H880 M680 580 H820 M620 670 H880" stroke="#fff" stroke-width="8"/>
  <path d="M620 490 H560 V670 H620" fill="none" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M620 490 H560 V670 H620" fill="none" stroke="#fff" stroke-width="3" style="--p:1s"/>
  <circle cx="560" cy="580" r="24" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <text x="560" y="589" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="24">A</text>
  <path class="flow" d="M650 502 V650" stroke="#F5B800" stroke-width="5" marker-end="url(#ah)" style="--p:.9s"/>
  <text x="664" y="540" text-anchor="start" fill="#fff" font-family="Open Sans" font-weight="700" font-size="22">H⁺</text></g>`,
 labels:[[200,80,'Gas in',184,96,'start'],[160,335,'Detector bead',180,249,'end'],[340,335,'Compensator',320,249,'start'],[340,470,'Bridge output',282,438,'start'],
         [595,330,'IR lamp',595,232,'middle'],[790,110,'Active 3.3 µm',912,170,'start'],[760,320,'Reference band',912,250,'start'],
         [930,498,'WE',882,490,'start'],[930,588,'RE',822,580,'start'],[930,678,'CE',882,670,'start'],[520,640,'Current',540,592,'end']],
 steps:[['In a <b>catalytic bead</b>, gas burns on the heated detector bead and unbalances a <b>Wheatstone bridge</b>.',['bead','bridge','gas1']],
        ['An <b>infrared</b> detector compares an <b>active band</b> (3.3 µm for hydrocarbons) with a reference band.',['ndir','gas2']],
        ['In an <b>electrochemical</b> cell, gas reacts at the working electrode and the current follows ppm.',['echem','gas3']]],
 fact:['Methane LEL = 4.4% vol','So 100% LEL is 4.4% vol methane. Alarms sit well below, for example at 20% and 40% LEL.'],
 end:'Catalytic bead, infrared, electrochemical, PID, semiconductor and thermal conductivity sensors, with a worked example.',
 caption:'How does a gas detector sense flammable and toxic gas? Catalytic bead, infrared and electrochemical sensors explained in 22 seconds.',
 tags:['#GasDetection','#ProcessSafety','#SafetyEngineering','#EngineeringStudents','#ZentaEngineering']};
