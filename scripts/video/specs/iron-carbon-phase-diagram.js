// Video spec for /iron-carbon-phase-diagram/. Facts from the article only.
// Simplified Fe-Fe3C diagram (delta region omitted, as in the article figure). x: 0 to 6.67% C, y: temperature.
// A 0.40% C steel cools slowly: flow dashes move downward (falling temperature) through austenite, ferrite plus austenite, then pearlite below 727 C.
(()=>{
const X=c=>130+c*120, Y=t=>700-(t-400)*0.5;
const T=(x,y,t,a='middle',s=24,f='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${f}" font-family="Open Sans" font-weight="700" font-size="${s}">${t}</text>`;
BLUE['iron-carbon-phase-diagram'] = {
 pill:'MATERIALS', title:'How the <em>Iron-Carbon Diagram</em> Works',
 svg:`<g class="part" id="axes"><path d="M130 100 V700 H930 V100" fill="none" stroke="${LB}" stroke-width="4"/>
  ${T(130,734,'0')}${T(X(2.14),734,'2.14')}${T(X(4.3),734,'4.3')}${T(930,734,'6.67')}${T(530,760,'Carbon, wt %','middle',22)}
  ${T(118,Y(1538)+8,'1538','end',20)}${T(118,Y(1147)+8,'1147','end',20)}${T(118,Y(912)+8,'912','end',20)}${T(118,Y(727)+8,'727','end',20)}</g>
 <g class="part" id="gamma"><path d="M${X(0)} ${Y(912)} L${X(0.76)} ${Y(727)} L${X(2.14)} ${Y(1147)} L${X(0)} ${Y(1538)} Z" fill="${TL}" opacity=".55"/>
  ${T(X(0.9),Y(1050),'γ','middle',40)}</g>
 <g class="part" id="lines">
  <path d="M${X(0)} ${Y(1538)} L${X(4.3)} ${Y(1147)} L${X(6.67)} ${Y(1250)}" fill="none" stroke="#fff" stroke-width="4"/>
  <path d="M${X(0)} ${Y(1538)} L${X(2.14)} ${Y(1147)} H${X(6.67)}" fill="none" stroke="${LB}" stroke-width="4"/>
  <path d="M${X(0)} ${Y(912)} L${X(0.76)} ${Y(727)} L${X(2.14)} ${Y(1147)}" fill="none" stroke="${LB}" stroke-width="4"/>
  <path d="M${X(0.022)} ${Y(727)} H${X(6.67)}" stroke="${LB}" stroke-width="4"/>
  <path d="M${X(2.14)} ${Y(1147)} V700" stroke="${LB}" stroke-width="2" stroke-dasharray="6 6"/>
  ${T(X(4.6),Y(1360),'Liquid','middle',26)}${T(X(4.3),Y(940),'γ + Fe₃C','middle',26)}${T(X(4.6),610,'α + Fe₃C','middle',26)}
  ${T(X(1.5),665,'Steel','middle',22,'#cfe6f5')}${T(X(4.3),665,'Cast iron','middle',22,'#cfe6f5')}</g>
 <g class="part" id="cool"><path d="M${X(0.4)} ${Y(1400)} V690" stroke="#ff7a45" stroke-width="5"/><path class="flow" d="M${X(0.4)} ${Y(1400)} V684" stroke="#fff" stroke-width="3" marker-end="url(#ahw)" style="--p:1.4s"/>
  <circle cx="${X(0.4)}" cy="${Y(912-(912-727)*0.4/0.76)}" r="9" fill="#fff"/></g>
 <g class="part" id="eutectoid"><circle class="pulse" cx="${X(0.76)}" cy="${Y(727)}" r="13" fill="#F5B800"/></g>
 <g class="part" id="eutectic"><circle class="pulse" cx="${X(4.3)}" cy="${Y(1147)}" r="13" fill="#F5B800"/></g>`,
 labels:[[280,592,'Eutectoid 0.76% C, 727 °C',X(0.76)+4,Y(727)+8],[610,Y(1147)+44,'Eutectic 4.3% C, 1147 °C',X(4.3),Y(1147)+10,'start'],
         [380,Y(1490),'0.40% C steel cooling',X(0.4)+6,Y(1350)],[420,Y(840),'A3 line',X(0.45),Y(912-(912-727)*0.45/0.76)]],
 steps:[['At high temperature the steel is <b>austenite (γ)</b>, FCC iron that dissolves up to <b>2.14% C</b>.',['axes','gamma','lines']],
        ['On slow cooling below the <b>A3 line</b>, a 0.40% C steel forms <b>proeutectoid ferrite</b>.',['cool']],
        ['At <b>727 °C</b> the remaining austenite, now at <b>0.76% C</b>, transforms to <b>pearlite</b>.',['eutectoid']]],
 fact:['Eutectoid: 0.76% C, 727&nbsp;°C','Austenite becomes pearlite, alternating plates of ferrite and cementite.'],
 end:'Phases, key points and lines, slow cooling of steels, the lever rule and cast irons.',
 caption:'Why is steel soft or hard? The iron-carbon phase diagram maps phases by temperature and carbon content.',
 tags:['#IronCarbonDiagram','#Metallurgy','#MaterialsEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
