// Video spec for /pump-cavitation-and-npsh/. Facts from the article only.
// Open tank below a centrifugal pump (suction lift). Suction pipe rises to the impeller eye.
// Discharge leaves tangentially at the right going up, so the impeller turns counterclockwise (spin-ccw), vanes backward curved.
// Bubbles form at the eye (lowest pressure) and collapse further out along the vanes where pressure rises.
BLUE['pump-cavitation-and-npsh'] = {
 pill:'MECHANICAL', title:'How <em>Pump Cavitation</em> Happens',
 svg:`<g class="part" id="tank"><path d="M60 470 V690 H360 V470" fill="none" stroke="${LB}" stroke-width="5"/>
  <rect x="63" y="530" width="294" height="157" fill="${TL}" opacity=".55"/><path d="M63 530 H357" stroke="${LB}" stroke-width="4"/>
  <path d="M100 330 V530 M88 330 H112 M88 530 H112" stroke="#fff" stroke-width="3"/>
  <text x="130" y="440" fill="#fff" font-family="Open Sans" font-weight="800" font-size="30">z</text></g>
 <g class="part" id="suction"><path d="M210 660 V330 H476" fill="none" stroke="${LB}" stroke-width="30" stroke-linejoin="round"/>
  <path d="M210 660 V330 H476" fill="none" stroke="${NV}" stroke-width="20" stroke-linejoin="round"/>
  <rect x="190" y="640" width="40" height="34" fill="#3d4b5c" stroke="${LB}" stroke-width="3"/>
  <path class="flow" d="M210 640 V330 H476" fill="none" stroke="#fff" stroke-width="4" style="--p:1s"/></g>
 <g class="part" id="pump"><path d="M670 267 V90 H900" fill="none" stroke="${LB}" stroke-width="30" stroke-linejoin="round"/>
  <path d="M670 267 V90 H900" fill="none" stroke="${NV}" stroke-width="20" stroke-linejoin="round"/>
  <path class="flow" d="M670 260 V90 H900" fill="none" stroke="#fff" stroke-width="4" style="--p:.7s"/>
  <circle cx="580" cy="330" r="110" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <g class="spin-ccw" style="--p:2s"><circle cx="580" cy="330" r="78" fill="${TL}" stroke="${LB}" stroke-width="3"/>
   <path d="M603 336Q622 365 617 394 M586 353Q570 384 543 394 M563 347Q528 349 506 330 M557 324Q538 295 543 266 M574 307Q590 276 617 266 M597 313Q632 311 654 330" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
   <circle cx="580" cy="330" r="22" fill="${NV}" stroke="#fff" stroke-width="3"/></g></g>
 <g class="part" id="bubbles">${[[566,312],[598,322],[572,350],[594,346]].map(([x,y],i)=>`<circle class="pulse" cx="${x}" cy="${y}" r="9" fill="#fff" stroke="${LB}" stroke-width="2" style="animation-delay:${i*0.3}s"/>`).join('')}</g>
 <g class="part" id="collapse">${[[636,280],[640,384],[520,392],[522,270]].map(([x,y],i)=>`<g class="pulse" style="animation-delay:${i*0.3}s">${[0,45,90,135].map(a=>{const [x1,y1]=P(x,y,12,a),[x2,y2]=P(x,y,12,a+180);return `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#e5654f" stroke-width="4" stroke-linecap="round"/>`}).join('')}</g>`).join('')}</g>`,
 labels:[[330,250,'Suction pipe',330,322,'middle'],[580,530,'Impeller eye',580,352,'middle'],[440,170,'Vapour bubbles',566,312,'end'],[830,470,'Collapse',640,384,'start'],[250,740,'Open tank',250,690,'middle'],[40,300,'Suction lift',100,340,'start']],
 steps:[['Lift, friction and the speed rise lower the pressure from the <b>tank</b> to the <b>impeller eye</b>.',['tank','suction']],
        ['Where it falls to the <b>vapour pressure</b>, the liquid boils and <b>vapour bubbles</b> form.',['bubbles','pump']],
        ['The bubbles <b>collapse</b> as pressure rises along the vanes, causing noise and <b>pitting</b>.',['collapse','pump']]],
 fact:['NPSHa above NPSH3 + margin','NPSH3 is the NPSH at which the first stage head has fallen by 3%.'],
 end:'Why cavitation happens, NPSHa vs NPSH3, symptoms, a diagnostic table, prevention and a worked NPSH example.',
 caption:'Noise, vibration and a pitted impeller? How pump cavitation happens and how NPSH keeps it away.',
 tags:['#PumpCavitation','#NPSH','#MechanicalEngineering','#EngineeringStudents','#ZentaEngineering']};
