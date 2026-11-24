// Video spec for /plc-hardware-selection/. Facts from the article only.
// Modular rack: PSU, CPU, DI, DO, AI, AO. Inputs flow up from sensors and transmitters, outputs flow down to solenoids and drives, CPU Ethernet up to HMI/SCADA.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const mod=(x,w,f,s)=>`<rect x="${x}" y="250" width="${w}" height="210" rx="8" fill="${f}" stroke="${LB}" stroke-width="4"/>${t(x+w/2,370,s,24)}`;
BLUE['plc-hardware-selection'] = {
 pill:'AUTOMATION', title:'How <em>PLC Hardware Selection</em> Works',
 svg:`<g class="part" id="net"><rect x="300" y="40" width="240" height="90" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(420,95,'HMI / SCADA',24)}
  <path d="M290 250 V160 H420 V130" stroke="${LB}" stroke-width="5" fill="none"/><path class="flow" d="M290 250 V160 H420 V134" stroke="#fff" stroke-width="3" fill="none"/></g>
 <g class="part" id="rack"><path d="M60 470 H940" stroke="${LB}" stroke-width="8"/></g>
 <g class="part" id="psu">${mod(70,130,NV,'PSU')}<g class="pulse"><circle cx="135" cy="290" r="10" fill="#F5B800"/></g></g>
 <g class="part" id="cpu">${mod(210,160,TL,'CPU')}<rect x="250" y="410" width="80" height="26" rx="4" fill="#fff" opacity=".85"/></g>
 <g class="part" id="io">${mod(380,130,NV,'DI')}${mod(520,130,NV,'DO')}${mod(660,130,NV,'AI')}${mod(800,130,NV,'AO')}</g>
 <g class="part" id="field">
  <path d="M445 600 V460 M585 460 V600 M725 600 V460 M865 460 V600" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M445 600 V464" stroke="#fff" stroke-width="3"/><path class="flow" d="M585 464 V600" stroke="#fff" stroke-width="3"/>
  <path class="flow" d="M725 600 V464" stroke="#fff" stroke-width="3"/><path class="flow" d="M865 464 V600" stroke="#fff" stroke-width="3"/>
  <circle cx="445" cy="635" r="34" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(445,644,'PNP',20)}
  <rect x="550" y="602" width="70" height="66" rx="6" fill="${TL}" stroke="${LB}" stroke-width="4"/><path d="M560 620 H610 M560 635 H610 M560 650 H610" stroke="#fff" stroke-width="3"/>
  <circle cx="725" cy="635" r="34" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(725,644,'PT',22)}
  <rect x="825" y="602" width="80" height="66" rx="6" fill="${TL}" stroke="${LB}" stroke-width="4"/>${t(865,644,'VFD',22)}</g>`,
 labels:[[300,720,'Sensor',420,660,'start'],[620,730,'Solenoid',585,670,'middle'],[760,215,'4 to 20 mA',725,250,'middle'],[960,730,'Drive',870,670,'end'],[60,190,'24 V DC',125,282,'start']],
 steps:[['Build the <b>I/O list</b>: DI, DO, AI and AO signals, then add <b>10 to 20 percent</b> spare.',['field','io']],
        ['Match <b>I/O modules</b> to each signal, then size the <b>CPU</b> for memory, scan time and communication.',['io','cpu','net']],
        ['Size the <b>power supply</b> from the CPU, module and 24 V DC field loads, with <b>20 to 30 percent</b> margin.',['psu']]],
 fact:['4 DI + 3 DO + 2 AI + 2 AO','11 I/O modules for the pump station example with 20 percent spare on each signal type.'],
 end:'Parts of a PLC system, I/O lists, module types, CPU and power supply sizing, environment checks and a worked example.',
 caption:'How do you choose PLC hardware? I/O list, spare capacity, module types, CPU and power supply in 22 seconds.',
 tags:['#PLC','#IndustrialAutomation','#ControlPanels','#EngineeringStudents','#ZentaEngineering']};
})();
