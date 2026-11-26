// Video spec for /mining-engineering/mine-ventilation-systems/. Facts from the article only.
// Vertical section of an exhausting circuit: fresh air goes down the downcast shaft, along the intake airway,
// up the raise past the working area, along the return airway and up the upcast shaft to the main fan at the surface.
// A forcing auxiliary fan in the intake air blows fresh air through a duct to the face of a dead-end heading; that air
// returns along the heading. The centrifugal main fan turns clockwise, discharging tangentially to the right at the top.
(()=>{
const blades=[0,45,90,135,180,225,270,315].map(a=>{const [x1,y1]=P(840,95,14,a),[x2,y2]=P(840,95,44,a-25);return `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`;}).join(' ');
BLUE['mine-ventilation-systems'] = {
 pill:'MINING', title:'How <em>Mine Ventilation</em> Works',
 svg:`<g class="part" id="ground"><rect x="0" y="200" width="1000" height="540" fill="#5a4a32" opacity=".55"/><path d="M0 200 H1000" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="downcast"><rect x="120" y="200" width="60" height="440" fill="${NV}"/>
  <path d="M100 200 V150 H200 V200" fill="none" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M150 110 V600" stroke="${LB}" stroke-width="6" style="--p:1s"/></g>
 <g class="part" id="intake"><rect x="180" y="580" width="420" height="60" fill="${NV}"/>
  <path class="flow" d="M150 598 H600" stroke="${LB}" stroke-width="6" style="--p:1s"/></g>
 <g class="part" id="heading"><rect x="600" y="580" width="160" height="60" fill="${NV}"/>
  <path d="M760 580 L775 595 L762 610 L776 625 L760 640" fill="none" stroke="#c9ccd1" stroke-width="4"/>
  <path class="flow" d="M748 596 H630" stroke="#e5654f" stroke-width="5" style="--p:1s"/></g>
 <g class="part" id="aux"><rect x="536" y="616" width="210" height="16" rx="6" fill="#c98a3a" stroke="${LB}" stroke-width="2"/>
  <circle cx="520" cy="624" r="15" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path class="flow" d="M538 624 H744" stroke="#fff" stroke-width="4" style="--p:.6s"/></g>
 <g class="part" id="ret"><rect x="600" y="360" width="40" height="220" fill="${NV}"/>
  <rect x="640" y="360" width="180" height="60" fill="${NV}"/>
  <path class="flow" d="M620 600 V390 H840" fill="none" stroke="#e5654f" stroke-width="6" style="--p:1s"/></g>
 <g class="part" id="upcast"><rect x="820" y="160" width="40" height="260" fill="${NV}"/>
  <path class="flow" d="M840 390 V150" stroke="#e5654f" stroke-width="6" style="--p:1s"/></g>
 <g class="part" id="fan"><circle cx="840" cy="95" r="70" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <path d="M840 25 H975 V60 H901" fill="${NV}" stroke="${LB}" stroke-width="5"/><rect x="842" y="28" width="60" height="30" fill="${NV}"/>
  <g class="spin-cw" style="--p:1.2s"><circle cx="840" cy="95" r="46" fill="none" stroke="${LB}" stroke-width="2" opacity=".4"/><path d="${blades}" stroke="#fff" stroke-width="6"/></g>
  <path class="flow" d="M880 42 H990" stroke="#e5654f" stroke-width="6" style="--p:.8s"/></g>
 <g id="airways"><path d="M120 200 V640 H760 V580 H640 V420 H860 V160 M820 160 V360 H600 V580 H180 V200" fill="none" stroke="${LB}" stroke-width="4"/></g>`,
 labels:[[200,290,'Downcast (intake) shaft',180,300,'start'],[260,700,'Intake airway',300,640,'start'],[290,540,'Auxiliary fan and duct',520,610,'start'],
         [700,705,'Dead-end heading',740,640,'start'],[660,470,'Return airway',700,420,'start'],[800,300,'Upcast shaft',820,300,'end'],[760,100,'Main exhaust fan',770,95,'end']],
 steps:[['The <b>main exhaust fan</b> draws fresh air down the <b>downcast shaft</b> and along the intake airway.',['fan','downcast','intake']],
        ['An <b>auxiliary fan and duct</b> blow fresh air to the face of a <b>dead-end heading</b>.',['aux','heading']],
        ['Contaminated air leaves by the <b>return airway</b> and the <b>upcast shaft</b>.',['ret','upcast']]],
 fact:['p = RQ²','At R = 0.12 N·s²/m⁸ and 150 m³/s the fan needs 2.7 kPa, about 580 kW.'],
 end:"Main and auxiliary fans, intake and return airways, Atkinson's equation, cooling and a fan power example.",
 caption:'How does fresh air reach an underground mine? Main fans, intake and return airways and auxiliary fans explained.',
 tags:['#MineVentilation','#UndergroundMining','#MiningEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
