// Video spec for /classification-vs-detection-vs-segmentation/. Facts from the article only.
// One inspection image with two defects is passed to three tasks: classification (one label for the image),
// detection (a box per defect) and segmentation (a pixel mask of each defect).
(()=>{
const txt=(x,y,t,s=24,c='#fff')=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const blob=(ox,oy)=>`M${ox+70} ${oy+78} C${ox+68} ${oy+58} ${ox+92} ${oy+52} ${ox+106} ${oy+62} C${ox+122} ${oy+72} ${ox+116} ${oy+98} ${ox+98} ${oy+104} C${ox+82} ${oy+110} ${ox+72} ${oy+96} ${ox+70} ${oy+78} Z`;
const crack=(ox,oy)=>`M${ox+140} ${oy+140} L${ox+158} ${oy+152} L${ox+170} ${oy+142} L${ox+186} ${oy+162} L${ox+202} ${oy+156} L${ox+218} ${oy+178}`;
const img=(ox,oy)=>`<rect x="${ox}" y="${oy}" width="280" height="240" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="${ox+20}" y="${oy+20}" width="240" height="200" rx="8" fill="#5f7d95"/>
  <circle cx="${ox+45}" cy="${oy+45}" r="8" fill="#3f5a70"/><circle cx="${ox+235}" cy="${oy+45}" r="8" fill="#3f5a70"/><circle cx="${ox+45}" cy="${oy+195}" r="8" fill="#3f5a70"/><circle cx="${ox+235}" cy="${oy+195}" r="8" fill="#3f5a70"/>
  <path d="${blob(ox,oy)}" fill="#7a4a2a"/><path d="${crack(ox,oy)}" stroke="#1d2a36" stroke-width="5" fill="none" stroke-linejoin="round"/>`;
const tag=(x,y,t,w=180)=>`<rect x="${x-w/2}" y="${y}" width="${w}" height="48" rx="24" fill="${TL}" stroke="${LB}" stroke-width="3"/>${txt(x,y+33,t,24)}`;
const arrow=(d)=>`<path d="${d}" stroke="${LB}" stroke-width="6" fill="none" opacity=".6"/><path class="flow" d="${d}" stroke="#fff" stroke-width="4" fill="none" marker-end="url(#ahw)" style="--p:.9s"/>`;
BLUE['classification-vs-detection-vs-segmentation'] = {
 pill:'AI AND DATA', title:'<em>Classification vs Detection vs Segmentation</em>: How Each Works',
 svg:`<g class="part" id="input">${img(360,10)}</g>
 <g class="part" id="arrows">${arrow('M450 252 L190 330')}${arrow('M500 252 V330')}${arrow('M550 252 L810 330')}</g>
 <g class="part" id="cls">${img(30,340)}<g class="pulse"><rect x="34" y="344" width="272" height="232" rx="10" fill="none" stroke="#F5B800" stroke-width="6"/></g>${tag(170,598,'Reject')}</g>
 <g class="part" id="det">${img(360,340)}<g class="pulse"><rect x="420" y="390" width="74" height="70" fill="none" stroke="#F5B800" stroke-width="5"/>
  <rect x="490" y="470" width="96" height="58" fill="none" stroke="#F5B800" stroke-width="5"/></g>${tag(500,598,'Box per defect',230)}</g>
 <g class="part" id="seg">${img(690,340)}<g><path d="${blob(690,340)}" fill="#ff4fd8" opacity=".85"/><path d="${crack(690,340)}" stroke="#ff4fd8" stroke-width="12" fill="none" stroke-linejoin="round" stroke-linecap="round" opacity=".85"/></g>${tag(830,598,'Pixel mask',200)}</g>`,
 labels:[[675,110,'Inspection image',642,120,'start'],[170,705,'Classification',170,648,'middle'],[500,705,'Object detection',500,648,'middle'],[830,705,'Segmentation',830,648,'middle']],
 steps:[['<b>Classification</b> gives the whole image one label, such as good or reject.',['cls']],
        ['<b>Object detection</b> finds each object with a class, a confidence score and a <b>bounding box</b>.',['det']],
        ['<b>Segmentation</b> labels every pixel, so the mask gives the exact shape and area of each defect.',['seg']]],
 fact:['IoU = overlap ÷ union','A detection usually counts as correct when IoU is at least 0.5 and the class matches.'],
 end:'Classification, detection and segmentation compared: outputs, models, metrics, labels and an IoU example.',
 caption:'Classification, detection or segmentation? See how much each computer vision task tells you about one image.',
 tags:['#ComputerVision','#DeepLearning','#MachineVision','#EngineeringStudents','#ZentaEngineering']};
})();
