// Video spec for /tractor-power-transmission/. Facts from the article only.
// Plan view, front at the top: engine, clutch, gearbox, bevel pinion and crown wheel with differential,
// half shafts, final drives and rear wheels; the PTO shaft leaves at the rear. Power flows from the engine to the wheels and PTO.
(()=>{
const txt=(x,y,t,s=24)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const shaft=(d,p='1s')=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="12"/><path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="4" style="--p:${p}"/>`;
const lugs=(x0,x1)=>{let s='';for(let y=440;y<=630;y+=24)s+=`M${x0} ${y}L${x1} ${y+12}`;return s;};
BLUE['tractor-power-transmission'] = {
 pill:'AGRICULTURAL', title:'How <em>Tractor Power Transmission</em> Works',
 svg:`<g class="part" id="engine"><rect x="400" y="40" width="200" height="160" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[0,1,2,3].map(i=>`<circle cx="${440+i*40}" cy="100" r="15" fill="${TL}" stroke="${LB}" stroke-width="3"/>`).join('')}${txt(500,168,'Diesel engine',24)}</g>
 <g class="part" id="clutch">${shaft('M500 200 V222','.8s')}<rect x="430" y="222" width="140" height="22" rx="4" fill="${TL}" stroke="${LB}" stroke-width="3"/><rect x="430" y="250" width="140" height="22" rx="4" fill="${TL}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="gearbox">${shaft('M500 272 V300','.8s')}<rect x="400" y="300" width="200" height="150" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M500 305 V445 M555 318 V432" stroke="${LB}" stroke-width="6"/>
  ${[[340,30,80],[378,55,55],[416,80,30]].map(([y,a,b])=>`<rect x="${500-a/2}" y="${y-8}" width="${a}" height="16" rx="3" fill="#fff"/><rect x="${555-b/2}" y="${y-8}" width="${b}" height="16" rx="3" fill="${TL}" stroke="${LB}" stroke-width="2"/>`).join('')}</g>
 <g class="part" id="bevel">${shaft('M500 450 V488','.8s')}<circle cx="500" cy="545" r="58" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="455" y="500" width="14" height="90" rx="3" fill="#F5B800"/><path d="M486 490 H514 L508 506 H492 Z" fill="#fff"/>
  ${[525,505].map((y,i)=>`<circle cx="${500}" cy="${y+i*40}" r="10" fill="${TL}" stroke="#fff" stroke-width="3"/>`).join('')}</g>
 <g class="part" id="axle">${shaft('M442 545 H232','1s')}${shaft('M558 545 H768','1s')}</g>
 <g class="part" id="final">${[200,800].map(x=>`<rect x="${x-32}" y="495" width="64" height="100" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/><circle cx="${x}" cy="545" r="22" fill="${NV}" stroke="#fff" stroke-width="3"/><circle cx="${x}" cy="545" r="7" fill="#fff"/>`).join('')}
  ${shaft('M168 545 H160','.8s')}${shaft('M832 545 H840','.8s')}</g>
 <g class="part" id="wheels">${[[60,160],[840,940]].map(([a,b])=>`<rect x="${a}" y="430" width="${b-a}" height="230" rx="22" fill="#1b2633" stroke="${LB}" stroke-width="4"/><path d="${lugs(a+8,b-8)}" stroke="${LB}" stroke-width="5" opacity=".6"/>`).join('')}</g>
 <g class="part" id="pto">${shaft('M500 603 V715','.8s')}<rect x="482" y="715" width="36" height="20" rx="4" fill="#F5B800"/></g>`,
 labels:[[640,90,'1800 to 2200 rpm',600,100,'start'],[640,250,'Clutch',570,247,'start'],[640,375,'Gearbox',600,375,'start'],
         [385,472,'Differential',448,515,'end'],[615,472,'Crown wheel',548,520,'start'],[200,700,'Final drive',200,597,'middle'],
         [890,700,'Rear wheel',890,662,'middle'],[540,740,'PTO 540 or 1000 rpm',518,725,'start'],[300,600,'Half shaft',330,550,'middle']],
 steps:[['The <b>clutch</b> connects the engine, which makes its best power at <b>1800 to 2200 rpm</b>, to the gearbox.',['engine','clutch']],
        ['The <b>gearbox</b> and <b>bevel gear</b> cut speed; the <b>differential</b> lets the wheels turn at different speeds.',['gearbox','bevel','axle']],
        ['<b>Final drives</b> multiply torque at each wheel, and a separate path drives the <b>PTO</b> at 540 or 1000 rpm.',['final','wheels','pto']]],
 fact:['i<sub>total</sub> = i<sub>gear</sub> × i<sub>bevel</sub> × i<sub>final</sub>','In the worked example a total ratio of 90 gives about 6.3 km/h and 19.8 kN·m at the axle.'],
 end:'Clutch, gearbox types, differential, final drive, PTO standards and a worked speed and torque example.',
 caption:'How does a tractor turn 2000 engine rpm into slow, powerful wheel torque? Clutch, gearbox, differential and final drive.',
 tags:['#Tractor','#FarmMachinery','#AgriculturalEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
