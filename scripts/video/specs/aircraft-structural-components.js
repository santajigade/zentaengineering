// Video spec for /aircraft-structural-components/. Facts from the article only.
BLUE['aircraft-structural-components'] = {
 pill:'AEROSPACE', title:'How <em>Aircraft Structures</em> Work',
 svg:`<g class="part" id="fus">${ring(200,380,140,124,TL)}
  ${Array.from({length:16},(_,i)=>{const [x,y]=P(200,380,118,i*22.5);return `<rect x="${x-5}" y="${y-5}" width="10" height="10" fill="#fff" opacity=".8"/>`}).join('')}
  <path d="M88 430 H312" stroke="#fff" stroke-width="6"/><path d="M130 430 V490 M200 430 V502 M270 430 V490" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="wing"><path d="M335 385 L920 340 L920 356 L335 425 Z" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${[430,530,630,730,830].map(x=>{const t=385-(x-335)*45/585, b=425-(x-335)*69/585;return `<path d="M${x} ${t+3} V${b-3}" stroke="${LB}" stroke-width="2" opacity=".7"/>`}).join('')}</g>
 <g class="part" id="lift">${[[460,140],[600,130],[740,110],[880,80]].map(([x,l])=>{const t=385-(x-335)*45/585-8;return `<path class="flow" d="M${x} ${t} V${t-l}" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:1s"/>`}).join('')}</g>
 <g class="part" id="path"><path class="flow" d="M905 352 L340 404 A132 132 0 0 1 200 512" fill="none" stroke="#F5B800" stroke-width="5" marker-end="url(#ah)" style="--p:1s"/>
  <path class="flow" d="M905 352 L340 404 A132 132 0 0 0 200 248" fill="none" stroke="#F5B800" stroke-width="5" marker-end="url(#ah)" style="--p:1s"/></g>
 <g class="part" id="spar"><path d="M650 395 V505" stroke="${LB}" stroke-width="2" stroke-dasharray="6 6"/>
  <rect x="580" y="520" width="140" height="20" fill="${TL}" stroke="${LB}" stroke-width="3"/><rect x="642" y="540" width="16" height="100" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="580" y="640" width="140" height="20" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M540 530 H570" stroke="#fff" stroke-width="5" marker-end="url(#ahw)"/><path d="M760 530 H730" stroke="#fff" stroke-width="5" marker-end="url(#ahw)"/><path d="M580 650 H550" stroke="#fff" stroke-width="5" marker-end="url(#ahw)"/><path d="M720 650 H750" stroke="#fff" stroke-width="5" marker-end="url(#ahw)"/>
  <path d="M520 520 V660 M510 520 H530 M510 660 H530" stroke="${LB}" stroke-width="2"/><text x="500" y="600" text-anchor="end" fill="#fff" font-family="Open Sans" font-weight="800" font-size="30">h</text></g>
 <g class="part" id="weight"><path d="M200 535 V665" stroke="#fff" stroke-width="7" marker-end="url(#ahw)"/></g>`,
 labels:[[20,200,'Fuselage frame',107,287],[600,170,'Lift on skin',600,215,'middle'],[350,120,'Wing to fuselage joint',338,395],[980,430,'Wing box',850,365,'end'],[985,532,'Compression',765,530,'end'],[985,655,'Tension',765,650,'end'],[650,730,'Spar section',650,668,'middle'],[230,720,'Weight',205,680]],
 steps:[['Lift acts as pressure on the <b>skin</b>, which passes it to <b>stringers and ribs</b>, then to the spars.',['lift','wing']],
        ['The <b>spars</b> carry bending and shear inboard. The spar caps go into <b>tension and compression</b>.',['path','spar']],
        ['At the <b>wing to fuselage joint</b>, strong <b>frames</b> react the wing loads, so lift and weight balance.',['fus','weight']]],
 fact:['M<sub>root</sub> ≈ (L ÷ 2) × y','The spar caps carry this bending as F ≈ M ÷ h, where h is the spar depth.'],
 end:'Fuselage, wings, empennage, landing gear, load paths, materials and a wing bending example.',
 caption:'How does an aircraft structure carry lift? Skin, stringers, ribs, spars and frames in 22 seconds.',
 tags:['#AircraftStructures','#AerospaceEngineering','#Aviation','#EngineeringStudents','#ZentaEngineering']};
