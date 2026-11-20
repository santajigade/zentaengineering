// Video spec for /pcb-grounding-techniques/. Facts from the article only.
BLUE['pcb-grounding-techniques'] = {
 pill:'ELECTRONICS', title:'How <em>PCB Grounding</em> Works',
 svg:`<g class="part" id="plane1"><rect x="60" y="70" width="880" height="250" rx="18" fill="${TL}" fill-opacity=".35" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="ic1"><rect x="95" y="150" width="130" height="95" rx="10" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="775" y="150" width="130" height="95" rx="10" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <text x="160" y="206" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">Driver</text><text x="840" y="206" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">Receiver</text></g>
 <g class="part" id="trace1"><line x1="225" y1="172" x2="775" y2="172" stroke="#ff8a50" stroke-width="12" opacity=".45"/><path class="flow" d="M225 172 H775" stroke="#ff8a50" stroke-width="6" marker-end="url(#ah)" style="--p:1s"/></g>
 <g class="part" id="ret1"><path class="flow" d="M775 222 H225" stroke="#fff" stroke-width="6" marker-end="url(#ahw)" style="--p:1s"/></g>
 <g class="part" id="plane2"><path d="M60 418 Q60 400 78 400 H470 V600 H530 V400 H922 Q940 400 940 418 V662 Q940 680 922 680 H78 Q60 680 60 662 Z" fill="${TL}" fill-opacity=".35" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="ic2"><rect x="95" y="480" width="130" height="95" rx="10" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="775" y="480" width="130" height="95" rx="10" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <text x="160" y="536" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">Driver</text><text x="840" y="536" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="24">Receiver</text></g>
 <g class="part" id="trace2"><line x1="225" y1="502" x2="775" y2="502" stroke="#ff8a50" stroke-width="12" opacity=".45"/><path class="flow" d="M225 502 H775" stroke="#ff8a50" stroke-width="6" marker-end="url(#ah)" style="--p:1s"/></g>
 <g class="part" id="ret2"><path class="flow" d="M775 552 H555 V640 H445 V552 H225" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round" marker-end="url(#ahw)" style="--p:1.3s"/></g>
 <g class="part" id="loop"><path class="pulse" d="M445 552 V640 H555 V552" fill="none" stroke="#F5B800" stroke-width="3" stroke-dasharray="10 8"/></g>`,
 labels:[[500,120,'Signal trace',500,166,'middle'],[500,290,'Return current under trace',500,228,'middle'],[700,368,'Solid ground plane',700,322,'middle'],[700,445,'Slot in plane',532,440,'start'],[690,630,'Return detours',557,618,'start'],[300,650,'Bigger loop',443,600,'middle']],
 steps:[['Every current returns to its source. At high frequency the <b>return current</b> flows <b>right under the trace</b>.',['trace1','ret1']],
        ['A <b>slot</b> in the ground plane forces the return current to <b>detour</b> around its end.',['plane2','ret2']],
        ['The detour makes a <b>bigger loop</b>, with more inductance, more radiation and more noise.',['loop','ret2']]],
 fact:['V<sub>gnd</sub> = I R + L di/dt','Return current through ground copper shifts the reference. The L di/dt part is ground bounce.'],
 end:'Ground planes, star and multipoint grounds, mixed-signal layout and a worked ground drop example.',
 caption:'Why does PCB grounding matter? Return current, ground planes and the slot that makes a loop, in 22 seconds.',
 tags:['#PCBDesign','#ElectronicsEngineering','#EMC','#Grounding','#ZentaEngineering']};
