// Video spec for /telecommunication-engineering/what-is-satellite-link-budget/. Facts from the article only.
// GEO downlink: satellite at top left radiates EIRP; the beam (flow from satellite to ground) crosses free space,
// then rain near the earth station; a parabolic dish (axis pointed at the satellite) feeds the LNB and receiver.
(()=>{
const S=[200,200], D=[780,540];
const ang=Math.atan2(S[1]-D[1],S[0]-D[0])*180/Math.PI; // dish axis toward satellite
const f=60, par=[]; for(let y=-90;y<=90;y+=10) par.push(`${(y*y/(4*f)).toFixed(1)} ${y}`);
const loc=(x,y)=>{const a=ang*Math.PI/180;return [D[0]+x*Math.cos(a)-y*Math.sin(a), D[1]+x*Math.sin(a)+y*Math.cos(a)];};
const B1=[262,252], B2=loc(36,0);
const beam=`M${B1[0]} ${B1[1]} L${B2[0].toFixed(1)} ${B2[1].toFixed(1)}`;
const rain=[560,585,610,635].map((x,k)=>`<path class="flow" d="M${x} 400 L${x-14} 500" stroke="${LB}" stroke-width="4" stroke-dasharray="12 12" style="--p:${.5+k*.07}s"/>`).join('');
BLUE['what-is-satellite-link-budget'] = {
 pill:'TELECOM', title:'How a <em>Satellite Link Budget</em> Works',
 svg:`<g class="part" id="sat">
  <rect x="40" y="180" width="110" height="40" fill="${NV}" stroke="${LB}" stroke-width="4"/><rect x="250" y="180" width="110" height="40" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M77 180V220M113 180V220M287 180V220M323 180V220M150 200H160M240 200H250" stroke="${LB}" stroke-width="3"/>
  <rect x="160" y="160" width="80" height="80" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M236 236 L258 248" stroke="#fff" stroke-width="6"/><circle class="pulse" cx="262" cy="252" r="10" fill="#F5B800"/></g>
 <g class="part" id="beam"><path d="${beam}" stroke="${LB}" stroke-width="16" opacity=".35"/>
  <path class="flow" d="${beam}" stroke="#fff" stroke-width="5" stroke-dasharray="18 14" style="--p:.9s"/></g>
 <g class="part" id="rain"><path d="M540 395 a28 28 0 0 1 20 -45 a38 38 0 0 1 70 -8 a30 30 0 0 1 40 53 Z" fill="${NV}" stroke="${LB}" stroke-width="4"/>${rain}</g>
 <g class="part" id="dish"><path d="M${D[0]} ${D[1]} V640 M740 640 H820" stroke="${LB}" stroke-width="6"/>
  <g transform="translate(${D[0]} ${D[1]}) rotate(${ang.toFixed(1)})"><path d="M${par.join(' L')}" fill="${TL}" stroke="${LB}" stroke-width="5"/>
  <path d="M${(90*90/240).toFixed(1)} -90 L${f} 0 L${(90*90/240).toFixed(1)} 90" stroke="${LB}" stroke-width="3" fill="none"/><circle cx="${f}" cy="0" r="10" fill="#fff"/></g></g>
 <g class="part" id="rx"><path d="M${D[0]} 620 H830" stroke="${LB}" stroke-width="4"/><rect x="830" y="580" width="130" height="80" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="M845 620 H945" stroke="#fff" stroke-width="4" stroke-dasharray="10 10" style="--p:.6s"/></g>`,
 labels:[[250,120,'EIRP 50 dBW',215,160,'start'],[400,470,'Path loss 205.6 dB',440,357,'end'],[700,300,'Rain fade',650,345,'start'],
         [690,680,'G/T 19.6 dB/K',712,600,'end'],[820,720,'C/N 16.5 dB',850,662,'end']],
 steps:[['The satellite radiates <b>EIRP = Pt + Gt</b>, here 50 dBW toward the earth station.',['sat','beam']],
        ['Over 38 000 km at 12 GHz, <b>free space path loss</b> is 205.6 dB, plus 0.5 dB in the air.',['beam','rain']],
        ['A 1.2 m dish gives <b>G/T of 19.6 dB/K</b>, so C/N reaches <b>16.5 dB</b> in clear sky.',['dish','rx']]],
 fact:['C/N0 = EIRP − Lp − La + G/T − k','A 10 dB modem threshold leaves about 6.5 dB for rain fade.'],
 end:'EIRP, path loss, rain fade, G/T, C/N0, Eb/N0, margin and a full Ku band GEO downlink example.',
 caption:'How much signal survives 38 000 km? A satellite link budget, line by line.',
 tags:['#Telecom','#SatelliteCommunication','#LinkBudget','#EngineeringStudents','#ZentaEngineering']};
})();
