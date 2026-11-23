// Video spec for /etl-vs-elt/. Facts from the article only.
// Top row ETL: sources, extract to a separate transform server, load clean data into the warehouse.
// Bottom row ELT: sources, extract and load raw data straight into the warehouse, transform in SQL inside it.
(()=>{
const txt=(x,y,t,s=22,c='#fff')=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const cyl=(cx,y,rx,h,fill=TL,bands=true)=>`<path d="M${cx-rx} ${y} V${y+h} A${rx} 16 0 0 0 ${cx+rx} ${y+h} V${y}" fill="${fill}" stroke="${LB}" stroke-width="4"/>
 <ellipse cx="${cx}" cy="${y}" rx="${rx}" ry="16" fill="${fill}" stroke="${LB}" stroke-width="4"/>
${bands?`<path d="M${cx-rx} ${y+h/3} A${rx} 16 0 0 0 ${cx+rx} ${y+h/3} M${cx-rx} ${y+2*h/3} A${rx} 16 0 0 0 ${cx+rx} ${y+2*h/3}" stroke="${LB}" stroke-width="3" fill="none"/>`:''}`;
const gear=(cx,cy,r)=>{let d='';const n=8;for(let i=0;i<n*2;i++){const a0=(i/(n*2))*2*Math.PI, a1=((i+1)/(n*2))*2*Math.PI, rr=i%2?r:r+12;
  d+=`${i?'L':'M'}${(cx+rr*Math.cos(a0)).toFixed(1)} ${(cy+rr*Math.sin(a0)).toFixed(1)} L${(cx+rr*Math.cos(a1)).toFixed(1)} ${(cy+rr*Math.sin(a1)).toFixed(1)} `;}
  return `<g class="spin-cw" style="--p:4s"><path d="${d}Z" fill="#fff" stroke="${LB}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${r*0.4}" fill="${NV}"/></g>`;};
const fl=(d,p='.9s')=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="10" opacity=".5"/><path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:${p}"/>`;
const tick=(x,y)=>`<path d="M${x-16} ${y} L${x-4} ${y+13} L${x+18} ${y-12}" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
BLUE['etl-vs-elt'] = {
 pill:'AI AND DATA', title:'How <em>ETL vs ELT</em> Pipelines Work',
 svg:`<g class="part" id="etlSrc">${cyl(120,150,62,90,NV,false)}${txt(120,212,'ERP',24)}</g>
 <g class="part" id="etlExt">${fl('M190 200 H372')}</g>
 <g class="part" id="etlTr"><rect x="380" y="125" width="180" height="150" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>${gear(470,200,34)}</g>
 <g class="part" id="etlLoad">${fl('M560 200 H762')}</g>
 <g class="part" id="etlWh">${cyl(860,150,80,90)}${tick(860,200)}</g>
 <path d="M40 330 H960" stroke="${LB}" stroke-width="2" stroke-dasharray="10 10" opacity=".6"/>
 <g class="part" id="eltSrc">${cyl(120,480,62,90,NV,false)}${txt(120,542,'IoT',24)}</g>
 <g class="part" id="eltExt">${fl('M190 530 H442','.7s')}</g>
 <g class="part" id="eltWh"><rect x="450" y="410" width="510" height="230" rx="16" fill="none" stroke="${LB}" stroke-width="4" stroke-dasharray="14 9"/>
  ${cyl(545,480,55,90,NV,false)}${txt(545,542,'RAW',24)}</g>
 <g class="part" id="eltTr">${fl('M602 530 H660','.9s')}${gear(705,530,30)}${fl('M750 530 H808','.9s')}
  ${cyl(875,480,58,90)}${tick(875,530)}</g>`,
 labels:[[70,95,'ETL',95,138,'middle'],[70,405,'ELT',95,468,'middle'],
         [120,300,'Sources',120,258,'middle'],[280,170,'Extract',280,196,'middle'],[470,105,'Transform server',470,125,'middle'],
         [660,170,'Load',660,196,'middle'],[860,300,'Warehouse',860,258,'middle'],
         [120,630,'Sources',120,588,'middle'],[320,500,'Extract, load raw',320,526,'middle'],
         [545,690,'Raw kept',545,588,'middle'],[705,460,'SQL',705,490,'middle'],[875,690,'Clean',875,588,'middle']],
 steps:[['<b>ETL</b> extracts from sources, transforms on a <b>separate server</b>, then loads only clean data.',['etlSrc','etlExt','etlTr','etlLoad','etlWh']],
        ['<b>ELT</b> extracts and loads <b>raw data</b> first, straight into the warehouse or lakehouse.',['eltSrc','eltExt','eltWh']],
        ['Transformation runs as <b>SQL inside the warehouse</b>, so it can be <b>changed and rerun</b> on raw data.',['eltTr']]],
 fact:['17.28 million a day','Readings from 200 meters read every second, loaded raw and transformed in the warehouse (ELT).'],
 end:'Both patterns, a comparison table, hybrid pipelines, good practice and a worked example.',
 caption:'ETL or ELT? The only difference is when data is transformed, and it changes cost, speed and flexibility.',
 tags:['#ETL','#ELT','#DataEngineering','#DataWarehouse','#ZentaEngineering']};
})();
