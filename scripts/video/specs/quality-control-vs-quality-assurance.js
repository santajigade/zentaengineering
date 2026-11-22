// Video spec for /quality-control-vs-quality-assurance/. Facts from the article only.
// QA surrounds the whole process with a corrective action loop back to design; QC checks the product at incoming, in-process and final points.
(()=>{
const F='font-family="Open Sans"';
const box=[[40,'Design'],[230,'Purchasing'],[420,'Production'],[610,'Delivery']];
BLUE['quality-control-vs-quality-assurance'] = {
 pill:'MANUFACTURING', title:'How <em>QA and QC</em> Work Together',
 svg:`<g class="part" id="qa"><rect x="20" y="160" width="770" height="460" rx="26" fill="${TL}" fill-opacity=".18" stroke="${TL}" stroke-width="5" stroke-dasharray="16 10"/></g>
 <g class="part" id="boxes">${box.map(([x,t])=>`<rect x="${x}" y="330" width="160" height="80" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <text x="${x+80}" y="379" text-anchor="middle" fill="#fff" ${F} font-weight="800" font-size="24">${t}</text>`).join('')}
  <rect x="820" y="330" width="160" height="80" rx="12" fill="#F5B800" stroke="${LB}" stroke-width="4"/>
  <text x="900" y="379" text-anchor="middle" fill="#061630" ${F} font-weight="800" font-size="24">Customer</text></g>
 <g class="part" id="flow"><path d="M200 370 H230 M390 370 H420 M580 370 H610 M770 370 H820" stroke="${LB}" stroke-width="7"/>
  <path class="flow" d="M200 370 H230 M390 370 H420 M580 370 H610 M770 370 H820" stroke="#fff" stroke-width="4" style="--p:.7s"/></g>
 <g class="part" id="qc"><path d="M405 370 V478 M500 410 V478 M595 370 V478" stroke="#e5654f" stroke-width="3" stroke-dasharray="8 6"/>
  ${[405,500,595].map(x=>`<g class="pulse"><path d="M${x} 478 L${x+22} 500 L${x} 522 L${x-22} 500 Z" fill="#e5654f" stroke="#fff" stroke-width="3"/></g>`).join('')}
  ${[[375,507,'Incoming','end'],[500,556,'In-process','middle'],[625,507,'Final','start']].map(([x,y,t,a])=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="#fff" ${F} font-weight="700" font-size="20">${t}</text>`).join('')}</g>
 <g class="part" id="loop"><path d="M690 330 V250 H120 V322" fill="none" stroke="${TL}" stroke-width="6" marker-end="url(#ah)"/>
  <path class="flow" d="M690 328 V250 H120 V316" fill="none" stroke="#fff" stroke-width="3" style="--p:1.4s"/></g>`,
 labels:[[40,135,'Quality assurance',70,162],[250,232,'Corrective action',300,250],[600,668,'Quality control checks',595,522]],
 steps:[['<b>Quality assurance</b> sets the plans, procedures, training and audits for the whole process.',['qa','boxes']],
        ['<b>Quality control</b> checks the product at <b>incoming</b>, <b>in-process</b> and <b>final</b> inspection.',['qc','flow']],
        ['QC records the defect. QA leads the <b>corrective action</b> so the cause does not come back.',['loop']]],
 fact:['Cost of quality = 14% of sales','In the worked example, 57% of it is failure cost and first pass yield is 92%.'],
 end:'ISO 9000 definitions, a comparison table, QC and QA tools, cost of quality and a worked example.',
 caption:'What is the difference between quality control and quality assurance? Detection vs prevention in 22 seconds.',
 tags:['#QualityControl','#QualityAssurance','#Manufacturing','#EngineeringStudents','#ZentaEngineering']};
})();
