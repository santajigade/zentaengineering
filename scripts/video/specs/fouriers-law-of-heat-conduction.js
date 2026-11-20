// Video spec for /fouriers-law-of-heat-conduction/. Facts from the article only.
BLUE['fouriers-law-of-heat-conduction'] = {
 pill:'MECHANICAL', title:'How <em>Fourier\'s Law</em> of Heat Conduction Works',
 svg:`<g class="part" id="hot"><rect x="110" y="200" width="140" height="380" rx="10" fill="#b8432f" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="wall"><rect x="260" y="200" width="480" height="380" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  ${Array.from({length:6},(_,i)=>Array.from({length:4},(_,j)=>`<circle cx="${300+i*80}" cy="${240+j*100}" r="7" fill="${NV}" opacity=".55"/>`).join('')).join('')}</g>
 <g class="part" id="cold"><rect x="750" y="200" width="140" height="380" rx="10" fill="#2f6fb8" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="flux">${[290,390,490].map(y=>`<path class="flow" d="M140 ${y} H870" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:1s"/>`).join('')}</g>
 <g class="part" id="profile"><path d="M260 230 L740 550" stroke="#F5B800" stroke-width="7"/><circle cx="260" cy="230" r="11" fill="#F5B800"/><circle cx="740" cy="550" r="11" fill="#F5B800"/></g>
 <g class="part" id="dims"><path d="M260 640 H740 M260 625 V655 M740 625 V655" stroke="#fff" stroke-width="3"/>
  <text x="500" y="690" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="34">L</text></g>`,
 labels:[[250,160,'Hot face T₁',258,232,'end'],[760,650,'Cold face T₂',742,550],[520,150,'Wall, conductivity k',500,202],[880,160,'Heat flux q',860,290],[240,700,'Thickness L',290,640,'end']],
 steps:[['Heat flows from the <b>hot face</b> to the <b>cold face</b>, in the direction temperature falls.',['hot','cold','flux']],
        ['In a plane wall at steady state, temperature falls in a <b>straight line</b> across the thickness L.',['profile','dims']],
        ['A higher <b>conductivity k</b> passes more heat: copper 401 W/m·K, stainless steel 14.9 W/m·K.',['wall','flux']]],
 fact:['q = k A ΔT / L','Heat flows faster through thin, conductive, large sections.'],
 end:'Thermal conductivity, plane walls, cylinders, thermal resistance and a worked example.',
 caption:'How does heat move through a solid wall? Fourier\'s law, thermal conductivity and the linear temperature profile in 22 seconds.',
 tags:['#FouriersLaw','#HeatTransfer','#MechanicalEngineering','#EngineeringStudents','#ZentaEngineering']};
