// Video spec for /how-neural-networks-work/. Facts from the article only.
// The article's 3, 4, 4, 2 fully connected network. Forward pass flows left to right along every connection;
// the loss compares the outputs with the target and backpropagation carries gradients right to left.
// Inset above the first hidden neuron: inputs times weights, summed with a bias, then ReLU, giving a.
(()=>{
const txt=(x,y,t,s=20,c='#fff',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const sub=(x,y,b,n,s=24)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="${s}">${b}<tspan font-size="${s*0.6}" dy="6">${n}</tspan></text>`;
const L=[[130,[260,360,460]],[330,[210,310,410,510]],[530,[210,310,410,510]],[730,[310,410]]];
const edges=(k,p)=>{const [x0,ys0]=L[k],[x1,ys1]=L[k+1];let b='',f='';
  ys0.forEach(a=>ys1.forEach(c=>{const d=`M${x0} ${a} L${x1} ${c}`;b+=`<path d="${d}" stroke="${LB}" stroke-width="2" opacity=".6"/>`;f+=`<path class="flow" d="${d}" stroke="#fff" stroke-width="2" opacity=".75" style="--p:${p}"/>`;}));
  return b+f;};
const nodes=(k,fill)=>L[k][1].map(y=>`<circle cx="${L[k][0]}" cy="${y}" r="22" fill="${fill}" stroke="${LB}" stroke-width="4"/>`).join('');
const fl=(d,p='.9s')=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="10" opacity=".5"/><path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="4" marker-end="url(#ahw)" style="--p:${p}"/>`;
BLUE['how-neural-networks-work'] = {
 pill:'AI AND DATA', title:'How <em>Neural Networks</em> Work',
 svg:`<g class="part" id="neuron">${sub(180,68,'x','1')}${sub(180,118,'x','2')}
  ${fl('M200 62 L294 80','.8s')}${fl('M200 112 L294 92','.8s')}
  <circle cx="330" cy="86" r="32" fill="${TL}" stroke="${LB}" stroke-width="4"/>${txt(330,97,'Σ',30)}
  ${fl('M362 86 H398','.8s')}<rect x="405" y="58" width="100" height="56" rx="8" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <path d="M418 100 H455 L492 68" stroke="#fff" stroke-width="5" fill="none" stroke-linejoin="round"/>
  ${fl('M505 86 H548','.8s')}${txt(572,95,'a',28)}
  <path d="M330 118 V184" stroke="#F5B800" stroke-width="3" stroke-dasharray="6 6"/></g>
 <g class="part" id="fwd">${edges(0,'1s')}${edges(1,'1s')}${edges(2,'1s')}</g>
 <g class="part" id="inputs">${nodes(0,NV)}</g>
 <g class="part" id="h1">${nodes(1,TL)}<g class="pulse"><circle cx="330" cy="210" r="28" fill="none" stroke="#F5B800" stroke-width="4"/></g></g>
 <g class="part" id="h2">${nodes(2,TL)}</g>
 <g class="part" id="out">${nodes(3,'#fff')}</g>
 <g class="part" id="loss">${fl('M752 310 L822 342','.8s')}${fl('M752 410 L822 378','.8s')}
  <rect x="830" y="320" width="140" height="80" rx="10" fill="${NV}" stroke="#F5B800" stroke-width="4"/>${txt(900,368,'(a − y)²',22)}</g>
 <g class="part" id="back">${fl('M900 400 V630 H240','1.2s')}
  ${[630,430].map(x=>`<path class="flow" d="M${x} 630 V558" stroke="#F5B800" stroke-width="4" fill="none" marker-end="url(#ah)" style="--p:.9s"/>`).join('')}
  <path class="flow" d="M240 630 V558" stroke="#F5B800" stroke-width="4" fill="none" marker-end="url(#ah)" style="--p:.9s"/></g>`,
 labels:[[330,30,'Sum + bias',330,54,'middle'],[455,30,'ReLU',455,58,'middle'],
         [130,550,'Input',130,482,'middle'],[480,165,'Hidden layers',430,210,'middle'],[730,500,'Output',730,432,'middle'],
         [900,290,'Loss',900,320,'middle'],[570,715,'Backpropagation',570,632,'middle']],
 steps:[['Each neuron forms <b>z = Σ w<sub>i</sub>x<sub>i</sub> + b</b>, then applies an activation such as <b>ReLU</b>.',['neuron']],
        ['In the <b>forward pass</b>, data flows layer by layer from input to output to give the prediction.',['fwd','inputs','h1','h2','out']],
        ['The <b>loss</b> measures error, <b>backpropagation</b> finds gradients and <b>gradient descent</b> updates weights.',['loss','back']]],
 fact:['w ← w − η ∂L/∂w','The 3, 4, 4, 2 network shown has 36 weights and 10 biases: 46 parameters.'],
 end:'Neurons, activation functions, layers, forward pass, backpropagation, a worked example and training problems.',
 caption:'How does a neural network learn? Weighted sums, activations, a loss and backpropagation.',
 tags:['#NeuralNetworks','#DeepLearning','#MachineLearning','#AI','#ZentaEngineering']};
})();
