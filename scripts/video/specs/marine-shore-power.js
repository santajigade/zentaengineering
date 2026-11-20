// Video spec for /marine-shore-power/. Facts from the article only.
BLUE['marine-shore-power'] = {
 pill:'MARINE', title:'How <em>Shore Power</em> Works',
 svg:`<g class="part" id="quay"><rect x="0" y="530" width="440" height="130" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <path d="M440 650 Q470 638 500 650" stroke="${LB}" stroke-width="3" fill="none" opacity=".7"/></g>
 <g class="part" id="hull"><path d="M500 210 H975 V610 Q975 690 895 690 H580 Q500 690 500 610 Z" fill="${NV}" fill-opacity=".55" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="grid"><rect x="230" y="60" width="160" height="70" rx="8" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <text x="310" y="105" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">50 Hz</text></g>
 <g class="part" id="xfmr">${ring(310,195,32,26,TL)}${ring(310,237,32,26,TL)}</g>
 <g class="part" id="conv"><rect x="230" y="290" width="160" height="80" rx="8" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <text x="310" y="324" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="24">50 Hz</text>
  <text x="310" y="356" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="24">to 60 Hz</text></g>
 <g class="part" id="swbd"><rect x="230" y="420" width="160" height="80" rx="8" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M290 460 H302 L322 446 M326 460 H338" stroke="#fff" stroke-width="4" fill="none"/><circle cx="302" cy="460" r="4" fill="#fff"/></g>
 <g class="part" id="plug"><rect x="392" y="447" width="26" height="26" rx="4" fill="#fff"/></g>
 <g class="part" id="cable"><path d="M418 460 C465 460 452 160 523 160" stroke="#c98a3a" stroke-width="9" fill="none"/></g>
 <g class="part" id="reel"><path d="M545 202 L535 210 M585 202 L595 210" stroke="${LB}" stroke-width="4"/>
  <circle cx="565" cy="160" r="42" fill="#c98a3a" stroke="${LB}" stroke-width="3"/><circle cx="565" cy="160" r="14" fill="${NV}" stroke="#fff" stroke-width="3"/></g>
 <g class="part" id="scsb"><rect x="578" y="250" width="200" height="90" rx="8" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <text x="678" y="289" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="20">Shore connection</text>
  <text x="678" y="318" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="20">switchboard</text></g>
 <g class="part" id="sxf">${ring(715,385,30,24,TL)}${ring(715,425,30,24,TL)}</g>
 <g class="part" id="bus"><path d="M560 510 H950" stroke="#fff" stroke-width="10"/></g>
 <g class="part" id="dg"><circle cx="868" cy="420" r="38" fill="${NV}" stroke="${LB}" stroke-width="3" opacity=".6"/>
  <text x="868" y="431" text-anchor="middle" fill="#fff" opacity=".6" font-family="Open Sans" font-weight="800" font-size="30">G</text>
  <path d="M868 458 V510" stroke="${LB}" stroke-width="4" stroke-dasharray="8 8" opacity=".6"/></g>
 <g class="part" id="loads">${[790,890].map(x=>`<path d="M${x} 510 V535" stroke="${LB}" stroke-width="4"/><circle cx="${x}" cy="562" r="27" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <g class="spin-cw" style="--p:1.2s"><circle cx="${x}" cy="562" r="20" fill="none"/>${[0,120,240].map(a=>{const [x2,y2]=P(x,562,20,a);return `<path d="M${x} 562 L${x2} ${y2}" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`}).join('')}</g>`).join('')}</g>
 <g class="part" id="power">
  <path class="flow" d="M310 130 V163" stroke="#fff" stroke-width="5" style="--p:.8s"/>
  <path class="flow" d="M310 269 V290" stroke="#fff" stroke-width="5" style="--p:.8s"/>
  <path class="flow" d="M310 370 V420" stroke="#fff" stroke-width="5" style="--p:.8s"/>
  <path class="flow" d="M390 460 H392" stroke="#fff" stroke-width="5"/>
  <path class="flow" d="M418 460 C465 460 452 160 523 160" stroke="#fff" stroke-width="4" fill="none" style="--p:.8s"/>
  <path class="flow" d="M565 202 V295 H578" stroke="#fff" stroke-width="5" fill="none" style="--p:.8s"/>
  <path class="flow" d="M715 340 V355" stroke="#fff" stroke-width="5" style="--p:.8s"/>
  <path class="flow" d="M715 455 V505" stroke="#fff" stroke-width="5" style="--p:.8s"/>
  <path class="flow" d="M790 515 V535 M890 515 V535" stroke="#fff" stroke-width="4" style="--p:.8s"/></g>`,
 labels:[[200,103,'Port grid',230,95,'end'],[200,224,'Transformer',278,215,'end'],[200,338,'Converter',230,330,'end'],
         [310,600,'Shore switchboard',310,500,'middle'],[450,735,'HV cable and plug',462,330,'start'],[640,130,'Cable reel',600,150,'start'],
         [675,400,'6.6 kV/440 V',685,395,'end'],[868,368,'Generator off',868,382,'middle'],[560,625,'Main switchboard',600,510,'start']],
 steps:[['A <b>shore transformer</b> and a <b>frequency converter</b> turn the 50 Hz grid into the 60 Hz most ships use.',['grid','xfmr','conv']],
        ['Plugs with <b>pilot contacts</b> must be locked in before the shore breaker can close and power flows aboard.',['swbd','plug','cable','reel']],
        ['Load moves to shore power, a transformer steps 6.6 kV down to 440 V and the <b>generators stop</b>.',['scsb','sxf','bus','dg','loads']]],
 fact:['I = S ÷ (√3 V<sub>L</sub>)','A 2.0 MVA ship draws about 175 A at 6.6 kV but 2624 A at 440 V.'],
 end:'Shore and ship equipment, HV and LV standards, frequency matching, load transfer and safety.',
 caption:'How does a ship plug into the port grid? Transformer, 50 to 60 Hz converter, HV cable and load transfer in 22 seconds.',
 tags:['#ShorePower','#MarineEngineering','#ColdIroning','#EngineeringStudents','#ZentaEngineering']};
