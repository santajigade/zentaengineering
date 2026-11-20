// Video spec for /how-wings-generate-lift/. Facts from the article only.
BLUE['how-wings-generate-lift'] = {
 pill:'AEROSPACE', title:'How <em>Wings Generate Lift</em>',
 svg:`<g class="part" id="lowp"><ellipse cx="460" cy="318" rx="210" ry="34" fill="${LB}" opacity=".22"/>
  ${[330,400,560,630].map(x=>`<path d="M${x-10} 318H${x+10}" stroke="#fff" stroke-width="4"/>`).join('')}</g>
 <g class="part" id="highp"><ellipse cx="520" cy="452" rx="190" ry="22" fill="#F5B800" opacity=".22"/>
  ${[420,500,580].map(x=>`<path d="M${x-9} 452H${x+9}M${x} 443V461" stroke="#fff" stroke-width="4"/>`).join('')}</g>
 <g class="part" id="flowtop">
  <path class="flow" d="M30 270 C200 270 300 236 450 252 S700 312 970 372" fill="none" stroke="#fff" stroke-width="3" style="--p:.6s"/>
  <path class="flow" d="M30 170 C250 170 350 158 500 172 S760 218 970 262" fill="none" stroke="#fff" stroke-width="3" style="--p:.7s"/></g>
 <g class="part" id="flowbot">
  <path class="flow" d="M30 500 C200 500 350 500 500 506 S760 528 970 572" fill="none" stroke="${LB}" stroke-width="3" style="--p:1.1s"/>
  <path class="flow" d="M30 600 C220 600 380 602 520 608 S780 628 970 664" fill="none" stroke="${LB}" stroke-width="3" style="--p:1.1s"/></g>
 <g class="part" id="wing"><path d="M755 452 L754 452 L752 451 L748 449 L742 447 L735 444 L727 440 L717 436 L706 432 L693 427 L680 422 L665 416 L649 411 L632 405 L614 399 L595 393 L576 387 L556 382 L536 377 L515 371 L494 367 L474 362 L453 358 L432 355 L412 353 L392 351 L373 350 L355 349 L338 349 L321 350 L306 352 L293 354 L280 356 L270 359 L261 362 L253 366 L247 369 L243 373 L241 376 L240 380 L241 384 L244 387 L248 390 L254 393 L262 396 L271 398 L281 401 L293 403 L306 405 L320 406 L336 408 L352 410 L369 411 L387 413 L406 415 L425 416 L445 418 L465 420 L486 422 L506 424 L527 426 L547 428 L567 430 L587 432 L606 435 L625 437 L642 439 L659 440 L675 442 L689 444 L702 446 L714 447 L725 449 L734 450 L741 451 L747 451 L752 452 L754 452 L755 452Z" fill="${TL}" stroke="${LB}" stroke-width="3"/>
  <path d="M80 358 L755 452" stroke="#fff" stroke-width="2" stroke-dasharray="10 8" opacity=".8"/></g>
 <g class="part" id="aoa"><path d="M60 380 H240" stroke="#F5B800" stroke-width="3" stroke-dasharray="8 6"/>
  <path d="M100 380 A140 140 0 0 1 101 360" fill="none" stroke="#F5B800" stroke-width="5"/>
  <path class="flow" d="M30 440 H170" stroke="#fff" stroke-width="6" marker-end="url(#ahw)" style="--p:.9s"/></g>
 <g class="part" id="down">${[[770,470]].map(([x,y])=>`<path class="flow" d="M${x} ${y} L${x+80} ${y+40}" stroke="${LB}" stroke-width="6" marker-end="url(#ah)" style="--p:.8s"/>`).join('')}</g>
 <g class="part" id="lift"><path d="M480 340 V110" stroke="#fff" stroke-width="9" marker-end="url(#ahw)"/></g>`,
 labels:[[540,80,'Lift L',486,120],[30,560,'Relative wind',100,445],[30,320,'Angle of attack α',103,368],[970,140,'Low pressure, faster flow',640,300,'end'],[790,470,'Trailing edge',758,455],[970,720,'Downwash',820,495,'end'],[600,720,'High pressure',560,462,'middle'],[330,660,'Chord line',400,402,'middle']],
 steps:[['The wing meets the air at an <b>angle of attack α</b>, and its airfoil shape turns the flow <b>downward</b>.',['wing','aoa','flowtop','flowbot']],
        ['Flow over the curved top speeds up and its <b>pressure drops</b>. Below, flow slows and <b>pressure rises</b> slightly.',['lowp','highp','flowtop']],
        ['The pressure difference over the wing area is <b>lift</b>. The air pushed down (<b>downwash</b>) pushes the wing up.',['lift','down']]],
 fact:['L = ½ρv²SC<sub>L</sub>','Lift rises with angle of attack until about 15 to 18°, where the wing stalls.'],
 end:'Airfoil terms, Bernoulli and Newton, the lift equation, stall speed and high lift devices.',
 caption:'How does a wing make lift? Angle of attack, pressure difference, downwash and L = ½ρv²SC_L in 22 seconds.',
 tags:['#Aerodynamics','#AerospaceEngineering','#Lift','#Airfoil','#ZentaEngineering']};
