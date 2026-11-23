// Video spec for /tokenization-and-embeddings/. Facts from the article only.
// Text -> subword tokens -> integer IDs (the article's illustrative IDs) -> row lookup in the embedding matrix -> dense vector.
// Vector space drawn with the true angles of the worked example: pump vs compressor cos = 0.98 (11.5 deg), pump vs banana cos = 0.31 (72 deg).
(()=>{
const arr=(d,p='.9s')=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="7" opacity=".5"/><path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:${p}"/>`;
const T=(x,y,t,s=26,f='#fff',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${f}" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const cx=[300,440,580,720], tok=['Pump','s','over','heat'], ids=['48291','82','2017','17221'];
const O=[720,690], L=150;
const vec=(deg,c,w=6)=>{const [x,y]=P(O[0],O[1],L,-deg);return `<path d="M${O[0]} ${O[1]} L${x.toFixed(1)} ${y.toFixed(1)}" stroke="${c}" stroke-width="${w}" marker-end="url(#ah)"/>`;};
const ang=(a,b,r)=>{const [x1,y1]=P(O[0],O[1],r,-a),[x2,y2]=P(O[0],O[1],r,-b);return `M${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 0 0 ${x2.toFixed(1)} ${y2.toFixed(1)}`;};
BLUE['tokenization-and-embeddings'] = {
 pill:'AI AND DATA', title:'How <em>Tokenization and Embeddings</em> Work',
 svg:`<g class="part" id="text"><rect x="240" y="95" width="540" height="56" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>${T(510,132,'"Pumps overheat"',28)}</g>
 <g class="part" id="tokens">${cx.map(x=>arr(`M${x} 155 V212`)).join('')}
  ${cx.map((x,i)=>`<rect x="${x-58}" y="220" width="116" height="56" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/>${T(x,257,tok[i])}`).join('')}</g>
 <g class="part" id="ids">${cx.map(x=>arr(`M${x} 280 V332`)).join('')}
  ${cx.map((x,i)=>`<rect x="${x-58}" y="340" width="116" height="50" rx="10" fill="${NV}" stroke="#F5B800" stroke-width="3"/>${T(x,374,ids[i],24)}`).join('')}</g>
 <g class="part" id="matrix">${arr('M300 394 V430 H50 V578 H74')}
  <rect x="80" y="470" width="340" height="240" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[0,1,2,3,4,5,6,7].map(r=>[0,1,2,3,4,5].map(c=>`<rect x="${96+c*53}" y="${482+r*28}" width="44" height="20" rx="3" fill="${r==3?'#fff':TL}" opacity="${r==3?1:.45}"/>`).join('')).join('')}
  <g class="pulse"><rect x="88" y="560" width="324" height="36" rx="6" fill="none" stroke="#F5B800" stroke-width="4"/></g></g>
 <g class="part" id="space">${arr('M424 578 H572')}
  <rect x="580" y="470" width="360" height="240" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <path d="M600 690 H925 M720 700 V485" stroke="${LB}" stroke-width="2" opacity=".5"/>
  <g stroke="#fff" fill="#fff">${vec(30,'#fff')}</g><g stroke="${LB}" fill="${LB}">${vec(41.5,LB)}</g><g stroke="#F5B800" fill="#F5B800">${vec(102,'#F5B800')}</g>
  <path d="${ang(30,102,70)}" stroke="#F5B800" stroke-width="2" fill="none" stroke-dasharray="5 4"/>
  ${T(864,624,'pump',20,'#fff','start')}${T(836,568,'compressor',20,LB)}${T(702,528,'banana',20,'#F5B800','start')}</g>`,
 labels:[[200,131,'Text',236,123,'end'],[200,256,'Tokens',236,248,'end'],[200,373,'IDs',236,365,'end'],
         [250,748,'Embedding matrix',250,712,'middle'],[760,748,'Vector space',760,712,'middle']],
 steps:[['Tokenization splits text into <b>subword tokens</b>, and each token maps to an integer ID.',['text','tokens','ids']],
        ['The <b>embedding</b> matrix has one row per token; looking up an ID returns its dense vector.',['matrix']],
        ['Similar meanings point in similar directions, measured by <b>cosine similarity</b>.',['space']]],
 fact:['cos θ = (a · b) ÷ (‖a‖ ‖b‖)','Toy example: pump and compressor score 0.98, pump and banana only 0.31.'],
 end:'Word, character and subword tokens, BPE, one-hot vectors, Word2Vec, contextual embeddings and a worked example.',
 caption:'How does a language model turn words into numbers? Tokens, IDs and embedding vectors in 22 seconds.',
 tags:['#NLP','#Tokenization','#Embeddings','#LLM','#ZentaEngineering']};
})();
