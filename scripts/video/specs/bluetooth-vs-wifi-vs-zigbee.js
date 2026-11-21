// Video spec for /bluetooth-vs-wifi-vs-zigbee/. Facts from the article only.
(()=>{
const bc=[230,250], per=[...Array(7)].map((_,k)=>P(bc[0],bc[1],150,-90+k*360/7));
const ap=[760,270], sta=[160,20,120,60].map(a=>P(ap[0],ap[1],160,a));
const C=[150,620], R1=[360,540], R2=[400,700], R3=[620,610], R4=[820,550], E1=[930,680], E2=[640,722], E3=[235,722];
const L=(a,b)=>`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;
const route=`M${E1}L${R4}L${R3}L${R1}L${C}`.replace(/,/g,' ');
const txt=(x,y,t,s=26)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
BLUE['bluetooth-vs-wifi-vs-zigbee'] = {
 pill:'TELECOM', title:'<em>Bluetooth vs Wi-Fi vs Zigbee</em>: How Each Network Works',
 svg:`<g class="part" id="bt">${per.map(p=>`<path d="${L(bc,p)}" stroke="${TL}" stroke-width="8"/><path class="flow" d="${L(bc,p)}" stroke="#fff" stroke-width="3" style="--p:.9s"/>`).join('')}
  ${per.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="24" fill="${NV}" stroke="${LB}" stroke-width="4"/>`).join('')}
  <g class="pulse"><circle cx="${bc[0]}" cy="${bc[1]}" r="38" fill="${TL}" stroke="${LB}" stroke-width="4"/></g>${txt(bc[0],bc[1]+10,'C',30)}</g>
 <g class="part" id="wifi"><rect x="700" y="70" width="120" height="50" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>${txt(760,105,'LAN',26)}
  <path d="M760 120V235" stroke="${LB}" stroke-width="8"/><path class="flow" d="M760 120V235" stroke="#fff" stroke-width="3" style="--p:.9s"/>
  ${sta.map(p=>`<path d="${L(ap,p)}" stroke="#F5B800" stroke-width="8" opacity=".55"/><path class="flow" d="${L(ap,p)}" stroke="#fff" stroke-width="3" style="--p:.9s"/>`).join('')}
  ${sta.map(p=>`<rect x="${p[0]-30}" y="${p[1]-20}" width="60" height="40" rx="6" fill="${NV}" stroke="${LB}" stroke-width="4"/>`).join('')}
  <rect x="725" y="235" width="70" height="70" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/>${txt(760,279,'AP',26)}</g>
 <g class="part" id="zb"><path d="${[L(C,R1),L(C,R2),L(R1,R2),L(R1,R3),L(R2,R3),L(R3,R4),L(R4,E1),L(R3,E2),L(R2,E3)].join('')}" stroke="${LB}" stroke-width="4" opacity=".6"/>
  <path d="${route}" fill="none" stroke="#ff8a50" stroke-width="9" stroke-linejoin="round" opacity=".6"/><path class="flow" d="${route}" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" style="--p:1.2s"/>
  <circle r="9" fill="#fff"><animateMotion dur="3s" repeatCount="indefinite" path="${route}"/></circle>
  ${[R1,R2,R3,R4].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="28" fill="${NV}" stroke="${LB}" stroke-width="4"/>${txt(p[0],p[1]+9,'R',24)}`).join('')}
  ${[E1,E2,E3].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="20" fill="${NV}" stroke="${LB}" stroke-width="3"/>${txt(p[0],p[1]+8,'E',20)}`).join('')}
  <circle cx="${C[0]}" cy="${C[1]}" r="36" fill="${TL}" stroke="${LB}" stroke-width="4"/>${txt(C[0],C[1]+10,'C',30)}</g>`,
 labels:[[230,445,'Bluetooth central',230,290,'middle'],[30,58,'Peripheral',100,142,'start'],[470,200,'Wi-Fi access point',724,262,'start'],
         [800,180,'Wired uplink',764,175,'start'],[930,480,'Stations',845,432,'middle'],[150,525,'Zigbee coordinator',150,582,'middle'],
         [560,515,'Router',612,580,'middle'],[760,752,'End device',912,692,'start']],
 steps:[['A <b>Bluetooth piconet</b>: one central and up to 7 active peripherals, at 1 to 3 Mbit/s in 2.4 GHz.',['bt']],
        ['<b>Wi-Fi</b> stations join one <b>access point</b>, which bridges the radio to the wired LAN.',['wifi']],
        ['In a <b>Zigbee mesh</b>, routers relay a packet hop by hop to the <b>coordinator</b>, at 250 kbit/s.',['zb']]],
 fact:['62.5 ksymbol/s × 4 bit = 250&nbsp;kbit/s','The IEEE 802.15.4 O-QPSK PHY at 2.4 GHz that Zigbee uses.'],
 end:'Bands, data rates, topology, power, 2.4 GHz coexistence and a path loss worked example.',
 caption:'Bluetooth, Wi-Fi or Zigbee? Piconet, access point star and mesh compared in 22 seconds.',
 tags:['#Bluetooth','#WiFi','#Zigbee','#IoT','#ZentaEngineering']};
})();
