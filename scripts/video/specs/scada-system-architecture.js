// Video spec for /automation-robotics/scada-system-architecture/. Facts from the article only.
// Layers: field devices -> RTU and PLC at remote sites -> communication network (radio, fibre) -> control centre (SCADA server, HMI, historian).
// Data flows up from the field; operator commands flow back down on the second line.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
BLUE['scada-system-architecture'] = {
 pill:'AUTOMATION', title:'How <em>SCADA System Architecture</em> Works',
 svg:`<g class="part" id="centre"><rect x="40" y="20" width="920" height="170" rx="14" fill="none" stroke="${LB}" stroke-width="4" stroke-dasharray="14 8"/>
  <rect x="80" y="45" width="190" height="120" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M100 75 H250 M100 105 H250 M100 135 H250" stroke="${LB}" stroke-width="4"/><circle cx="235" cy="75" r="6" fill="#F5B800"/>
  ${t(175,158,'SCADA server',20)}
  <rect x="400" y="45" width="200" height="110" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/><rect x="418" y="60" width="164" height="62" rx="4" fill="${TL}" opacity=".6"/>
  <path d="M425 110 L470 88 L510 100 L570 70" fill="none" stroke="#fff" stroke-width="4"/>${t(500,146,'HMI',22)}
  <ellipse cx="820" cy="62" rx="80" ry="20" fill="${TL}" stroke="${LB}" stroke-width="4"/><path d="M740 62 V140 A80 20 0 0 0 900 140 V62" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  ${t(820,128,'Historian',22)}
  <path d="M270 105 H400 M600 100 H740" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="net">
  <path d="M175 165 V250 H825" fill="none" stroke="${LB}" stroke-width="6"/>
  <path class="flow" d="M825 262 H185 V170" fill="none" stroke="#fff" stroke-width="3" style="--p:1.1s"/>
  <path d="M500 250 V300 M470 330 L500 300 L530 330 M480 315 H520" stroke="${LB}" stroke-width="5" fill="none"/>
  <g class="pulse"><path d="M455 290 A50 50 0 0 1 455 230 M545 230 A50 50 0 0 1 545 290" fill="none" stroke="#F5B800" stroke-width="4"/></g>
  <path d="M210 250 V380 M790 250 V380" stroke="${LB}" stroke-width="6"/>
  <path class="flow" d="M222 380 V262" stroke="#fff" stroke-width="3" style="--p:.9s"/><path class="flow" d="M802 380 V262" stroke="#fff" stroke-width="3" style="--p:.9s"/></g>
 <g class="part" id="ctrl">
  <rect x="110" y="380" width="220" height="110" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(220,430,'RTU',28)}${t(220,465,'Remote site',20)}
  <rect x="690" y="380" width="220" height="110" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(800,430,'PLC',28)}${t(800,465,'Plant',20)}</g>
 <g class="part" id="field">
  <path d="M170 490 V560 M270 490 V624 M750 490 V560 M850 490 V600" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M180 560 V494" stroke="#fff" stroke-width="3"/><path class="flow" d="M760 494 V560" stroke="#fff" stroke-width="3"/><path class="flow" d="M862 598 V494" stroke="#fff" stroke-width="3"/><path class="flow" d="M282 494 V624" stroke="#fff" stroke-width="3"/>
  <rect x="80" y="560" width="140" height="150" rx="6" fill="none" stroke="${LB}" stroke-width="4"/><rect x="84" y="610" width="132" height="96" fill="${TL}" opacity=".55"/>
  <circle cx="170" cy="560" r="22" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(170,568,'LT',18)}
  <path d="M216 690 H240" stroke="${LB}" stroke-width="8"/>
  <circle cx="270" cy="660" r="36" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <g class="spin-cw" style="--p:1.6s"><path d="M270 630 V690 M240 660 H300" stroke="#fff" stroke-width="5"/></g>
  <path d="M306 660 H400" stroke="${LB}" stroke-width="8"/><path class="flow" d="M306 660 H400" stroke="#fff" stroke-width="3"/>
  <path d="M600 670 H690 M810 670 H940" stroke="${LB}" stroke-width="8"/><path class="flow" d="M600 670 H940" stroke="#fff" stroke-width="3" style="--p:1.3s"/>
  <path d="M690 640 L750 670 L690 700 Z M810 640 L750 670 L810 700 Z" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M750 560 V670 M725 560 H775" stroke="${LB}" stroke-width="5"/>
  <circle cx="850" cy="620" r="22" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(850,628,'PT',18)}<path d="M850 642 V670" stroke="${LB}" stroke-width="4"/></g>`,
 labels:[[600,370,'Radio, fibre, cellular',530,300,'middle'],[400,590,'Pump',300,645,'start'],[600,745,'Valve',720,690,'end'],[40,740,'Tank level',120,640,'start']],
 steps:[['Field <b>sensors and actuators</b> connect to local <b>PLCs and RTUs</b>, which keep control running on site.',['field','ctrl']],
        ['A <b>communication network</b> links remote sites using Modbus, <b>DNP3</b> or IEC 60870-5-104.',['net']],
        ['<b>SCADA servers</b> poll every site, update the <b>HMI</b>, check alarms and write data to the <b>historian</b>.',['centre']]],
 fact:['Report by exception','The RTU sends a value only when it changes by more than a set deadband.'],
 end:'SCADA layers, protocols, generations, redundancy, security, data flow and how SCADA differs from a DCS.',
 caption:'How does one control room run a whole pipeline or water network? SCADA system architecture, layer by layer.',
 tags:['#SCADA','#IndustrialAutomation','#RTU','#EngineeringStudents','#ZentaEngineering']};
})();
