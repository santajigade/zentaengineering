// Video spec for /rehabilitation-exoskeletons/. Facts from the article only.
BLUE['rehabilitation-exoskeletons'] = {
 pill:'BIOMEDICAL', title:'How a Rehabilitation <em>Exoskeleton</em> Works',
 svg:`<g class="part" id="leg"><path d="M300 200 L340 420 L322 640" fill="none" stroke="${LB}" stroke-width="70" stroke-linecap="round" stroke-linejoin="round" opacity=".18"/>
  <path d="M300 200 L340 420 L322 640" fill="none" stroke="${TL}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="290" y="290" width="62" height="24" rx="6" fill="${NV}" stroke="${LB}" stroke-width="3" transform="rotate(-10 321 302)"/>
  <rect x="300" y="520" width="62" height="24" rx="6" fill="${NV}" stroke="${LB}" stroke-width="3" transform="rotate(5 331 532)"/>
  <path d="M260 650 H440" stroke="${LB}" stroke-width="12" stroke-linecap="round"/></g>
 <g class="part" id="battery"><rect x="190" y="70" width="90" height="110" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/><rect x="214" y="58" width="42" height="12" rx="3" fill="${LB}"/>
  <path d="M260 180 L285 196" stroke="${LB}" stroke-width="6"/></g>
 <g class="part" id="hip"><circle cx="300" cy="200" r="38" fill="${NV}" stroke="${LB}" stroke-width="5"/><g class="spin-cw" style="--p:1.6s"><path d="M300 172 V228 M272 200 H328" stroke="#fff" stroke-width="5"/></g></g>
 <g class="part" id="knee"><circle cx="340" cy="420" r="38" fill="${NV}" stroke="${LB}" stroke-width="5"/><g class="spin-cw" style="--p:1.6s"><path d="M340 392 V448 M312 420 H368" stroke="#fff" stroke-width="5"/></g></g>
 <g class="part" id="imu"><rect class="pulse" x="350" y="478" width="40" height="30" rx="5" fill="#F5B800"/></g>
 <g class="part" id="foot"><rect class="pulse" x="285" y="664" width="130" height="14" rx="4" fill="#F5B800"/></g>
 <g class="part" id="blocks">${[['Motor drivers',150],['Controller',360],['Sensors',570]].map(([t,y])=>`<rect x="620" y="${y-45}" width="300" height="90" rx="14" fill="${t==='Controller'?TL:NV}" stroke="${LB}" stroke-width="4"/>
  <text x="770" y="${y+11}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="32">${t}</text>`).join('')}
  <path d="M770 525 V418" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/><path d="M770 315 V208" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/>
  <path class="flow" d="M770 525 V420 M770 315 V210" stroke="#fff" stroke-width="3" style="--p:.9s"/></g>
 <g class="part" id="power"><path d="M620 150 H520 V420 H378 M520 200 H338" fill="none" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M620 150 H520 V420 H380 M520 150 V200 H340" fill="none" stroke="#fff" stroke-width="3" style="--p:1s"/></g>
 <g class="part" id="signals"><path d="M415 671 H560 V600 H620 M390 493 H560 V600" fill="none" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M415 671 H560 V600 H618 M390 493 H560 V600" fill="none" stroke="#fff" stroke-width="3" style="--p:1s"/></g>`,
 labels:[[150,40,'Battery',192,90,'middle'],[240,206,'Hip actuator',262,202,'end'],[280,426,'Knee actuator',302,422,'end'],[278,540,'Cuff',300,534,'end'],[470,462,'IMU',388,482,'middle'],[340,740,'Foot pressure sensor',340,680,'middle'],[450,105,'Motor power',520,148,'middle']],
 steps:[['Sensors measure <b>joint angle</b>, <b>foot loading</b> and <b>trunk tilt</b> using encoders, foot pressure sensors and IMUs.',['signals','foot','imu']],
        ['The <b>controller</b> works out which gait phase the leg is in and the <b>assist torque</b> each joint needs.',['blocks']],
        ['<b>Motor drivers</b> set the motor current, and the <b>hip and knee actuators</b> apply torque through the cuffs.',['power','hip','knee']]],
 fact:['τ = F × r, &nbsp;P = τ × ω','1200 N at a 0.05 m moment arm gives 60 N·m at the knee; at 1.5 rad/s that is 90 W.'],
 end:'Frame, actuators, sensors, control strategies, joint torque and power, safety standards and a worked example.',
 caption:'How does a rehabilitation exoskeleton help people walk again? Sensors, controller and hip and knee actuators explained in 22 seconds.',
 tags:['#Exoskeleton','#BiomedicalEngineering','#Rehabilitation','#Robotics','#ZentaEngineering']};
