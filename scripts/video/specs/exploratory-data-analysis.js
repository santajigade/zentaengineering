// Video spec for /ai-data-engineering/exploratory-data-analysis/. Facts from the article only.
// Strip plot and box plot of the worked example's ten pump vibration readings, drawn to scale.
// x: 1.5..7.0 mm/s maps to 120..890. Q1 2.4, median 2.55, Q3 2.775, fences 1.84 and 3.34, outlier 6.9.
(()=>{
const X=v=>120+(v-1.5)*140;
const data=[2.1,2.3,2.4,2.4,2.5,2.6,2.7,2.8,3.0,6.9];
const seen={};
const dots=data.map(v=>{const n=(seen[v]=(seen[v]||0)+1);const y=260-(n-1)*20;
  return `<circle cx="${X(v)}" cy="${y}" r="7" fill="${v>6?'#e5654f':'#fff'}" ${v>6?'class="pulse"':''}/>`;}).join('');
const T=(x,y,t,s=26)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="${s}">${t}</text>`;
BLUE['exploratory-data-analysis'] = {
 pill:'DATA SCIENCE', title:'How <em>Exploratory Data Analysis</em> Works',
 svg:`<g class="part" id="axes"><path d="M110 600 H900" stroke="${LB}" stroke-width="5"/>
  ${[2,3,4,5,6,7].map(v=>`<path d="M${X(v)} 600 V614" stroke="${LB}" stroke-width="4"/>${T(X(v),650,v)}`).join('')}
  ${T(505,705,'Pump vibration velocity, mm/s',26)}</g>
 <g class="part" id="dots"><path d="M110 272 H900" stroke="${LB}" stroke-width="2" opacity=".4"/>${dots}</g>
 <g class="part" id="box"><path d="M${X(2.1)} 430 H${X(2.4)} M${X(2.775)} 430 H${X(3.0)} M${X(2.1)} 400 V460 M${X(3.0)} 400 V460" stroke="#fff" stroke-width="5"/>
  <rect x="${X(2.4)}" y="385" width="${X(2.775)-X(2.4)}" height="90" fill="${TL}" stroke="#fff" stroke-width="5"/>
  <path d="M${X(2.55)} 385 V475" stroke="#F5B800" stroke-width="6"/></g>
 <g class="part" id="fences"><path d="M${X(1.8375)} 330 V560 M${X(3.3375)} 330 V560" stroke="${LB}" stroke-width="4" stroke-dasharray="14 10"/></g>
 <g class="part" id="out"><circle class="pulse" cx="${X(6.9)}" cy="430" r="16" fill="#e5654f"/></g>`,
 labels:[[560,170,'10 daily readings',X(3.0)+14,240,'start'],[560,345,'1.5 × IQR fences',X(3.3375)+4,360,'start'],
         [440,540,'Box: Q1 to Q3',X(2.775),470,'start'],[840,540,'Outlier 6.9',X(6.9),448,'end']],
 steps:[['EDA looks at the data before any model: <b>structure, types and missing values</b> first.',['axes','dots']],
        ['Summarise each variable: median <b>2.55 mm/s</b>, IQR <b>0.375 mm/s</b>, drawn as a box plot.',['box']],
        ['Tukey fences at <b>1.84 and 3.34 mm/s</b> flag the <b>6.9 mm/s</b> reading as an outlier.',['fences','out']]],
 fact:['Fence = Q3 + 1.5 × IQR','The 6.9 mm/s reading had a z-score of only 2.80 yet fails the IQR rule.'],
 end:'The six EDA steps, Anscombe\'s quartet, key formulas, common plots and a worked outlier example.',
 caption:'Why look before you model? Exploratory data analysis and the box plot outlier rule.',
 tags:['#DataScience','#EDA','#Statistics','#EngineeringStudents','#ZentaEngineering']};
})();
