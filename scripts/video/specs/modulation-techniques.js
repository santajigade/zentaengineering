// Video spec for /telecommunication-engineering/modulation-techniques/. Facts from the article only.
// The article's figure as a video: bit stream 1 0 1 1 0 and the ASK, FSK and BPSK waveforms for it.
// ASK: carrier present for ones, absent for zeros. FSK: higher frequency for ones. BPSK: phase reversed for zeros.
// Dashes move left to right along each waveform, the direction of time.
(()=>{
const bits=[1,0,1,1,0], X0=170, BW=160, A=50;
const T=(x,y,t,z=26,c='#fff',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${z}">${t}</text>`;
const wave=(yc,fn)=>{const p=[];for(let i=0;i<=bits.length*BW;i+=2){const k=Math.min(bits.length-1,Math.floor(i/BW)),t=(i-k*BW)/BW;p.push(`${(X0+i).toFixed(0)} ${(yc-fn(bits[k],t)).toFixed(1)}`);}return 'M'+p.join(' L');};
const ask=(b,t)=>b?A*Math.sin(2*Math.PI*3*t):0;
const fsk=(b,t)=>A*Math.sin(2*Math.PI*(b?4:2)*t);
const psk=(b,t)=>A*Math.sin(2*Math.PI*3*t+(b?0:Math.PI));
const row=(id,yc,fn,name)=>{const d=wave(yc,fn);return `<g class="part" id="${id}">${T(80,yc+9,name)}<path d="M${X0} ${yc} H${X0+bits.length*BW}" stroke="${LB}" stroke-width="2" opacity=".35"/>
 <path d="${d}" stroke="${TL}" stroke-width="7" fill="none"/><path class="flow" d="${d}" stroke="#fff" stroke-width="3" fill="none" style="--p:1s"/></g>`;};
let bitp=`M${X0} `;bits.forEach((b,k)=>{const y=b?80:150;bitp+=(k?`V${y} `:`${y} `)+`H${X0+(k+1)*BW} `;});
BLUE['modulation-techniques'] = {
 pill:'TELECOM', title:'How <em>Modulation Techniques</em> Work',
 svg:`<g class="part" id="bits">${T(80,124,'Bits')}<path d="${bitp}" stroke="${LB}" stroke-width="6" fill="none"/>
  ${bits.map((b,k)=>T(X0+k*BW+BW/2,b?64:134,b,30,'#fff')).join('')}
  ${[1,2,3,4].map(k=>`<path d="M${X0+k*BW} 40 V700" stroke="${LB}" stroke-width="2" stroke-dasharray="6 10" opacity=".5"/>`).join('')}</g>
 ${row('ask',290,ask,'ASK')}${row('fsk',460,fsk,'FSK')}${row('bpsk',630,psk,'BPSK')}`,
 labels:[[X0+1.5*BW,215,'Carrier off for 0',X0+1.5*BW,290,'middle'],[X0+3.5*BW,372,'Higher frequency for 1',X0+3.5*BW,410,'middle'],
         [X0+3.9*BW,730,'Phase reversed for 0',X0+4*BW,630,'middle']],
 steps:[['The bits <b>1 0 1 1 0</b> key a carrier: <b>ASK</b> sends the carrier for ones and none for zeros.',['bits','ask']],
        ['<b>FSK</b> sends a higher frequency for each one and a lower frequency for each zero.',['fsk']],
        ['<b>BPSK</b> reverses the carrier phase for zeros; <b>QAM</b> varies amplitude and phase together.',['bpsk']]],
 fact:['Bits per symbol = log₂M','At 2 Mbaud, QPSK carries 4 Mbit/s and 64-QAM carries 12 Mbit/s.'],
 end:'AM, FM and PM, ASK, FSK, PSK and QAM, constellations, Carson\'s rule, the Shannon limit and a worked example.',
 caption:'How do bits ride on a radio wave? ASK, FSK and BPSK side by side.',
 tags:['#Telecom','#Modulation','#DigitalCommunication','#EngineeringStudents','#ZentaEngineering']};
})();
