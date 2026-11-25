// Video spec for /automation-robotics/servo-vs-stepper-motor/. Facts from the article only.
// Top: open loop stepper (controller pulses -> driver -> toothed rotor). Bottom: closed loop servo (controller -> servo drive -> motor -> encoder feedback back to the drive).
// Both rotors turn the same way (clockwise); feedback flows from encoder back to the drive.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const box=(x,y,f,s1,s2)=>`<rect x="${x}" y="${y}" width="170" height="90" rx="10" fill="${f}" stroke="${LB}" stroke-width="4"/>${t(x+85,y+(s2?40:54),s1,22)}${s2?t(x+85,y+70,s2,20):''}`;
const teeth=(cx,cy,r,n)=>Array.from({length:n},(_,i)=>{const a=i*360/n;const [x1,y1]=P(cx,cy,r,a),[x2,y2]=P(cx,cy,r+14,a);return `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#fff" stroke-width="9"/>`}).join('');
BLUE['servo-vs-stepper-motor'] = {
 pill:'AUTOMATION', title:'<em>Servo vs Stepper Motor</em>: How Each One Works',
 svg:`<g class="part" id="stepdrive">${t(40,70,'STEPPER',26,'start',LB)}
  ${box(40,110,NV,'Controller')}${box(300,110,NV,'Stepper','driver')}
  <path d="M210 155 H300" stroke="${LB}" stroke-width="5"/><path class="flow" d="M210 155 H296" stroke="#fff" stroke-width="3" marker-end="url(#ahw)" style="--p:.5s"/>
  <path d="M470 140 H605 M470 170 H605" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="stepmotor">${ring(700,155,100,82,TL)}
  <circle cx="700" cy="155" r="58" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <g class="spin-cw" style="--p:4s">${teeth(700,155,54,20)}<circle cx="700" cy="155" r="12" fill="#fff"/><path d="M700 155 L700 105" stroke="#F5B800" stroke-width="6"/></g></g>
 <g class="part" id="servodrive">${t(40,385,'SERVO',26,'start',LB)}
  ${box(40,425,NV,'Controller')}${box(300,425,TL,'Servo','drive')}
  <path d="M210 470 H300" stroke="${LB}" stroke-width="5"/><path class="flow" d="M210 470 H296" stroke="#fff" stroke-width="3" marker-end="url(#ahw)"/>
  <path d="M470 455 H605 M470 485 H605" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="servomotor">${ring(700,470,100,82,TL)}
  <circle cx="700" cy="470" r="64" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <g class="spin-cw" style="--p:1.2s"><circle cx="700" cy="470" r="50" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="30 22"/><circle cx="700" cy="470" r="12" fill="#fff"/></g>
  <path d="M800 470 H840" stroke="${LB}" stroke-width="8"/></g>
 <g class="part" id="encoder"><rect x="840" y="420" width="70" height="100" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(875,478,'ENC',20)}
  <path d="M875 520 V640 H385 V515" fill="none" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M875 520 V640 H385 V519" fill="none" stroke="#fff" stroke-width="3" marker-end="url(#ahw)" style="--p:.8s"/></g>`,
 labels:[[40,300,'Open loop: no feedback',255,155,'start'],[960,300,'1.8° per step',740,120,'end'],[620,710,'Encoder feedback',620,640,'middle']],
 steps:[['A <b>stepper</b> moves a fixed step, commonly <b>1.8°</b>, per pulse, usually in <b>open loop</b>.',['stepdrive','stepmotor']],
        ['A <b>servo drive</b> compares the command with <b>encoder</b> feedback and corrects the motor in a closed loop.',['servodrive','servomotor','encoder']],
        ['Stepper torque <b>falls as speed rises</b>. A servo keeps near constant torque up to rated speed.',['stepmotor','servomotor']]],
 fact:['P = T × 2πN ÷ 60','An axis needing 2 N·m at 3000 rpm needs about 630 W of servo power.'],
 end:'How each motor works, open and closed loop control, torque and speed, a comparison table and how to choose.',
 caption:'Servo or stepper? Open loop steps versus closed loop encoder feedback, explained in 20 seconds.',
 tags:['#ServoMotor','#StepperMotor','#MotionControl','#EngineeringStudents','#ZentaEngineering']};
})();
