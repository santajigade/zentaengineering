// Video spec for /forces-of-flight-and-axes/. Facts from the article only.
BLUE['forces-of-flight-and-axes'] = {
 pill:'AEROSPACE', title:'How the <em>Four Forces of Flight</em> Work',
 svg:`<g class="part" id="air">${[95,195,600,700].map((y,i)=>`<path class="flow" d="M${i%2?990:960} ${y} H${i%2?60:90}" stroke="${LB}" stroke-width="3" opacity=".55" marker-end="url(#ah)" style="--p:1.1s"/>`).join('')}</g>
 <g class="part" id="plane">
  <path d="M200 352 L150 222 H202 L292 346 Z" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M180 360 Q215 344 300 343 H720 Q815 345 848 384 Q815 412 720 414 H300 Q225 410 180 360 Z" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${Array.from({length:14},(_,i)=>`<circle cx="${330+i*28}" cy="368" r="6" fill="${LB}" opacity=".8"/>`).join('')}
  <path d="M780 360 Q805 362 822 378 H785 Z" fill="${LB}" opacity=".8"/>
  <path d="M385 398 Q470 384 575 392 Q595 400 575 406 Q470 414 385 404 Z" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <rect x="480" y="418" width="110" height="40" rx="18" fill="${TL}" stroke="${LB}" stroke-width="3"/><path d="M520 406 V418" stroke="${LB}" stroke-width="5"/>
  <path d="M120 360 H255 L262 368 H120 Z" fill="${TL}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="tail"><path d="M150 222 L200 352 L186 354 L134 224 Z" fill="#fff"/><path d="M98 361 H122 V368 H98 Z" fill="#fff"/></g>
 <g class="part" id="lift"><path d="M495 380 V140" stroke="#fff" stroke-width="8" marker-end="url(#ahw)"/></g>
 <g class="part" id="weight"><path d="M495 400 V640" stroke="#fff" stroke-width="8" marker-end="url(#ahw)"/>
  <g class="pulse"><circle cx="495" cy="390" r="16" fill="#fff"/><path d="M495 374 V390 H511 A16 16 0 0 0 495 374 Z M495 406 V390 H479 A16 16 0 0 0 495 406 Z" fill="#0b2545"/></g></g>
 <g class="part" id="thrust"><path d="M860 395 H975" stroke="#fff" stroke-width="8" marker-end="url(#ahw)"/></g>
 <g class="part" id="drag"><path d="M170 395 H55" stroke="#fff" stroke-width="8" marker-end="url(#ahw)"/></g>
 <g class="part" id="pitch"><path d="M585 422 A92 92 0 0 0 548 314" fill="none" stroke="#F5B800" stroke-width="5" stroke-dasharray="10 8"/><path d="M538 305 L563 309 L550 331 Z" fill="#F5B800"/></g>`,
 labels:[[520,120,'Lift L',497,150],[520,670,'Weight W = mg',497,630],[975,470,'Thrust T',930,402,'end'],[40,470,'Drag D',90,402],[640,250,'Pitch about lateral axis',585,345],[40,190,'Rudder',150,250],[40,300,'Elevator',100,362],[975,160,'Relative wind',900,190,'end'],[320,500,'CG',480,400,'end']],
 steps:[['<b>Lift</b> acts perpendicular to the flight path. <b>Weight</b> acts down through the centre of gravity.',['lift','weight']],
        ['<b>Thrust</b> acts along the flight path and <b>drag</b> opposes motion. In level flight T = D and L = W.',['thrust','drag']],
        ['The <b>elevator</b> pitches the nose about the lateral axis. Ailerons roll and the <b>rudder</b> yaws.',['tail','pitch']]],
 fact:['L = ½ρv²SC<sub>L</sub>','In steady level flight, lift equals weight and thrust equals drag.'],
 end:'Lift, weight, thrust and drag, climb, glide and turn, the three axes and stability.',
 caption:'What keeps an aircraft in the air? Lift, weight, thrust, drag and the three axes in 22 seconds.',
 tags:['#ForcesOfFlight','#AerospaceEngineering','#Aviation','#EngineeringStudents','#ZentaEngineering']};
