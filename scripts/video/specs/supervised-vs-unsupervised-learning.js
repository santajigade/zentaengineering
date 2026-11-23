// Video spec for /supervised-vs-unsupervised-learning/. Facts from the article only.
// Left: labelled data (x with target y) flows into a plot where a decision boundary separates two classes.
// Right: unlabelled data (x only) flows into a plot where the algorithm finds three clusters.
(()=>{
const arr=(d,p='.9s')=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="7" opacity=".5"/><path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:${p}"/>`;
const T=(x,y,t,s=24)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const tri=(x,y,f='#fff')=>`<path d="M${x} ${y-9} L${x+9} ${y+7} L${x-9} ${y+7} Z" fill="${f}"/>`;
const dot=(x,y,f=TL)=>`<circle cx="${x}" cy="${y}" r="8" fill="${f}" stroke="#fff" stroke-width="2"/>`;
const rows=[165,195,225];
const cells=(xs)=>xs.map(x=>rows.map(y=>`<path d="M${x-26} ${y} H${x+26}" stroke="${LB}" stroke-width="6" stroke-linecap="round"/>`).join('')).join('');
const axes=(x0,x1)=>`<rect x="${x0-20}" y="320" width="${x1-x0+40}" height="390" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/><path d="M${x0} 340 V690 H${x1}" stroke="${LB}" stroke-width="3" fill="none"/>`;
const circ=[[110,450],[140,520],[100,560],[170,600],[200,560],[230,640],[150,650]];
const tris=[[240,380],[300,420],[350,470],[400,520],[280,360],[380,400],[420,450]];
const cl=[[650,420],[850,430],[750,600]];
const off=[[-22,-14],[18,-20],[-6,14],[24,12],[-26,18],[4,-34]];
BLUE['supervised-vs-unsupervised-learning'] = {
 pill:'AI AND DATA', title:'How <em>Supervised and Unsupervised Learning</em> Work',
 svg:`<g class="part" id="ldata"><rect x="90" y="100" width="320" height="150" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M90 142 H410 M303 100 V250" stroke="${LB}" stroke-width="2" opacity=".6"/>
  ${T(143,131,'x₁')}${T(250,131,'x₂')}${T(357,131,'y')}${cells([143,250])}
  ${dot(357,165)}${tri(357,196)}${dot(357,225)}</g>
 <g class="part" id="lplot">${arr('M250 254 V312')}${axes(80,440)}
  ${circ.map(([x,y])=>dot(x,y)).join('')}${tris.map(([x,y])=>tri(x,y)).join('')}
  <path d="M80 350 L430 680" stroke="#F5B800" stroke-width="7" opacity=".45"/>
  <path class="flow" d="M80 350 L430 680" stroke="#F5B800" stroke-width="4" style="--p:1.4s"/></g>
 <g class="part" id="udata"><rect x="590" y="100" width="320" height="150" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M590 142 H910" stroke="${LB}" stroke-width="2" opacity=".6"/>
  ${T(670,131,'x₁')}${T(830,131,'x₂')}${cells([670,830])}</g>
 <g class="part" id="uplot">${arr('M750 254 V312')}${axes(580,940)}
  ${cl.map(([cx,cy])=>off.map(([a,b])=>`<circle cx="${cx+a}" cy="${cy+b}" r="8" fill="#fff"/>`).join('')).join('')}
  ${cl.map(([cx,cy],i)=>`<g class="pulse" style="animation-delay:${i*0.4}s"><circle cx="${cx}" cy="${cy}" r="52" fill="none" stroke="${TL}" stroke-width="5" stroke-dasharray="10 7"/></g>
   <path d="M${cx-8} ${cy-8} L${cx+8} ${cy+8} M${cx+8} ${cy-8} L${cx-8} ${cy+8}" stroke="#F5B800" stroke-width="4"/>`).join('')}</g>`,
 labels:[[250,80,'Labelled data',250,98,'middle'],[750,80,'Unlabelled data',750,98,'middle'],
         [330,742,'Decision boundary',400,652,'middle'],[750,742,'Clusters',750,654,'middle']],
 steps:[['Supervised learning trains on <b>labelled</b> data: every input x has a known target y.',['ldata']],
        ['It learns a function f from x to y for <b>classification</b> or <b>regression</b>, here a decision boundary.',['lplot']],
        ['Unsupervised learning has only x and finds structure on its own, such as <b>clusters</b>.',['udata','uplot']]],
 fact:['ŷ = w₁x₁ + ... + wₙxₙ + b','Training chooses the weights w and bias b that minimise the error, often the mean squared error.'],
 end:'Classification, regression, clustering, dimensionality reduction, a worked example and how to choose.',
 caption:'Labelled or unlabelled data? How supervised and unsupervised machine learning differ, in 22 seconds.',
 tags:['#MachineLearning','#SupervisedLearning','#UnsupervisedLearning','#DataScience','#ZentaEngineering']};
})();
