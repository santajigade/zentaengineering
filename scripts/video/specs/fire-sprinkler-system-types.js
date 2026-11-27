// Video spec for /fire-sprinkler-system-types/. Facts from the article only.
// Wet pipe system schematic: supply main, control valve, alarm check valve and flow switch on the riser,
// branch line under the ceiling with three heads. Only the head over the fire has opened; water flows
// from the supply up the riser to that head and sprays down onto the fire. The other heads stay shut.
(()=>{
const HOT='#ff7a45';
const pipe=d=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="24" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${TL}" stroke-width="14" stroke-linejoin="round"/>`;
const head=(x,open)=>`<path d="M${x} 182 V212" stroke="${LB}" stroke-width="10"/><path d="M${x-14} 196 L${x-14} 226 M${x+14} 196 L${x+14} 226" stroke="${LB}" stroke-width="4"/><path d="M${x-26} 228 H${x+26}" stroke="#fff" stroke-width="6"/>`+(open?'':`<ellipse cx="${x}" cy="216" rx="6" ry="10" fill="#e5484d" stroke="#fff" stroke-width="2"/>`);
BLUE['fire-sprinkler-system-types'] = {
 pill:'SAFETY', title:'How a <em>Wet Pipe Sprinkler</em> Works',
 svg:`<g class="part" id="room"><path d="M300 90 H970 M330 640 H970" stroke="#4f7a9c" stroke-width="4"/></g>
 <g class="part" id="pipes">${pipe('M40 700 H300 V170 H930')}
  <path class="flow" d="M40 700 H300 V170 H660 V200" fill="none" stroke="#fff" stroke-width="5" style="--p:.9s"/></g>
 <g class="part" id="cvalve"><path d="M272 580 L328 616 V580 L272 616 Z" fill="${NV}" stroke="${LB}" stroke-width="4"/><path d="M300 598 H350 M350 578 V618" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="avalve"><rect x="262" y="430" width="76" height="80" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/><path d="M276 492 L322 470" stroke="#fff" stroke-width="6"/><circle cx="276" cy="492" r="6" fill="#fff"/></g>
 <g class="part" id="fswitch"><rect x="312" y="330" width="44" height="40" rx="6" fill="${NV}" stroke="${LB}" stroke-width="4"/><path d="M312 350 H300" stroke="#fff" stroke-width="5"/></g>
 <g class="part" id="closed">${head(480,false)}${head(840,false)}</g>
 <g class="part" id="open">${head(660,true)}</g>
 <g class="part" id="spray">${[[590,420],[625,435],[660,445],[695,435],[730,420]].map(([x,y])=>`<path class="flow" d="M660 234 L${x} ${y}" stroke="${LB}" stroke-width="6" stroke-linecap="round" style="--p:.6s"/>`).join('')}</g>
 <g class="part" id="fire"><path class="pulse" d="M660 636 C610 632 604 590 628 560 C632 584 642 588 646 574 C650 552 664 540 668 520 C684 550 712 572 704 604 C700 626 684 636 660 636 Z" fill="${HOT}" stroke="#F5B800" stroke-width="4"/></g>`,
 labels:[[40,750,'From water supply',120,700],[20,560,'Control valve',272,598],[20,400,'Alarm check valve',262,450],
         [380,400,'Flow switch',356,360],[560,130,'Branch line',560,160,'middle'],[480,300,'Glass bulb intact',480,226,'middle'],
         [985,300,'Opened head',684,220,'end'],[780,600,'Fire',712,590]],
 steps:[['The pipes are <b>full of water under pressure</b>. Each closed head is held shut by a <b>glass bulb</b>.',['pipes','closed','cvalve']],
        ['Fire heats one head until its bulb <b>shatters at the rated temperature</b>. Only that head opens.',['fire','open']],
        ['Water discharges <b>at once</b> and the flow lifts the <b>alarm check valve</b> clapper to signal the alarm.',['spray','avalve','fswitch']]],
 fact:['Q = K √P','A K 80 head at 0.84 bar gives 73.2 L/min.'],
 end:'Wet pipe, dry pipe, preaction and deluge systems, head ratings, design formulas and a worked example.',
 caption:'Do all sprinklers go off at once? No. In a wet pipe system only the head heated by the fire opens.',
 tags:['#FireSprinkler','#FireProtection','#SafetyEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
