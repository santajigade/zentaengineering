// Video spec for /pid-controller/. Facts from the article only.
BLUE['pid-controller'] = {
 pill:'AUTOMATION', title:'How a <em>PID Controller</em> Works',
 svg:`<g class="part" id="input"><path d="M30 380 H116" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/>
  <path class="flow" d="M30 380 H112" stroke="#fff" stroke-width="3" style="--p:.9s"/></g>
 <g class="part" id="sum1"><circle cx="150" cy="380" r="30" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M138 380 H162 M150 368 V392" stroke="#fff" stroke-width="3" opacity=".5"/>
  <text x="104" y="355" fill="#fff" font-family="Open Sans" font-weight="800" font-size="30">+</text>
  <text x="168" y="448" fill="#fff" font-family="Open Sans" font-weight="800" font-size="34">−</text></g>
 <g class="part" id="err"><path d="M180 380 H230 V210 H274 M230 380 H274 M230 380 V550 H274" fill="none" stroke="${LB}" stroke-width="5"/>
  <path d="M262 198 L278 210 L262 222 Z M262 368 L278 380 L262 392 Z M262 538 L278 550 L262 562 Z" fill="${LB}"/>
  <circle cx="230" cy="380" r="8" fill="#fff"/>
  <path class="flow" d="M180 380 H230 V210 H262 M230 380 H262 M230 380 V550 H262" fill="none" stroke="#fff" stroke-width="3" style="--p:.9s"/></g>
 <g class="part" id="pid">${[['P','Kp·e',210],['I','Ki·∫e dt',380],['D','Kd·de/dt',550]].map(([t,f,y])=>`<rect x="280" y="${y-42}" width="200" height="84" rx="12" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <text x="312" y="${y+13}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="38">${t}</text>
  <text x="408" y="${y+9}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">${f}</text>`).join('')}</g>
 <g class="part" id="sum2"><path d="M480 210 H560 V344 M480 380 H524 M480 550 H560 V416" fill="none" stroke="${LB}" stroke-width="5"/>
  <path d="M548 332 L560 348 L572 332 Z M512 368 L528 380 L512 392 Z M548 428 L560 412 L572 428 Z" fill="${LB}"/>
  <path class="flow" d="M480 210 H560 V332 M480 380 H512 M480 550 H560 V428" fill="none" stroke="#fff" stroke-width="3" style="--p:.9s"/>
  <circle cx="560" cy="380" r="30" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <text x="560" y="393" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="34">Σ</text></g>
 <g class="part" id="plant"><path d="M590 380 H634" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/>
  <path class="flow" d="M590 380 H630" stroke="#fff" stroke-width="3" style="--p:.9s"/>
  <rect x="640" y="320" width="180" height="120" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M665 410 C700 410 705 350 745 350 S790 350 800 350" fill="none" stroke="#fff" stroke-width="4"/>
  <path d="M730 230 V312" stroke="#F5B800" stroke-width="5" marker-end="url(#ah)"/></g>
 <g class="part" id="out"><path d="M820 380 H962" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/>
  <path class="flow" d="M820 380 H958" stroke="#fff" stroke-width="3" style="--p:.9s"/><circle cx="900" cy="380" r="8" fill="#fff"/></g>
 <g class="part" id="fb"><path d="M900 380 V680 H826 M640 680 H150 V416" fill="none" stroke="${LB}" stroke-width="5"/>
  <path d="M838 668 L822 680 L838 692 Z M138 428 L150 412 L162 428 Z" fill="${LB}"/>
  <path class="flow" d="M900 388 V680 H838 M640 680 H150 V428" fill="none" stroke="#fff" stroke-width="3" style="--p:1.4s"/></g>
 <g class="part" id="sensor"><rect x="640" y="640" width="180" height="80" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <g class="pulse"><circle cx="730" cy="680" r="14" fill="#fff"/></g></g>`,
 labels:[[30,330,'Setpoint r',60,378],[256,305,'Error e',256,377,'start'],[380,110,'PID terms',380,166,'middle'],[600,560,'Controller output u',612,382,'start'],[730,200,'Disturbance',730,228,'middle'],[730,480,'Plant',730,442,'middle'],[975,330,'Output y',940,378,'end'],[730,750,'Sensor',730,722,'middle']],
 steps:[['The sensor measures the output y. The summing junction subtracts it from the setpoint: <b>e = r - y</b>.',['sum1','fb','sensor']],
        ['<b>P</b> acts on the present error, <b>I</b> on the accumulated error and <b>D</b> on its rate of change.',['err','pid']],
        ['Their sum is the <b>controller output u</b>. It drives the plant and corrects disturbances.',['sum2','plant','out']]],
 fact:['K<sub>p</sub> = 0.6K<sub>u</sub>, T<sub>i</sub> = P<sub>u</sub>/2','Ziegler-Nichols ultimate gain PID settings, with T<sub>d</sub>&nbsp;=&nbsp;P<sub>u</sub>/8: a starting point aimed at quarter amplitude decay.'],
 end:'The PID equation, Ziegler-Nichols and lambda tuning, windup and a worked example.',
 caption:'How does a PID controller work? Error, proportional, integral and derivative action and Ziegler-Nichols tuning in 22 seconds.',
 tags:['#PIDController','#ControlSystems','#Automation','#EngineeringStudents','#ZentaEngineering']};
