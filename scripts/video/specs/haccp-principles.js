// Video spec for /haccp-principles/. Facts from the article only.
// Schematic of the 12 Codex steps: five preliminary steps, then the seven principles, highlighted one by one in order.
(()=>{
const names=['1. Assemble HACCP team','2. Describe product','3. Identify intended use','4. Construct flow diagram','5. Verify flow diagram on site',
 '6. Hazard analysis (P1)','7. Determine CCPs (P2)','8. Critical limits (P3)','9. Monitoring (P4)','10. Corrective actions (P5)','11. Verification (P6)','12. Records (P7)'];
const Y=i=>110+i*80, X=i=>i<5?60:550;
const box=(i)=>{const r=i<5?i:i-5, x=X(i), y=Y(r);
 return `<g id="b${i+1}"><rect x="${x}" y="${y}" width="390" height="60" rx="10" fill="${i<5?NV:TL}" stroke="${LB}" stroke-width="3"/>
 <text x="${x+195}" y="${y+38}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="22">${names[i]}</text></g>`;};
const seq=(i)=>{const r=i<5?i:i-5;return `<rect class="seq" x="${X(i)-4}" y="${Y(r)-4}" width="398" height="68" rx="12" fill="none" stroke="#F5B800" stroke-width="5" style="animation-delay:${(i*0.5).toFixed(1)}s"/>`;};
BLUE['haccp-principles'] = {
 pill:'AGRICULTURAL', title:'How <em>HACCP Principles</em> Work',
 svg:`<style>.seq{opacity:0;animation:seq 6s linear infinite}@keyframes seq{0%{opacity:0}1.5%{opacity:1}8%{opacity:1}9.5%{opacity:0}100%{opacity:0}}</style>
 <g class="part" id="heads"><text x="255" y="85" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">PRELIMINARY STEPS</text>
  <text x="745" y="85" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">SEVEN PRINCIPLES</text></g>
 <g class="part" id="prelim">${[0,1,2,3,4].map(box).join('')}</g>
 <g class="part" id="principles">${[5,6,7,8,9,10,11].map(box).join('')}</g>
 <g class="part" id="links"><path d="M35 140 V460" stroke="${LB}" stroke-width="5"/>${[0,1,2,3,4].map(r=>`<path d="M35 ${Y(r)+30} H56" stroke="${LB}" stroke-width="4" marker-end="url(#ah)"/>`).join('')}
  <path d="M965 140 V620" stroke="${LB}" stroke-width="5"/>${[1,2,3,4,5,6].map(r=>`<path d="M965 ${Y(r)+30} H944" stroke="${LB}" stroke-width="4" marker-end="url(#ah)"/>`).join('')}
  <path d="M450 460 H500 V140 H546" fill="none" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/><path d="M940 140 H965" stroke="${LB}" stroke-width="5"/>
  <path class="flow" d="M35 140 V460 M450 460 H500 V140 H546 M940 140 H965 V620" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/></g>
 <g class="part" id="order">${[...Array(12).keys()].map(seq).join('')}</g>`,
 labels:[],
 steps:[['First, five <b>preliminary steps</b>: team, product, intended use, then a flow diagram verified on site.',['b1','b2','b3','b4','b5']],
        ['<b>Hazard analysis</b> finds significant hazards, then <b>CCPs</b> and measurable <b>critical limits</b> are set.',['b6','b7','b8']],
        ['<b>Monitoring</b>, <b>corrective actions</b>, <b>verification</b> and <b>records</b> keep each CCP under control.',['b9','b10','b11','b12']]],
 fact:['7 principles, 12 Codex steps','HACCP rests on prerequisite programmes such as cleaning and pest control.'],
 end:'Hazard types, prerequisite programmes, the 12 steps, each principle and a worked CCP example.',
 caption:'The seven HACCP principles in order: from hazard analysis and CCPs to monitoring, verification and records.',
 tags:['#HACCP','#FoodSafety','#FoodProcessing','#EngineeringStudents','#ZentaEngineering']};
})();
