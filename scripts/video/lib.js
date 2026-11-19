// Blue-grid style topics. Coordinates in viewBox 0 0 1000 760.
// Palette: outlines #7fd3ff, fills #13a89e, moving parts white, labels #F5B800.
const LB='#7fd3ff', TL='#13a89e', NV='#0e3a5c';
const ring=(cx,cy,r1,r2,fill)=>`<path d="M${cx-r1} ${cy}a${r1} ${r1} 0 1 0 ${2*r1} 0a${r1} ${r1} 0 1 0 ${-2*r1} 0Z M${cx-r2} ${cy}a${r2} ${r2} 0 1 1 ${2*r2} 0a${r2} ${r2} 0 1 1 ${-2*r2} 0Z" fill="${fill}" fill-rule="evenodd" stroke="${LB}" stroke-width="3"/>`;
const P=(cx,cy,r,deg)=>[cx+r*Math.cos(deg*Math.PI/180),cy+r*Math.sin(deg*Math.PI/180)];
window.BLUE = {};
