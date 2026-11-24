// Video spec for /mooring-systems/. Facts from the article only.
// Semi-submersible at the surface. Left: chain catenary hanging from the fairlead, tangent to the seabed at touchdown, then along the seabed to a drag anchor.
// Right: taut synthetic rope running straight to a suction anchor. Environment arrow pushes the floater; flow dashes show line load from fairlead to anchor.
BLUE['mooring-systems'] = {
 pill:'MARINE', title:'How <em>Mooring Systems</em> Work',
 svg:`<g class="part" id="sea"><rect x="0" y="200" width="1000" height="440" fill="${NV}" opacity=".55"/>
  <path d="M0 200 H1000" stroke="${LB}" stroke-width="4"/><path class="flow" d="M0 200 H1000" stroke="#fff" stroke-width="2" style="--p:2s"/>
  <rect x="0" y="640" width="1000" height="90" fill="#5a4a32" opacity=".8"/><path d="M0 640 H1000" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="env"><path d="M60 90 H290" stroke="#e5654f" stroke-width="10" marker-end="url(#ah)"/>
  <path class="flow" d="M60 90 H280" stroke="#fff" stroke-width="3" style="--p:.8s"/>
  <text x="60" y="60" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">Wind, waves, current</text></g>
 <g class="part" id="floater"><rect x="400" y="110" width="200" height="30" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="420" y="140" width="40" height="112" fill="${TL}" stroke="${LB}" stroke-width="4"/><rect x="540" y="140" width="40" height="112" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="400" y="252" width="200" height="28" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <circle class="pulse" cx="430" cy="265" r="9" fill="#F5B800"/><circle class="pulse" cx="570" cy="265" r="9" fill="#F5B800"/></g>
 <g class="part" id="cat"><path d="M430 265 Q250 640 160 640 H72" fill="none" stroke="#fff" stroke-width="9"/>
  <path class="flow" d="M430 265 Q250 640 160 640 H72" fill="none" stroke="${NV}" stroke-width="3" style="--p:1s"/>
  <path d="M40 628 L74 640 L50 662 Z" fill="#c9ccd1" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="taut"><path d="M570 265 L880 610" fill="none" stroke="#c98a3a" stroke-width="8"/>
  <path class="flow" d="M570 265 L880 610" fill="none" stroke="#fff" stroke-width="3" style="--p:1s"/>
  <rect x="862" y="600" width="40" height="84" rx="5" fill="#c9ccd1" stroke="${LB}" stroke-width="3"/></g>`,
 labels:[[720,135,'Floater',602,135,'start'],[290,330,'Fairlead',430,265,'end'],[40,470,'Chain catenary',290,520,'start'],[150,600,'Touchdown',160,640,'end'],[90,710,'Drag anchor',60,655,'start'],[740,380,'Taut fibre rope',691,400,'start'],[882,740,'Suction anchor',882,684,'middle']],
 steps:[['Wind, waves and current push the <b>floater</b> off station; the mooring lines pull it back.',['floater','env']],
        ['A <b>chain catenary</b> resists through its weight and lies on the seabed at a <b>drag anchor</b>.',['cat']],
        ['A <b>taut fibre rope</b> resists through stretch and needs a <b>suction anchor</b> or pile.',['taut']]],
 fact:['T = T<sub>H</sub> + wh','Fairlead tension of a catenary line: horizontal tension plus line weight times height.'],
 end:'Spread, turret and CALM buoy layouts, catenary vs taut lines, anchors and a catenary tension example.',
 caption:'How do floating platforms stay in place? Catenary chain and taut fibre mooring systems explained.',
 tags:['#MooringSystems','#OffshoreEngineering','#MarineEngineering','#EngineeringStudents','#ZentaEngineering']};
