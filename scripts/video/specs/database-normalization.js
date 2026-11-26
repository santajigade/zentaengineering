// Video spec for /computer-science/database-normalization/. Facts from the article only.
// Top: the article's unnormalized enrolment table (Rao 4411 repeated in both CS201 rows).
// Bottom: the 3NF design: Student, Enrolment, Course, Instructor. Dashes run from each foreign key to the table it references.
(()=>{
const T=(x,y,t,z=22,c='#fff',a='start',w=700)=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="${c}" font-family="Open Sans" font-weight="${w}" font-size="${z}">${t}</text>`;
const cols=[['ID',90],['Name',100],['Course',110],['Title',190],['Instructor',140],['Phone',100]];
const rows=[['101','Asha','CS201','Data Structures','Rao','4411'],['101','Asha','CS205','Databases','Mehta','4420'],['102','Vikram','CS201','Data Structures','Rao','4411']];
const X0=135, xs=[X0]; cols.forEach(([,w])=>xs.push(xs[xs.length-1]+w));
const R0=40, RH=48;
let tab=`<rect x="${X0}" y="${R0}" width="${xs[6]-X0}" height="${RH*4}" rx="8" fill="${NV}" stroke="${LB}" stroke-width="4"/>
 <rect x="${X0}" y="${R0}" width="${xs[6]-X0}" height="${RH}" rx="8" fill="${TL}" stroke="${LB}" stroke-width="4"/>`;
for(let i=1;i<6;i++) tab+=`<path d="M${xs[i]} ${R0} V${R0+RH*4}" stroke="${LB}" stroke-width="2" opacity=".6"/>`;
for(let r=1;r<4;r++) tab+=`<path d="M${X0} ${R0+RH*r} H${xs[6]}" stroke="${LB}" stroke-width="2" opacity=".6"/>`;
cols.forEach(([c],i)=>tab+=T(xs[i]+10,R0+32,c,20,'#fff','start',800));
rows.forEach((r,j)=>r.forEach((v,i)=>tab+=T(xs[i]+10,R0+RH*(j+1)+32,v,20)));
const red=[1,3].map(j=>`<rect class="pulse" x="${xs[4]+3}" y="${R0+RH*j+4}" width="${xs[6]-xs[4]-10}" height="${RH-8}" rx="6" fill="none" stroke="#e5654f" stroke-width="5"/>`).join('');
const tb=(x,y,w,name,fields)=>`<rect x="${x}" y="${y}" width="${w}" height="${44+fields.length*40}" rx="10" fill="${NV}" stroke="${LB}" stroke-width="4"/>
 <rect x="${x}" y="${y}" width="${w}" height="44" rx="10" fill="${TL}" stroke="${LB}" stroke-width="4"/>${T(x+w/2,y+31,name,24,'#fff','middle',800)}
 ${fields.map((f,i)=>T(x+14,y+76+i*40,f,20)).join('')}`;
const fk=(d)=>`<path d="${d}" fill="none" stroke="${LB}" stroke-width="5" marker-end="url(#ah)"/><path class="flow" d="${d}" fill="none" stroke="#fff" stroke-width="2.5" style="--p:.9s"/>`;
BLUE['database-normalization'] = {
 pill:'COMPUTER SCIENCE', title:'How <em>Database Normalization</em> Works',
 svg:`<g class="part" id="orig">${tab}${red}</g>
 <g class="part" id="split"><path d="M500 260 V350" stroke="${LB}" stroke-width="8" marker-end="url(#ah)"/></g>
 <g class="part" id="student">${tb(30,390,220,'Student',['StudentID  PK','StudentName'])}</g>
 <g class="part" id="enrol">${tb(30,600,220,'Enrolment',['StudentID  FK','CourseID  FK'])}</g>
 <g class="part" id="course">${tb(390,600,250,'Course',['CourseID  PK','CourseTitle','InstructorID  FK'])}</g>
 <g class="part" id="instr">${tb(760,390,210,'Instructor',['InstructorID  PK','Name','Phone'])}</g>
 <g class="part" id="fk">${fk('M140 600 V530')}${fk('M250 710 H384')}${fk('M640 750 H700 V470 H754')}</g>`,
 labels:[[940,300,'Rao 4411 stored twice',800,R0+RH*3+40,'end'],[330,470,'2NF',252,450,'start'],
         [880,620,'3NF',870,560,'middle'],[310,775,'Foreign keys',318,712,'middle']],
 steps:[['One wide table repeats <b>Rao 4411</b> in every CS201 row, causing update, insert and delete anomalies.',['orig']],
        ['<b>2NF</b> removes partial dependencies on (StudentID, CourseID): Student, Course and Enrolment tables.',['split','student','enrol','course']],
        ['<b>3NF</b> moves instructors to their own table, and <b>foreign keys</b> link all four tables.',['instr','fk']]],
 fact:['Four tables, each fact once','Changing Rao\'s phone is now a single row update.'],
 end:'Anomalies, functional dependencies, keys, 1NF, 2NF, 3NF, BCNF, denormalization and a worked example.',
 caption:'Why store each fact only once? Database normalization from one messy table to 3NF.',
 tags:['#ComputerScience','#Databases','#SQL','#EngineeringStudents','#ZentaEngineering']};
})();
