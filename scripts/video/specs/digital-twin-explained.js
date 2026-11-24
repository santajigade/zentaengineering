// Video spec for /digital-twin-explained/. Facts from the article only.
// Physical pump with sensors (left) -> data via OPC UA / MQTT -> virtual model with pump curve (right) -> decisions back to the asset.
// Backward curved blades. Impeller turns clockwise: the tangential discharge leaves the top of the casing heading right.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
BLUE['digital-twin-explained'] = {
 pill:'AUTOMATION', title:'How a <em>Digital Twin</em> Works',
 svg:`<g class="part" id="asset"><rect x="30" y="140" width="330" height="460" rx="16" fill="${NV}" opacity=".6" stroke="${LB}" stroke-width="3"/>
  ${t(195,190,'Physical pump',28)}
  <circle cx="190" cy="390" r="110" fill="${TL}" stroke="${LB}" stroke-width="5"/>
  <path d="M190 280 H330 V340 H260" fill="${TL}" stroke="${LB}" stroke-width="5"/>
  <g class="spin-cw" style="--p:1.6s"><circle cx="190" cy="390" r="72" fill="none" stroke="#fff" stroke-width="3" opacity=".5"/>
   ${[0,60,120,180,240,300].map(a=>{const [x1,y1]=P(190,390,24,a),[x2,y2]=P(190,390,70,a-40);return `<path d="M${x1} ${y1} Q${P(190,390,52,a-5).join(' ')} ${x2} ${y2}" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/>`}).join('')}
   <circle cx="190" cy="390" r="22" fill="#fff"/></g>
  <path class="flow" d="M200 300 H320" stroke="#fff" stroke-width="3" style="--p:.8s"/>
  <rect x="140" y="520" width="100" height="56" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/>${t(190,556,'Motor',20)}<path d="M190 500 V520" stroke="${LB}" stroke-width="6"/></g>
 <g class="part" id="sensors">${[[330,300],[295,430],[250,548]].map(([x,y])=>`<g class="pulse"><circle cx="${x}" cy="${y}" r="13" fill="#F5B800" stroke="#fff" stroke-width="3"/></g>`).join('')}</g>
 <g class="part" id="link"><path d="M380 300 H600" stroke="${LB}" stroke-width="7" marker-end="url(#ah)"/>
  <path class="flow" d="M380 300 H592" stroke="#fff" stroke-width="3" style="--p:.9s"/>
  ${t(490,270,'OPC UA / MQTT',22)}</g>
 <g class="part" id="model"><rect x="620" y="140" width="350" height="460" rx="16" fill="${NV}" opacity=".6" stroke="${LB}" stroke-width="3"/>
  ${t(795,190,'Virtual model',28)}
  <rect x="650" y="220" width="290" height="230" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M680 260 V420 H920" stroke="${LB}" stroke-width="3" fill="none"/>
  <path d="M680 280 C760 285 840 310 910 380" stroke="#fff" stroke-width="5" fill="none"/>
  <g class="pulse"><circle cx="820" cy="345" r="10" fill="#F5B800"/></g>
  ${t(690,252,'Head',18,'start')}${t(915,442,'Flow',18,'end')}
  ${t(795,500,'Analyse, simulate',22)}${t(795,532,'and predict',22)}</g>
 <g class="part" id="back"><path d="M600 450 H380" stroke="${TL}" stroke-width="7" marker-end="url(#ah)"/>
  <path class="flow" d="M600 450 H388" stroke="#fff" stroke-width="3" style="--p:.9s"/>
  ${t(490,500,'Decisions',22)}${t(490,530,'set points',22)}</g>`,
 labels:[[60,660,'Sensors',248,560,'start'],[960,115,'Pump curve',902,372,'end']],
 steps:[['<b>Sensors</b> on the real pump measure flow, suction and discharge pressure, motor power and vibration.',['asset','sensors']],
        ['Data flows over <b>OPC UA</b> or <b>MQTT</b> to the <b>virtual model</b>, which compares it with the pump curve.',['link','model']],
        ['Results flow back as <b>decisions</b> or set points. Data in both directions makes it a <b>digital twin</b>.',['back','asset']]],
 fact:['Model, shadow, twin','No automatic data, then data one way, then data flowing automatically in both directions.'],
 end:'How data flows, integration levels, types of twins, industrial uses, benefits, challenges and a pump twin example.',
 caption:'What is a digital twin? A virtual model kept up to date by its real asset, with insights flowing back.',
 tags:['#DigitalTwin','#Industry40','#Automation','#EngineeringStudents','#ZentaEngineering']};
})();
