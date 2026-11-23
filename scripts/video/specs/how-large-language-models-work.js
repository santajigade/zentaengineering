// Video spec for /how-large-language-models-work/. Facts from the article only.
// Autoregressive loop: tokens, embeddings plus position, a stack of transformer layers (attention and
// feedforward), softmax probabilities for the next token, the chosen token appended to the input and fed back.
// Probabilities are the worked example at T = 1: "failed" 70.5%, "started" 25.9%, "banana" 3.5%.
(()=>{
const txt=(x,y,t,s=20,c='#fff',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const fl=(d,p='.9s')=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="10" opacity=".5"/><path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:${p}"/>`;
const layer=(y,n)=>`<rect x="470" y="${y}" width="170" height="70" rx="8" fill="${NV}" stroke="${LB}" stroke-width="3"/>
 <rect x="478" y="${y+22}" width="96" height="40" rx="6" fill="${TL}"/>${txt(526,y+49,'Attention',16)}
 <rect x="582" y="${y+22}" width="50" height="40" rx="6" fill="${LB}"/>${txt(607,y+49,'FFN',16,NV)}
 ${txt(555,y+17,n,14,LB)}`;
const bars=[['failed',70.5],['started',25.9],['banana',3.5]];
BLUE['how-large-language-models-work'] = {
 pill:'AI AND DATA', title:'How <em>Large Language Models</em> Work',
 svg:`<g class="part" id="tok"><rect x="30" y="100" width="190" height="100" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  <rect x="44" y="128" width="68" height="44" rx="6" fill="#fff"/>${txt(78,158,'The',20,NV)}
  <rect x="120" y="128" width="88" height="44" rx="6" fill="#fff"/>${txt(164,158,'pump',20,NV)}</g>
 <g class="part" id="emb">${fl('M220 150 H262')}<rect x="270" y="100" width="150" height="100" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${[[284,40],[304,62],[324,28],[344,52]].map(([x,h])=>`<rect x="${x}" y="${178-h}" width="14" height="${h}" rx="3" fill="${TL}" stroke="#fff" stroke-width="1.5"/>`).join('')}
  ${txt(386,158,'+ pos',18,LB)}</g>
 <g class="part" id="stack">${fl('M420 150 H462')}<rect x="455" y="95" width="200" height="370" rx="14" fill="none" stroke="${LB}" stroke-width="4" stroke-dasharray="14 9"/>
  ${layer(110,'LAYER 1')}${layer(215,'LAYER 2')}${layer(375,'LAYER N')}
  ${fl('M555 180 V208','.6s')}${fl('M555 285 V368','.9s')}</g>
 <g class="part" id="probs">${fl('M655 410 H692')}<rect x="700" y="310" width="280" height="190" rx="12" fill="${NV}" stroke="${LB}" stroke-width="4"/>
  ${bars.map(([w,p],i)=>{const y=345+i*52, bw=p*1.3;return `${txt(790,y+20,w,18,'#fff','end')}<rect x="800" y="${y}" width="${bw.toFixed(1)}" height="28" rx="4" fill="${i?TL:'#F5B800'}" ${i?'':'class="pulse"'}/>${txt(808+bw,y+21,p+'%',16,'#fff','start')}`;}).join('')}</g>
 <g class="part" id="loop">${fl('M840 500 V600 H125 V208','1.4s')}</g>`,
 labels:[[125,70,'Tokens',125,100,'middle'],[345,70,'Embeddings',345,100,'middle'],[555,42,'Transformer layers',555,95,'middle'],
         [840,280,'Next token',840,310,'middle'],[300,330,'Self-attention',500,405,'middle'],[715,555,'Feedforward',607,450,'middle'],
         [480,650,'Append chosen token, repeat',480,600,'middle']],
 steps:[['A tokenizer splits text into <b>tokens</b>; each maps to an <b>embedding</b> vector plus position.',['tok','emb']],
        ['Stacked <b>transformer layers</b> mix tokens with <b>self-attention</b>, then a feedforward network.',['stack']],
        ['<b>Softmax</b> gives every next token a probability; one is chosen, <b>appended</b> and the loop repeats.',['probs','loop']]],
 fact:['softmax(QK<sup>T</sup> ÷ √d<sub>k</sub>) V','Scaled dot product attention; many attention heads run in parallel.'],
 end:'Tokens, attention, next token prediction, temperature, pre-training, RLHF, limits and a worked example.',
 caption:'How does a large language model write? It predicts one token, appends it and repeats.',
 tags:['#LLM','#GenerativeAI','#Transformers','#MachineLearning','#ZentaEngineering']};
})();
