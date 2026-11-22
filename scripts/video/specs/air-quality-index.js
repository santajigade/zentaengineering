// Video spec for /air-quality-index/. Facts from the article only.
// Pollutant concentrations -> sub-index by linear interpolation -> highest sub-index is the AQI -> US EPA six band scale (marker at the worked example, 118).
(()=>{
const pol=['PM2.5','PM10','O3','NO2','SO2','CO'];
const band=[['0-50','#00e400','Good'],['51-100','#ffff00','Moderate'],['101-150','#ff7e00','Sensitive|groups'],['151-200','#ff0000','Unhealthy'],['201-300','#8f3f97','Very|unhealthy'],['301-500','#7e0023','Hazardous']];
const F='font-family="Open Sans"';
BLUE['air-quality-index'] = {
 pill:'ENVIRONMENTAL', title:'How the <em>Air Quality Index</em> Works',
 svg:`<g class="part" id="polls">${pol.map((p,i)=>`<rect x="40" y="${70+i*72}" width="150" height="56" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <text x="115" y="${107+i*72}" text-anchor="middle" fill="#fff" ${F} font-weight="800" font-size="26">${p}</text>`).join('')}</g>
 <g class="part" id="lines"><path d="${pol.map((p,i)=>`M190 ${98+i*72} L330 ${262+i*12}`).join(' ')}" stroke="${LB}" stroke-width="4"/>
  <path class="flow" d="${pol.map((p,i)=>`M190 ${98+i*72} L328 ${262+i*12}`).join(' ')}" stroke="#fff" stroke-width="2.5" style="--p:1s"/></g>
 <g class="part" id="interp"><rect x="330" y="240" width="230" height="100" rx="12" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <text x="445" y="283" text-anchor="middle" fill="#fff" ${F} font-weight="800" font-size="28">Sub-index Ip</text>
  <text x="445" y="318" text-anchor="middle" fill="#fff" ${F} font-weight="700" font-size="22">for each pollutant</text></g>
 <g class="part" id="max"><path d="M560 290 H634" stroke="${LB}" stroke-width="6" marker-end="url(#ah)"/>
  <path class="flow" d="M560 290 H630" stroke="#fff" stroke-width="3" style="--p:.8s"/>
  <rect x="640" y="245" width="260" height="90" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <text x="770" y="284" text-anchor="middle" fill="#fff" ${F} font-weight="800" font-size="28">AQI = highest</text>
  <text x="770" y="318" text-anchor="middle" fill="#fff" ${F} font-weight="700" font-size="22">sub-index</text>
  <path d="M770 335 V450 H412 V542" fill="none" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/>
  <path class="flow" d="M770 337 V450 H412 V536" fill="none" stroke="#fff" stroke-width="3" style="--p:1s"/></g>
 <g class="part" id="scale">${band.map(([r,c,n],i)=>`<rect x="${60+i*150}" y="560" width="150" height="60" fill="${c}" stroke="#061630" stroke-width="2"/>
  <text x="${135+i*150}" y="599" text-anchor="middle" fill="${i<3?'#061630':'#fff'}" ${F} font-weight="800" font-size="24">${r}</text>
  ${n.split('|').map((t,j)=>`<text x="${135+i*150}" y="${654+j*28}" text-anchor="middle" fill="#fff" ${F} font-weight="700" font-size="22">${t}</text>`).join('')}`).join('')}
  <g class="pulse"><path d="M398 548 H426 L412 566 Z" fill="#fff"/></g></g>`,
 labels:[[600,200,'Linear interpolation',540,242],[800,420,'Maximum',770,400],[440,520,'Example: 118',412,500],[230,40,'Measured averages',190,80]],
 steps:[['Each pollutant, such as <b>PM2.5</b>, <b>PM10</b> or <b>O3</b>, is averaged over its set period.',['polls']],
        ['Linear interpolation between <b>breakpoints</b> turns each concentration into a <b>sub-index</b>.',['lines','interp']],
        ['The <b>highest sub-index</b> is the AQI, shown on a colour scale. Sub-indices are never added.',['max','scale']]],
 fact:['PM2.5 42.3 µg/m³ → AQI 118','US index: Unhealthy for sensitive groups. With PM10 at 120 µg/m³, the Indian AQI is 114.'],
 end:'The pollutants, US and Indian breakpoint tables, the sub-index formula and a worked calculation.',
 caption:'How is the air quality index calculated? Pollutants, breakpoints, sub-indices and the AQI colour scale in 22 seconds.',
 tags:['#AirQuality','#AQI','#EnvironmentalEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
