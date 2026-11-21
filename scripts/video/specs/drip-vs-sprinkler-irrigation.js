// Video spec for /drip-vs-sprinkler-irrigation/. Facts from the article only.
(()=>{
const SOIL='#4a3520', WET='#2f7fd0';
const pump=(cx,cy)=>`<circle cx="${cx}" cy="${cy}" r="30" fill="${NV}" stroke="${LB}" stroke-width="4"/><g class="spin-cw" style="--p:1.2s"><path d="M${cx} ${cy-20}V${cy+20}M${cx-20} ${cy}H${cx+20}M${cx-14} ${cy-14}L${cx+14} ${cy+14}M${cx+14} ${cy-14}L${cx-14} ${cy+14}" stroke="#fff" stroke-width="4"/></g><circle cx="${cx}" cy="${cy}" r="7" fill="#fff"/>`;
const plant=(x,h)=>`<path d="M${x} 470V${470-h}" stroke="#6fd46f" stroke-width="5"/><path d="M${x} ${490-h}q-22 -6 -30 -24q22 2 30 24M${x} ${505-h}q22 -6 30 -24q-22 2 -30 24" fill="#6fd46f"/>`;
const tuft=x=>`<path d="M${x-12} 470l4 -34M${x} 470V428M${x+12} 470l-4 -34" stroke="#6fd46f" stroke-width="4"/>`;
const arc=(x0,x1,peak)=>`<path class="flow" d="M${x0} 250 Q ${(x0+x1)/2} ${peak} ${x1} 466" fill="none" stroke="${LB}" stroke-width="4" style="--p:.9s"/>`;
BLUE['drip-vs-sprinkler-irrigation'] = {
 pill:'AGRICULTURAL', title:'How <em>Drip vs Sprinkler Irrigation</em> Works',
 svg:`<g class="part" id="soil"><rect x="0" y="470" width="1000" height="230" fill="${SOIL}" stroke="${LB}" stroke-width="3"/><path d="M500 80V700" stroke="${LB}" stroke-width="2" stroke-dasharray="10 10"/>
  <text x="245" y="110" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="34">DRIP</text>
  <text x="750" y="110" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="34">SPRINKLER</text></g>
 <g class="part" id="pumpD"><rect x="52" y="430" width="16" height="250" fill="${NV}" stroke="${LB}" stroke-width="3"/><path class="flow" d="M60 670 V436" stroke="#fff" stroke-width="5" style="--p:.8s"/>${pump(60,400)}</g>
 <g class="part" id="filter"><rect x="118" y="345" width="50" height="80" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/><path d="M128 360V410M138 360V410M148 360V410M158 360V410" stroke="#fff" stroke-width="2"/></g>
 <g class="part" id="fert"><rect x="200" y="335" width="50" height="70" rx="8" fill="#c98a3a" stroke="${LB}" stroke-width="4"/><path d="M225 405V370" stroke="#fff" stroke-width="3"/></g>
 <g class="part" id="lateral"><path d="M60 370 H280 V466 H485" fill="none" stroke="${LB}" stroke-width="12"/><path class="flow" d="M60 370 H280 V466 H485" fill="none" stroke="#fff" stroke-width="4" style="--p:.9s"/></g>
 <g class="part" id="plantsD">${plant(300,90)}${plant(365,90)}${plant(430,90)}</g>
 <g class="part" id="bulbs">${[318,383,448].map(x=>`<ellipse cx="${x}" cy="525" rx="24" ry="50" fill="${WET}" opacity=".8"/>`).join('')}</g>
 <g class="part" id="emitters">${[318,383,448].map(x=>`<rect x="${x-8}" y="459" width="16" height="14" rx="3" fill="#F5B800"/><circle class="pulse" cx="${x}" cy="482" r="5" fill="#fff"/>`).join('')}</g>
 <g class="part" id="pumpS"><rect x="552" y="430" width="16" height="250" fill="${NV}" stroke="${LB}" stroke-width="3"/><path class="flow" d="M560 670 V436" stroke="#fff" stroke-width="5" style="--p:.8s"/>${pump(560,400)}
  <path d="M560 370 H630 V466 H985" fill="none" stroke="${LB}" stroke-width="12"/><path class="flow" d="M560 370 H630 V466 H985" fill="none" stroke="#fff" stroke-width="4" style="--p:.9s"/></g>
 <g class="part" id="plantsS">${[600,660,760,820,920,970].map(tuft).join('')}</g>
 <g class="part" id="risers">${[710,880].map(x=>`<rect x="${x-6}" y="250" width="12" height="212" fill="${LB}"/><path class="flow" d="M${x} 460 V256" stroke="#fff" stroke-width="4" style="--p:.7s"/><rect x="${x-14}" y="236" width="28" height="18" rx="4" fill="#F5B800"/>`).join('')}</g>
 <g class="part" id="spray">${arc(710,600,170)}${arc(710,820,170)}${arc(710,655,215)}${arc(710,765,215)}${arc(880,770,170)}${arc(880,985,170)}${arc(880,825,215)}${arc(880,935,215)}</g>
 <g class="part" id="wet"><rect x="590" y="472" width="396" height="22" fill="${WET}" opacity=".8"/></g>`,
 labels:[[20,330,'Pump',52,374],[96,300,'Filter',140,345],[245,262,'Fertigation',225,335,'middle'],[350,650,'Lateral',350,466,'middle'],[490,370,'Emitter',448,458,'end'],[165,610,'Wetted bulb',296,530,'middle'],
         [985,190,'Sprinkler',892,240,'end'],[600,610,'Riser',704,440],[840,640,'Whole field wetted',840,494,'middle']],
 steps:[['Drip: a <b>filter</b> and <b>fertigation unit</b> feed laterals at about 1 to 2 bar. <b>Emitters</b> give 1 to 8 L/h.',['pumpD','filter','fert','lateral']],
        ['Water spreads in a <b>wetted bulb</b> at the roots only, so drip reaches about <b>85 to 95%</b> efficiency.',['emitters','bulbs']],
        ['<b>Sprinklers</b> spray like rain at about <b>2 to 4 bar</b>, wetting the whole field, at about <b>65 to 85%</b>.',['risers','spray','wet']]],
 fact:['ET<sub>c</sub> = K<sub>c</sub> × ET<sub>0</sub>','Gross water = (ET<sub>c</sub> − P<sub>eff</sub>) ÷ application efficiency.'],
 end:'Components, efficiency, crops, cost, maintenance, fertigation and a water requirement example.',
 caption:'Drip or sprinkler? How each irrigation system delivers water, and why drip reaches 85 to 95% efficiency.',
 tags:['#Irrigation','#DripIrrigation','#AgriculturalEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
