// Video spec for /environmental-engineering/nox-control-scr-sncr/. Facts from the article only.
// Boiler flue gas path: flame at the furnace bottom, gas rises up the furnace past the SNCR lances, crosses over,
// falls down the back pass past the economizer, rises in a duct past the ammonia injection grid, falls down through
// the SCR catalyst layers, then passes the air preheater and leaves toward the dust collector and stack.
(()=>{
const gas='M120 560 L160 520 V170 H330 V630 H430 V110 H560 V650 H740 V555 H985';
const duct=(d)=>`<path d="${d}" stroke="${LB}" stroke-width="46" fill="none" stroke-linejoin="miter"/><path d="${d}" stroke="${NV}" stroke-width="38" fill="none" stroke-linejoin="miter"/>`;
BLUE['nox-control-scr-sncr'] = {
 pill:'ENVIRONMENTAL', title:'How <em>NOx Control</em> Works',
 svg:`<g class="part" id="boiler"><path d="M50 680 V120 H370 V680 H290 V220 H210 V680 Z" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <ellipse class="pulse" cx="120" cy="600" rx="34" ry="50" fill="#F5B800"/></g>
 <g class="part" id="lances"><path d="M10 290 H60 M10 360 H60" stroke="#fff" stroke-width="8"/>
  <path class="flow" d="M60 290 L110 300 M60 290 L110 280 M60 360 L110 370 M60 360 L110 350" stroke="${LB}" stroke-width="4" stroke-dasharray="8 8" style="--p:.5s"/></g>
 <g class="part" id="econ"><path d="M298 480 H362 M298 510 H362 M298 540 H362 M298 570 H362 M298 600 H362" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="aig">${duct('M368 630 H430 V110 H560 V172')}<path d="M500 88 V132" stroke="#fff" stroke-width="7"/>
  <circle class="pulse" cx="500" cy="98" r="7" fill="#F5B800"/><circle class="pulse" cx="500" cy="122" r="7" fill="#F5B800"/></g>
 <g class="part" id="scr"><rect x="500" y="170" width="120" height="390" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <rect x="539" y="164" width="42" height="12" fill="${NV}"/><rect x="515" y="250" width="90" height="34" fill="${TL}" stroke="${LB}" stroke-width="3"/><rect x="515" y="350" width="90" height="34" fill="${TL}" stroke="${LB}" stroke-width="3"/><rect x="515" y="450" width="90" height="34" fill="${TL}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="aph"><rect x="690" y="500" width="100" height="110" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <path d="M705 530 H775 M705 555 H775 M705 580 H775" stroke="${LB}" stroke-width="3"/>${duct('M560 558 V650 H740 V604')}${duct('M784 555 H1000')}</g>
 <g class="part" id="gas"><path class="flow" d="${gas}" stroke="#fff" stroke-width="5" stroke-dasharray="16 14" style="--p:1s" fill="none"/></g>`,
 labels:[[30,80,'SNCR 870 to 1150 °C',62,290,'start'],[480,50,'Ammonia grid',500,92,'middle'],[660,250,'SCR 300 to 400 °C',612,320,'start'],
         [330,730,'Economizer',330,600,'middle'],[900,680,'Air preheater',785,600,'middle']],
 steps:[['<b>SNCR</b> sprays urea or ammonia into the furnace at <b>870 to 1150 °C</b>, cutting NOx 30 to 50 percent.',['lances','boiler']],
        ['After the economizer, an <b>ammonia injection grid</b> adds NH3 to the flue gas.',['econ','aig']],
        ['On the <b>SCR catalyst</b> at about 300 to 400 °C, NOx becomes N2 and water: <b>70 to 90 percent</b> removal.',['scr','gas']]],
 fact:['SCR: 70 to 90 percent NOx removal','4NO + 4NH3 + O2 → 4N2 + 6H2O on a catalyst at about 300 to 400 °C.'],
 end:'NOx formation, SNCR and SCR chemistry, reactor layouts, ammonium bisulfate and an ammonia demand example.',
 caption:'Two ways to turn NOx back into nitrogen and water: SNCR in the furnace, SCR on a catalyst.',
 tags:['#EnvironmentalEngineering','#AirPollutionControl','#NOx','#EngineeringStudents','#ZentaEngineering']};
})();
