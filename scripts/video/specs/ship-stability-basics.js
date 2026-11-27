// Video spec for /ship-stability-basics/. Facts from the article only.
// Box hull section heeled 20 degrees (drawn at full scale) to starboard. Waterline level, B1 is the computed centroid of the heeled
// underwater area (same displaced area as upright), M is where the vertical through B1 meets the centreline.
// Weight acts down through G, buoyancy up through B1: the couple turns the ship back upright (anticlockwise here).
(()=>{
const F='font-family="Open Sans" font-weight="800" font-size="28" fill="#fff"';
const dot=(x,y,col)=>`<circle cx="${x}" cy="${y}" r="9" fill="${col}" stroke="#061630" stroke-width="3"/>`;
BLUE['ship-stability-basics'] = {
 pill:'MARINE', title:'How <em>Ship Stability</em> Works',
 svg:`<g class="part" id="sea"><rect x="0" y="470" width="1000" height="290" fill="${NV}" opacity=".55"/>
  <path d="M0 470 H1000" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M0 470 H1000" stroke="#fff" stroke-width="2" opacity=".6" style="--p:2.4s"/></g>
 <g class="part" id="hull"><path d="M298 205 L825 397 L722 679 L196 487 Z" fill="${TL}" fill-opacity=".35" stroke="${LB}" stroke-width="5" stroke-linejoin="round"/>
  <path d="M798 470 L722 679 L196 487 L202 470 Z" fill="${TL}" fill-opacity=".55"/>
  <path d="M579 254 L456 592" stroke="#fff" stroke-width="2.5" stroke-dasharray="10 8" opacity=".7"/>
  ${dot(459,583,LB)}<text x="424" y="618" ${F}>K</text></g>
 <g class="part" id="weight"><path class="flow" d="M507 456 V640" stroke="#e5654f" stroke-width="7" marker-end="url(#ah)" style="--p:.9s"/>
  ${dot(507,451,'#fff')}<text x="468" y="446" ${F}>G</text></g>
 <g class="part" id="buoy"><path class="flow" d="M559 535 V382" stroke="${LB}" stroke-width="7" marker-end="url(#ah)" style="--p:.9s"/>
  <path d="M559 374 V318" stroke="${LB}" stroke-width="3" stroke-dasharray="6 6"/>
  ${dot(559,540,LB)}<text x="574" y="534" ${F}>B<tspan font-size="20" dy="6">1</tspan></text>
  ${dot(479,526,'none')}<text x="440" y="540" font-family="Open Sans" font-weight="700" font-size="22" fill="#cfe6f5">B</text></g>
 <g class="part" id="meta"><g class="pulse">${dot(559,308,'#F5B800')}</g><text x="574" y="350" ${F}>M</text></g>
 <g class="part" id="gz"><path d="M507 451 H559" stroke="#F5B800" stroke-width="7"/>${dot(559,451,'#fff')}<text x="570" y="500" ${F}>Z</text></g>
 <g class="part" id="couple"><g class="pulse"><path d="M712 217 A330 330 0 0 0 387 160" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="14 10" marker-end="url(#ahw)"/></g></g>`,
 labels:[[985,170,'Metacentre M',566,305,'end'],[985,300,'Righting lever GZ',561,446,'end'],[30,440,'Waterline',160,470],
         [20,705,'Centre of gravity G',500,458],[985,735,'Centre of buoyancy B1',564,548,'end'],[30,110,'Righting couple',382,158]],
 steps:[['<b>Weight</b> acts down through <b>G</b>. <b>Buoyancy</b> acts up through <b>B</b>, the centroid of the underwater volume.',['hull','weight']],
        ['When the ship heels, <b>B moves to the low side</b> and the buoyancy line passes through the <b>metacentre M</b>.',['buoy','meta']],
        ['With M above G, weight and buoyancy form a <b>righting couple</b> with lever <b>GZ</b> that returns the ship upright.',['gz','couple']]],
 fact:['GZ ≈ GM sin θ','GM = KM − KG. Positive GM (M above G) means the ship rights itself.'],
 end:'Metacentre, GM, the GZ curve, free surface effect, the inclining experiment and a worked example.',
 caption:'Why does a heeled ship come back upright? G, B, the metacentre and the righting lever GZ in 22 seconds.',
 tags:['#ShipStability','#NavalArchitecture','#MarineEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
