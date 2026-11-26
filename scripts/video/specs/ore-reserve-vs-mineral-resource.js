// Video spec for /mining-engineering/ore-reserve-vs-mineral-resource/. Facts from the article only.
// Cross section: drill holes from a rig on the surface define a block model classed Measured (centre, densest data),
// Indicated (edges) and Inferred (deep, sparse data). A pit design takes only Indicated and Measured blocks above the
// pit floor; ore is hauled up out of the pit to the plant (flow from pit to plant).
(()=>{
const blk=(x,y,c)=>{
  const s=c==='M'?`fill="${TL}"`:c==='I'?`fill="${TL}" fill-opacity=".45"`:`fill="${NV}" stroke-dasharray="8 6"`;
  return `<rect x="${x}" y="${y}" width="60" height="60" ${s} stroke="${LB}" stroke-width="3"/>`;};
const meas=[], ind=[], inf=[];
[[380,320],[440,320],[500,320],[560,320],[380,380],[440,380],[500,380],[560,380]].forEach(p=>meas.push(blk(p[0],p[1],'M')));
[[380,260],[440,260],[500,260],[560,260],[320,320],[620,320],[320,380],[620,380],[380,440],[440,440],[500,440],[560,440]].forEach(p=>ind.push(blk(p[0],p[1],'I')));
[[380,500],[440,500],[500,500],[560,500],[440,560],[500,560]].forEach(p=>inf.push(blk(p[0],p[1],'F')));
const holes=[425,530,635].map((x,k)=>`<path d="M${x} 200 L${x-40} 600" stroke="${LB}" stroke-width="4"/><path class="flow" d="M${x} 200 L${x-40} 600" stroke="#fff" stroke-width="3" stroke-dasharray="10 12" style="--p:${1+k*.1}s"/>`).join('');
BLUE['ore-reserve-vs-mineral-resource'] = {
 pill:'MINING', title:'How <em>Resource to Reserve</em> Conversion Works',
 svg:`<g class="part" id="ground"><path d="M40 200 H960" stroke="${LB}" stroke-width="5"/>
  <path d="M40 200 H960 V680 H40 Z" fill="${NV}" opacity=".35"/></g>
 <g class="part" id="inf">${inf.join('')}</g>
 <g class="part" id="ind">${ind.join('')}</g>
 <g class="part" id="meas">${meas.join('')}</g>
 <g class="part" id="drill"><path d="M395 200 L425 120 L455 200 M410 160 H440" stroke="${LB}" stroke-width="5" fill="none"/>${holes}</g>
 <g class="part" id="pit"><path d="M230 200 L330 500 L690 500 L790 200" stroke="#fff" stroke-width="6" stroke-dasharray="20 12" fill="none"/></g>
 <g class="part" id="plant"><rect x="840" y="110" width="110" height="80" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M670 490 L748 230 L790 200 L840 150" stroke="${LB}" stroke-width="10" opacity=".35" fill="none"/>
  <path class="flow" d="M670 490 L748 230 L790 200 L840 150" stroke="#fff" stroke-width="5" stroke-dasharray="16 14" style="--p:.9s" fill="none"/></g>`,
 labels:[[330,150,'Drill holes',420,205,'end'],[250,420,'Indicated',335,410,'end'],[830,410,'Measured',600,400,'start'],
         [360,650,'Inferred',450,600,'end'],[830,300,'Pit design',757,300,'start'],[895,85,'Plant',895,110,'middle']],
 steps:[['Drilling and assays build a <b>mineral resource</b>: Inferred, Indicated, Measured by confidence.',['drill','inf','ind','meas']],
        ['A pit design applies the <b>Modifying Factors</b>. Only Indicated and Measured blocks can become reserves.',['pit','ind','meas']],
        ['With dilution and losses: <b>10.45 Mt at 1.65 g/t Proved</b>, 20.9 Mt at 1.38 g/t Probable.',['pit','plant']]],
 fact:['Inferred cannot become a reserve','Indicated converts to Probable, Measured to Proved or Probable.'],
 end:'Resource and reserve categories, Modifying Factors, dilution, cut-off grade and a gold reserve example.',
 caption:'Mineral resource or ore reserve? What the ground holds versus what a mine can profitably extract.',
 tags:['#Mining','#OreReserve','#JORC','#EngineeringStudents','#ZentaEngineering']};
})();
