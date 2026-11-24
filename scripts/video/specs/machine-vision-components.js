// Video spec for /machine-vision-components/. Facts from the article only.
// Conveyor moves parts left to right (rollers clockwise, top belt moving right). Diffuse photo eye above the belt triggers; ring light + lens + camera above; processor -> PLC.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const roll=(cx)=>`<circle cx="${cx}" cy="560" r="40" fill="${NV}" stroke="${LB}" stroke-width="4"/><g class="spin-cw" style="--p:1.4s"><circle cx="${cx}" cy="560" r="30" fill="none" stroke="#fff" stroke-width="3" opacity=".4"/><path d="M${cx-30} 560 H${cx+30} M${cx} 530 V590" stroke="#fff" stroke-width="5"/></g>`;
BLUE['machine-vision-components'] = {
 pill:'AUTOMATION', title:'How <em>Machine Vision</em> Components Work',
 svg:`<g class="part" id="belt"><path d="M100 520 H700 M100 600 H700" stroke="${LB}" stroke-width="6"/>${roll(100)}${roll(700)}
  <path class="flow" d="M100 520 H700" stroke="#fff" stroke-width="3" style="--p:.9s"/><path class="flow" d="M700 600 H100" stroke="#fff" stroke-width="3" style="--p:.9s"/>
  <rect x="160" y="450" width="110" height="70" rx="6" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="345" y="450" width="110" height="70" rx="6" fill="${TL}" stroke="${LB}" stroke-width="4"/><rect x="370" y="470" width="60" height="28" fill="#fff" opacity=".85"/>
  <rect x="540" y="450" width="110" height="70" rx="6" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M800 560 H880" stroke="${LB}" stroke-width="6" marker-end="url(#ah)"/></g>
 <g class="part" id="eye"><rect x="288" y="370" width="44" height="40" rx="6" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M310 410 V514" stroke="#F5B800" stroke-width="3" stroke-dasharray="8 6"/></g>
 <g class="part" id="cam"><rect x="340" y="90" width="120" height="120" rx="12" fill="${NV}" stroke="${LB}" stroke-width="5"/>${t(400,145,'Camera',22)}${t(400,175,'sensor',22)}</g>
 <g class="part" id="lens"><rect x="370" y="210" width="60" height="70" fill="${TL}" stroke="${LB}" stroke-width="4"/><path d="M372 230 H428 M372 250 H428" stroke="#fff" stroke-width="3" opacity=".6"/></g>
 <g class="part" id="light"><rect x="320" y="280" width="160" height="26" rx="13" fill="#fff" stroke="${LB}" stroke-width="4"/>
  <g class="pulse"><path d="M340 310 L380 444 M460 310 L420 444" stroke="#fff" stroke-width="4" stroke-dasharray="10 8" opacity=".8"/></g></g>
 <g class="part" id="proc"><path d="M460 150 H600" stroke="${LB}" stroke-width="5"/><path class="flow" d="M460 150 H600" stroke="#fff" stroke-width="3" style="--p:.8s"/>
  <rect x="600" y="100" width="170" height="100" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(685,145,'Vision',22)}${t(685,175,'software',22)}</g>
 <g class="part" id="plc"><path d="M770 150 H830 V260" fill="none" stroke="${LB}" stroke-width="5"/><path class="flow" d="M770 150 H830 V260" fill="none" stroke="#fff" stroke-width="3" style="--p:.8s"/>
  <rect x="770" y="260" width="140" height="90" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(840,313,'PLC',28)}
  ${t(840,395,'Pass / fail',22)}</g>`,
 labels:[[120,320,'Ring light',318,293,'start'],[120,250,'Lens',368,245,'start'],[60,430,'Photo eye trigger',286,392,'start'],[600,720,'Conveyor',600,604,'middle']],
 steps:[['<b>Lighting</b> creates contrast on the part, and the <b>lens</b> forms the image on the sensor.',['light','lens']],
        ['The <b>camera sensor</b> turns light into pixels. <b>Vision software</b> finds, measures, reads or classifies features.',['cam','proc']],
        ['A <b>trigger</b> input starts each image, and a <b>pass or fail</b> output goes to the PLC.',['eye','plc']]],
 fact:['120 ÷ 0.2 × 3 = 1800 px','Minimum pixels across a 120 mm field of view so a 0.2 mm defect spans 3 pixels.'],
 end:'Lighting, lenses, cameras, processors, software and interfaces, with a camera resolution sizing example.',
 caption:'What are the parts of a machine vision system? Lighting, lens, camera, software and I/O on one inspection line.',
 tags:['#MachineVision','#IndustrialAutomation','#Inspection','#EngineeringStudents','#ZentaEngineering']};
})();
