// Video spec for /uart-vs-spi-vs-i2c/. Facts from the article only.
// UART: TX of each device to RX of the other. SPI: controller drives SCLK, MOSI and CS, peripheral returns MISO.
// I2C: controller and two targets on shared open drain SDA and SCL with pull-ups to VDD; the controller drives SCL.
(()=>{
const txt=(x,y,t,s=22,c='#fff')=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${c}" font-family="Open Sans" font-weight="800" font-size="${s}">${t}</text>`;
const box=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>`;
const wire=(d,c='#e5654f',f=true)=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="6"/>`+(f?`<path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="2.5" style="--p:1s"/>`:'');
const dot=(x,y)=>`<circle cx="${x}" cy="${y}" r="7" fill="${LB}"/>`;
BLUE['uart-vs-spi-vs-i2c'] = {
 pill:'ELECTRONICS', title:'<em>UART vs SPI vs I2C</em>: How Each Link Works',
 svg:`<g class="part" id="uart">${txt(160,70,'UART',34)}
  ${wire('M150 170H175V470H190')}${wire('M190 540H95V280')}
  ${box(40,120,110,160)}${box(190,420,110,160)}
  ${txt(95,180,'TX')}${txt(95,262,'RX')}${txt(245,478,'RX')}${txt(245,548,'TX')}</g>
 <g class="part" id="spi">${txt(500,70,'SPI',34)}
  ${wire('M460 150H520V420H530')}${wire('M460 200H505V470H530')}${wire('M530 520H490V250H460')}${wire('M460 290H475V570H530')}
  ${box(360,120,100,200)}${box(530,400,110,200)}
  ${txt(410,158,'SCLK',20)}${txt(410,208,'MOSI',20)}${txt(410,258,'MISO',20)}${txt(410,298,'CS',20)}
  ${txt(585,428,'SCLK',20)}${txt(585,478,'MOSI',20)}${txt(585,528,'MISO',20)}${txt(585,578,'CS',20)}</g>
 <g class="part" id="i2c">${txt(840,70,'I2C',34)}
  <path d="M700 110H790M720 110V130M760 110V130M720 200V360M760 200V300" stroke="${LB}" stroke-width="4"/>
  <rect x="710" y="130" width="20" height="70" fill="#fff" stroke="${LB}" stroke-width="3"/><rect x="750" y="130" width="20" height="70" fill="#fff" stroke="${LB}" stroke-width="3"/>
  ${wire('M760 300H980',LB,false)}${wire('M720 360H980','#e5654f',true)}
  <path d="M770 480V300M740 480V360M845 480V300M875 480V360M925 480V300M955 480V360" stroke="${LB}" stroke-width="4"/>
  ${[[760,300],[770,300],[845,300],[925,300],[720,360],[740,360],[875,360],[955,360]].map(([x,y])=>dot(x,y)).join('')}
  ${box(690,480,100,90)}${box(830,480,60,90)}${box(910,480,60,90)}
  ${txt(740,533,'Ctrl')}${txt(860,533,'T1')}${txt(940,533,'T2')}${txt(745,98,'VDD',20)}
  ${txt(950,288,'SDA',20)}${txt(950,348,'SCL',20)}</g>`,
 labels:[[160,690,'TX to RX',176,480,'middle'],[500,690,'Chip select',500,573,'middle'],[880,220,'Pull-ups',772,165,'middle'],[840,690,'Shared bus',900,572,'middle']],
 steps:[['A <b>UART</b> sends each byte as a frame with start and stop bits, TX to RX, with <b>no clock</b>.',['uart']],
        ['In <b>SPI</b> the controller drives the clock and chip select, and data moves both ways on <b>MOSI</b> and <b>MISO</b>.',['spi']],
        ['<b>I2C</b> devices are addressed on shared open drain <b>SDA</b> and <b>SCL</b> lines held high by pull-ups.',['i2c']]],
 fact:['22.2 vs 5.79 vs 0.256 ms','256 bytes over UART at 115200&nbsp;baud, I2C at 400&nbsp;kHz and SPI at 8&nbsp;MHz.'],
 end:'Wires, clocking, framing, addressing, speed and wiring rules, with transfer time and pull-up examples.',
 caption:'UART, SPI or I2C? How the three serial links of every microcontroller wire up and move data.',
 tags:['#UART','#SPI','#I2C','#EmbeddedSystems','#ZentaEngineering']};
})();
