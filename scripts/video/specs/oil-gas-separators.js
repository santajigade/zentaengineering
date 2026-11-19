// Video spec for /oil-gas-separators/. Facts from the article only.
BLUE['oil-gas-separators'] = {
 pill:'PETROLEUM', title:'How <em>Oil and Gas Separators</em> Work',
 svg:`<defs><clipPath id="vclip"><rect x="120" y="200" width="760" height="360" rx="180"/></clipPath></defs>
 <g class="part" id="vessel"><rect x="120" y="200" width="760" height="360" rx="180" fill="${NV}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="liquids"><g clip-path="url(#vclip)"><rect x="100" y="470" width="620" height="100" fill="#2f7fd0" opacity=".85"/><rect x="100" y="395" width="620" height="75" fill="#c98a3a" opacity=".9"/>
  <rect x="726" y="470" width="160" height="100" fill="#c98a3a" opacity=".9"/></g>
  <text x="420" y="445" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">OIL</text><text x="420" y="530" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28">WATER</text>
  <text x="470" y="245" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="28" opacity=".85">GAS</text></g>
 <g class="part" id="weir"><rect x="716" y="392" width="10" height="168" fill="#fff"/><path class="flow" d="M690 392 Q 730 370 760 420" fill="none" stroke="#F5B800" stroke-width="4" style="--p:1s"/></g>
 <g class="part" id="inlet"><rect x="10" y="272" width="170" height="36" fill="${NV}" stroke="${LB}" stroke-width="3"/><path class="flow" d="M20 290 H190" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:.7s"/></g>
 <g class="part" id="diverter"><rect x="200" y="235" width="14" height="115" fill="#fff"/>${[[225,360],[240,385],[215,400],[250,350]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="6" fill="#c98a3a"/>`).join('')}</g>
 <g class="part" id="gasflow">${[262,300,338].map(y=>`<path class="flow" d="M240 ${y} H745" stroke="#fff" stroke-width="4" opacity=".85" marker-end="url(#ahw)" style="--p:1.4s"/>`).join('')}
  ${[[360,320],[480,350],[600,310],[420,360]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#c98a3a"/>`).join('')}</g>
 <g class="part" id="mist"><rect x="755" y="210" width="45" height="150" fill="none" stroke="#F5B800" stroke-width="3"/><path d="M755 225 L800 255 M755 255 L800 285 M755 285 L800 315 M755 315 L800 345 M800 225 L755 255 M800 255 L755 285 M800 285 L755 315 M800 315 L755 345" stroke="${LB}" stroke-width="2"/></g>
 <g class="part" id="outlets"><rect x="822" y="120" width="36" height="85" fill="${NV}" stroke="${LB}" stroke-width="3"/><path class="flow" d="M840 205 V115" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:.8s"/>
  <rect x="582" y="560" width="36" height="60" fill="${NV}" stroke="${LB}" stroke-width="3"/><path class="flow" d="M600 560 V625" stroke="${LB}" stroke-width="5" marker-end="url(#ah)" style="--p:1s"/>
  <rect x="782" y="560" width="36" height="60" fill="${NV}" stroke="${LB}" stroke-width="3"/><path class="flow" d="M800 560 V625" stroke="#F5B800" stroke-width="5" marker-end="url(#ah)" style="--p:1s"/></g>`,
 labels:[[20,245,'Well stream in',90,280],[160,170,'Inlet diverter',207,238],[705,170,'Mist extractor',778,212,'end'],[878,105,'Gas out',848,140],[990,470,'Weir',726,420,'end'],[600,672,'Water out',600,628,'middle'],[815,672,'Oil out',800,628,'middle']],
 steps:[['The well stream hits the <b>inlet diverter</b>. The sudden change in momentum knocks out most of the liquid.',['diverter','inlet']],
        ['Gas flows slowly along the top. <b>Droplets settle out</b>, and the <b>mist extractor</b> catches the finest ones.',['gasflow','mist']],
        ['With retention time, <b>water sinks below the oil</b>. Oil spills over the <b>weir</b>; water leaves from the bottom.',['liquids','weir']]],
 fact:['Stokes law: V<sub>t</sub> = g Δρ d² ÷ (18 μ)','Separation relies on density difference: gas rises, oil floats, water sinks.'],
 end:'Separator parts, vertical vs horizontal designs, sizing and a worked example.',
 caption:'How does a separator split a well stream into gas, oil and water? Diverter, settling, mist extractor and weir in 22 seconds.',
 tags:['#OilAndGas','#PetroleumEngineering','#ProcessEngineering','#EngineeringStudents','#ZentaEngineering']};
