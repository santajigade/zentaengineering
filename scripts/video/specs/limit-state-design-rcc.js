// Video spec for /civil-engineering/limit-state-design-rcc/. Facts from the article only.
// Top: simply supported beam under factored UDL (load arrows flow downward onto the beam).
// Bottom: worked example section to scale (0.7 px/mm): b = 230 mm, d = 450 mm, xu = 0.87 fy Ast / (0.36 fck b) = 163 mm,
// strain linear from 0.0035 at the top through zero at the neutral axis to 0.0062 at the steel,
// IS 456 parabolic and rectangular stress block (rectangle over the top 3/7 xu), C at 0.42 xu, T at the steel level.
(()=>{
const top=340, s=0.7, d=top+450*s, xu=163*s, na=top+xu, yC=top+0.42*xu;
const T=(x,y,t,z=24,c='#fff')=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${z}">${t}</text>`;
const loads=[];for(let x=150;x<=850;x+=70)loads.push(`<path d="M${x} 120 V182" stroke="${LB}" stroke-width="4" marker-end="url(#ah)"/><path class="flow" d="M${x} 120 V176" stroke="#fff" stroke-width="2.5" stroke-dasharray="10 10" style="--p:.8s"/>`);
const es=0.0035*(450-163)/163; // steel strain, 0.0062
const sc=60/0.0035; // strain scale, px per unit strain
const z0=390, rb=top+(3/7)*xu, sb=660;
BLUE['limit-state-design-rcc'] = {
 pill:'CIVIL', title:'How <em>Limit State Design</em> of RCC Works',
 svg:`<g class="part" id="load"><path d="M140 120 H860" stroke="${LB}" stroke-width="4"/>${loads.join('')}</g>
 <g class="part" id="beam"><rect x="100" y="188" width="800" height="44" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M130 232 L108 266 H152 Z M870 232 L848 266 H892 Z" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M500 182 V238" stroke="#fff" stroke-width="3" stroke-dasharray="8 6"/></g>
 <g class="part" id="section"><rect x="100" y="${top}" width="${230*s}" height="${500*s}" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  ${[124,153,182,211].map(x=>`<circle cx="${x+4}" cy="${d}" r="9" fill="#fff"/>`).join('')}
  <path d="M90 ${na} H${100+230*s+10}" stroke="#fff" stroke-width="3" stroke-dasharray="10 8"/>
  ${T(156,top-14,'b',24)}</g>
 <g class="part" id="strain"><path d="M${z0} ${top} H${z0-sc*0.0035} L${z0} ${na} L${z0+sc*es} ${d} H${z0} Z" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M${z0} ${top-10} V${d+20}" stroke="${LB}" stroke-width="3"/><path d="M${z0} ${na} H${z0+60}" stroke="#fff" stroke-width="3" stroke-dasharray="10 8"/></g>
 <g class="part" id="stress"><path d="M${sb} ${na} Q${sb-80} ${(na+rb)/2} ${sb-80} ${rb} V${top} H${sb} Z" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M${sb} ${top-10} V${d+20}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="forces"><path d="M820 ${yC} H${sb+12}" stroke="#fff" stroke-width="6" marker-end="url(#ahw)"/>
  <path d="M${sb+4} ${d} H810" stroke="#fff" stroke-width="6" marker-end="url(#ahw)"/>
  <circle class="pulse" cx="${sb-2}" cy="${yC}" r="10" fill="#F5B800"/><circle class="pulse" cx="${sb-2}" cy="${d}" r="10" fill="#F5B800"/>
  <path d="M880 ${yC} V${d}" stroke="${LB}" stroke-width="3"/><path d="M868 ${yC} H892 M868 ${d} H892" stroke="${LB}" stroke-width="3"/>
  ${T(920,(yC+d)/2+10,'z',30,LB)}</g>`,
 labels:[[560,80,'Factored load 1.5 (DL + IL)',500,120,'middle'],[380,300,'Strain 0.0035',z0-sc*0.0035+6,top+4,'middle'],
         [790,yC-44,'C = 0.36 fck b xu',760,yC,'middle'],[760,d+56,'T = 0.87 fy Ast',760,d,'middle'],
         [250,740,'4 bars, 16 mm',182,d+10,'middle'],[470,560,'Neutral axis',z0+60,na,'start']],
 steps:[['Loads are multiplied by a <b>partial safety factor</b> of 1.5 (DL + IL) at the limit state of collapse.',['load','beam']],
        ['Plane sections stay plane, so strain is linear, with concrete failing at <b>0.0035</b> at the top.',['section','strain']],
        ['<b>C = 0.36 fck b xu</b> and <b>T = 0.87 fy Ast</b> form the couple that resists the moment.',['stress','forces']]],
 fact:['Mu = 0.87 fy Ast (d − 0.42 xu)','For Mu = 100 kN·m on a 230 × 450 mm M20 beam, Ast is 720 mm².'],
 end:'Limit states, partial safety factors, the IS 456 stress block, a beam design example and serviceability checks.',
 caption:'Why is concrete factored by 1.5 and steel by 1.15? Limit state design of RCC, step by step.',
 tags:['#CivilEngineering','#RCC','#LimitStateDesign','#EngineeringStudents','#ZentaEngineering']};
})();
