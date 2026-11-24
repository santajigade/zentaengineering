// Video spec for /mechatronic-system-elements/. Facts from the article only.
// Closed loop: controller -> driver -> motor -> 10:1 gearbox -> belt pulley -> carriage; encoder on motor -> signal conditioning -> controller.
// Pulleys turn clockwise, so the top belt run and the carriage move right.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const pul=(cx)=>`<circle cx="${cx}" cy="560" r="50" fill="${NV}" stroke="${LB}" stroke-width="4"/><g class="spin-cw" style="--p:1.6s"><circle cx="${cx}" cy="560" r="38" fill="none" stroke="#fff" stroke-width="3" opacity=".4"/><path d="M${cx-38} 560 H${cx+38} M${cx} 522 V598" stroke="#fff" stroke-width="5"/></g>`;
BLUE['mechatronic-system-elements'] = {
 pill:'AUTOMATION', title:'How a <em>Mechatronic System</em> Works',
 svg:`<g class="part" id="ctrl"><path d="M20 170 H96" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/><path class="flow" d="M20 170 H92" stroke="#fff" stroke-width="3"/>
  <rect x="100" y="110" width="230" height="120" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(215,165,'Controller',26)}${t(215,198,'PID',22)}</g>
 <g class="part" id="drv"><path d="M330 170 H416" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/><path class="flow" d="M330 170 H412" stroke="#fff" stroke-width="3"/>
  <rect x="420" y="110" width="210" height="120" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(525,165,'Driver',26)}${t(525,198,'power stage',20)}
  <path d="M630 170 H860 V500" stroke="${LB}" stroke-width="5" fill="none"/><path class="flow" d="M630 170 H860 V500" stroke="#fff" stroke-width="3" fill="none"/></g>
 <g class="part" id="mech"><path d="M180 510 H580 M180 610 H580" stroke="${LB}" stroke-width="6"/>${pul(180)}${pul(580)}
  <path class="flow" d="M180 510 H580" stroke="#fff" stroke-width="3" style="--p:1s"/><path class="flow" d="M580 610 H180" stroke="#fff" stroke-width="3" style="--p:1s"/>
  <rect x="330" y="440" width="110" height="64" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(385,480,'Load',22)}
  <path d="M630 560 H680" stroke="${LB}" stroke-width="8"/>
  <rect x="680" y="520" width="80" height="80" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(720,568,'10:1',22)}
  <path d="M760 560 H790" stroke="${LB}" stroke-width="8"/></g>
 <g class="part" id="motor"><rect x="790" y="500" width="130" height="120" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(855,568,'Motor',24)}</g>
 <g class="part" id="enc"><rect x="920" y="530" width="44" height="60" rx="6" fill="#fff" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="fb"><path d="M942 590 V700 H110 V420" stroke="${LB}" stroke-width="5" fill="none"/>
  <path class="flow" d="M942 590 V700 H110 V420" stroke="#fff" stroke-width="3" fill="none" style="--p:1.2s"/></g>
 <g class="part" id="cond"><rect x="40" y="310" width="230" height="110" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(155,358,'Signal',24)}${t(155,390,'conditioning',24)}
  <path d="M155 310 V234" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/><path class="flow" d="M155 310 V240" stroke="#fff" stroke-width="3"/></g>`,
 labels:[[20,90,'Set point',40,168,'start'],[980,470,'Encoder',946,532,'end'],[520,430,'Mechanical system',440,470,'start'],[640,748,'Feedback',640,702,'middle']],
 steps:[['The <b>controller</b> compares the set point with the measurement and sends a command to the <b>driver</b>.',['ctrl','drv']],
        ['The driver powers the <b>actuator</b>, a motor that moves the load through a 10:1 gearbox and a belt.',['motor','mech']],
        ['An <b>encoder</b> measures the motor position. <b>Signal conditioning</b> feeds it back to close the loop.',['enc','fb','cond']]],
 fact:['100 mm ÷ 40,000 = 2.5 µm','Belt resolution per count: 1000 line encoder read in quadrature, with a 10:1 gearbox.'],
 end:'The five elements, open and closed loop control, an encoder resolution example and the mechatronic design approach.',
 caption:'What makes a system mechatronic? Mechanics, sensors, signal conditioning, a controller and actuators in one feedback loop.',
 tags:['#Mechatronics','#ControlSystems','#Automation','#EngineeringStudents','#ZentaEngineering']};
})();
