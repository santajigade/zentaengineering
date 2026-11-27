// Video spec for /sterilization-methods/. Facts from the article only.
// Prevacuum steam autoclave cutaway: steam enters the jacketed chamber at the top and moves down over the trays;
// air and condensate leave through the bottom drain past the drain temperature sensor and the vacuum pump.
(()=>{
const HOT='#ff7a45';
const down=(x,y0,y1)=>`<path class="flow" d="M${x} ${y0} V${y1}" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:.9s"/>`;
BLUE['sterilization-methods'] = {
 pill:'BIOMEDICAL', title:'How a <em>Steam Autoclave</em> Works',
 svg:`<g class="part" id="jacket"><rect x="230" y="150" width="540" height="390" rx="22" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <rect x="265" y="185" width="470" height="320" rx="12" fill="#06213a" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="door"><rect x="770" y="195" width="26" height="300" rx="5" fill="${TL}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="inlet"><path d="M30 120 H300 V185" fill="none" stroke="${HOT}" stroke-width="12" stroke-linejoin="round"/>
  <path class="flow" d="M30 120 H300 V182" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" marker-end="url(#ahw)" style="--p:.9s"/></g>
 <g class="part" id="trays">${[300,400].map(y=>`<rect x="310" y="${y}" width="380" height="22" rx="5" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  ${[350,430,510,590].map(x=>`<rect x="${x}" y="${y-18}" width="50" height="18" rx="4" fill="#fff" opacity=".9"/>`).join('')}`).join('')}</g>
 <g class="part" id="steam">${[340,500,660].map(x=>down(x,200,272)+down(x,330,372)+down(x,432,495)).join('')}</g>
 <g class="part" id="drain"><path d="M500 505 V640 H955" fill="none" stroke="${LB}" stroke-width="12" stroke-linejoin="round"/>
  <path class="flow" d="M500 508 V640 H950" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" marker-end="url(#ahw)" style="--p:1s"/></g>
 <g class="part" id="sensor"><circle class="pulse" cx="500" cy="580" r="18" fill="#F5B800" stroke="#fff" stroke-width="3"/></g>
 <g class="part" id="pump"><circle cx="720" cy="640" r="40" fill="${NV}" stroke="${LB}" stroke-width="5"/><g class="spin-cw" style="--p:.7s">${[0,90,180,270].map(a=>`<path d="M720 640 Q ${P(720,640,26,a-25).join(' ')} ${P(720,640,34,a+10).join(' ')} Z" fill="#fff"/>`).join('')}</g><circle cx="720" cy="640" r="7" fill="${LB}"/></g>`,
 labels:[[40,98,'Steam in',120,114,'start'],[560,112,'Steam jacket',600,165,'start'],[12,250,'Load on trays',310,300,'start'],
         [985,340,'Door',798,345,'end'],[12,600,'Drain sensor',482,582,'start'],[985,725,'Vacuum pump',740,676,'end'],[985,605,'To drain',945,632,'end']],
 steps:[['In <b>conditioning</b>, the <b>vacuum pump</b> pulls air out and steam pulses refill the chamber.',['pump','drain','jacket']],
        ['Saturated steam holds the load at <b>132 °C for 4 minutes</b> while the <b>drain sensor</b> checks the coolest point.',['inlet','steam','trays','sensor']],
        ['Steam is <b>exhausted</b>, then a <b>vacuum dries</b> the load so packs come out dry.',['drain','pump','door']]],
 fact:['SAL of one in a million','The sterility assurance level terminally sterilized devices normally need.'],
 end:'Steam, dry heat, ethylene oxide, radiation and hydrogen peroxide, D value, SAL and a worked example.',
 caption:'How does an autoclave sterilize surgical instruments? Air removal, steam at 132 °C, then exhaust and drying.',
 tags:['#Sterilization','#Autoclave','#BiomedicalEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
