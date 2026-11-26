// Video spec for /renewable-energy/what-is-battery-management-system/. Facts from the article only.
// Left: four series cells (of 96) with sense wires from every junction to the cell monitor (AFE) and a bleed
// resistor across cell 2. Discharge current leaves the pack positive, passes K+ and the inverter, returns
// through the shunt and K- to the pack negative. The controller reads the AFE and shunt and talks CAN.
(()=>{
const T=(x,y,t,s=26,w=800)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="${w}" font-size="${s}">${t}</text>`;
const cellY=[150,270,390,510];
const cells=cellY.map((y,i)=>`<rect x="80" y="${y}" width="140" height="80" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/>${T(150,y+49,'Cell '+(i+1),24,700)}`).join('');
const sense=[130,250,370,490,640].map(y=>`<path d="M150 ${y} H330" stroke="${LB}" stroke-width="3"/>`).join('');
const sw=(x,y)=>`<path d="M${x} ${y} H${x+20} M${x+60} ${y} H${x+80}" stroke="${LB}" stroke-width="7"/><path d="M${x+20} ${y-16} H${x+60} M${x+20} ${y-16} V${y} M${x+60} ${y-16} V${y}" stroke="#fff" stroke-width="5" fill="none"/>`;
BLUE['what-is-battery-management-system'] = {
 pill:'RENEWABLE', title:'How a <em>Battery Management System</em> Works',
 svg:`<g class="part" id="cells">${cells}<path d="M150 230 V270 M150 350 V390 M150 470 V510" stroke="${LB}" stroke-width="6"/></g>
 <g class="part" id="current"><path d="M150 150 V70 H550 M630 70 H890 V300" fill="none" stroke="${LB}" stroke-width="7"/>
  <path d="M890 440 V700 H780 M700 700 H630 M550 700 H150 V590" fill="none" stroke="${LB}" stroke-width="7"/>
  <path class="flow" d="M150 150 V70 H890 V300" fill="none" stroke="#fff" stroke-width="4" style="--p:.8s"/>
  <path class="flow" d="M890 440 V700 H150 V590" fill="none" stroke="#fff" stroke-width="4" style="--p:.8s"/></g>
 <g class="part" id="afe">${sense}<rect x="330" y="110" width="110" height="550" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${T(385,560,'Cell',24,700)}${T(385,590,'monitor',24,700)}</g>
 <g class="part" id="bal"><path d="M270 250 V280 M270 340 V370" stroke="#F5B800" stroke-width="4"/>
  <g class="pulse"><rect x="258" y="280" width="24" height="60" fill="${NV}" stroke="#F5B800" stroke-width="4"/></g></g>
 <g class="part" id="kc">${sw(550,70)}${sw(550,700)}</g>
 <g class="part" id="shunt"><rect x="700" y="686" width="80" height="28" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M740 686 V450" stroke="${LB}" stroke-width="3" stroke-dasharray="10 8"/></g>
 <g class="part" id="ctrl"><rect x="520" y="300" width="230" height="140" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  ${T(635,362,'BMS')}${T(635,396,'controller',24,700)}
  <path d="M440 370 H520" stroke="${LB}" stroke-width="6"/><path class="flow" d="M440 370 H514" stroke="#fff" stroke-width="3" style="--p:.9s"/>
  <path d="M750 370 H810" stroke="${LB}" stroke-width="6"/><path class="flow" d="M750 370 H806" stroke="#fff" stroke-width="3" style="--p:.9s"/></g>
 <g class="part" id="inv"><rect x="810" y="300" width="160" height="140" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${T(890,362,'Inverter',24,700)}${T(890,396,'and motor',22,700)}</g>
 <g class="part" id="ntc"><g class="pulse"><circle cx="50" cy="430" r="14" fill="#F5B800"/></g></g>`,
 labels:[[30,375,'NTC',46,418,'start'],[376,200,'Bleed R',282,300,'middle'],[590,35,'Contactor K+',590,52,'middle'],
         [740,750,'Shunt',740,716,'middle'],[780,270,'CAN',780,368,'middle'],[560,640,'K−',590,686,'middle']],
 steps:[['The cell monitor reads <b>every cell voltage</b>, a shunt reads <b>pack current</b> and NTCs read temperature.',['cells','afe','shunt','ntc']],
        ['The controller counts current for <b>SoC</b>: 20 Ah out of 60 Ah takes 80% down to <b>46.7%</b>.',['ctrl','current']],
        ["A <b>bleed resistor</b> burns a high cell's extra charge; out of the safe window the <b>contactors open</b>.",['bal','kc']]],
 fact:['ΔSoC = −∫ η i dt ÷ Qn','Coulomb counting, corrected with the OCV and a cell model.'],
 end:'Sensing, protection, SoC and SoH, passive and active balancing, precharge and a worked 96 cell EV pack example.',
 caption:'What does the BMS in an EV battery actually do? Sensing, SoC, balancing and contactors in one pack.',
 tags:['#BatteryManagementSystem','#ElectricVehicles','#LithiumIon','#EngineeringStudents','#ZentaEngineering']};
})();
