// Video spec for /computer-science/frontend-vs-backend/. Facts from the article only.
// Browser (frontend) sends an HTTP request right to the backend server, which queries the database;
// the response (status code and JSON) travels back left to the browser.
(()=>{
const t=(x,y,s,fs=24,a='middle',c='#fff')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${fs}">${s}</text>`;
BLUE['frontend-vs-backend'] = {
 pill:'COMPUTER SCIENCE', title:'How <em>Frontend and Backend</em> Work',
 svg:`<g class="part" id="browser"><rect x="30" y="190" width="270" height="360" rx="14" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <path d="M30 235 H300" stroke="${LB}" stroke-width="4"/>
  ${[60,90,120].map(x=>`<circle cx="${x}" cy="213" r="8" fill="${LB}"/>`).join('')}
  <rect x="60" y="260" width="210" height="40" rx="6" fill="${TL}"/>
  ${[330,360,390,420].map(y=>`<rect x="60" y="${y}" width="${y==420?130:210}" height="12" rx="6" fill="${LB}" opacity=".6"/>`).join('')}
  <rect class="pulse" x="60" y="465" width="120" height="50" rx="10" fill="#F5B800"/>${t(120,498,'Pay',24,'middle','#0b2545')}
  ${t(165,600,'Frontend',28)}${t(165,635,'HTML, CSS, JavaScript',20)}</g>
 <g class="part" id="server"><rect x="420" y="210" width="180" height="320" rx="12" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  ${[240,330,420].map(y=>`<rect x="440" y="${y}" width="140" height="70" rx="6" fill="${TL}" opacity=".85"/><circle class="pulse" cx="555" cy="${y+35}" r="9" fill="#F5B800"/>${[0,1,2].map(i=>`<rect x="455" y="${y+18+i*14}" width="70" height="7" rx="3" fill="#fff" opacity=".8"/>`).join('')}`).join('')}
  ${t(510,600,'Backend',28)}${t(510,635,'API, logic, auth',20)}</g>
 <g class="part" id="db"><path d="M720 280 V480 A100 30 0 0 0 920 480 V280" fill="${TL}" opacity=".85" stroke="${LB}" stroke-width="5"/>
  <ellipse cx="820" cy="280" rx="100" ry="30" fill="${NV}" stroke="${LB}" stroke-width="5"/>
  <path d="M720 350 A100 30 0 0 0 920 350 M720 415 A100 30 0 0 0 920 415" fill="none" stroke="${LB}" stroke-width="3"/>
  ${t(820,600,'Database',28)}${t(820,635,'Tables or documents',20)}</g>
 <g class="part" id="request"><path d="M300 300 H412" stroke="${LB}" stroke-width="8"/><path class="flow" d="M300 300 H412" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:.7s"/>
  <path d="M600 320 H712" stroke="${LB}" stroke-width="8"/><path class="flow" d="M600 320 H712" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:.7s"/>
  ${t(360,280,'GET',20)}</g>
 <g class="part" id="response"><path d="M420 450 H308" stroke="#F5B800" stroke-width="8"/><path class="flow" d="M420 450 H308" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:.7s"/>
  <path d="M720 440 H608" stroke="#F5B800" stroke-width="8"/><path class="flow" d="M720 440 H608" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:.7s"/>
  ${t(360,490,'JSON',20)}</g>`,
 labels:[[165,140,'Runs in the browser',165,188,'middle'],[510,150,'Runs on servers',510,208,'middle'],[880,150,'Stores the data',840,250,'middle']],
 steps:[['The <b>frontend</b> runs in the user\'s browser. <b>HTML, CSS and JavaScript</b> handle layout and interaction.',['browser']],
        ['The frontend sends an <b>HTTP request</b>. The <b>backend</b> applies business rules and queries the database.',['request','server','db']],
        ['The backend replies with a <b>status code</b> such as 200 OK and a body, usually <b>JSON</b>.',['response','browser']]],
 fact:['300 ms vs 140 ms','Three sequential requests vs one combined endpoint, at 80 ms round trip and 20 ms server time each.'],
 end:'What each side does, languages, how they talk over HTTP, security, performance and a worked example.',
 caption:'Frontend or backend? What runs in your browser, what runs on the server, and how they talk.',
 tags:['#WebDevelopment','#Frontend','#Backend','#ComputerScience','#ZentaEngineering']};
})();
