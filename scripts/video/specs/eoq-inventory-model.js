// Video spec for /eoq-inventory-model/. Facts from the article only.
// Top: sawtooth stock pattern (falls steadily from Q to zero, new order arrives at once, reorder point and lead time).
// Bottom: annual ordering cost DS/Q, holding cost QH/2 and total cost, minimum at the EOQ where the two are equal.
(()=>{
const T=(x,y,t,a='middle',s=24)=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="#fff" font-family="Open Sans" font-weight="700" font-size="${s}">${t}</text>`;
const X=q=>120+(q-0.25)/2.25*800, Y=c=>720-c*62;
const curve=f=>{let d='';for(let i=0;i<=60;i++){const q=0.25+2.25*i/60;d+=(i?' L':'M')+X(q).toFixed(1)+' '+Y(f(q)).toFixed(1);}return d;};
const saw='M140 110 L380 340 V110 L620 340 V110 L860 340';
BLUE['eoq-inventory-model'] = {
 pill:'MANUFACTURING', title:'How the <em>EOQ Model</em> Works',
 svg:`<g class="part" id="ax1"><path d="M120 60 V340 H950" fill="none" stroke="${LB}" stroke-width="4" marker-end="url(#ah)"/>${T(70,120,'Q')}${T(70,350,'0')}${T(930,380,'Time','end')}</g>
 <g class="part" id="saw"><path d="M140 340 L140 110" stroke="${LB}" stroke-width="3" stroke-dasharray="6 6"/><path d="${saw}" fill="none" stroke="${TL}" stroke-width="7" stroke-linejoin="round"/>
  <path class="flow" d="${saw}" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/>
  ${[380,620].map(x=>`<path class="flow" d="M${x} 334 V124" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:.8s"/>`).join('')}</g>
 <g class="part" id="avg"><path d="M140 225 H900" stroke="#F5B800" stroke-width="3" stroke-dasharray="10 8"/></g>
 <g class="part" id="rop"><path d="M140 271 H900" stroke="${LB}" stroke-width="3" stroke-dasharray="4 6"/>${[308,548,788].map(x=>`<circle class="pulse" cx="${x}" cy="271" r="9" fill="#fff"/>`).join('')}
  <path d="M308 352 V364 H380 V352" fill="none" stroke="#fff" stroke-width="3"/>${T(344,392,'L','middle',22)}</g>
 <g class="part" id="ax2"><path d="M120 420 V720 H950" fill="none" stroke="${LB}" stroke-width="4" marker-end="url(#ah)"/>${T(930,752,'Order quantity Q','end')}</g>
 <g class="part" id="hold"><path d="${curve(q=>q)}" fill="none" stroke="${LB}" stroke-width="5"/></g>
 <g class="part" id="order"><path d="${curve(q=>1/q)}" fill="none" stroke="#ff7a45" stroke-width="5"/></g>
 <g class="part" id="tc"><path d="${curve(q=>q+1/q)}" fill="none" stroke="#fff" stroke-width="6"/></g>
 <g class="part" id="eoq"><path d="M${X(1)} 720 V${Y(2)}" stroke="#F5B800" stroke-width="3" stroke-dasharray="8 6"/><circle class="pulse" cx="${X(1)}" cy="${Y(2)}" r="12" fill="#F5B800"/><circle cx="${X(1)}" cy="${Y(1)}" r="9" fill="#fff"/></g>`,
 labels:[[180,95,'Order arrives',380,200],[990,205,'Average Q/2',900,225,'end'],[990,255,'Reorder point',900,271,'end'],
         [250,440,'Total cost',X(0.33),Y(0.33+1/0.33)],[640,652,'Holding QH/2',X(1.75),Y(1.75)],[300,520,'Ordering DS/Q',X(0.45),Y(1/0.45)],[X(1),752,'EOQ',X(1),720,'middle']],
 steps:[['Stock falls steadily from <b>Q</b> to zero, so average inventory is <b>Q/2</b>. Reorder at <b>ROP = d × L + SS</b>.',['ax1','saw','avg','rop']],
        ['Annual ordering cost <b>DS/Q</b> falls as Q grows, while holding cost <b>QH/2</b> rises.',['ax2','order','hold']],
        ['Total cost is lowest at the <b>EOQ</b>, where ordering cost equals holding cost.',['tc','eoq']]],
 fact:['EOQ = √(2DS/H)','D annual demand, S cost per order, H holding cost per unit per year.'],
 end:'Costs, the EOQ derivation, reorder point, safety stock, EPQ and a worked example.',
 caption:'How much should you order each time? The EOQ model balances ordering and holding cost.',
 tags:['#EOQ','#InventoryControl','#ManufacturingEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
