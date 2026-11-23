// Video spec for /grain-storage-structures/. Facts from the article only.
// Cross section of a grain bin with pressure aeration: the fan blows ambient air into the plenum under the
// perforated floor, air rises through the grain and leaves at the roof vent. Red arrows inside the grain at the
// right wall show Janssen lateral pressure growing with depth and levelling off.
(()=>{
const GR='#c98a3a', RD='#d7261e';
const up=(x,y0,y1)=>`<path class="flow" d="M${x} ${y0} V${y1}" stroke="#fff" stroke-width="6" marker-end="url(#ahw)" style="--p:1.4s"/>`;
const pr=(y,len)=>`<path d="M${648-len} ${y} H648" stroke="${RD}" stroke-width="5" marker-end="url(#ah)"/>`;
BLUE['grain-storage-structures'] = {
 pill:'AGRICULTURAL', title:'How a <em>Grain Silo</em> Works',
 svg:`<g class="part" id="silo"><path d="M330 600 V220 L500 140 L670 220 V600" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <rect x="478" y="108" width="44" height="34" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="300" y="640" width="400" height="26" fill="${TL}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="grain"><path d="M333 600 V252 L500 232 L667 252 V600 Z" fill="${GR}"/>
  <path d="M330 600 H670" stroke="#fff" stroke-width="5" stroke-dasharray="14 8"/></g>
 <g class="part" id="pressure">${pr(300,30)}${pr(380,58)}${pr(460,74)}${pr(540,80)}</g>
 <g class="part" id="plenum"><rect x="330" y="602" width="340" height="38" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M206 604 H330 M206 636 H330" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="fan"><circle cx="170" cy="620" r="40" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <g class="spin-cw" style="--p:.7s">${[0,90,180,270].map(a=>`<ellipse cx="170" cy="599" rx="7" ry="17" fill="#fff" transform="rotate(${a} 170 620)"/>`).join('')}</g><circle cx="170" cy="620" r="7" fill="${LB}"/></g>
 <g class="part" id="air"><path class="flow" d="M214 620 H560" stroke="${LB}" stroke-width="6" style="--p:.8s"/>
  ${up(390,592,280)}${up(470,592,262)}${up(550,592,270)}
  <path class="flow" d="M500 104 V30" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:.9s"/></g>`,
 labels:[[560,60,'Air out at roof vent',516,110],[40,330,'Grain bulk',350,330],[40,470,'Perforated floor',345,598],
         [40,730,'Aeration fan',160,662],[985,710,'Plenum',660,628,'end'],[985,300,'Lateral wall pressure',600,460,'end']],
 steps:[['Grain dried to a safe <b>12 to 14%</b> goes into the bin, and <b>wall friction</b> carries part of its weight.',['silo','grain']],
        ['<b>Lateral pressure</b> on the wall rises with depth, then <b>levels off</b>, as the Janssen equation predicts.',['pressure']],
        ['A <b>fan</b> pushes ambient air into the <b>plenum</b>; it rises through the grain and leaves at the <b>roof vent</b>.',['fan','plenum','air']]],
 fact:['Walls carry about 65% of the weight','In the worked 6 m by 20 m wheat silo, wall friction carries most of the 441 t.'],
 end:'Storage structure types, Janssen wall pressure, mass and funnel flow, aeration and a worked silo load example.',
 caption:'Why does a tall grain silo floor feel only part of the load? Wall friction, Janssen pressure and aeration explained.',
 tags:['#GrainStorage','#PostHarvest','#AgriculturalEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
