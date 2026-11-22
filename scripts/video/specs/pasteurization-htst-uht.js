// Video spec for /pasteurization-htst-uht/. Facts from the article only.
// HTST schematic: balance tank, pump, regeneration (raw side top, pasteurized side bottom), heating,
// holding tube, flow diversion valve, cooling. Raw milk flows left to right on top, pasteurized milk returns right to left below.
(()=>{
const HOT='#ff7a45', COLD='#9fe3ff';
const plates=(x0,x1,y0,y1)=>{let s='';for(let x=x0+14;x<x1-6;x+=14)s+=`M${x} ${y0+10}V${y1-10}`;return `<path d="${s}" stroke="${LB}" stroke-width="2" opacity=".55"/>`;};
const txt=(x,y,t,s=24)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const pipe=(d,p='1.1s')=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="10" stroke-linejoin="round"/><path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" style="--p:${p}"/>`;
BLUE['pasteurization-htst-uht'] = {
 pill:'AGRICULTURAL', title:'How <em>HTST Pasteurization</em> Works',
 svg:`<g class="part" id="tank"><path class="flow" d="M95 50 V138" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:1s"/>
  <rect x="40" y="150" width="110" height="150" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/><rect x="46" y="200" width="98" height="94" rx="6" fill="#eef6ff" opacity=".85"/></g>
 <g class="part" id="pump">${pipe('M150 260 H195')}<circle cx="230" cy="260" r="34" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <g class="spin-cw" style="--p:.8s">${[0,90,180,270].map(a=>`<path d="M230 260 Q ${P(230,260,22,a-25).join(' ')} ${P(230,260,28,a+10).join(' ')} Z" fill="#fff"/>`).join('')}</g></g>
 <g class="part" id="raw">${pipe('M264 260 H812')}</g>
 <g class="part" id="regen"><rect x="380" y="190" width="140" height="370" rx="10" fill="${TL}" fill-opacity=".35" stroke="${LB}" stroke-width="4"/>${plates(380,520,190,560)}
  ${[415,485].map(x=>`<path class="flow" d="M${x} 470 V300" stroke="${HOT}" stroke-width="6" marker-end="url(#ah)" style="--p:1s"/>`).join('')}</g>
 <g class="part" id="heat"><rect x="600" y="190" width="140" height="140" rx="10" fill="${TL}" fill-opacity=".35" stroke="${LB}" stroke-width="4"/>${plates(600,740,190,330)}
  <path class="flow" d="M670 120 V182" stroke="${HOT}" stroke-width="7" marker-end="url(#ah)" style="--p:.8s"/>${txt(670,105,'Hot water',24)}</g>
 <g class="part" id="hold"><path d="M812 260 H825 V460 H870 V260 H915 V460 H960 V478" fill="none" stroke="${LB}" stroke-width="10" stroke-linejoin="round"/>
  <path class="flow" d="M812 260 H825 V460 H870 V260 H915 V460 H960 V478" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" style="--p:1.1s"/></g>
 <g class="part" id="fwd">${pipe('M935 500 H300')}</g>
 <g class="part" id="fdv"><path d="M935 478 H985 L935 522 H985 Z" fill="${NV}" stroke="${LB}" stroke-width="4"/><g class="pulse"><circle cx="960" cy="458" r="15" fill="#F5B800"/></g>${txt(960,466,'T',18)}</g>
 <g class="part" id="divert"><path d="M960 522 V690 H18 V240 H32" fill="none" stroke="${LB}" stroke-width="5" stroke-dasharray="14 10" marker-end="url(#ah)"/></g>
 <g class="part" id="cool"><rect x="160" y="440" width="140" height="120" rx="10" fill="${TL}" fill-opacity=".35" stroke="${LB}" stroke-width="4"/>${plates(160,300,440,560)}
  <path class="flow" d="M230 382 V432" stroke="${COLD}" stroke-width="7" marker-end="url(#ah)" style="--p:.8s"/>
  ${pipe('M230 560 V620')}<path d="M220 612 L230 632 L240 612 Z" fill="#fff"/></g>`,
 labels:[[110,40,'Raw milk 4 °C',100,62,'start'],[48,352,'Balance tank',95,302,'start'],[230,180,'Pump',230,226,'middle'],
         [450,160,'Regeneration',450,192,'middle'],[760,150,'Heating to 72 °C',700,192,'start'],[985,240,'Holding tube 15 s',935,262,'end'],
         [985,600,'Flow diversion valve',962,524,'end'],[560,740,'Divert if too cold',560,692,'middle'],[330,640,'Cooling to about 4 °C',268,560,'start']],
 steps:[['Cold raw milk from the <b>balance tank</b> is preheated in the <b>regeneration</b> section by hot pasteurized milk.',['tank','pump','raw','regen']],
        ['Hot water heats it to at least <b>72 °C</b>, and the <b>holding tube</b> keeps the fastest particle there for <b>15 s</b>.',['heat','hold']],
        ['If too cold, the <b>flow diversion valve</b> returns milk to the tank; if not, it is cooled to about 4 °C.',['fdv','divert','fwd','cool']]],
 fact:['72 °C for 15 s','HTST conditions for milk. Regeneration recovers up to about 90 to 95% of the heat.'],
 end:'Batch, HTST and UHT methods, D and z values, holding tube sizing and a worked example.',
 caption:'How does an HTST pasteurizer make milk safe? Regeneration, 72 °C heating, a 15 s holding tube and flow diversion.',
 tags:['#Pasteurization','#DairyProcessing','#FoodSafety','#EngineeringStudents','#ZentaEngineering']};
})();
