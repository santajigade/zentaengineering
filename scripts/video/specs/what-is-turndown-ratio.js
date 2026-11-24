// Video spec for /instrumentation-control/what-is-turndown-ratio/. Facts from the article only.
// DP (percent of span) against flow (percent of maximum) for a DP flowmeter: an exact parabola, DP = flow squared.
// x: 0..100% flow maps to 140..900; y: 0..100% DP maps to 640..120. Red zone below 22.4% flow, usable above.
(()=>{
const X=f=>140+7.6*f, Y=d=>640-5.2*d;
BLUE['what-is-turndown-ratio'] = {
 pill:'INSTRUMENTATION', title:'What Is <em>Turndown Ratio</em>?',
 svg:`<g class="part" id="axes"><path d="M140 100 V640 H920" fill="none" stroke="${LB}" stroke-width="5"/>
  ${[25,50,75,100].map(v=>`<path d="M140 ${Y(v)} H900" stroke="${LB}" stroke-width="1.5" opacity=".35"/>`).join('')}
  ${[['0',140],['50%',X(50)],['100%',900]].map(([t,x])=>`<text x="${x}" y="680" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">${t}</text>`).join('')}
  <text x="520" y="725" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">Flow, % of maximum</text>
  <text x="70" y="380" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26" transform="rotate(-90 70 380)">DP, % of span</text></g>
 <g class="part" id="lowzone"><rect x="142" y="120" width="${X(22.4)-142}" height="518" fill="#e5654f" opacity=".28"/>
  <path d="M${X(10)} 120 V638" stroke="#e5654f" stroke-width="4" stroke-dasharray="12 8"/>
  <circle class="pulse" cx="${X(10)}" cy="${Y(1)}" r="12" fill="#e5654f"/></g>
 <g class="part" id="usable"><rect x="${X(22.4)}" y="120" width="${900-X(22.4)}" height="518" fill="${TL}" opacity=".28"/>
  <path d="M${X(22.4)} 120 V638" stroke="${TL}" stroke-width="5"/></g>
 <g class="part" id="curve"><path d="M140 640 Q520 640 900 120" fill="none" stroke="#fff" stroke-width="7"/>
  <path class="flow" d="M140 640 Q520 640 900 120" fill="none" stroke="${LB}" stroke-width="3" style="--p:1.4s"/>
  <path d="M${X(50)} ${Y(25)} H140 M${X(50)} ${Y(25)} V640" stroke="#F5B800" stroke-width="3" stroke-dasharray="10 8"/>
  <circle class="pulse" cx="${X(50)}" cy="${Y(25)}" r="12" fill="#F5B800"/></g>`,
 labels:[[600,560,'50% flow = 25% DP',X(50),Y(25),'start'],[330,90,'10% flow = 1% DP',X(10),160,'middle'],[700,90,'Usable range, about 4.5:1',700,200,'middle']],
 steps:[['Turndown ratio is <b>maximum flow ÷ minimum flow</b> measured within the stated accuracy.',['axes','curve']],
        ['On a DP meter, <b>10% flow gives only 1% DP</b>, so transmitter error swamps the signal.',['lowzone','curve']],
        ['For ±1% of reading, a 0.1% transmitter gives an orifice only about <b>4.5:1</b>.',['usable']]],
 fact:['TR = Qmax ÷ Qmin','A single orifice meter is usually good for about 3:1 to 5:1.'],
 end:'The formula, transmitter rangedown, typical turndown of nine meter types and a worked orifice example.',
 caption:'Why can an orifice meter not read low flows? Turndown ratio and the square law explained.',
 tags:['#Instrumentation','#FlowMeasurement','#TurndownRatio','#EngineeringStudents','#ZentaEngineering']};
})();
