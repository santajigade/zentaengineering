// Video spec for /dcs-architecture/. Facts from the article only.
// Field transmitter -> I/O -> redundant controller pair -> I/O -> control valve; redundant network up to operator, engineering and historian.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const mon=(x,n1)=>`<rect x="${x}" y="40" width="220" height="120" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/><rect x="${x+20}" y="58" width="180" height="60" rx="4" fill="${TL}" opacity=".55"/>${t(x+110,148,n1,22)}`;
BLUE['dcs-architecture'] = {
 pill:'AUTOMATION', title:'How <em>DCS Architecture</em> Works',
 svg:`<g class="part" id="stations">${mon(50,'Operator')}${mon(390,'Engineering')}${mon(730,'Historian')}
  <path d="M160 160 V214 M500 160 V214 M840 160 V214" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="net"><path d="M40 220 H960" stroke="${LB}" stroke-width="7"/><path d="M40 252 H960" stroke="${LB}" stroke-width="7"/>
  <path class="flow" d="M40 220 H960" stroke="#fff" stroke-width="3" style="--p:1.1s"/><path class="flow" d="M960 252 H40" stroke="#fff" stroke-width="3" style="--p:1.1s"/>
  <path d="M260 258 V300 M300 214 V300 M700 258 V300 M740 214 V300" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="ctrl">
  <rect x="150" y="300" width="130" height="96" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/><rect x="290" y="300" width="130" height="96" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${t(215,346,'Primary',22)}${t(215,374,'PID',22)}${t(355,346,'Standby',22)}${t(355,374,'tracks',22)}
  <rect x="590" y="300" width="130" height="96" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/><rect x="730" y="300" width="130" height="96" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${t(655,346,'Primary',22)}${t(655,374,'PID',22)}${t(795,346,'Standby',22)}${t(795,374,'tracks',22)}
  <path d="M280 330 H290 M720 330 H730" stroke="#fff" stroke-width="4"/></g>
 <g class="part" id="io"><rect x="150" y="460" width="270" height="70" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(285,505,'I/O modules',24)}
  <rect x="590" y="460" width="270" height="70" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(725,505,'I/O modules',24)}
  <path d="M285 396 V460 M725 396 V460" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M285 460 V396" stroke="#fff" stroke-width="3" style="--p:.9s"/><path class="flow" d="M725 396 V460" stroke="#fff" stroke-width="3" style="--p:.9s"/></g>
 <g class="part" id="field">
  <path d="M285 530 V610 M725 530 V600" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M285 610 V530" stroke="#fff" stroke-width="3" style="--p:.9s"/><path class="flow" d="M725 530 V600" stroke="#fff" stroke-width="3" style="--p:.9s"/>
  <circle cx="285" cy="645" r="36" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(285,654,'LT',24)}
  <path d="M665 640 L725 670 L665 700 Z M785 640 L725 670 L785 700 Z" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M725 600 V670 M700 600 H750" stroke="${LB}" stroke-width="5"/>
  <path d="M560 670 H665 M785 670 H900" stroke="${LB}" stroke-width="8"/><path class="flow" d="M560 670 H900" stroke="#fff" stroke-width="3" style="--p:1.3s"/></g>`,
 labels:[[60,600,'4 to 20 mA',282,580,'start'],[505,445,'Redundant pair',588,380,'middle'],[930,620,'Control valve',785,660,'end'],[182,204,'Control network',200,220,'start']],
 steps:[['Field <b>transmitters</b> send 4 to 20 mA signals to <b>I/O modules</b>, which convert them for the controller.',['field','io']],
        ['Redundant <b>controller pairs</b> run PID <b>function blocks</b>. The standby takes over if the primary fails.',['ctrl']],
        ['A redundant <b>control network</b> links controllers to <b>operator stations</b>, engineering and the historian.',['net','stations']]],
 fact:['620 × 1.2 = 744 I/O points','Two redundant controller pairs rated up to 500 I/O each, in the worked sizing example.'],
 end:'DCS layers, redundancy, function blocks, alarm management, DCS vs PLC and SCADA and a controller sizing example.',
 caption:'What is inside a distributed control system? Field I/O, redundant controllers, the control network and operator stations.',
 tags:['#DCS','#ProcessControl','#Automation','#EngineeringStudents','#ZentaEngineering']};
})();
