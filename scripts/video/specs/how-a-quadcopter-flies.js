// Video spec for /how-a-quadcopter-flies/. Facts from the article only.
// Top view, Quad X, front at the top. Front left and rear right spin clockwise, front right and rear left counterclockwise.
(()=>{
const M=[[260,170,'cw'],[740,170,'ccw'],[260,590,'ccw'],[740,590,'cw']];
const arc=(cx,cy,a1,a2,sw)=>{const [x1,y1]=P(cx,cy,140,a1),[x2,y2]=P(cx,cy,140,a2);return `<path d="M${x1} ${y1} A140 140 0 0 ${sw} ${x2} ${y2}" fill="none" stroke="#F5B800" stroke-width="5" marker-end="url(#ah)"/>`};
BLUE['how-a-quadcopter-flies'] = {
 pill:'AEROSPACE', title:'How a <em>Quadcopter</em> Flies',
 svg:`<g class="part" id="frame">${M.map(([x,y])=>`<path d="M500 380 L${x} ${y}" stroke="${LB}" stroke-width="22" stroke-linecap="round"/><path d="M500 380 L${x} ${y}" stroke="${NV}" stroke-width="14" stroke-linecap="round"/>`).join('')}
  <rect x="410" y="290" width="180" height="180" rx="26" fill="${NV}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="esc">${[[372,276],[628,276],[372,484],[628,484]].map(([x,y])=>`<rect x="${x-17}" y="${y-17}" width="34" height="34" rx="5" fill="${TL}" stroke="${LB}" stroke-width="2.5"/>`).join('')}</g>
 <g class="part" id="fc"><rect x="450" y="304" width="100" height="62" rx="8" fill="${TL}" stroke="${LB}" stroke-width="3"/><text x="500" y="345" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">FC</text></g>
 <g class="part" id="batt"><rect x="440" y="388" width="120" height="62" rx="8" fill="#5a6b80" stroke="${LB}" stroke-width="3"/><text x="500" y="428" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="24">LiPo</text></g>
 <g class="part" id="props">${M.map(([x,y,d])=>`<circle cx="${x}" cy="${y}" r="115" fill="${LB}" opacity=".10" stroke="${LB}" stroke-width="2" stroke-dasharray="6 8"/>
  <g class="spin-${d}" style="--p:.7s"><path d="M${x-112} ${y} Q${x-60} ${y-20} ${x} ${y} Q${x+60} ${y+20} ${x+112} ${y} Q${x+60} ${y-6} ${x} ${y} Q${x-60} ${y+6} ${x-112} ${y}Z" fill="#fff" stroke="#fff" stroke-width="6" stroke-linejoin="round"/></g>`).join('')}</g>
 <g class="part" id="motors">${M.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="30" fill="${NV}" stroke="${LB}" stroke-width="4"/><circle cx="${x}" cy="${y}" r="9" fill="#F5B800"/>`).join('')}</g>
 <g class="part" id="dir">${arc(260,170,190,250,1)}${arc(740,170,350,290,0)}${arc(260,590,170,110,0)}${arc(740,590,10,70,1)}</g>
 <g class="part" id="front"><path class="flow" d="M500 270 V120" stroke="#fff" stroke-width="7" marker-end="url(#ahw)" style="--p:.9s"/></g>`,
 labels:[[500,55,'Front',500,115,'middle'],[30,370,'Propeller CW',202,270],[30,470,'Propeller CCW',202,490],[805,300,'BLDC motor',768,186],[890,470,'ESC',645,484],[745,375,'Flight controller',551,335],[500,730,'Battery',500,452,'middle']],
 steps:[['Four <b>brushless motors</b> spin fixed pitch propellers that push air down. Thrust rises as <b>T = kω²</b>.',['motors','props']],
        ['Two spin <b>clockwise</b> and two <b>counterclockwise</b>, so their reaction torques cancel in hover.',['props','dir']],
        ['The <b>flight controller</b> reads the IMU and GPS and sets each motor speed through <b>ESCs</b> to pitch, roll and yaw.',['fc','esc']]],
 fact:['4T = mg to hover','A 2:1 thrust to weight ratio means hover needs about 50% throttle.'],
 end:'Drone components, thrust and hover power, roll, pitch and yaw, and the flight control loop.',
 caption:'How does a quadcopter fly? Four propellers, torque balance and fast feedback control in 22 seconds.',
 tags:['#Quadcopter','#Drone','#UAV','#AerospaceEngineering','#ZentaEngineering']};
})();
