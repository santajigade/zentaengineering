// Video spec for /mppt-explained/. Facts from the article only.
// Left: I-V and P-V curves of a PV module (single diode shape, Vmp about 0.8 Voc) with the MPP. Right: PV, DC-DC converter, battery, MPPT controller.
BLUE['mppt-explained'] = {
 pill:'RENEWABLE', title:'How <em>MPPT</em> Works',
 svg:`<g class="part" id="curves"><path d="M60 80 V460 H500" fill="none" stroke="${LB}" stroke-width="4"/>
  <path d="M60 120 L100 120 L140 120 L180 120 L220 120 L260 121 L300 123 L320 125 L330 127 L340 129 L350 132 L360 136 L370 141 L380 149 L390 158 L400 171 L410 189 L420 213 L430 244 L440 287 L450 344 L460 420 V460" fill="none" stroke="${LB}" stroke-width="6"/>
  <path d="M60 460 V420 L100 388 L140 356 L180 325 L220 293 L260 262 L300 231 L320 217 L330 210 L340 204 L350 199 L360 194 L370 191 L380 190 L390 191 L400 196 L410 206 L420 222 L430 248 L440 286 L450 341 L460 420 V460" fill="none" stroke="#e5654f" stroke-width="6"/>
  <text x="200" y="505" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">Panel voltage</text>
  <text x="460" y="490" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="22">Voc</text>
  <text x="48" y="128" text-anchor="end" fill="#fff" font-family="Open Sans" font-weight="700" font-size="22">Isc</text></g>
 <g class="part" id="mpp"><path d="M380 190 V460" stroke="#fff" stroke-width="3" stroke-dasharray="8 8"/>
  <text x="380" y="490" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="22">Vmp</text>
  <g class="pulse"><circle cx="380" cy="190" r="14" fill="#F5B800" stroke="#fff" stroke-width="3"/></g></g>
 <g class="part" id="pv"><g class="pulse"><circle cx="680" cy="60" r="26" fill="#F5B800"/></g>
  <rect x="600" y="110" width="160" height="90" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[640,680,720].map(x=>`<path d="M${x} 110 V200" stroke="${LB}" stroke-width="2"/>`).join('')}<path d="M600 155 H760" stroke="${LB}" stroke-width="2"/></g>
 <g class="part" id="conv"><rect x="600" y="310" width="160" height="90" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <text x="680" y="350" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">DC-DC</text>
  <text x="680" y="380" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="22">converter</text></g>
 <g class="part" id="batt"><rect x="600" y="520" width="160" height="90" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="655" y="508" width="50" height="12" fill="${LB}"/>
  <text x="680" y="575" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">Battery</text></g>
 <g class="part" id="power"><path d="M680 200 V304 M680 400 V514" stroke="${LB}" stroke-width="7"/>
  <path class="flow" d="M680 200 V304 M680 400 V514" stroke="#fff" stroke-width="4" style="--p:.8s"/></g>
 <g class="part" id="ctrl"><rect x="820" y="310" width="160" height="90" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <text x="900" y="350" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">MPPT</text>
  <text x="900" y="380" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="22">controller</text>
  <path d="M820 355 H772" stroke="#F5B800" stroke-width="5" marker-end="url(#ah)"/></g>
 <g class="part" id="sense"><path d="M680 250 H900 V304" fill="none" stroke="${LB}" stroke-width="4" stroke-dasharray="10 8"/>
  <path class="flow" d="M680 250 H900 V300" fill="none" stroke="#fff" stroke-width="2" style="--p:1s"/></g>`,
 labels:[[150,100,'I-V curve',160,121],[75,250,'P-V curve',200,333,'start'],[250,175,'MPP',368,186],[790,235,'V and I',830,250],[770,450,'Duty cycle D',796,360,'start'],[780,165,'PV array',762,155,'start']],
 steps:[['Panel power <b>P = V × I</b> peaks at the <b>maximum power point</b>, near the knee of the I-V curve.',['curves','mpp']],
        ['The <b>MPPT controller</b> measures <b>V and I</b> and sets the <b>duty cycle D</b> of the DC-DC converter.',['ctrl','sense','conv']],
        ['<b>Perturb and observe</b> steps the voltage, keeps going if power rises and reverses if it falls.',['mpp','pv','power']]],
 fact:['dI/dV = −I/V at the MPP','The incremental conductance condition, from setting dP/dV to zero.'],
 end:'The maximum power point, P&amp;O and incremental conductance, shading, and a PWM vs MPPT charging example.',
 caption:'What does MPPT do in a solar inverter or charge controller? The maximum power point and how trackers find it in 22 seconds.',
 tags:['#MPPT','#SolarPV','#RenewableEnergy','#EngineeringStudents','#ZentaEngineering']};
