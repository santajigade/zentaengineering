// Video spec for /medical-device-classification/. Facts from the article only.
// Risk ladder: four risk rows (low at the bottom, high at the top) against EU MDR, US FDA and India MDR 2017 classes,
// as in the article's comparison table (US Class II spans the two middle rows). Controls grow with risk.
(()=>{
const F='font-family="Open Sans" font-weight="800"';
const ROW=[['#13a89e',520],['#5aa86a',410],['#d59a3a',300],['#e5654f',190]]; // low, low-mod, mod-high, high (y top)
const H=100, COL=[['EU MDR',250],['US FDA',435],['India',620]], W=170;
const cell=(x,y,h,fill,t)=>`<rect x="${x}" y="${y}" width="${W}" height="${h}" rx="12" fill="${fill}" stroke="${LB}" stroke-width="3"/>
 <text x="${x+W/2}" y="${y+h/2+12}" text-anchor="middle" ${F} font-size="34" fill="#061630">${t}</text>`;
const head=(x,t)=>`<text x="${x+W/2}" y="160" text-anchor="middle" ${F} font-size="28" fill="#fff">${t}</text>`;
BLUE['medical-device-classification'] = {
 pill:'BIOMEDICAL', title:'How <em>Medical Device Classification</em> Works',
 svg:`<g class="part" id="risk"><path d="M860 625 V200" stroke="#e5654f" stroke-width="10" marker-end="url(#ah)"/>
  <path class="flow" d="M860 620 V215" stroke="#fff" stroke-width="4" style="--p:1s"/>
  <text x="905" y="420" text-anchor="middle" ${F} font-size="30" fill="#fff" transform="rotate(-90 905 420)">Higher risk</text></g>
 <g class="part" id="eu">${head(250,'EU MDR')}${['I','IIa','IIb','III'].map((t,i)=>cell(250,ROW[i][1],H,ROW[i][0],t)).join('')}</g>
 <g class="part" id="us">${head(435,'US FDA')}${cell(435,520,H,ROW[0][0],'I')}${cell(435,300,210,'#9aa36a','II')}${cell(435,190,H,ROW[3][0],'III')}</g>
 <g class="part" id="in">${head(620,'India')}${['A','B','C','D'].map((t,i)=>cell(620,ROW[i][1],H,ROW[i][0],t)).join('')}</g>
 <g class="part" id="ctrl"><rect x="250" y="655" width="540" height="64" rx="14" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <text x="520" y="697" text-anchor="middle" ${F} font-size="26" fill="#fff">ISO 13485 · ISO 14971 · clinical data</text>
  <g class="pulse"><path d="M520 650 V632" stroke="#F5B800" stroke-width="6" marker-end="url(#ah)"/></g></g>`,
 labels:[[20,240,'Pacemaker',248,240],[20,350,'Infusion pump',248,350],[20,460,'Hearing aid',248,460],[20,570,'Bandage',248,570]],
 steps:[['Devices are grouped by <b>risk</b>: intended purpose, contact duration, invasiveness and the body part affected.',['risk']],
        ['The EU uses Classes <b>I, IIa, IIb, III</b>, the US FDA <b>I, II, III</b> and India <b>A to D</b>.',['eu','us','in']],
        ['Higher classes need more: an <b>ISO 13485</b> quality system, <b>ISO 14971</b> risk management and clinical evidence.',['ctrl']]],
 fact:['22 rules in EU MDR Annex VIII','When several rules apply, the highest class applies.'],
 end:'Risk classes in the EU, US and India, the 22 EU rules, routes to market, standards and a worked example.',
 caption:'Why is a bandage Class I and a pacemaker Class III? Medical device classification in 22 seconds.',
 tags:['#MedicalDevices','#BiomedicalEngineering','#MedTech','#EngineeringStudents','#ZentaEngineering']};
})();
