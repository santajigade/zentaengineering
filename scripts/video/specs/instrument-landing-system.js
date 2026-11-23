// Video spec for /instrument-landing-system/. Facts from the article only.
BLUE['instrument-landing-system'] = {
 pill:'AEROSPACE', title:'How an <em>Instrument Landing System</em> Works',
 svg:`<g class="part" id="loc">
  <path d="M910 200 L90 200 Q70 120 180 95 C450 60 760 120 910 200 Z" fill="#2f7fc1" fill-opacity=".45" stroke="${LB}" stroke-width="3"/>
  <path d="M910 200 L90 200 Q70 280 180 305 C450 340 760 280 910 200 Z" fill="${TL}" fill-opacity=".45" stroke="${LB}" stroke-width="3"/>
  <text x="400" y="152" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="30">90 Hz</text>
  <text x="400" y="268" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="30">150 Hz</text>
  <path d="M60 200 H560" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M60 200 H550" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:1s"/>
  <g class="pulse"><circle cx="910" cy="200" r="12" fill="#fff"/></g></g>
 <g class="part" id="runway"><rect x="560" y="186" width="300" height="28" rx="3" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <rect x="560" y="696" width="300" height="10" fill="${NV}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="plane1"><g transform="translate(230 200)">
  <path d="M34 0 L-30 0" stroke="#fff" stroke-width="12" stroke-linecap="round"/>
  <path d="M10 0 L-6 -40 L-14 -40 L-8 0 L-14 40 L-6 40 Z" fill="#fff"/>
  <path d="M-22 0 L-32 -16 L-36 -16 L-32 0 L-36 16 L-32 16 Z" fill="#fff"/></g></g>
 <g class="part" id="ground"><path d="M40 700 H960" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="gs">
  <path d="M640 698 L80 520 L80 470 C300 480 560 600 640 698 Z" fill="#2f7fc1" fill-opacity=".45" stroke="${LB}" stroke-width="3"/>
  <path d="M640 698 L80 520 L80 600 C320 655 560 690 640 698 Z" fill="${TL}" fill-opacity=".45" stroke="${LB}" stroke-width="3"/>
  <text x="255" y="537" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">90 Hz</text>
  <text x="400" y="660" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">150 Hz</text>
  <path d="M80 520 L640 698" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M80 520 L630 695" stroke="#fff" stroke-width="4" style="--p:1s"/>
  <path d="M640 700 V666" stroke="#fff" stroke-width="6"/>
  <g class="pulse"><circle cx="640" cy="662" r="10" fill="#fff"/></g></g>
 <g class="part" id="plane2"><g transform="translate(270 581) rotate(17.6)">
  <path d="M30 0 L-28 0" stroke="#fff" stroke-width="10" stroke-linecap="round"/>
  <path d="M-20 0 L-30 -20" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
  <path d="M6 0 L-6 8" stroke="#fff" stroke-width="7" stroke-linecap="round"/></g></g>
 <g class="part" id="markers">
  <g class="pulse"><path d="M160 698 L138 490 L182 490 Z" fill="#F5B800" fill-opacity=".35" stroke="#F5B800" stroke-width="3"/></g>
  <g class="pulse"><path d="M500 698 L486 610 L514 610 Z" fill="#F5B800" fill-opacity=".35" stroke="#F5B800" stroke-width="3"/></g></g>`,
 labels:[[960,140,'Localizer',910,188,'end'],[300,60,'Course line, DDM = 0',300,198,'middle'],[700,620,'Glide slope',644,660],[960,745,'Runway',800,708,'end'],[160,748,'Outer marker',160,704,'middle'],[480,748,'Middle marker',500,704,'middle']],
 steps:[['The <b>localizer</b> beyond the runway puts <b>90 Hz</b> on the pilot\'s left and <b>150 Hz</b> on the right.',['loc','plane1','runway']],
        ['The <b>glide slope</b> beside the touchdown zone sets a <b>3 degree</b> path: 90 Hz above, 150 Hz below.',['gs','plane2','ground']],
        ['The receiver compares the tones as <b>DDM</b>, zero on the path. <b>75 MHz markers</b> mark range.',['markers','plane2']]],
 fact:['h = TCH + d tan θ','About 318 ft of height per nautical mile on a 3 degree glide path.'],
 end:'Localizer, glide slope, DDM, marker beacons, ILS categories and a glide path example.',
 caption:'How does an ILS guide an aircraft to the runway? Localizer, glide slope, 90 Hz and 150 Hz tones and DDM in 22 seconds.',
 tags:['#Avionics','#AerospaceEngineering','#Aviation','#EngineeringStudents','#ZentaEngineering']};
