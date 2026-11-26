// Video spec for /petroleum-engineering/offshore-platform-types/. Facts from the article only.
// Platform types by water depth, seabed sloping down to the right (not to scale), as in the article figure:
// steel jacket on piles, TLP held by vertical tendons, deep draft spar on catenary moorings, FPSO on turret moorings.
// Motion: waves along the surface; well fluids flow up the jacket conductor and the FPSO riser from seabed to topsides.
(()=>{
const sb=x=>420+280*x/1000; // seabed depth line
const f=v=>v.toFixed(0);
BLUE['offshore-platform-types'] = {
 pill:'PETROLEUM', title:'How <em>Offshore Platforms</em> Work',
 svg:`<g class="part" id="sea"><path d="M0 180 H1000 V${f(sb(1000))} L0 ${f(sb(0))} Z" fill="${NV}" opacity=".55"/>
  <path d="M0 ${f(sb(0))} L1000 ${f(sb(1000))} V740 H0 Z" fill="#5a4a32" opacity=".8"/><path d="M0 ${f(sb(0))} L1000 ${f(sb(1000))}" stroke="${LB}" stroke-width="4"/>
  <path d="M0 180 H1000" stroke="${LB}" stroke-width="4"/><path class="flow" d="M0 180 H1000" stroke="#fff" stroke-width="2" style="--p:2s"/></g>
 <g class="part" id="jacket"><rect x="70" y="112" width="120" height="30" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M95 142 L62 ${f(sb(62))} M165 142 L198 ${f(sb(198))} M87 220 L173 220 M78 300 L182 300 M70 380 L190 380 M87 220 L182 300 M173 220 L78 300 M78 300 L190 380 M182 300 L70 380" stroke="${LB}" stroke-width="5"/>
  <path d="M62 ${f(sb(62))} V${f(sb(62)+40)} M198 ${f(sb(198))} V${f(sb(198)+40)}" stroke="#c9ccd1" stroke-width="5"/>
  <path class="flow" d="M130 ${f(sb(130))} V142" stroke="#F5B800" stroke-width="4" style="--p:1s"/></g>
 <g class="part" id="tlp"><rect x="300" y="110" width="140" height="28" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="315" y="138" width="30" height="92" fill="${TL}" stroke="${LB}" stroke-width="4"/><rect x="395" y="138" width="30" height="92" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="300" y="230" width="140" height="25" rx="6" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M330 255 V${f(sb(330))} M410 255 V${f(sb(410))}" stroke="#fff" stroke-width="5"/>
  <rect x="318" y="${f(sb(330)-4)}" width="24" height="16" fill="#c9ccd1"/><rect x="398" y="${f(sb(410)-4)}" width="24" height="16" fill="#c9ccd1"/></g>
 <g class="part" id="spar"><rect x="545" y="110" width="110" height="28" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="575" y="138" width="50" height="290" rx="6" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <path d="M575 390 Q520 ${f(sb(500))} 470 ${f(sb(470))} M625 390 Q680 ${f(sb(700))} 720 ${f(sb(720))}" fill="none" stroke="#fff" stroke-width="5"/></g>
 <g class="part" id="fpso"><path d="M770 160 H960 L945 205 H790 Z" fill="${TL}" stroke="${LB}" stroke-width="4"/>
  <rect x="840" y="128" width="40" height="32" fill="${NV}" stroke="${LB}" stroke-width="3"/><rect x="890" y="128" width="40" height="32" fill="${NV}" stroke="${LB}" stroke-width="3"/>
  <circle cx="800" cy="200" r="10" fill="#F5B800"/>
  <path d="M800 205 Q850 ${f(sb(880))} 900 ${f(sb(900))} M800 205 Q920 ${f(sb(950))} 985 ${f(sb(985))}" fill="none" stroke="#fff" stroke-width="5"/>
  <path d="M760 ${f(sb(760))} C760 450 800 380 800 210" fill="none" stroke="#F5B800" stroke-width="4"/>
  <path class="flow" d="M760 ${f(sb(760))} C760 450 800 380 800 210" fill="none" stroke="#fff" stroke-width="3" style="--p:1s"/></g>`,
 labels:[[130,80,'Jacket',130,112,'middle'],[370,80,'TLP',370,110,'middle'],[600,80,'Spar',600,110,'middle'],[865,80,'FPSO',865,128,'middle'],
         [20,620,'Piles',62,Math.round(sb(62)+30),'start'],[440,350,'Tendons',410,330,'start'],[430,690,'Catenary mooring',521,515,'start'],[740,430,'Riser',780,417,'end']],
 steps:[['A <b>steel jacket</b> stands on <b>piles</b> in up to about 400 m of water.',['jacket']],
        ['A <b>TLP</b> is held down by vertical <b>tendons</b> in about 300 to 1500 m of water.',['tlp']],
        ['<b>Spars</b> and <b>FPSOs</b> are moored floaters, used in water up to about 3000 m.',['spar','fpso']]],
 fact:['ρ<sub>w</sub> g V = W','A 40 000 t TLP displacing 52 000 m³ needs about 130 MN of tendon tension.'],
 end:'Jackets, gravity bases, jack-ups, TLPs, spars, semi-submersibles and FPSOs, water depths and selection.',
 caption:'Which offshore platform suits which water depth? Jackets, TLPs, spars and FPSOs explained.',
 tags:['#OffshoreEngineering','#OilAndGas','#PetroleumEngineering','#EngineeringStudents','#ZentaEngineering']};
})();
