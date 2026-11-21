// Video spec for /turbojet-vs-turbofan-vs-turboprop/. Facts from the article only.
// Three side view schematics, air flows left (intake) to right (exhaust). The disc at the left of each row is the
// front view of the rotating part (compressor face, fan, propeller), spun on an inner group.
(()=>{
const HOT='#ff9d3d', BR='#c98a3a';
const blades=(x0,dx,n,cy,h0,dh)=>Array.from({length:n},(_,k)=>{const x=x0+k*dx,h=h0-k*dh;return `<path d="M${x} ${cy-h}V${cy+h}" stroke="#fff" stroke-width="4"/>`}).join('');
// side view core: compressor, combustor, turbine between x1 and x4, half height hh, centreline cy
const core=(cy,hh,c1,c2,b2,t2)=>`<rect x="${c1}" y="${cy-hh}" width="${c2-c1}" height="${2*hh}" fill="${TL}" opacity=".6"/>
  ${blades(c1+10,(c2-c1-20)/7,8,cy,hh-3,1.6)}
  <rect x="${c2+8}" y="${cy-hh}" width="${b2-c2-16}" height="${2*hh}" fill="${BR}" opacity=".7"/>
  <ellipse class="pulse" cx="${(c2+b2)/2}" cy="${cy}" rx="${(b2-c2)/2-16}" ry="${hh*.45}" fill="#F5B800" opacity=".9"/>
  <rect x="${b2}" y="${cy-hh}" width="${t2-b2}" height="${2*hh}" fill="${TL}" opacity=".6"/>
  ${blades(b2+10,(t2-b2-20)/3,4,cy,hh-3,-1)}
  <path d="M${c1} ${cy}H${t2}" stroke="${LB}" stroke-width="5"/>`;
const front=(cx,cy,r,n,w,inner,p)=>`<g class="spin-cw" style="--p:${p}"><circle cx="${cx}" cy="${cy}" r="${r}" fill="none"/>
  ${Array.from({length:n},(_,k)=>{const a=k*360/n,[x1,y1]=P(cx,cy,inner,a),[x2,y2]=P(cx,cy,r,a+8);return `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#fff" stroke-width="${w}" stroke-linecap="round"/>`}).join('')}</g>`;
const name=(x,y,t)=>`<text x="${x}" y="${y}" fill="#fff" font-family="Open Sans" font-weight="800" font-size="30">${t}</text>`;
BLUE['turbojet-vs-turbofan-vs-turboprop'] = {
 pill:'AEROSPACE', title:'How <em>Turbojet, Turbofan and Turboprop</em> Engines Differ',
 svg:`<g class="part" id="names">${name(20,62,'Turbojet')}${name(20,258,'Turbofan')}${name(20,530,'Turboprop')}</g>
 <g class="part" id="tjdisc"><circle cx="100" cy="130" r="40" fill="${NV}" stroke="${LB}" stroke-width="4"/>${front(100,130,34,12,4,10,'1s')}<circle cx="100" cy="130" r="9" fill="${LB}"/></g>
 <g class="part" id="tj"><path d="M230 92H680L790 112V148L680 168H230Z" fill="${NV}" stroke="${LB}" stroke-width="3"/>${core(130,30,250,440,560,650)}</g>
 <g class="part" id="tjflow"><path class="flow" d="M150 112H226" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:.6s"/><path class="flow" d="M150 148H226" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:.6s"/>
  <path class="flow" d="M795 130H975" stroke="${HOT}" stroke-width="12" marker-end="url(#ah)" style="--p:.3s"/></g>
 <g class="part" id="tfdisc"><circle cx="100" cy="370" r="90" fill="${NV}" stroke="${LB}" stroke-width="6"/>${front(100,370,82,18,6,22,'2.4s')}<circle cx="100" cy="370" r="20" fill="${LB}"/></g>
 <g class="part" id="tf"><path d="M232 284L250 268H660L728 290L660 286H250Z" fill="${TL}" stroke="${LB}" stroke-width="3"/><path d="M232 456L250 472H660L728 450L660 454H250Z" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M310 328H660L780 350V390L660 412H310Z" fill="${NV}" stroke="${LB}" stroke-width="3"/>${core(370,32,322,470,565,650)}
  <path d="M268 290V450" stroke="#fff" stroke-width="9" stroke-linecap="round"/><path d="M248 370Q254 344 286 340V400Q254 396 248 370Z" fill="${LB}"/><path d="M286 370H322" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="tfflow"><path class="flow" d="M195 306H975" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:.9s"/><path class="flow" d="M195 434H975" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:.9s"/>
  <path class="flow" d="M785 370H975" stroke="${HOT}" stroke-width="9" marker-end="url(#ah)" style="--p:.35s"/></g>
 <g class="part" id="tpdisc"><circle cx="100" cy="640" r="85" fill="${LB}" opacity=".12" stroke="${LB}" stroke-width="2" stroke-dasharray="6 8"/>
  <g class="spin-cw" style="--p:.9s"><circle cx="100" cy="640" r="84" fill="none"/>${[0,90,180,270].map(a=>`<ellipse cx="100" cy="596" rx="11" ry="40" fill="#fff" transform="rotate(${a} 100 640)"/>`).join('')}</g><circle cx="100" cy="640" r="15" fill="${LB}"/></g>
 <g class="part" id="tp"><path d="M330 600H660L760 620V660L660 680H330Z" fill="${NV}" stroke="${LB}" stroke-width="3"/>${core(640,32,342,480,570,650)}
  <path d="M258 640H342" stroke="${LB}" stroke-width="5"/><rect x="266" y="616" width="56" height="48" rx="6" fill="${BR}" stroke="${LB}" stroke-width="3"/>
  ${[280,294,308].map(x=>`<path d="M${x} 622V658" stroke="#fff" stroke-width="3"/>`).join('')}
  <path d="M240 548V732" stroke="#fff" stroke-width="10" stroke-linecap="round"/><path d="M222 640Q228 614 258 612V668Q228 666 222 640Z" fill="${LB}"/></g>
 <g class="part" id="tpflow"><path class="flow" d="M195 575H975" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:1.2s"/><path class="flow" d="M195 705H975" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:1.2s"/>
  <path class="flow" d="M765 640H850" stroke="${HOT}" stroke-width="6" marker-end="url(#ah)" style="--p:.5s"/></g>`,
 labels:[[330,62,'Compressor',330,104,'middle'],[500,62,'Combustor',500,112,'middle'],[660,62,'Turbine',612,104,'middle'],[985,62,'Fast hot jet',870,130,'end'],
  [330,250,'Fan',268,296],[985,525,'Bypass air',900,436,'end'],[300,530,'Reduction gearbox',294,616],[420,752,'Propeller',243,718]],
 steps:[['A <b>turbojet</b> sends all air through the core and gets all its thrust from a <b>fast hot jet</b>.',['tj','tjflow','tjdisc']],
        ['A <b>turbofan</b> adds a large fan whose <b>bypass air</b> flows around the core and gives most of the thrust.',['tf','tfflow','tfdisc']],
        ['A <b>turboprop</b> turbine drives a <b>propeller</b> through a reduction gearbox; the exhaust adds a little thrust.',['tp','tpflow','tpdisc']]],
 fact:['η<sub>p</sub> = 2 / (1 + v<sub>e</sub>/v<sub>0</sub>)','Accelerating a large mass of air a little beats a small mass a lot.'],
 end:'The Brayton cycle, thrust, propulsive efficiency, bypass ratio, speed range and a thrust example.',
 caption:'Turbojet, turbofan or turboprop? How each gas turbine makes thrust and why moving more air gently saves fuel.',
 tags:['#JetEngine','#AerospaceEngineering','#Turbofan','#Propulsion','#ZentaEngineering']};
})();
