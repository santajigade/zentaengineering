// Video spec for /precision-agriculture-technologies/. Facts from the article only.
// Side view: GNSS satellite and RTK base station position the tractor; a drone measures reflected NIR and red light;
// a prescription map sets the variable rate spreader (higher rate on the weaker zone). Tractor drives to the right.
(()=>{
const G1='#3fbf6a', G2='#c9b24a', SOIL='#5a3a22', NIR='#d17bff', RED='#ff5a5a';
const plant=(x,h,c)=>`<path d="M${x} 640 V${640-h} M${x} ${640-h*0.55} q-16 -10 -22 -26 M${x} ${640-h*0.55} q16 -10 22 -26 M${x} ${640-h*0.85} q-12 -8 -16 -20 M${x} ${640-h*0.85} q12 -8 16 -20" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
const wheel=(cx,cy,r,p)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#1b2633" stroke="${LB}" stroke-width="4"/><g class="spin-cw" style="--p:${p}">${[0,60,120].map(a=>{const[a1,b1]=P(cx,cy,r*0.7,a),[a2,b2]=P(cx,cy,r*0.7,a+180);return `<path d="M${a1} ${b1}L${a2} ${b2}" stroke="#fff" stroke-width="4"/>`}).join('')}</g><circle cx="${cx}" cy="${cy}" r="${r*0.22}" fill="${LB}"/>`;
const txt=(x,y,t,s=24,c='#fff')=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
let dense='',weak='';for(let x=55;x<=465;x+=30)dense+=plant(x,82,G1);for(let x=545;x<=930;x+=55)weak+=plant(x,42,G2);
BLUE['precision-agriculture-technologies'] = {
 pill:'AGRICULTURAL', title:'How <em>Precision Agriculture</em> Works',
 svg:`<g class="part" id="soil"><rect x="20" y="640" width="960" height="50" fill="${SOIL}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="crops">${dense}${weak}<path d="M495 600 V690" stroke="#fff" stroke-width="3" stroke-dasharray="8 8" opacity=".6"/></g>
 <g class="part" id="sat"><rect x="95" y="95" width="50" height="40" rx="6" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="35" y="102" width="55" height="26" fill="${TL}" stroke="${LB}" stroke-width="3"/><rect x="150" y="102" width="55" height="26" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M120 135 V150" stroke="${LB}" stroke-width="4"/>
  <path d="M125 155 L676 432" stroke="${LB}" stroke-width="3" opacity=".5"/><path class="flow" d="M125 155 L676 432" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:1s"/></g>
 <g class="part" id="rtk"><path d="M950 640 L925 640 L950 470 L975 640 Z" fill="none" stroke="${LB}" stroke-width="4"/><path d="M950 470 V440" stroke="${LB}" stroke-width="5"/>
  <g class="pulse"><circle cx="950" cy="432" r="14" fill="#F5B800"/></g>
  <path class="flow" d="M932 434 H748" stroke="#F5B800" stroke-width="5" marker-end="url(#ah)" style="--p:.9s"/></g>
 <g class="part" id="map"><rect x="620" y="95" width="340" height="150" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="636" y="110" width="150" height="120" rx="6" fill="${G1}" opacity=".85"/><rect x="794" y="110" width="150" height="120" rx="6" fill="${G2}" opacity=".85"/>
  ${txt(711,165,'40',38)}${txt(711,200,'kg N/ha',22)}${txt(869,165,'60',38)}${txt(869,200,'kg N/ha',22)}
  <path class="flow" d="M700 245 V428" stroke="${LB}" stroke-width="4" stroke-dasharray="6 6" marker-end="url(#ah)" style="--p:1.4s"/></g>
 <g class="part" id="drone"><g transform="translate(-70 20)"><rect x="300" y="318" width="70" height="26" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M272 306 H398 M285 306 V318 M385 306 V318" stroke="${LB}" stroke-width="4"/>
  <g class="pulse"><path d="M256 302 H300 M370 302 H414" stroke="#fff" stroke-width="5" stroke-linecap="round"/></g>
  <rect x="322" y="344" width="26" height="14" rx="3" fill="${TL}"/>
  <path class="flow" d="M310 548 V372" stroke="${NIR}" stroke-width="6" marker-end="url(#ah)" style="--p:.9s"/>
  <path class="flow" d="M360 548 V372" stroke="${RED}" stroke-width="4" marker-end="url(#ah)" style="--p:.9s" opacity=".55"/></g></g>
 <g class="part" id="tractor"><path d="M700 545 H895 V592 H700 Z" fill="${TL}" stroke="${LB}" stroke-width="4"/><path d="M640 440 H735 V560 H640 Z" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M652 452 H723 V505 H652 Z" fill="#9fe3ff" opacity=".5"/>${wheel(680,585,55,'1.6s')}${wheel(860,610,30,'.87s')}</g>
 <g class="part" id="spreader"><path d="M540 500 H612 L596 560 H556 Z" fill="${G2}" stroke="${LB}" stroke-width="4"/><path d="M612 540 H640" stroke="${LB}" stroke-width="5"/>
  ${[548,566,584,602].map((x,i)=>`<path class="flow" d="M576 566 L${x-10} 628" stroke="#fff" stroke-width="4" stroke-dasharray="3 9" style="--p:${.5+i*.08}s"/>`).join('')}</g>`,
 labels:[[215,85,'GNSS satellite',175,112,'start'],[985,395,'RTK base station',955,420,'end'],[175,300,'Drone camera',232,340,'end'],
         [790,75,'Prescription map',790,95,'middle'],[60,735,'Healthy zone',150,600,'start'],[960,735,'Weaker zone',930,618,'end'],[600,735,'Variable rate spreader',575,600,'middle'],
         [400,475,'NIR and red',292,472,'start']],
 steps:[['GNSS with <b>RTK</b> corrections from a base station guides the tractor to about <b>2 cm</b>.',['sat','rtk','tractor']],
        ['A drone or satellite maps the field by <b>NDVI</b>: healthy crops reflect NIR and absorb red light.',['drone','crops']],
        ['A <b>prescription map</b> drives <b>variable rate</b> nitrogen: 40 kg N/ha where healthy, 60 where weaker.',['map','spreader']]],
 fact:['NDVI = (NIR - Red) ÷ (NIR + Red)','Dense, healthy crops are typically 0.6 to 0.9. Bare soil is about 0.1 to 0.2.'],
 end:'GNSS and RTK guidance, yield and soil mapping, NDVI, variable rate technology and a worked example.',
 caption:'How does precision agriculture put inputs only where they are needed? RTK guidance, NDVI mapping and variable rate application.',
 tags:['#PrecisionAgriculture','#SmartFarming','#AgriculturalEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
