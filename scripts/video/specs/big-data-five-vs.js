// Video spec for /big-data-five-vs/. Facts from the article only.
// Data from sensors, databases and documents (variety) streams through a Kafka event log (velocity)
// into a cluster of ordinary machines (volume, horizontal scaling), is validated (veracity) and turned into insight (value).
(()=>{
const txt=(x,y,t,s=22)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const fl=(d,p='1s',c='#fff',w=4)=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="9" opacity=".55"/><path class="flow" d="${d}" fill="none" stroke="${c}" stroke-width="${w}" style="--p:${p}"/>`;
const node=(x,y)=>`<rect x="${x}" y="${y}" width="110" height="80" rx="8" fill="${NV}" stroke="${LB}" stroke-width="3"/>${[0,1,2].map(i=>`<rect x="${x+12}" y="${y+12+i*20}" width="86" height="12" rx="3" fill="${TL}"/><circle cx="${x+88}" cy="${y+18+i*20}" r="3" fill="#fff"/>`).join('')}`;
BLUE['big-data-five-vs'] = {
 pill:'DATA ENGINEERING', title:'How <em>Big Data</em> Platforms Work',
 svg:`<g class="part" id="sources">
  <circle cx="110" cy="170" r="42" fill="${NV}" stroke="${LB}" stroke-width="4"/><g class="pulse"><circle cx="110" cy="170" r="14" fill="#F5B800"/></g>
  <path d="M60 130 Q40 170 60 210 M160 130 Q180 170 160 210" stroke="${LB}" stroke-width="4" fill="none"/>
  <ellipse cx="110" cy="320" rx="60" ry="18" fill="${TL}" stroke="${LB}" stroke-width="4"/><path d="M50 320 V400 A60 18 0 0 0 170 400 V320" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M50 350 A60 18 0 0 0 170 350 M50 375 A60 18 0 0 0 170 375" stroke="${LB}" stroke-width="3" fill="none"/>
  <path d="M65 490 H135 L160 515 V620 H65 Z" fill="#eef6ff" stroke="${LB}" stroke-width="4"/>${[530,555,580,600].map(y=>`<path d="M80 ${y} H145" stroke="${NV}" stroke-width="5"/>`).join('')}</g>
 <g class="part" id="ingest">${fl('M162 170 C240 170 240 330 300 335','.9s')}${fl('M172 360 H300','.9s')}${fl('M162 555 C240 555 240 390 300 385','.9s')}</g>
 <g class="part" id="kafka"><rect x="300" y="300" width="170" height="120" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[0,1,2,3,4].map(i=>`<rect x="${312+i*31}" y="325" width="24" height="70" rx="4" fill="${i%2?TL:LB}" opacity=".85"/>`).join('')}
  <path class="flow" d="M305 410 H465" stroke="#fff" stroke-width="5" marker-end="url(#ahw)" style="--p:.6s"/></g>
 <g class="part" id="cluster"><rect x="520" y="150" width="290" height="420" rx="14" fill="none" stroke="${LB}" stroke-width="4" stroke-dasharray="14 9"/>
  ${[[540,175],[670,175],[540,320],[670,320],[540,465],[670,465]].map(([x,y])=>node(x,y)).join('')}
  ${fl('M470 360 H516','.7s')}</g>
 <g class="part" id="check">${fl('M810 360 H858','.8s')}<circle cx="905" cy="360" r="46" fill="${TL}" stroke="${LB}" stroke-width="4"/><path d="M882 360 L898 378 L930 342" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/></g>
 <g class="part" id="value">${fl('M905 406 V480','.8s')}<rect x="840" y="490" width="130" height="150" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[[858,600,25],[888,575,50],[918,545,80]].map(([x,y,h])=>`<rect x="${x}" y="${y}" width="22" height="${h}" fill="#F5B800"/>`).join('')}
  <path class="flow" d="M855 585 L890 555 L925 530 L955 505" stroke="#fff" stroke-width="4" fill="none" marker-end="url(#ahw)" style="--p:1.2s"/></g>`,
 labels:[[110,90,'Sensors',110,128,'middle'],[110,460,'Databases',110,418,'middle'],[110,660,'Documents',110,622,'middle'],
         [385,280,'Kafka stream',385,300,'middle'],[665,130,'Spark cluster',665,150,'middle'],[905,290,'Validate',905,314,'middle'],[905,690,'Value',905,642,'middle'],
         [385,470,'Velocity',385,420,'middle'],[665,620,'Volume',665,572,'middle'],[235,700,'Variety',165,610,'start']],
 steps:[['<b>Variety</b> and <b>velocity</b>: sensors, databases and documents send data fast and in many formats.',['sources','ingest','kafka']],
        ['<b>Volume</b> is handled by <b>horizontal scaling</b>: data and work spread across many ordinary machines.',['cluster']],
        ['Validation protects <b>veracity</b>, and analysis turns trusted data into better decisions: <b>value</b>.',['check','value']]],
 fact:['About 10 TB per year','2000 sensors read 10 times a second at 16 bytes per reading, in the worked example.'],
 end:'The five Vs, Hadoop, Spark, Kafka, data lakes and warehouses, and a sensor data volume example.',
 caption:'What makes data big? Volume, velocity, variety, veracity and value, and the platforms that handle them.',
 tags:['#BigData','#DataEngineering','#ApacheSpark','#EngineeringStudents','#ZentaEngineering']};
})();
