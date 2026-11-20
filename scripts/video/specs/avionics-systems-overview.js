// Video spec for /avionics-systems-overview/. Facts from the article only.
BLUE['avionics-systems-overview'] = {
 pill:'AEROSPACE', title:'How <em>Avionics Systems</em> Work',
 svg:`<g class="part" id="sensors">
  <rect x="70" y="110" width="200" height="120" rx="12" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <path d="M110 160 H215 V200" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round"/><path d="M215 200 H245" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M80 160 H112" stroke="${LB}" stroke-width="4" marker-end="url(#ah)" style="--p:.8s"/>
  <rect x="70" y="320" width="200" height="120" rx="12" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${ring(170,380,42,32,TL)}<path class="flow" d="M146 380 A24 24 0 1 1 194 380 A24 24 0 1 1 146 380" fill="none" stroke="#fff" stroke-width="3" style="--p:.8s"/><circle cx="170" cy="380" r="6" fill="#fff"/>
  <rect x="70" y="530" width="200" height="120" rx="12" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <path d="M135 625 A35 35 0 0 1 205 625 Z" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <g class="pulse"><path d="M140 585 A45 45 0 0 1 200 585 M125 565 A65 65 0 0 1 215 565" fill="none" stroke="#fff" stroke-width="3"/></g></g>
 <g class="part" id="bus"><path d="M360 170 V590" stroke="${LB}" stroke-width="8"/><path d="M270 170 H360 M270 380 H470 M270 590 H360" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M270 170 H360 V380 H470" fill="none" stroke="#fff" stroke-width="4" style="--p:.9s"/><path class="flow" d="M270 380 H470" stroke="#fff" stroke-width="4" style="--p:.9s"/><path class="flow" d="M270 590 H360 V380 H470" fill="none" stroke="#fff" stroke-width="4" style="--p:.9s"/></g>
 <g class="part" id="fms"><rect x="470" y="290" width="190" height="180" rx="12" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="495" y="310" width="140" height="70" rx="4" fill="${TL}"/>
  ${[0,1,2].map(r=>[0,1,2,3].map(c=>`<rect x="${497+c*36}" y="${395+r*24}" width="26" height="16" rx="3" fill="${LB}" opacity=".7"/>`).join('')).join('')}</g>
 <g class="part" id="out"><path d="M660 330 H720 V170 H760 M660 380 H760 M660 430 H720 V580 H760" fill="none" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M660 330 H720 V170 H760" fill="none" stroke="#fff" stroke-width="4" style="--p:.9s"/><path class="flow" d="M660 380 H760" stroke="#fff" stroke-width="4" style="--p:.9s"/><path class="flow" d="M660 430 H720 V580 H760" fill="none" stroke="#fff" stroke-width="4" style="--p:.9s"/></g>
 <g class="part" id="displays"><rect x="760" y="100" width="190" height="140" rx="12" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <clipPath id="adi"><circle cx="855" cy="170" r="50"/></clipPath><g clip-path="url(#adi)"><rect x="795" y="110" width="120" height="60" fill="#2f7fc1"/><rect x="795" y="170" width="120" height="60" fill="#8a5a2b"/></g>
  <circle cx="855" cy="170" r="50" fill="none" stroke="${LB}" stroke-width="3"/><path d="M825 170 H845 M865 170 H885" stroke="#F5B800" stroke-width="5"/>
  <rect x="760" y="310" width="190" height="140" rx="12" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <path d="M800 430 L830 380 L880 360 L915 325" fill="none" stroke="#e85cf0" stroke-width="4"/><path d="M855 420 l-12 22 h24 Z" fill="#fff"/></g>
 <g class="part" id="ap"><rect x="760" y="520" width="190" height="120" rx="12" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${['AP','A/T'].map((t,i)=>`<rect x="${785+i*80}" y="560" width="62" height="40" rx="6" fill="${TL}"/><text x="${816+i*80}" y="589" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="20">${t}</text>`).join('')}</g>`,
 labels:[[170,80,'Air data computer',170,108,'middle'],[170,295,'Inertial reference',170,318,'middle'],[170,505,'GNSS receiver',170,528,'middle'],[380,250,'Data bus',362,300],[565,530,'Flight management',565,472,'middle'],[855,75,'Primary flight display',855,98,'middle'],[855,290,'Navigation display',855,308,'middle'],[855,690,'Autopilot',855,642,'middle']],
 steps:[['<b>Air data</b>, <b>inertial</b> and <b>GNSS</b> sensors measure airspeed, altitude, attitude and position.',['sensors']],
        ['Data buses such as <b>ARINC 429</b> and <b>AFDX</b> carry the data to the <b>flight management system</b>.',['bus','fms']],
        ['The FMS guides the <b>autopilot</b>, and the <b>PFD and ND</b> show the crew attitude, route and traffic.',['out','displays','ap']]],
 fact:['P<sub>system</sub> ≈ P<sub>1</sub> × P<sub>2</sub> × … × P<sub>n</sub>','Independent redundant channels help meet the target of less than about 10⁻⁹ per flight hour.'],
 end:'Displays, radios, navigation, surveillance, fly by wire, data buses and certification.',
 caption:'How do aircraft avionics fit together? Sensors, data buses, the FMS, displays and autopilot in 22 seconds.',
 tags:['#Avionics','#AerospaceEngineering','#Aviation','#EngineeringStudents','#ZentaEngineering']};
