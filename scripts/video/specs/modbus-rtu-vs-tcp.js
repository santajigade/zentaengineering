// Video spec for /modbus-rtu-vs-tcp/. Facts from the article only.
// Top: RTU master polls slaves on a daisy chained RS-485 pair with 120 ohm termination at both ends. Bottom: TCP client to servers through a switch, port 502.
// Requests travel from master/client to the slave/server.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const box=(x,y,w,h,f,s1,s2)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${f}" stroke="${LB}" stroke-width="4"/>${s2?t(x+w/2,y+h/2-4,s1,22)+t(x+w/2,y+h/2+24,s2,20):t(x+w/2,y+h/2+8,s1,22)}`;
const fr=(x,y,cells)=>{let cx=x;return cells.map(([w,s,f])=>{const r=`<rect x="${cx}" y="${y}" width="${w}" height="50" fill="${f}" stroke="${LB}" stroke-width="3"/>${t(cx+w/2,y+33,s,20)}`;cx+=w;return r}).join('')};
BLUE['modbus-rtu-vs-tcp'] = {
 pill:'AUTOMATION', title:'How <em>Modbus RTU and TCP</em> Work',
 svg:`<g class="part" id="rtu">${t(30,60,'Modbus RTU',30,'start')}
  ${box(30,90,170,80,NV,'Master','PLC')}
  <path d="M115 170 V250 M60 250 H940" stroke="${LB}" stroke-width="6" fill="none"/>
  <path class="flow" d="M115 170 V250 H900" stroke="#fff" stroke-width="3" fill="none" style="--p:1.1s"/>
  ${[350,580,810].map((x,i)=>`<path d="M${x} 250 V290" stroke="${LB}" stroke-width="5"/>${box(x-75,290,150,70,TL,'Slave '+(i+1))}`).join('')}
  <rect x="40" y="238" width="22" height="24" fill="#fff"/><rect x="938" y="238" width="22" height="24" fill="#fff"/></g>
 <g class="part" id="rtuframe">${fr(300,105,[[100,'Addr',TL],[80,'FC',NV],[220,'Data',NV],[130,'CRC-16','#e5654f']])}</g>
 <g class="part" id="tcp">${t(30,450,'Modbus TCP',30,'start')}
  ${box(30,480,170,80,NV,'Client','SCADA')}
  <path d="M200 520 H400" stroke="${LB}" stroke-width="6"/><path class="flow" d="M200 520 H400" stroke="#fff" stroke-width="3" style="--p:.6s"/>
  ${box(400,485,140,70,NV,'Switch')}
  <path d="M540 520 H700 M600 520 V665 H700" stroke="${LB}" stroke-width="6" fill="none"/>
  <path class="flow" d="M540 520 H700" stroke="#fff" stroke-width="3" style="--p:.6s"/><path class="flow" d="M600 520 V665 H700" stroke="#fff" stroke-width="3" fill="none" style="--p:.6s"/>
  ${box(700,485,190,70,TL,'Server','port 502')}${box(700,630,190,70,TL,'Server','port 502')}</g>
 <g class="part" id="tcpframe">${fr(30,610,[[230,'MBAP 7 bytes','#e5654f'],[80,'FC',NV],[180,'Data',NV]])}</g>`,
 labels:[[540,215,'RS-485 pair',520,250,'middle'],[930,410,'120 Ω terminators',949,262,'end']],
 steps:[['<b>Modbus RTU</b>: one master polls slaves 1 to 247 over <b>RS-485</b>. Each frame ends in a <b>CRC-16</b>.',['rtu','rtuframe']],
        ['<b>Modbus TCP</b>: a client connects to <b>port 502</b>. A 7 byte <b>MBAP header</b> carries the unit ID; no CRC.',['tcp','tcpframe']],
        ['Both carry the same <b>function codes</b> and data model, such as <b>03</b> Read Holding Registers.',['rtuframe','tcpframe']]],
 fact:['8 × 11 ÷ 9600 = 9.2 ms','RTU request time at 9600 bit/s; the same TCP exchange takes well under a millisecond.'],
 end:'The shared data model, RTU and TCP frames, a byte level example, a comparison table and troubleshooting tips.',
 caption:'Modbus RTU or Modbus TCP? The same function codes, carried over RS-485 or over Ethernet.',
 tags:['#Modbus','#IndustrialNetworks','#Automation','#EngineeringStudents','#ZentaEngineering']};
})();
