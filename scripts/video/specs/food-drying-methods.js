// Video spec for /food-drying-methods/. Facts from the article only.
// Co-current spray dryer: concentrated feed to a rotary atomizer at the top of the chamber, hot air enters
// around the atomizer and flows down with the droplets, powder falls to the cone, a cyclone separates fines from exhaust air.
(()=>{
const HOT='#ff7a45', PW='#f3e3b5';
BLUE['food-drying-methods'] = {
 pill:'AGRICULTURAL', title:'How a <em>Spray Dryer</em> Works',
 svg:`<g class="part" id="feed"><rect x="640" y="60" width="90" height="90" rx="8" fill="${PW}" stroke="${LB}" stroke-width="4"/><rect x="640" y="100" width="90" height="50" fill="#e9cf86"/><path d="M640 120 H515" stroke="${LB}" stroke-width="10"/>
  <path class="flow" d="M636 120 H520" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:1s"/></g>
 <g class="part" id="atomizer"><rect x="455" y="80" width="50" height="62" rx="6" fill="${NV}" stroke="${LB}" stroke-width="4"/><path d="M480 142 V190" stroke="${LB}" stroke-width="8"/><rect x="450" y="188" width="60" height="12" rx="4" fill="#fff"/>
  <ellipse class="flow" cx="480" cy="166" rx="26" ry="8" fill="none" stroke="#fff" stroke-width="3" style="--p:.6s"/></g>
 <g class="part" id="heater"><rect x="90" y="90" width="120" height="80" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/><path class="pulse" d="M150 160 C 128 145 136 120 150 100 C 164 120 172 145 150 160 Z" fill="${HOT}"/>
  <path d="M210 130 H420 V215" stroke="${LB}" stroke-width="4" fill="none"/>
  <path class="flow" d="M215 130 H405 V205" fill="none" stroke="${HOT}" stroke-width="6" marker-end="url(#ah)" style="--p:.9s"/></g>
 <g class="part" id="chamber"><path d="M330 215 H630 V470 L510 610 H450 L330 470 Z" fill="${NV}" fill-opacity=".55" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="hotair">${[360,600].map(x=>`<path class="flow" d="M${x} 235 V440" stroke="${HOT}" stroke-width="6" marker-end="url(#ah)" style="--p:1s"/>`).join('')}</g>
 <g class="part" id="spray">${[[-110,330],[-55,360],[0,380],[55,360],[110,330]].map(([dx,y])=>`<path class="flow" d="M480 202 L${480+dx} ${y}" stroke="#fff" stroke-width="4" stroke-dasharray="4 10" style="--p:.7s"/>`).join('')}
  ${[[410,400],[450,430],[500,420],[545,400],[470,470],[520,480],[430,500]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="${PW}"/>`).join('')}</g>
 <g class="part" id="powder"><path d="M455 560 L505 560 L510 610 H450 Z" fill="${PW}"/><path d="M450 610 V680 M510 610 V680" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M480 575 V730" stroke="${PW}" stroke-width="8" marker-end="url(#ah)" style="--p:1s"/></g>
 <g class="part" id="cyclone"><path d="M630 440 H760" stroke="${LB}" stroke-width="22"/><path class="flow" d="M632 440 H752" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:.9s"/>
  <path d="M760 400 H880 V480 L835 590 H805 L760 480 Z" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M780 450 C 800 500 860 470 830 440 C 800 420 790 470 815 530" stroke="#fff" stroke-width="4" fill="none" style="--p:1.2s"/>
  <path class="flow" d="M820 590 V700" stroke="${PW}" stroke-width="7" marker-end="url(#ah)" style="--p:1s"/></g>
 <g class="part" id="exhaust"><path d="M820 400 V230" stroke="${LB}" stroke-width="18"/><path class="flow" d="M820 395 V225" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:.9s"/></g>`,
 labels:[[760,40,'Concentrated feed',700,62],[300,60,'Rotary atomizer',458,100,'end'],[60,215,'Hot air in',150,170],
         [40,330,'Drying chamber',335,330],[560,720,'Powder out',486,700],
         [985,520,'Cyclone',880,470,'end'],[985,210,'Exhaust air',828,235,'end'],[985,750,'Fine powder',826,705,'end']],
 steps:[['A <b>concentrated feed</b> such as milk is broken into a fine mist by a <b>rotary atomizer</b> at the top.',['feed','atomizer','spray']],
        ['<b>Hot air</b> at about <b>150 to 300 °C</b> dries the droplets within seconds as they fall.',['heater','hotair','chamber']],
        ['<b>Powder</b> falls to the cone, and a <b>cyclone</b> separates fine particles from the <b>exhaust air</b>.',['powder','cyclone','exhaust']]],
 fact:['Inlet air 150 to 300 °C','Evaporation keeps droplets near the wet bulb temperature, so heat damage stays small.'],
 end:'Water activity, drying rate periods, sun, cabinet, drum, spray, fluidized bed and freeze drying, with a worked example.',
 caption:'How does a spray dryer turn milk or coffee into powder in seconds without cooking it? Mist, hot air, cyclone.',
 tags:['#FoodDrying','#SprayDrying','#FoodEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
