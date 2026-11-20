// Video spec for /satellite-subsystems/. Facts from the article only.
(()=>{
const panel=(x)=>`<rect x="${x}" y="290" width="290" height="90" fill="${NV}" stroke="${LB}" stroke-width="3"/>${[1,2,3,4,5].map(i=>`<path d="M${x+i*290/6} 290V380" stroke="${LB}" stroke-width="1.5" opacity=".7"/>`).join('')}<path d="M${x} 335H${x+290}" stroke="${LB}" stroke-width="1.5" opacity=".7"/>`;
BLUE['satellite-subsystems'] = {
 pill:'AEROSPACE', title:'How <em>Satellite Subsystems</em> Work',
 svg:`<g class="part" id="earth"><path d="M0 760 Q500 640 1000 760Z" fill="${NV}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="sun"><circle class="pulse" cx="70" cy="80" r="34" fill="#F5B800"/></g>
 <g class="part" id="rays">${[[40,150],[95,150]].map(([x,y])=>`<path class="flow" d="M${x} ${y} L${x+47} ${y+132}" stroke="#F5B800" stroke-width="4" marker-end="url(#ah)" style="--p:.8s"/>`).join('')}</g>
 <g class="part" id="arrays">${panel(50)}${panel(660)}<path d="M340 335H400M600 335H660" stroke="${LB}" stroke-width="6"/></g>
 <g class="part" id="bus"><rect x="400" y="230" width="200" height="220" rx="6" fill="${TL}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="rad"><rect x="420" y="208" width="160" height="22" fill="#fff" stroke="${LB}" stroke-width="2"/>
  ${[455,500,545].map(x=>`<path class="flow" d="M${x} 200 V130" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:1.1s"/>`).join('')}</g>
 <g class="part" id="rw"><circle cx="455" cy="292" r="36" fill="${NV}" stroke="${LB}" stroke-width="3"/><g class="spin-cw" style="--p:1.2s"><circle cx="455" cy="292" r="28" fill="none" stroke="#fff" stroke-width="3"/><path d="M455 264V320M427 292H483" stroke="#fff" stroke-width="3"/></g></g>
 <g class="part" id="batt"><rect x="512" y="262" width="70" height="58" rx="6" fill="#5a6b80" stroke="${LB}" stroke-width="2.5"/><text x="547" y="298" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="20">Li-ion</text></g>
 <g class="part" id="obc"><rect x="440" y="355" width="120" height="58" rx="6" fill="${NV}" stroke="${LB}" stroke-width="2.5"/><text x="500" y="392" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="22">OBC</text></g>
 <g class="part" id="thr"><path d="M400 420 L372 408 V444 L400 432Z M600 420 L628 408 V444 L600 432Z" fill="#c98a3a" stroke="${LB}" stroke-width="2"/>
  <path class="pulse" d="M370 414 L340 426 L370 438Z" fill="#fff" opacity=".8"/></g>
 <g class="part" id="pay"><path d="M330 702 L432 500 H468 L560 700" fill="${LB}" opacity=".12"/><rect x="425" y="450" width="50" height="34" fill="${NV}" stroke="${LB}" stroke-width="2.5"/><path d="M432 484 H468 L462 502 H438Z" fill="#fff"/></g>
 <g class="part" id="ant"><path d="M560 450 V478" stroke="${LB}" stroke-width="4"/><path d="M536 470 Q566 520 612 492" fill="none" stroke="#fff" stroke-width="5"/><path d="M574 494 L596 506" stroke="#fff" stroke-width="3"/>
  <path d="M712 702 L720 682 L728 702Z" fill="${LB}"/><path d="M704 684 Q722 704 738 680" fill="none" stroke="#fff" stroke-width="4"/></g>
 <g class="part" id="link"><path class="flow" d="M598 510 L708 676" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:.7s"/><path class="flow" d="M724 670 L616 506" stroke="${LB}" stroke-width="4" marker-end="url(#ah)" style="--p:.7s"/></g>`,
 labels:[[130,52,'Sunlight',96,70],[230,450,'Solar array',160,382,'end'],[640,150,'Radiator',580,212],[700,220,'Battery',582,282],[372,240,'Reaction wheel',430,275,'end'],[250,505,'Thruster',375,440,'end'],[700,445,'Onboard computer',560,395],[700,540,'TT&amp;C antenna',604,500],[770,665,'Ground station',738,684],[300,610,'Payload camera',440,494,'end']],
 steps:[['Multi-junction <b>solar arrays</b> turn sunlight into power. <b>Lithium-ion batteries</b> carry the satellite through eclipse.',['arrays','rays','sun','batt']],
        ['<b>Reaction wheels</b> and thrusters point the payload. <b>Radiators</b> reject heat to space by radiation.',['rw','thr','rad']],
        ['<b>TT&amp;C</b> radio links carry commands and telemetry. The <b>onboard computer</b> runs the satellite.',['ant','link','obc']]],
 fact:['Sunlight ≈ 1361 W/m²','Multi-junction gallium arsenide cells convert about 30% of it.'],
 end:'Payload and bus, power, thermal control, ADCS, propulsion, TT&amp;C and a power budget.',
 caption:'What keeps a satellite alive in orbit? Power, thermal control, attitude control, propulsion and communications in 22 seconds.',
 tags:['#Satellite','#Spacecraft','#AerospaceEngineering','#SpaceTech','#ZentaEngineering']};
})();
