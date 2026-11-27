// Video spec for /mtbf-mttr-availability/. Facts from the article only.
// Top: up/down timeline of a repairable item (long operating periods, short repairs); flow moves forward in time.
// Bottom: reliability R(t) = e^(-t/MTBF), 37% at t = MTBF.
(()=>{
const T=(x,y,t,a='middle',s=24)=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="#fff" font-family="Open Sans" font-weight="700" font-size="${s}">${t}</text>`;
const st='M100 150 H330 V260 H370 V150 H600 V260 H640 V150 H880 V260 H920 V150 H950';
const RX=t=>140+t*260, RY=r=>700-r*270;
let rc='';for(let i=0;i<=60;i++){const t=3*i/60;rc+=(i?' L':'M')+RX(t).toFixed(1)+' '+RY(Math.exp(-t)).toFixed(1);}
BLUE['mtbf-mttr-availability'] = {
 pill:'SAFETY', title:'How <em>MTBF and MTTR</em> Work',
 svg:`<g class="part" id="timeline">${T(60,158,'Up','middle',22)}${T(60,268,'Down','middle',22)}<path d="M100 300 H955" stroke="${LB}" stroke-width="3" marker-end="url(#ah)"/>${T(950,335,'Time','end',22)}
  <path d="${st}" fill="none" stroke="${TL}" stroke-width="7" stroke-linejoin="round"/><path class="flow" d="${st}" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/></g>
 <g class="part" id="upbr"><path d="M370 120 V108 H600 V120" fill="none" stroke="#F5B800" stroke-width="4"/></g>
 <g class="part" id="fail">${[330,600,880].map(x=>`<circle class="pulse" cx="${x}" cy="150" r="11" fill="#ff7a45"/>`).join('')}<path d="M600 272 V284 H640 V272" fill="none" stroke="#F5B800" stroke-width="4"/></g>
 <g class="part" id="rel"><path d="M140 410 V700 H950" fill="none" stroke="${LB}" stroke-width="4" marker-end="url(#ah)"/>
  ${T(128,RY(1)+8,'1.0','end',20)}${T(128,RY(0.37)+8,'0.37','end',20)}${T(128,708,'0','end',20)}${T(RX(1),735,'t = MTBF','middle',22)}${T(940,735,'t','end',22)}
  <path d="M140 ${RY(0.368)} H${RX(1)} V700" fill="none" stroke="${LB}" stroke-width="2" stroke-dasharray="6 6"/></g>
 <g class="part" id="curve"><path d="${rc}" fill="none" stroke="#fff" stroke-width="6"/><circle class="pulse" cx="${RX(1)}" cy="${RY(0.368)}" r="12" fill="#F5B800"/></g>`,
 labels:[[485,85,'Operating time',485,108,'middle'],[740,380,'Repair time',620,284,'start'],[200,98,'Failure',322,142],[560,520,'R(t) = e^(−t/MTBF)',RX(0.6),RY(Math.exp(-0.6)),'start']],
 steps:[['<b>MTBF</b> is the total operating time of a repairable item divided by the number of failures.',['timeline','upbr']],
        ['<b>MTTR</b> is total repair downtime divided by the number of repairs: the average time to restore.',['fail']],
        ['With a constant failure rate, only <b>37%</b> of units are still working at <b>t = MTBF</b>.',['rel','curve']]],
 fact:['A = MTBF ÷ (MTBF + MTTR)','Pump example: MTBF 2100 h and MTTR 9 h give 99.57% availability.'],
 end:'Formulas, failure rate, the bathtub curve, series and parallel systems and a worked example.',
 caption:'MTBF is not product life. How MTBF, MTTR and availability describe reliability and repair.',
 tags:['#MTBF','#Reliability','#SafetyEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
