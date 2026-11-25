// Video spec for /biomedical-engineering/biomaterials-types/. Facts from the article only.
// Total hip replacement (frontal schematic): titanium cup with UHMWPE liner in the pelvis, ceramic or CoCr head,
// Ti-6Al-4V stem with hydroxyapatite coating in the femur. Body load flows down from pelvis through head and stem into the femur.
(()=>{
const BN='#1d5a80';
BLUE['biomaterials-types'] = {
 pill:'BIOMEDICAL', title:'How <em>Biomaterials</em> Work in a Hip Implant',
 svg:`<g class="part" id="pelvis"><path d="M120 90 Q300 30 560 120 Q640 160 600 260 Q560 330 520 330 L280 330 Q200 300 160 230 Q110 160 120 90 Z" fill="${BN}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="femur"><path d="M455 440 C490 380 610 380 650 440 L700 740 H540 L505 570 C470 530 445 490 455 440 Z" fill="${BN}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="cup"><path d="M290 330 A110 110 0 0 1 510 330 Z" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M308 330 A92 92 0 0 1 492 330 Z" fill="#dfe9f2" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="stem"><path d="M440 380 L545 430 L605 720 L575 722 L515 480 L425 410 Z" fill="${TL}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="head"><circle cx="400" cy="345" r="74" fill="#ffffff" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="coat"><path d="M553 450 L610 705" stroke="#F5B800" stroke-width="6" stroke-dasharray="8 6"/></g>
 <g class="part" id="load"><path class="flow" d="M400 150 V345 L480 410 L555 520 L585 700" fill="none" stroke="#e5654f" stroke-width="5" marker-end="url(#ah)" style="--p:1.2s"/>
  <path d="M400 70 V140" stroke="#e5654f" stroke-width="8" marker-end="url(#ah)"/></g>`,
 labels:[[40,480,'Ti shell + UHMWPE liner',300,312,'start'],[640,310,'Ceramic or CoCr head',462,360,'start'],[700,150,'Pelvis (bone)',540,170,'start'],
  [720,445,'HA coating',565,480,'start'],[720,620,'Ti-6Al-4V stem',585,620,'start']],
 steps:[['<b>Metals</b> such as titanium alloy form the stem and cup: strong, light and corrosion resistant.',['stem','cup']],
        ['A hard, low wear <b>ceramic or CoCr head</b> runs on a low friction <b>UHMWPE liner</b>.',['head','cup']],
        ['<b>Hydroxyapatite</b> coatings bond to bone. A stiffer stem takes more load: <b>stress shielding</b>.',['coat','femur','load']]],
 fact:['Ti stem: bone carries 24%','With a stiffer CoCr stem, bone carries only 13% of the 2000 N load.'],
 end:'Metals, ceramics, polymers and composites, their moduli, biocompatibility testing and a stress shielding example.',
 caption:'What is a hip implant made of? Metals, ceramics, polymers and coatings, and why stiffness matters.',
 tags:['#Biomaterials','#BiomedicalEngineering','#HipReplacement','#EngineeringStudents','#ZentaEngineering']};
})();
