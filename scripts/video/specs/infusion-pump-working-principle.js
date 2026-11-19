// Video spec for /infusion-pump-working-principle/. Facts from the article only.
BLUE['infusion-pump-working-principle'] = {
 pill:'BIOMEDICAL', title:'How an <em>Infusion Pump</em> Works',
 svg:`<g class="part" id="bag"><rect x="60" y="40" width="140" height="180" rx="24" fill="${NV}" stroke="${LB}" stroke-width="4"/><rect x="66" y="90" width="128" height="124" rx="18" fill="${LB}" opacity=".45"/>
  <rect x="115" y="250" width="30" height="80" rx="8" fill="${NV}" stroke="${LB}" stroke-width="3"/><path d="M130 220 V250" stroke="#fff" stroke-width="5"/>
  <circle class="pulse" cx="130" cy="275" r="7" fill="${LB}"/></g>
 <g class="part" id="housing"><rect x="260" y="300" width="600" height="260" rx="20" fill="rgba(14,58,92,.55)" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="tube"><path d="M122 330 V432 H960" fill="none" stroke="#fff" stroke-width="3"/><path d="M138 330 V448 H960" fill="none" stroke="#fff" stroke-width="3"/></g>
 <g class="part" id="fluid"><path class="flow" d="M130 335 V440 H955" fill="none" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:1.2s"/></g>
 <g class="part" id="platen"><rect x="360" y="452" width="380" height="30" rx="4" fill="${TL}" stroke="${LB}" stroke-width="2"/></g>
 <g class="part" id="cam"><line x1="330" y1="350" x2="740" y2="350" stroke="#fff" stroke-width="8"/><g class="spin-cw" style="--p:1.2s"><circle cx="330" cy="350" r="34" fill="${NV}" stroke="#fff" stroke-width="4"/><path d="M330 316 V384 M296 350 H364" stroke="#fff" stroke-width="4"/></g></g>
 <g class="part" id="fingers">${Array.from({length:6},(_,i)=>`<rect class="finger" x="${385+i*58}" y="372" width="40" height="56" rx="6" fill="#fff" style="animation-delay:${(i*0.2-1.2).toFixed(1)}s"/>`).join('')}</g>
 <g class="part" id="sensors"><rect x="296" y="420" width="34" height="40" rx="5" fill="none" stroke="#F5B800" stroke-width="4"/><rect x="756" y="420" width="34" height="40" rx="5" fill="none" stroke="#F5B800" stroke-width="4"/>
  <rect x="806" y="416" width="40" height="48" rx="5" fill="none" stroke="#F5B800" stroke-width="4"/><path d="M816 400 q10 -10 20 0 M812 390 q14 -14 28 0" fill="none" stroke="#F5B800" stroke-width="3"/></g>`,
 labels:[[230,95,'IV bag',200,110],[170,288,'Drip chamber',146,290],[330,240,'Camshaft',330,318],[560,240,'Fingers',560,372],[995,250,'Air in line detector',826,392,'end'],[548,628,'Platen',548,483,'middle'],[310,628,'Sensor',312,462,'middle'],[773,628,'Pressure sensor',773,462,'middle'],[995,505,'To patient',950,447,'end']],
 steps:[['A motor turns a <b>camshaft</b> that drives a row of <b>fingers</b> over a soft section of tubing.',['cam','fingers']],
        ['The fingers press the tube against a <b>platen</b> one after another, so a sealed pocket of fluid moves <b>downstream</b> like a wave.',['fingers','fluid','platen']],
        ['<b>Pressure</b> and <b>air in line</b> sensors watch the line. On a fault the pump stops and alarms.',['sensors']]],
 fact:['Flow rate Q = V ÷ t &nbsp;(mL/h)','At least one finger always seals the tube, so fluid cannot free flow.'],
 end:'Peristaltic and syringe pumps, sensors and alarms, accuracy testing and pump types.',
 caption:'How does an infusion pump deliver an exact dose? Camshaft, fingers, platen and sensors explained in 22 seconds.',
 tags:['#InfusionPump','#BiomedicalEngineering','#MedicalDevices','#Healthcare','#ZentaEngineering']};
