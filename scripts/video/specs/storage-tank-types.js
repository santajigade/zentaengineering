// Video spec for /chemical-engineering/storage-tank-types/. Facts from the article only.
// Left: fixed cone roof tank; filling (inlet flow in) pushes vapour out of the breather vent (flow up).
// Middle: external floating roof resting on the liquid, open top, rolling ladder; the roof rises as the tank fills.
// Right: pressurised sphere on legs with relief valve; vapour above liquid.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
BLUE['storage-tank-types'] = {
 pill:'CHEMICAL', title:'How <em>Storage Tank Types</em> Differ',
 svg:`<path d="M0 640 H1000" stroke="${LB}" stroke-width="4"/>
 <g class="part" id="cone"><rect x="40" y="460" width="260" height="180" fill="${TL}" opacity=".85"/>
  <path d="M40 640 V330 L170 280 L300 330 V640" fill="none" stroke="${LB}" stroke-width="5"/>
  <rect x="158" y="250" width="24" height="30" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  ${t(170,400,'Vapour space',24)}${t(170,560,'Liquid',26)}
  <path class="flow" d="M170 248 V165" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:1s"/>
  <path d="M0 615 H40" stroke="${LB}" stroke-width="10"/><path class="flow" d="M0 615 H38" stroke="#fff" stroke-width="4" style="--p:.7s"/>
  ${t(170,690,'Fixed cone roof',26)}</g>
 <g class="part" id="efr"><rect x="360" y="420" width="260" height="220" fill="${TL}" opacity=".85"/>
  <path d="M360 290 V640 H620 V290" fill="none" stroke="${LB}" stroke-width="5"/>
  <rect x="363" y="402" width="254" height="18" fill="#fff"/>
  <path d="M620 300 L545 402" stroke="${LB}" stroke-width="4"/>
  <path class="pulse" d="M410 385 V335" stroke="#F5B800" stroke-width="6" marker-end="url(#ah)"/>
  ${t(490,540,'Liquid',26)}
  <path d="M320 615 H360" stroke="${LB}" stroke-width="10"/><path class="flow" d="M320 615 H358" stroke="#fff" stroke-width="4" style="--p:.7s"/>
  ${t(490,690,'Floating roof',26)}</g>
 <g class="part" id="sphere"><defs><clipPath id="sclip"><circle cx="820" cy="450" r="130"/></clipPath></defs>
  <path d="M735 545 L722 640 M905 545 L918 640 M770 570 L765 640 M870 570 L875 640" stroke="${LB}" stroke-width="5"/>
  <circle cx="820" cy="450" r="130" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <rect x="690" y="490" width="260" height="100" fill="${TL}" opacity=".85" clip-path="url(#sclip)"/>
  <circle cx="820" cy="450" r="130" fill="none" stroke="${LB}" stroke-width="5"/>
  <rect x="808" y="292" width="24" height="28" fill="${NV}" stroke="#e5654f" stroke-width="3"/>
  ${t(820,430,'Vapour',24)}${t(820,545,'Liquid',24)}
  ${t(820,690,'LPG sphere',26)}</g>`,
 labels:[[60,150,'Vapour out',165,200,'start'],[480,250,'Roof floats on liquid',480,400,'middle'],[960,250,'Relief valve',830,300,'end']],
 steps:[['A <b>fixed cone roof</b> tank has a vapour space. Filling pushes vapour out through the <b>breather vent</b>.',['cone']],
        ['A <b>floating roof</b> rests on the liquid, leaving almost no vapour space, so evaporation losses drop sharply.',['efr']],
        ['LPG must stay under pressure, so it goes in <b>spheres</b>: least surface per volume, half the stress of a cylinder.',['sphere']]],
 fact:['V = (π/4) D² H','A 20 m diameter tank holds 314.2 m³ per metre of liquid height.'],
 end:'Fixed and floating roofs, spheres, bullets, cryogenic and underground tanks, API 650 and API 620, and a capacity example.',
 caption:'Cone roof, floating roof or sphere? How process plants match the storage tank to the liquid.',
 tags:['#ChemicalEngineering','#StorageTanks','#ProcessEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
