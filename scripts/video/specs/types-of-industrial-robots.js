// Video spec for /automation-robotics/types-of-industrial-robots/. Facts from the article only.
// Simplified side views: articulated arm (rotary joints), SCARA (two parallel rotary joints + vertical linear axis),
// Cartesian gantry (linear X and Z), delta (arms from fixed base motors to a small moving platform). Dots mark rotary joints.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
const j=(x,y)=>`<circle class="pulse" cx="${x}" cy="${y}" r="13" fill="#fff" stroke="${LB}" stroke-width="3"/>`;
const link=d=>`<path d="${d}" fill="none" stroke="${TL}" stroke-width="26" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${LB}" stroke-width="3" stroke-linecap="round" opacity=".7"/>`;
BLUE['types-of-industrial-robots'] = {
 pill:'AUTOMATION', title:'How <em>Industrial Robot Types</em> Differ',
 svg:`<path d="M500 30 V730 M30 380 H970" stroke="${LB}" stroke-width="2" opacity=".35"/>
 <g class="part" id="art">${t(40,60,'ARTICULATED',24,'start',LB)}
  <rect x="120" y="320" width="140" height="40" rx="6" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="160" y="280" width="60" height="40" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${link('M190 280 L290 150 L420 210')}<path d="M420 210 L455 225 M455 205 L470 250 M440 255 L470 250" stroke="#fff" stroke-width="7" fill="none"/>
  ${j(190,280)}${j(290,150)}${j(420,210)}</g>
 <g class="part" id="scara">${t(540,60,'SCARA',24,'start',LB)}
  <rect x="560" y="320" width="120" height="40" rx="6" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="595" y="150" width="50" height="170" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${link('M620 150 H770')}${link('M770 175 H890')}
  <rect x="880" y="160" width="20" height="180" fill="#fff"/><path class="flow" d="M890 200 V330" stroke="${NV}" stroke-width="6" style="--p:1.2s"/>
  ${j(620,150)}${j(770,162)}</g>
 <g class="part" id="cart">${t(40,420,'CARTESIAN',24,'start',LB)}
  <path d="M80 720 V470 H460 V720" fill="none" stroke="${LB}" stroke-width="10"/>
  <rect x="210" y="452" width="100" height="40" rx="6" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="248" y="492" width="24" height="150" fill="#fff"/><path d="M235 642 H285 M235 642 V670 M285 642 V670" stroke="#fff" stroke-width="7" fill="none"/>
  <path class="flow" d="M110 520 H430" stroke="#F5B800" stroke-width="4" marker-end="url(#ah)" style="--p:1.2s"/>
  <path class="flow" d="M330 520 V690" stroke="#F5B800" stroke-width="4" marker-end="url(#ah)" style="--p:1.2s"/>
  ${t(410,560,'X',24)}${t(355,690,'Z',24)}</g>
 <g class="part" id="delta">${t(540,420,'DELTA',24,'start',LB)}
  <rect x="600" y="450" width="300" height="34" rx="6" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <circle class="pulse" cx="640" cy="467" r="14" fill="#F5B800"/><circle class="pulse" cx="860" cy="467" r="14" fill="#F5B800"/>
  ${link('M640 484 L600 570')}${link('M860 484 L900 570')}
  <path d="M600 570 L715 670 M620 570 L735 670 M900 570 L785 670 M880 570 L765 670" stroke="#fff" stroke-width="5"/>
  <rect x="700" y="668" width="100" height="22" rx="4" fill="#fff"/>
  ${j(600,570)}${j(900,570)}</g>`,
 labels:[[300,350,'Rotary joint',290,160,'start'],[850,300,'Vertical axis',880,270,'end'],[760,745,'Moving platform',790,690,'start']],
 steps:[['<b>Articulated</b> robots use rotary joints, usually <b>six axes</b>, for a large, flexible reach.',['art']],
        ['<b>SCARA</b> robots have two parallel rotary joints and a <b>vertical axis</b> for fast assembly.',['scara']],
        ['<b>Cartesian</b> gantries move on X, Y and Z. <b>Delta</b> robots pick light parts at very high speed.',['cart','delta']]],
 fact:['6 axes: 3 position + 3 orientation','Six degrees of freedom reach any position with any orientation.'],
 end:'Articulated, SCARA, Cartesian, cylindrical, delta, cobots and mobile robots, compared, with how to choose.',
 caption:'Articulated, SCARA, Cartesian or delta? The main industrial robot types and what each does best.',
 tags:['#IndustrialRobots','#Robotics','#Automation','#EngineeringStudents','#ZentaEngineering']};
})();
