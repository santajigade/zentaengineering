// Video spec for /fuel-cell-working-principle/. Facts from the article only.
BLUE['fuel-cell-working-principle'] = {
 pill:'RENEWABLE ENERGY', title:'How a <em>Fuel Cell</em> Works',
 svg:`<g class="part" id="anode"><rect x="280" y="220" width="100" height="420" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="380" y="220" width="90" height="420" fill="#5a6b80" stroke="${LB}" stroke-width="3"/>
  <path class="flow" d="M330 230 V630" stroke="#fff" stroke-width="5" style="--p:1s"/></g>
 <g class="part" id="mem"><rect x="470" y="220" width="60" height="420" fill="${TL}" stroke="${LB}" stroke-width="3"/></g>
 <g class="part" id="cathode"><rect x="530" y="220" width="90" height="420" fill="#5a6b80" stroke="${LB}" stroke-width="3"/><rect x="620" y="220" width="100" height="420" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <path class="flow" d="M670 230 V630" stroke="${LB}" stroke-width="5" style="--p:1s"/></g>
 <g class="part" id="h2in"><path class="flow" d="M330 150 V215" stroke="#fff" stroke-width="8" marker-end="url(#ahw)" style="--p:.8s"/></g>
 <g class="part" id="airin"><path class="flow" d="M670 150 V215" stroke="${LB}" stroke-width="8" marker-end="url(#ah)" style="--p:.8s"/></g>
 <g class="part" id="water"><path class="flow" d="M670 645 V715" stroke="${LB}" stroke-width="8" marker-end="url(#ah)" style="--p:.8s"/></g>
 <g class="part" id="hplus">${[330,430,530].map(y=>`<path class="flow" d="M420 ${y} H585" stroke="#F5B800" stroke-width="5" marker-end="url(#ah)" style="--p:.9s"/>`).join('')}</g>
 <g class="part" id="circuit"><path class="flow" d="M425 215 V80 H575 V215" fill="none" stroke="#fff" stroke-width="5" style="--p:1s"/>
  <rect x="445" y="52" width="110" height="56" rx="10" fill="#0b2545" stroke="#F5B800" stroke-width="3"/><text x="500" y="90" text-anchor="middle" fill="#fff" font-family="Open Sans" font-weight="800" font-size="26">LOAD</text></g>`,
 labels:[[250,150,'Hydrogen in',330,180,'end'],[750,150,'Air (oxygen) in',670,180],[250,300,'Anode (-)',283,300,'end'],[750,300,'Cathode (+)',717,300],[250,470,'Catalyst',425,470,'end'],[750,450,'H⁺ ions',585,430],[500,700,'Membrane',500,642,'middle'],[750,690,'Water and heat out',672,690],[405,40,'Electrons (e⁻)',425,80,'end']],
 steps:[['Hydrogen reaches the anode, where a <b>platinum catalyst</b> splits each molecule into <b>two protons and two electrons</b>.',['anode','h2in']],
        ['Protons cross the <b>membrane</b>. It blocks electrons, so they flow through the <b>external circuit</b> as DC current.',['mem','hplus','circuit']],
        ['At the cathode, <b>oxygen</b> from air joins the protons and electrons to form <b>water and heat</b>.',['cathode','water','airin']]],
 fact:['H₂ + ½O₂ → H₂O','Ideal cell voltage is 1.23 V. Real stacks run near 0.6 to 0.7 V per cell.'],
 end:'Stack construction, cell voltage and losses, efficiency and fuel cell types.',
 caption:'How does a fuel cell make electricity from hydrogen? Anode, membrane and cathode explained in 22 seconds.',
 tags:['#FuelCell','#Hydrogen','#RenewableEnergy','#CleanEnergy','#ZentaEngineering']};
