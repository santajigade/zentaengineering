// Video spec for /automation-robotics/profinet-vs-ethernet-ip/. Facts from the article only.
// Two protocol stacks. Data is sent from the application down to Ethernet (flow downwards).
// PROFINET: cyclic RT/IRT data goes straight to Ethernet (EtherType 0x8892), setup/acyclic via UDP and IP.
// EtherNet/IP: CIP explicit over TCP 44818, implicit I/O over UDP 2222, both over IP and Ethernet.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const box=(x,y,w,h,f,s1,s2)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${f}" stroke="${LB}" stroke-width="4"/>${s2?t(x+w/2,y+h/2-6,s1,22)+t(x+w/2,y+h/2+24,s2,20):t(x+w/2,y+h/2+8,s1,22)}`;
const link=(x,y1,y2,fast)=>`<path d="M${x} ${y1} V${y2}" stroke="${LB}" stroke-width="8"/><path class="flow" d="M${x} ${y1} V${y2}" stroke="#fff" stroke-width="4" style="--p:${fast?'.5s':'1.2s'}"/>`;
BLUE['profinet-vs-ethernet-ip'] = {
 pill:'AUTOMATION', title:'How <em>PROFINET and EtherNet/IP</em> Differ',
 svg:`${t(250,140,'PROFINET',32)}${t(750,140,'EtherNet/IP',32)}
 <g class="part" id="pnapp">${box(30,170,440,80,NV,'PROFINET IO application')}</g>
 <g class="part" id="pnudp">${box(30,290,200,70,NV,'UDP','setup, acyclic')}${box(30,380,200,60,NV,'IP')}
  ${link(130,250,290)}${link(130,360,380)}${link(130,440,480)}</g>
 <g class="part" id="pnrt">${box(260,290,210,150,TL,'RT and IRT','cyclic I/O, no IP')}
  ${link(365,250,290,1)}${link(365,440,480,1)}</g>
 <g class="part" id="pneth">${box(30,480,440,80,NV,'Ethernet','EtherType 0x8892')}${t(250,620,'Cyclic I/O skips the IP layer',24,'middle','#F5B800')}</g>
 <g class="part" id="eiapp">${box(530,170,440,80,NV,'CIP application')}</g>
 <g class="part" id="eitcp">${box(530,290,205,70,NV,'TCP 44818','explicit')}${link(632,250,290)}${link(632,360,380)}</g>
 <g class="part" id="eiudp">${box(765,290,205,70,TL,'UDP 2222','implicit I/O')}${link(867,250,290,1)}${link(867,360,380,1)}</g>
 <g class="part" id="eiip">${box(530,380,440,60,NV,'IP')}${link(632,440,480)}${link(867,440,480,1)}</g>
 <g class="part" id="eieth">${box(530,480,440,80,NV,'Ethernet','IEEE 802.3')}${t(750,620,'All traffic inside TCP or UDP/IP',24,'middle','#F5B800')}</g>`,
 labels:[],
 steps:[['<b>PROFINET</b> puts cyclic I/O straight into Ethernet frames, <b>EtherType 0x8892</b>, with no IP or UDP headers.',['pnrt','pneth']],
        ['<b>EtherNet/IP</b> sends I/O over <b>UDP port 2222</b> and explicit messages over <b>TCP port 44818</b>.',['eitcp','eiudp','eiip']],
        ['For motion, <b>PROFINET IRT</b> runs cycles down to <b>31.25 µs</b>; EtherNet/IP uses CIP Sync, IEEE 1588 time.',['pnrt','eiapp']]],
 fact:['1 ms × 4 = 4 ms','PROFINET update time is send clock × reduction ratio; EtherNet/IP sets an RPI.'],
 end:'Protocol stacks, RT and IRT, CIP messaging, update times, redundancy, safety and a network load example.',
 caption:'PROFINET or EtherNet/IP? Same Ethernet cable, two very different ways of carrying I/O data.',
 tags:['#PROFINET','#EtherNetIP','#IndustrialNetworks','#Automation','#ZentaEngineering']};
})();
