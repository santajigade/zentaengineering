// Video spec for /automated-irrigation-control/. Facts from the article only.
// Schematic: tank -> pump -> solenoid valve -> flow meter -> drip line and emitters. Sensor signals go up to the
// controller; the controller commands the pump and valve. Weather and rain data also feed the controller.
(()=>{
const SOIL='#8a6d3b', E=[560,760,920];
BLUE['automated-irrigation-control'] = {
 pill:'AGRICULTURAL', title:'How <em>Automated Irrigation Control</em> Works',
 svg:`<g class="part" id="soil"><rect x="0" y="430" width="1000" height="320" fill="${SOIL}" opacity=".28"/><path d="M0 430H1000" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="tank"><rect x="30" y="250" width="120" height="175" rx="8" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="36" y="300" width="108" height="119" rx="4" fill="${TL}" opacity=".8"/>
  <path d="M46 300Q60 292 74 300T102 300T130 300" stroke="#fff" stroke-width="3" fill="none"/></g>
 <g class="part" id="pipes"><path d="M150 400H192M225 366H300M340 366H380M440 366H470V425H975" stroke="${LB}" stroke-width="12" fill="none" stroke-linejoin="round"/></g>
 <g class="part" id="pump"><circle cx="225" cy="400" r="34" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <g class="spin-cw" style="--p:.8s"><circle cx="225" cy="400" r="24" fill="none"/>${[0,60,120,180,240,300].map(a=>{const [x1,y1]=P(225,400,6,a),[x2,y2]=P(225,400,24,a-35);return `<path d="M${x1} ${y1}Q${P(225,400,16,a-5).join(' ')} ${x2} ${y2}" stroke="#fff" stroke-width="4" fill="none"/>`}).join('')}</g>
  <circle cx="225" cy="400" r="6" fill="#fff"/></g>
 <g class="part" id="valve"><path d="M300 350L340 382V350L300 382Z" fill="${TL}" stroke="${LB}" stroke-width="3"/><path d="M320 340V366" stroke="${LB}" stroke-width="4"/><rect x="306" y="318" width="28" height="24" rx="4" fill="${TL}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="meter"><rect x="380" y="348" width="60" height="36" rx="6" fill="${NV}" stroke="${LB}" stroke-width="3"/><g class="spin-cw" style="--p:1s"><circle cx="410" cy="366" r="12" fill="none"/><path d="M398 366H422M410 354V378" stroke="#fff" stroke-width="3"/></g></g>
 <g class="part" id="water"><path class="flow" d="M150 400H190" stroke="#fff" stroke-width="4" style="--p:.7s"/><path class="flow" d="M225 366H300M340 366H380M440 366H470V425H975" stroke="#fff" stroke-width="4" fill="none" style="--p:.7s"/></g>
 <g class="part" id="plants">${E.map(e=>{const x=e-30;return `<path d="M${x} 430V330" stroke="${TL}" stroke-width="6"/><path d="M${x} 395Q${x-35} 380 ${x-38} 358Q${x-8} 362 ${x} 388M${x} 370Q${x+35} 352 ${x+36} 332Q${x+8} 336 ${x} 362" fill="${TL}" stroke="${TL}" stroke-width="3"/>
  <path d="M${x} 432V520M${x} 455L${x-26} 500M${x} 465L${x+24} 512" stroke="#e8d2a8" stroke-width="3" fill="none"/>`}).join('')}</g>
 <g class="part" id="drip">${E.map(e=>`<ellipse cx="${e}" cy="490" rx="${e==560?75:62}" ry="48" fill="${LB}" opacity=".22"/><circle cx="${e}" cy="425" r="9" fill="${NV}" stroke="#fff" stroke-width="3"/>
  <path class="flow" d="M${e} 436V478" stroke="${LB}" stroke-width="5" style="--p:.8s"/>`).join('')}</g>
 <g class="part" id="sensors"><path d="M600 430V470M645 430V590" stroke="#fff" stroke-width="3"/><rect x="593" y="470" width="14" height="36" rx="3" fill="#F5B800" stroke="${LB}" stroke-width="2"/><rect x="638" y="590" width="14" height="36" rx="3" fill="#F5B800" stroke="${LB}" stroke-width="2"/></g>
 <g class="part" id="ctrl"><rect x="380" y="60" width="240" height="120" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/><rect x="400" y="78" width="70" height="40" rx="4" fill="${NV}" stroke="${LB}" stroke-width="2"/>
  <path d="M406 108L420 96L434 102L448 88L464 92" stroke="#F5B800" stroke-width="3" fill="none"/>
  <text x="545" y="108" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">PLC</text><text x="500" y="158" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">Controller</text></g>
 <g class="part" id="cloud"><path d="M790 130Q760 130 762 106Q766 82 794 86Q802 56 838 58Q868 54 878 80Q910 76 914 104Q914 130 886 130Z" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${[800,830,860,890].map(x=>`<path d="M${x} 140L${x-6} 158" stroke="${LB}" stroke-width="3"/>`).join('')}</g>
 <g class="part" id="signal"><path class="flow" d="M600 470V180" stroke="#F5B800" stroke-width="3" fill="none" style="--p:1.2s"/><path class="flow" d="M645 590V140H620" stroke="#F5B800" stroke-width="3" fill="none" style="--p:1.2s"/>
  <path class="flow" d="M760 100H620" stroke="#F5B800" stroke-width="3" fill="none" style="--p:1.2s"/></g>
 <g class="part" id="cmd"><path class="flow" d="M380 150H320V318" stroke="#fff" stroke-width="3" fill="none" style="--p:1.2s"/><path class="flow" d="M380 110H195V384" stroke="#fff" stroke-width="3" fill="none" style="--p:1.2s"/></g>`,
 labels:[[90,225,'Water source',90,252,'middle'],[130,480,'Pump',212,432,'middle'],[300,540,'Solenoid valve',320,384,'middle'],[410,250,'Flow meter',410,348,'middle'],
  [985,300,'Drip emitter',920,418,'end'],[850,215,'Weather data',850,129,'middle'],[470,640,'Sensor 15 cm',593,500,'middle'],[700,700,'Sensor 40 cm',652,622]],
 steps:[['Soil moisture <b>sensors at two depths</b> in the root zone report to the <b>controller</b> every few minutes.',['sensors','signal','ctrl']],
        ['When moisture falls to the <b>start threshold</b> and no rain is forecast, it opens the <b>valve</b> and starts the pump.',['cmd','valve','pump','cloud']],
        ['Water flows to the <b>drip emitters</b> until the stop threshold, a target volume or a maximum run time.',['water','drip','meter']]],
 fact:['RAW = p × TAW','Irrigation starts when depletion reaches RAW; p is often 0.3 to 0.5.'],
 end:'Soil water basics, sensor types, controller logic, valves, IoT and a scheduling example.',
 caption:'How does automated irrigation work? Root zone sensors, a start threshold and closed loop control of pumps and valves.',
 tags:['#Irrigation','#AgriculturalEngineering','#SmartFarming','#SoilMoisture','#ZentaEngineering']};
})();
