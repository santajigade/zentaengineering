// Video spec for /manufacturing-engineering/what-is-process-capability/. Facts from the article only.
// Worked example drawn to scale: LSL 24.95, USL 25.05, target 25.00, mean 25.01, sigma 0.01204 mm.
// x: 24.93..25.07 mm maps to 100..900. Normal curve height 330 px above baseline y=560.
(()=>{
const X=v=>100+(v-24.93)*800/0.14, s=0.01204, mu=25.01, T0=25.00, B=560, H=330;
const curve=(m)=>{const p=[];for(let i=0;i<=90;i++){const z=-3.9+7.8*i/90;p.push(`${X(m+z*s).toFixed(1)} ${(B-H*Math.exp(-z*z/2)).toFixed(1)}`);}return 'M'+p.join(' L');};
const T=(x,y,t,sz=26)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="700" font-size="${sz}">${t}</text>`;
BLUE['what-is-process-capability'] = {
 pill:'MANUFACTURING', title:'How <em>Process Capability</em> Works',
 svg:`<g class="part" id="limits"><path d="M80 ${B} H920" stroke="${LB}" stroke-width="5"/>
  <path d="M${X(24.95)} 150 V${B} M${X(25.05)} 150 V${B}" stroke="#e5654f" stroke-width="6"/>
  ${[24.95,25.00,25.05].map(v=>`<path d="M${X(v)} ${B} V${B+14}" stroke="${LB}" stroke-width="4"/>${T(X(v),B+50,v.toFixed(2))}`).join('')}
  ${T(500,B+100,'Shaft diameter, mm')}</g>
 <g class="part" id="curve"><path d="${curve(mu)} Z" fill="${TL}" fill-opacity=".55" stroke="#fff" stroke-width="5"/></g>
 <g class="part" id="mean"><path d="${curve(T0)}" stroke="${LB}" stroke-width="3" stroke-dasharray="10 10" fill="none"/>
  <path d="M${X(mu)} ${B-H} V${B}" stroke="#fff" stroke-width="4"/>
  <path class="flow" d="M${X(T0)} ${B-H-20} H${X(mu)-6}" stroke="#F5B800" stroke-width="6" style="--p:.8s"/>
  <circle class="pulse" cx="${X(mu)}" cy="${B-H}" r="13" fill="#F5B800"/></g>
 <g class="part" id="tail"><path class="pulse" d="M${X(25.05)} ${B} H${X(mu+4.2*s)}" stroke="#e5654f" stroke-width="16"/></g>`,
 labels:[[X(24.95)+20,120,'LSL 24.95',X(24.95),160,'start'],[X(25.05)-20,120,'USL 25.05',X(25.05),160,'end'],
         [340,300,'Mean 25.01',X(mu)-8,B-H+10,'end'],[805,440,'446 ppm',X(25.05)+40,B-10,'start']],
 steps:[['Tolerance <b>0.10 mm</b> over a 6σ spread of <b>0.072 mm</b> gives <b>Cp = 1.38</b>.',['limits','curve']],
        ['The mean sits 0.01 mm above target, only <b>3.32σ</b> from the USL, so <b>Cpk = 1.11</b>.',['mean','curve']],
        ['About <b>446 ppm</b> of shafts fall above the USL. Re-centring on target lifts Cpk to 1.38.',['tail','mean']]],
 fact:['Cpk = min(Cpu, Cpl)','Cpu = (USL − μ) / 3σ and Cpl = (μ − LSL) / 3σ, so Cpk uses the nearer limit.'],
 end:'Cp, Cpk, Pp, Ppk and Cpm, acceptable values, and a worked shaft diameter example.',
 caption:'Cp says the process fits the tolerance. Cpk says whether it is centred. Here is the difference.',
 tags:['#Manufacturing','#ProcessCapability','#SPC','#QualityControl','#ZentaEngineering']};
})();
