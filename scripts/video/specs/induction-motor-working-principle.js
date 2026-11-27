// Video spec for /induction-motor-working-principle/. Facts from the article only.
// 2-pole cross section, 12 slots, 2 slots per pole per phase. Phase belts A+ C- B+ A- C+ B- every 60 degrees clockwise, so the field turns clockwise (A to B to C).
// Field group turns clockwise in 2 s; the squirrel cage rotor turns the same way, slightly slower (2.08 s, slip 0.04).
(()=>{
const CX=500, CY=390, F='font-family="Open Sans" font-weight="800"';
const PH={A:'#e5654f',B:'#f0c24b',C:LB};
const sides=[['A',1,0],['C',-1,60],['B',1,120],['A',-1,180],['C',1,240],['B',-1,300]].flatMap(([p,s,a])=>[[p,s,a-15],[p,s,a+15]]);
BLUE['induction-motor-working-principle'] = {
 pill:'ELECTRICAL', title:'How an <em>Induction Motor</em> Works',
 svg:`<g class="part" id="stator">${ring(CX,CY,330,232,TL)}
  </g>
 <g class="part" id="winding">${sides.map(([p,s,a])=>{const [x,y]=P(CX,CY,262,a);return `<circle cx="${x}" cy="${y}" r="21" fill="${PH[p]}" stroke="#061630" stroke-width="3"/>`+
   (s>0?`<path d="M${x-9} ${y-9}L${x+9} ${y+9}M${x+9} ${y-9}L${x-9} ${y+9}" stroke="#061630" stroke-width="4"/>`:`<circle cx="${x}" cy="${y}" r="5" fill="#061630"/>`)}).join('')}</g>
 <g class="part" id="rotor"><g class="spin-cw" style="--p:2.08s"><circle cx="${CX}" cy="${CY}" r="214" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <g id="bars">${Array.from({length:16},(_,i)=>{const a=i*22.5;return `<rect x="${CX-10}" y="${CY-202}" width="20" height="34" rx="5" fill="#c9d3de" stroke="#fff" stroke-width="2" transform="rotate(${a} ${CX} ${CY})"/>`}).join('')}</g>
  <path d="M${CX} ${CY-160} V${CY-60}" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".8"/>
  <circle cx="${CX}" cy="${CY}" r="46" fill="#c9d3de" stroke="#fff" stroke-width="3"/><rect x="${CX-8}" y="${CY-46}" width="16" height="16" fill="${NV}"/></g></g>
 <g class="part" id="field"><g class="spin-cw" style="--p:2s"><circle cx="${CX}" cy="${CY}" r="226" fill="#000" opacity="0"/>
  ${[-70,0,70].map(dx=>`<path d="M${CX+dx} ${CY+170-Math.abs(dx)} V${CY-150+Math.abs(dx)}" stroke="#fff" stroke-width="${dx?6:9}" opacity=".85" marker-end="url(#ahw)"/>`).join('')}
</g></g>
 <g class="part" id="dir"><path d="M${P(CX,CY,362,-150).join(' ')} A362 362 0 0 1 ${P(CX,CY,362,-108).join(' ')}" fill="none" stroke="#fff" stroke-width="6" marker-end="url(#ahw)"/>
  <path class="flow" d="M${P(CX,CY,362,-150).join(' ')} A362 362 0 0 1 ${P(CX,CY,362,-112).join(' ')}" fill="none" stroke="#F5B800" stroke-width="3" style="--p:.8s"/></g>`,
 labels:[[985,95,'Stator core',P(CX,CY,300,-40)[0],P(CX,CY,300,-40)[1],'end'],[985,720,'Three-phase winding',P(CX,CY,262,75)[0]+12,P(CX,CY,262,75)[1]+14,'end'],
         [15,560,'Rotor bars',P(CX,CY,185,150)[0],P(CX,CY,185,150)[1]],[15,720,'Shaft',CX-30,CY+36],
         [985,330,'Air gap',P(CX,CY,226,-10)[0],P(CX,CY,226,-10)[1],'end'],[15,240,'Rotation',P(CX,CY,362,-140)[0],P(CX,CY,362,-140)[1]]],
 steps:[['Three stator windings placed <b>120 degrees</b> apart carry three-phase currents and set up a <b>rotating magnetic field</b>.',['stator','winding','field']],
        ['The field cuts the rotor bars and <b>induces an EMF</b>. The end rings short the bars, so <b>current</b> flows.',['rotor']],
        ['The force on the bars gives <b>torque</b>. The rotor follows the field, always slightly slower: the <b>slip</b>.',['rotor','field','dir']]],
 fact:['N<sub>s</sub> = 120 f ÷ P','A 4-pole, 50 Hz motor: 1500 rpm. At 1440 rpm the slip is 0.04.'],
 end:'Construction, synchronous speed, slip, power flow, the torque speed curve, rotor types and starting methods.',
 caption:'How does an induction motor turn without any connection to its rotor? A rotating field, induced current and slip in 22 seconds.',
 tags:['#InductionMotor','#ElectricalEngineering','#ElectricMotor','#EngineeringStudents','#ZentaEngineering']};
})();
