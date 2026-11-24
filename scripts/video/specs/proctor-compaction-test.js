// Video spec for /civil-engineering/proctor-compaction-test/. Facts from the article only.
// Left: rammer falling freely onto soil compacted in 3 layers in a mould with collar on a base plate.
// Right: compaction curve (illustrative example from the article) peaking at MDD 1.86 g/cm3, OMC 14 %, below the zero air voids line (Gs 2.70).
BLUE['proctor-compaction-test'] = {
 pill:'CIVIL', title:'How the <em>Proctor Compaction Test</em> Works',
 svg:`<g class="part" id="mould"><rect x="60" y="640" width="340" height="26" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="120" y="330" width="220" height="80" fill="none" stroke="${LB}" stroke-width="4" stroke-dasharray="10 6"/>
  <rect x="120" y="410" width="220" height="230" fill="none" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="layers"><rect x="124" y="565" width="212" height="73" fill="${TL}"/><rect x="124" y="490" width="212" height="73" fill="${TL}" opacity=".8"/><rect x="124" y="415" width="212" height="73" fill="${TL}" opacity=".6"/>
  <text x="230" y="612" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">Layer 1</text>
  <text x="230" y="537" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">Layer 2</text>
  <text x="230" y="462" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">Layer 3</text></g>
 <g class="part" id="rammer"><g class="finger"><rect x="205" y="130" width="50" height="230" rx="4" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="185" y="360" width="90" height="28" rx="4" fill="#fff" stroke="${LB}" stroke-width="3"/></g>
  <path d="M310 140 V300" stroke="#e5654f" stroke-width="7" marker-end="url(#ah)"/><path class="flow" d="M310 140 V300" stroke="#fff" stroke-width="3" style="--p:.8s"/></g>
 <g class="part" id="axes"><path d="M520 120 V640 H960" fill="none" stroke="${LB}" stroke-width="4"/>
  <g font-family="Open Sans" font-weight="700" font-size="22" fill="#fff">
  <text x="508" y="648" text-anchor="end">1.70</text><text x="508" y="481" text-anchor="end">1.80</text><text x="508" y="315" text-anchor="end">1.90</text><text x="508" y="148" text-anchor="end">2.00</text>
  <text x="593" y="676" text-anchor="middle">10</text><text x="740" y="676" text-anchor="middle">14</text><text x="887" y="676" text-anchor="middle">18</text>
  <text x="740" y="712" text-anchor="middle">Water content w (%)</text></g></g>
 <g class="part" id="zav"><path d="M701.9 139.8 L740 207.7 L776.7 270.5 L813.3 330.9 L850 389 L886.7 445.1 L923.3 499.1 L960 551.3" fill="none" stroke="${LB}" stroke-width="4" stroke-dasharray="14 10"/></g>
 <g class="part" id="curve"><path d="M593.3 573.3 C605.5 553.9 642.2 490 666.7 456.7 C691.2 423.4 715.6 381.6 740 373.3 C764.4 365 788.8 384.5 813.3 406.7 C837.8 428.9 874.5 490 886.7 506.7" fill="none" stroke="#fff" stroke-width="6"/>
  <path d="M740 373.3 V640 M520 373.3 H740" fill="none" stroke="#e5654f" stroke-width="3" stroke-dasharray="8 6"/>
  <circle class="pulse" cx="740" cy="373.3" r="12" fill="#e5654f"/>
  <text x="530" y="360" fill="#fff" font-family="Open Sans" font-weight="800" font-size="24">MDD</text>
  <text x="752" y="625" fill="#fff" font-family="Open Sans" font-weight="800" font-size="24">OMC</text></g>`,
 labels:[[150,230,'Rammer',203,230,'end'],[100,370,'Collar',118,370,'end'],[100,525,'Mould',118,525,'end'],[960,170,'Zero air voids',790,290,'end']],
 steps:[['Soil is compacted in the <b>mould</b> in <b>3 layers</b> (standard) or 5 (modified), with <b>25 blows</b> per layer.',['mould','layers']],
        ['The <b>rammer</b> falls freely: <b>310 mm</b> in the IS light test and <b>450 mm</b> in the heavy test.',['rammer']],
        ['Dry density peaks at the <b>MDD</b> and <b>OMC</b>, always below the <b>zero air voids</b> line.',['curve','zav']]],
 fact:['600 vs 2700 kN·m/m³','Compactive energy of the standard and the modified Proctor tests.'],
 end:'Standard and modified methods, procedure, compaction curve, zero air voids line and a worked example.',
 caption:'How much water does soil need to reach its densest state? The Proctor compaction test finds the MDD and OMC.',
 tags:['#ProctorTest','#SoilCompaction','#Geotechnical','#CivilEngineering','#ZentaEngineering']};
