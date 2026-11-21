// Video spec for /retrieval-augmented-generation/. Facts from the article only.
(()=>{
const box=(x,y)=>`<rect x="${x}" y="${y}" width="120" height="100" rx="12" fill="${NV}" stroke="${LB}" stroke-width="3"/>`;
const net=(x,y)=>`${[[0,20],[0,50],[0,80]].map(([a,b])=>[[60,35],[60,65]].map(([c,d])=>`<path d="M${x+30+a} ${y+b} L${x+30+c} ${y+d}" stroke="${LB}" stroke-width="2"/>`).join('')+[[60,35],[60,65]].map(([c,d])=>`<path d="M${x+30+c} ${y+d} L${x+90} ${y+50}" stroke="${LB}" stroke-width="2"/>`).join('')).join('')}
 ${[[30,20],[30,50],[30,80],[90,50]].map(([a,b])=>`<circle cx="${x+a}" cy="${y+b}" r="8" fill="${TL}" stroke="#fff" stroke-width="2"/>`).join('')}
 <g class="pulse">${[[90,35],[90,65]].map(([a,b])=>`<circle cx="${x+a}" cy="${y+b}" r="8" fill="#fff"/>`).join('')}</g>`;
const card=(x,y,w)=>`<rect x="${x}" y="${y}" width="${w}" height="18" rx="4" fill="${TL}" stroke="#fff" stroke-width="2"/>`;
const arr=(d,p='.9s')=>`<path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:${p}"/>`;
BLUE['retrieval-augmented-generation'] = {
 pill:'AI AND DATA', title:'How <em>Retrieval Augmented Generation</em> Works',
 svg:`<g class="part" id="docs">${box(60,120)}
  <rect x="88" y="138" width="56" height="70" rx="4" fill="${TL}" stroke="${LB}" stroke-width="2"/><rect x="100" y="130" width="56" height="70" rx="4" fill="#fff"/>
  ${[148,160,172,184].map(y=>`<path d="M108 ${y} H148" stroke="${NV}" stroke-width="3"/>`).join('')}</g>
 <g class="part" id="chunk">${arr('M184 170 H252')}${box(260,120)}${card(285,138,70)}${card(285,161,70)}${card(285,184,70)}</g>
 <g class="part" id="embedIdx">${arr('M384 170 H452')}${box(460,120)}${net(460,120)}</g>
 <g class="part" id="index">${arr('M584 170 H692')}
  <path d="M700 135 V205 A100 22 0 0 0 900 205 V135" fill="${NV}" stroke="${LB}" stroke-width="3"/><ellipse cx="800" cy="135" rx="100" ry="22" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  ${[[735,175],[765,195],[800,180],[835,198],[865,172],[780,215],[825,218]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="6" fill="#fff"/>`).join('')}</g>
 <g class="part" id="query">${box(60,330)}
  <path d="M85 350 H155 A10 10 0 0 1 165 360 V395 A10 10 0 0 1 155 405 H110 L95 420 V405 H85 A10 10 0 0 1 75 395 V360 A10 10 0 0 1 85 350 Z" fill="#fff"/>
  <text x="120" y="392" text-anchor="middle" fill="${NV}" font-family="Open Sans" font-weight="800" font-size="40">?</text></g>
 <g class="part" id="embedQ">${arr('M184 380 H252')}${box(260,330)}${net(260,330)}</g>
 <g class="part" id="search">${arr('M384 380 H452')}${box(460,330)}
  <circle cx="510" cy="372" r="24" fill="none" stroke="#fff" stroke-width="7"/><path d="M527 389 L552 414" stroke="#fff" stroke-width="10" stroke-linecap="round"/>
  ${arr('M584 380 H650 V200 H692')}</g>
 <g class="part" id="topk">${arr('M810 232 V322')}${box(750,330)}${card(772,350,76)}${card(772,371,76)}${card(772,392,76)}</g>
 <g class="part" id="prompt">${arr('M120 434 V500 H780 V552')}${arr('M840 434 V552')}${box(750,560)}
  <rect x="775" y="575" width="70" height="70" rx="4" fill="#fff"/><rect x="783" y="585" width="54" height="14" rx="3" fill="${TL}"/><rect x="783" y="604" width="54" height="14" rx="3" fill="${TL}"/>
  <text x="810" y="638" text-anchor="middle" fill="${NV}" font-family="Open Sans" font-weight="800" font-size="20">?</text></g>
 <g class="part" id="llm">${arr('M746 610 H588')}${box(460,560)}
  <rect x="485" y="580" width="70" height="60" rx="8" fill="${TL}" stroke="#fff" stroke-width="2"/><text x="520" y="618" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="22">LLM</text></g>
 <g class="part" id="answer">${arr('M456 610 H188')}${box(60,560)}
  <path d="M85 575 H155 A10 10 0 0 1 165 585 V625 A10 10 0 0 1 155 635 H145 V650 L130 635 H85 A10 10 0 0 1 75 625 V585 A10 10 0 0 1 85 575 Z" fill="#fff"/>
  <path d="M100 605 L115 620 L142 590" fill="none" stroke="${TL}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g>`,
 labels:[[120,90,'Documents',120,118,'middle'],[320,90,'Chunks',320,118,'middle'],[520,90,'Embed',520,118,'middle'],[800,90,'Vector index',800,112,'middle'],
         [120,305,'Question',120,328,'middle'],[320,305,'Embed',320,328,'middle'],[500,305,'Vector search',520,328,'middle'],[730,466,'Top-k chunks',750,420,'end'],
         [810,705,'Augmented prompt',810,662,'middle'],[520,705,'LLM',520,662,'middle'],[120,705,'Answer',120,662,'middle']],
 steps:[['Offline, documents are split into <b>chunks</b>, embedded and stored with their text in a <b>vector index</b>.',['docs','chunk','embedIdx','index']],
        ['The question is embedded with the <b>same model</b>, and <b>vector search</b> finds the <span style="white-space:nowrap">top-k</span> nearest chunks.',['query','embedQ','search','topk']],
        ['Chunks plus question form an <b>augmented prompt</b>, and the <b>LLM</b> writes an answer with sources.',['prompt','llm','answer']]],
 fact:['cos θ = (q · d) ÷ (‖q‖ ‖d‖)','DPR beat BM25 by 9% to 19% absolute in top-20 passage retrieval accuracy.'],
 end:'Chunking, embeddings, vector search, RAG-Sequence and RAG-Token, a worked example and limits.',
 caption:'How does RAG let a language model answer from your own documents? Indexing, vector search and generation in 22 seconds.',
 tags:['#RAG','#GenerativeAI','#LLM','#VectorSearch','#ZentaEngineering']};
})();
