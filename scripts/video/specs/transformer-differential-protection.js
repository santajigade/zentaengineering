// Video spec for /transformer-differential-protection/. Facts from the article only.
// Merz-Price circulating current scheme: primary current flows HV to LV through CT1, the transformer and CT2.
// CT secondaries circulate round the pilot wires through two bias coils; the operate coil across the pilot midpoints carries only the difference.
(()=>{
const txt=(x,y,t,s=28,c='#fff')=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
BLUE['transformer-differential-protection'] = {
 pill:'ELECTRICAL', title:'How Transformer <em>Differential Protection</em> Works',
 svg:`<g class="part" id="line"><path d="M20 150H980" stroke="${LB}" stroke-width="8"/><path class="flow" d="M20 150H980" stroke="#fff" stroke-width="3" style="--p:1s"/>
  ${txt(60,125,'HV',26)}${txt(940,125,'LV',26)}</g>
 <g class="part" id="xfmr"><rect x="380" y="80" width="240" height="140" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <circle cx="470" cy="150" r="45" fill="none" stroke="#fff" stroke-width="5"/><circle cx="530" cy="150" r="45" fill="none" stroke="#fff" stroke-width="5"/></g>
 <g class="part" id="pilots"><path d="M210 175V420H790V175" fill="none" stroke="#e5654f" stroke-width="7"/><path d="M190 175V600H810V175" fill="none" stroke="#e5654f" stroke-width="7"/>
  <path class="flow" d="M210 175V420H790V175" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/><path class="flow" d="M810 175V600H190V175" fill="none" stroke="#fff" stroke-width="3" style="--p:1.2s"/></g>
 <g class="part" id="cts"><ellipse cx="200" cy="150" rx="22" ry="45" fill="${TL}" stroke="${LB}" stroke-width="4"/><ellipse cx="800" cy="150" rx="22" ry="45" fill="${TL}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="bias"><rect x="290" y="398" width="110" height="44" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/><rect x="600" y="398" width="110" height="44" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/></g>
 <g class="part" id="op"><path d="M500 420V600" stroke="${LB}" stroke-width="7"/><rect x="445" y="475" width="110" height="60" rx="8" fill="${NV}" stroke="#e5654f" stroke-width="5"/>${txt(500,516,'87T',30,'#ff8a70')}</g>`,
 labels:[[100,300,'CT1',192,192,'middle'],[900,300,'CT2',808,192,'middle'],[500,290,'Power transformer',500,222,'middle'],
         [345,505,'Bias coil',345,444,'middle'],[620,512,'Operate coil',557,505,'start'],[250,680,'Pilot wires',250,602,'middle']],
 steps:[['<b>CTs</b> on both sides measure the currents entering and leaving the <b>protected zone</b>.',['cts','xfmr']],
        ['For load and external faults the CT currents <b>circulate</b> round the pilots through the <b>bias coils</b>.',['pilots','bias']],
        ['An <b>internal fault</b> unbalances them, so <b>difference current</b> flows in the operate coil and it trips.',['op']]],
 fact:['I<sub>d</sub> &gt; I<sub>s1</sub> + K × I<sub>r</sub>','Biased trip condition: the threshold rises with the bias current.'],
 end:'Circulating current principle, CT matching, vector group, bias slope, inrush blocking and a worked example.',
 caption:'How does a transformer differential relay tell an internal fault from a through fault? The circulating current principle in 20 seconds.',
 tags:['#DifferentialProtection','#PowerTransformer','#ProtectionRelay','#ElectricalEngineering','#ZentaEngineering']};
})();
