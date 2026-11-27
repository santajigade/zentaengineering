// Video spec for /fiber-reinforced-composites/. Facts from the article only.
// Side view of a pultrusion line: creels, resin bath, guide, heated die, caterpillar pullers, cut-off saw.
// Fibers and profile move left to right; top puller wheels turn counterclockwise (bottom run moves right),
// bottom puller wheels turn clockwise (top run moves right).
(()=>{
const FB='#e8c27a', RS='#ff7a45';
const fib=[230,310,390].map(y=>`M70 ${y-34} C 150 ${y-34} 190 470 230 480 H330 C 370 470 390 330 420 330 H470`).join(' ');
const wheel=(x,y,cls)=>`<circle cx="${x}" cy="${y}" r="24" fill="${NV}" stroke="#fff" stroke-width="4"/><g class="${cls}" style="--p:1.2s"><path d="M${x-18} ${y}H${x+18}M${x} ${y-18}V${y+18}" stroke="#fff" stroke-width="4"/></g>`;
BLUE['fiber-reinforced-composites'] = {
 pill:'MATERIALS', title:'How <em>Pultrusion</em> Makes Fiber Composites',
 svg:`<g class="part" id="creels">${[230,310,390].map(y=>`<circle cx="70" cy="${y}" r="34" fill="${TL}" stroke="${LB}" stroke-width="4"/><circle cx="70" cy="${y}" r="9" fill="${NV}" stroke="${LB}" stroke-width="3"/>`).join('')}</g>
 <g class="part" id="bath"><path d="M180 420 H380 V530 H180 Z" fill="#5a2a22" stroke="${LB}" stroke-width="4"/><path d="M180 440 H380" stroke="${RS}" stroke-width="4"/></g>
 <g class="part" id="fibers"><path d="${fib}" fill="none" stroke="${FB}" stroke-width="6"/><path class="flow" d="${fib}" fill="none" stroke="#fff" stroke-width="4" style="--p:1.4s"/></g>
 <g class="part" id="guide"><rect x="412" y="290" width="18" height="80" fill="${NV}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="die"><rect x="470" y="290" width="190" height="80" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[490,530,570,610].map(x=>`<rect class="pulse" x="${x}" y="272" width="26" height="12" fill="${RS}"/><rect class="pulse" x="${x}" y="376" width="26" height="12" fill="${RS}"/>`).join('')}</g>
 <g class="part" id="profile"><rect x="660" y="314" width="330" height="32" fill="${TL}" stroke="${LB}" stroke-width="4"/><path class="flow" d="M480 330 H985" stroke="#fff" stroke-width="5" style="--p:1.4s"/></g>
 <g class="part" id="pullers"><rect x="700" y="246" width="150" height="64" rx="32" fill="none" stroke="${LB}" stroke-width="5"/><rect x="700" y="350" width="150" height="64" rx="32" fill="none" stroke="${LB}" stroke-width="5"/>
  ${wheel(732,278,'spin-ccw')+wheel(818,278,'spin-ccw')+wheel(732,382,'spin-cw')+wheel(818,382,'spin-cw')}</g>
 <g class="part" id="saw"><circle cx="930" cy="215" r="48" fill="${NV}" stroke="${LB}" stroke-width="4"/><g class="spin-cw" style="--p:.6s">${[0,45,90,135].map(a=>{const p=P(930,215,40,a),q=P(930,215,40,a+180);return `<path d="M${p[0]} ${p[1]} L${q[0]} ${q[1]}" stroke="#fff" stroke-width="4"/>`}).join('')}</g><path d="M930 265 V310" stroke="#fff" stroke-width="4" stroke-dasharray="8 6"/></g>`,
 labels:[[20,130,'Fiber creels',60,190],[160,620,'Resin bath',260,530],[330,220,'Guide',418,290,'middle'],[565,200,'Heated die',565,272,'middle'],
         [700,520,'Caterpillar pullers',770,414],[985,110,'Cut-off saw',920,170,'end'],[990,450,'Cured profile',950,346,'end']],
 steps:[['Continuous <b>fiber rovings</b> are pulled off creels and wetted out in a <b>resin bath</b>.',['creels','fibers','bath']],
        ['A <b>guide</b> shapes the fibers, then the resin <b>cures</b> inside the <b>heated die</b>.',['guide','die']],
        ['<b>Caterpillar pullers</b> pull the cured profile forward and a <b>saw</b> cuts it to length.',['pullers','profile','saw']]],
 fact:['E<sub>cl</sub> = E<sub>f</sub>V<sub>f</sub> + E<sub>m</sub>V<sub>m</sub>','In the worked carbon and epoxy example, the fibers carry about 99% of the load.'],
 end:'Glass, carbon and aramid fibers, matrix types, how composites are made, the rule of mixtures and a worked example.',
 caption:'How do you make a long composite profile in one continuous run? Pull the fibers through resin and a heated die.',
 tags:['#Composites','#CarbonFiber','#MaterialsEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
