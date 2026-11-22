// Video spec for /data-science-workflow/. Facts from the article only.
// The eight steps arranged as a clockwise cycle, with the arrow from Deploy back to Define closing the loop.
(()=>{
const C=[500,390], R=300, RY=290;
const names=['Define','Collect','Clean','Explore','Features','Model','Evaluate','Deploy'];
const pos=names.map((_,k)=>{const a=(-90+k*45)*Math.PI/180;return [C[0]+R*Math.cos(a), C[1]+RY*Math.sin(a)];});
const HW=95, HH=38;
const ept=(deg)=>{const a=deg*Math.PI/180;return [C[0]+R*Math.cos(a),C[1]+RY*Math.sin(a)];};
const inside=(p)=>pos.some(([x,y])=>Math.abs(p[0]-x)<HW+12&&Math.abs(p[1]-y)<HH+12);
const arc=(k)=>{let a0=-90+k*45, a1=a0+45;while(inside(ept(a0)))a0+=0.5;while(inside(ept(a1)))a1-=0.5;
  const p0=ept(a0), p1=ept(a1);
  return `M${p0[0].toFixed(1)} ${p0[1].toFixed(1)} A${R} ${RY} 0 0 1 ${p1[0].toFixed(1)} ${p1[1].toFixed(1)}`;};
const node=(k)=>{const [x,y]=pos[k];return `<rect x="${x-HW}" y="${y-HH}" width="${2*HW}" height="${2*HH}" rx="38" fill="${k==7?TL:NV}" stroke="${LB}" stroke-width="4"/>
  <circle cx="${x-66}" cy="${y}" r="22" fill="#F5B800"/><text x="${x-66}" y="${y+9}" text-anchor="middle" fill="#061630" font-family="Open Sans" font-weight="800" font-size="24">${k+1}</text>
  <text x="${x+18}" y="${y+8}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="23">${names[k]}</text>`;};
const arrows=(ks,p)=>ks.map(k=>`<path d="${arc(k)}" stroke="${LB}" stroke-width="7" fill="none" opacity=".55"/><path class="flow" d="${arc(k)}" stroke="#fff" stroke-width="4" fill="none" marker-end="url(#ahw)" style="--p:${p}"/>`).join('');
BLUE['data-science-workflow'] = {
 pill:'DATA SCIENCE', title:'How the <em>Data Science Workflow</em> Works',
 svg:`<g class="part" id="prep">${[0,1,2].map(node).join('')}${arrows([0,1],'.9s')}</g>
 <g class="part" id="build">${[3,4,5].map(node).join('')}${arrows([2,3,4],'.9s')}</g>
 <g class="part" id="ship">${[6,7].map(node).join('')}${arrows([5,6],'.9s')}</g>
 <g class="part" id="loop">${arrows([7],'.9s')}<circle cx="${C[0]}" cy="${C[1]}" r="105" fill="${NV}" stroke="${LB}" stroke-width="4" stroke-dasharray="10 8"/>
  <g class="spin-cw" style="--p:6s"><path d="M${C[0]} ${C[1]-80} A80 80 0 1 1 ${C[0]-79} ${C[1]-12}" stroke="${TL}" stroke-width="8" fill="none" marker-end="url(#ah)"/></g>
  <text x="${C[0]}" y="${C[1]+9}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">CRISP-DM</text></g>`,
 labels:[[500,40,'Start with the decision',500,58,'middle'],[180,40,'Feedback loop',383,124,'middle']],
 steps:[['<b>Define</b> the decision and success metric, then <b>collect</b> and <b>clean</b> data, often over half the work.',['prep']],
        ['<b>Explore</b> the data, engineer <b>features</b>, then build models starting from a simple baseline.',['build']],
        ['<b>Evaluate</b> against the business goal, <b>deploy</b>, monitor for drift and loop back to the problem.',['ship','loop']]],
 fact:['Accuracy 96%, precision 30%','In the worked example, 7 of 10 alerts were false alarms despite high accuracy.'],
 end:'All eight steps, CRISP-DM, z-scores, precision and recall, a worked example and the tools used.',
 caption:'How does raw data become a decision? The eight step data science workflow as a cycle.',
 tags:['#DataScience','#MachineLearning','#CRISPDM','#EngineeringStudents','#ZentaEngineering']};
})();
