// Video spec for /dc-motor-working-principle/. Facts from the article only.
BLUE['dc-motor-working-principle'] = {
 pill:'ELECTRICAL', title:'How a <em>DC Motor</em> Works',
 svg:`<g class="part" id="yoke">${ring(500,380,340,300,TL)}</g>
 <g class="part" id="poles">
  <path d="M200 295 H319 A200 200 0 0 0 319 465 H200 Z" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M800 295 H681 A200 200 0 0 1 681 465 H800 Z" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <rect x="212" y="262" width="60" height="28" rx="6" fill="#c98a3a" stroke="${LB}" stroke-width="2"/><rect x="212" y="470" width="60" height="28" rx="6" fill="#c98a3a" stroke="${LB}" stroke-width="2"/>
  <rect x="728" y="262" width="60" height="28" rx="6" fill="#c98a3a" stroke="${LB}" stroke-width="2"/><rect x="728" y="470" width="60" height="28" rx="6" fill="#c98a3a" stroke="${LB}" stroke-width="2"/>
  <text x="245" y="393" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="40">N</text>
  <text x="755" y="393" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="40">S</text></g>
 <g class="part" id="arm"><g class="spin-ccw" style="--p:5s"><circle cx="500" cy="380" r="180" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${Array.from({length:12},(_,i)=>{const [x,y]=P(500,380,150,i*30+15);return `<circle cx="${x}" cy="${y}" r="20" fill="none" stroke="#fff" stroke-width="2.5" opacity=".55"/>`}).join('')}
  <path d="M500 230 V530 M350 380 H650" stroke="#fff" stroke-width="2" opacity=".25"/><circle cx="500" cy="380" r="34" fill="#fff"/></g></g>
 <g class="part" id="flux">${[318,350,410,442].map(y=>`<path class="flow" d="M322 ${y} H678" stroke="${LB}" stroke-width="3" opacity=".7" marker-end="url(#ah)" style="--p:1.2s"/>`).join('')}</g>
 <g class="part" id="cond">${[150,180,210].map(a=>{const [x,y]=P(500,380,150,a);return `<circle cx="${x}" cy="${y}" r="18" fill="#0b2545" stroke="#fff" stroke-width="3"/><path d="M${x-9} ${y-9}L${x+9} ${y+9}M${x+9} ${y-9}L${x-9} ${y+9}" stroke="#fff" stroke-width="3"/>`}).join('')}
  ${[330,0,30].map(a=>{const [x,y]=P(500,380,150,a);return `<circle cx="${x}" cy="${y}" r="18" fill="#0b2545" stroke="#fff" stroke-width="3"/><circle cx="${x}" cy="${y}" r="5" fill="#fff"/>`}).join('')}</g>
 <g class="part" id="forces"><path d="M405 330 V440" stroke="#fff" stroke-width="7" marker-end="url(#ahw)"/><path d="M595 430 V320" stroke="#fff" stroke-width="7" marker-end="url(#ahw)"/>
  <path d="M584 309 A110 110 0 0 0 416 309" fill="none" stroke="#F5B800" stroke-width="5" stroke-dasharray="10 8" marker-end="url(#ah)"/></g>
 <g class="part" id="comm"><g class="spin-ccw" style="--p:5s"><circle cx="900" cy="130" r="42" fill="#c98a3a" stroke="${LB}" stroke-width="3"/>${[0,45,90,135].map(a=>{const [x1,y1]=P(900,130,42,a),[x2,y2]=P(900,130,42,a+180);return `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#0b2545" stroke-width="4"/>`}).join('')}<circle cx="900" cy="130" r="12" fill="#fff"/></g></g>
 <g class="part" id="brushes"><rect x="885" y="56" width="30" height="32" rx="4" fill="#fff"/><rect x="885" y="172" width="30" height="32" rx="4" fill="#fff"/>
  <text x="935" y="80" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">+</text><text x="935" y="198" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">-</text></g>`,
 labels:[[560,22,'Yoke',520,58],[30,212,'Field pole N',225,320],[975,520,'Field pole S',778,440,'end'],[30,525,'Conductors',338,394],[30,690,'Armature',373,507],[975,612,'Magnetic flux Φ',662,445,'end'],[990,30,'Brushes',915,62,'end'],[900,250,'Commutator',900,206,'middle']],
 steps:[['The field poles set up a <b>steady magnetic flux</b> across the air gap.',['poles','flux']],
        ['Current flows through the conductors. Each one feels a <b>force F = B I L</b>, which turns the armature.',['cond','forces']],
        ['The <b>commutator</b> reverses each coil\'s current as it reaches the next pole, so torque keeps one direction.',['comm','brushes']]],
 fact:['E<sub>b</sub> = kΦω,&nbsp; T = kΦI<sub>a</sub>','V = E<sub>b</sub> + I<sub>a</sub>R<sub>a</sub>. Back EMF rises with speed until torque matches the load.'],
 end:'Construction, back EMF, the speed equation and DC motor types.',
 caption:'How does a DC motor turn current into rotation? Field flux, F = BIL, the commutator and back EMF in 22 seconds.',
 tags:['#DCMotor','#ElectricalEngineering','#ElectricMotor','#EngineeringStudents','#ZentaEngineering']};
