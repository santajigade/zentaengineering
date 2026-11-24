// The Discipline taxonomy: disciplines grouped into families (master plan, section B). Add new disciplines here.
// Slugs are permanent once a page is live. Change a display name freely, never a slug.

export interface Subcategory { slug: string; name: string }
export interface Discipline {
  slug: string;
  name: string; // full display name
  short: string; // short name for menus and chips
  family: FamilySlug;
  description: string; // one line scope, used on cards and as fallback meta description
  subcategories: Subcategory[];
}
export type FamilySlug = 'core' | 'computing' | 'energy' | 'industry' | 'specialized';

export const FAMILIES: { slug: FamilySlug; name: string }[] = [
  { slug: 'core', name: 'Core Engineering' },
  { slug: 'computing', name: 'Computing and Systems' },
  { slug: 'energy', name: 'Energy and Resources' },
  { slug: 'industry', name: 'Industry and Manufacturing' },
  { slug: 'specialized', name: 'Specialized Engineering' },
];

/** Builds a subcategory. Slug is derived from the name unless given. */
const s = (name: string, slug?: string): Subcategory => ({
  name,
  slug: slug ?? name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
});

export const DISCIPLINES: Discipline[] = [
  // Family 1: Core Engineering
  {
    slug: 'mechanical-engineering', name: 'Mechanical Engineering', short: 'Mechanical', family: 'core',
    description: 'Machine design, thermodynamics, fluid mechanics, heat transfer, pumps, compressors, turbines and HVAC.',
    subcategories: [
      s('Engineering Mechanics and Strength of Materials', 'strength-of-materials'),
      s('Machine Design and Elements', 'machine-design'),
      s('Thermodynamics'),
      s('Fluid Mechanics'),
      s('Heat Transfer'),
      s('Pumps, Compressors and Turbines', 'pumps-compressors-turbines'),
      s('HVAC and Refrigeration', 'hvac-refrigeration'),
      s('Tribology and Lubrication', 'tribology'),
      s('CAD, CAE and FEA', 'cad-cae-fea'),
    ],
  },
  {
    slug: 'electrical-engineering', name: 'Electrical Engineering', short: 'Electrical', family: 'core',
    description: 'Electrical machines, transformers, power systems, switchgear, protection, earthing and power quality.',
    subcategories: [
      s('Circuit Theory and Fundamentals', 'circuit-fundamentals'),
      s('Electrical Machines and Motors', 'electrical-machines'),
      s('Transformers'),
      s('Power Systems'),
      s('Switchgear and Circuit Breakers', 'switchgear'),
      s('Protection and Relays', 'protection-relays'),
      s('Earthing and Lightning Protection', 'earthing'),
      s('Power Quality and Power Factor', 'power-quality'),
      s('Wiring and Installation', 'wiring-installation'),
      s('High Voltage Engineering', 'high-voltage'),
    ],
  },
  {
    slug: 'electronics-engineering', name: 'Electronics and Communication Engineering', short: 'Electronics', family: 'core',
    description: 'Components, analog and digital electronics, power electronics, PCB design, embedded systems, VLSI and RF.',
    subcategories: [
      s('Electronic Components', 'components'),
      s('Analog Electronics'),
      s('Digital Electronics'),
      s('Power Electronics'),
      s('PCB Design'),
      s('Microcontrollers and Embedded Systems', 'embedded-systems'),
      s('VLSI and Semiconductor Design', 'vlsi'),
      s('Signal Processing'),
      s('RF, Microwave and Antennas', 'rf-microwave-antennas'),
    ],
  },
  {
    slug: 'civil-engineering', name: 'Civil and Structural Engineering', short: 'Civil', family: 'core',
    description: 'Structural analysis, RCC and steel design, concrete, geotechnics, surveying, highways, bridges and estimation.',
    subcategories: [
      s('Structural Analysis'),
      s('RCC Design', 'rcc-design'),
      s('Steel Structures'),
      s('Concrete Technology'),
      s('Construction Materials'),
      s('Geotechnical and Foundation Engineering', 'geotechnical'),
      s('Surveying'),
      s('Highway and Transportation', 'transportation'),
      s('Bridge Engineering'),
      s('Estimation, Costing and Construction Management', 'estimation-construction-management'),
    ],
  },
  {
    slug: 'chemical-engineering', name: 'Chemical and Process Engineering', short: 'Chemical', family: 'core',
    description: 'Material and energy balances, heat exchangers, mass transfer, reactors, process equipment and P&IDs.',
    subcategories: [
      s('Process Fundamentals', 'process-fundamentals'),
      s('Fluid and Particle Operations', 'mechanical-operations'),
      s('Heat Exchangers and Process Heat Transfer', 'heat-exchangers'),
      s('Mass Transfer and Separation', 'mass-transfer'),
      s('Reaction Engineering and Reactors', 'reaction-engineering'),
      s('Process Equipment'),
      s('PFD and P&ID', 'pfd-pid'),
      s('Process Industries'),
      s('Process Optimization'),
    ],
  },

  // Family 2: Computing and Systems
  {
    slug: 'instrumentation-control', name: 'Instrumentation and Control Engineering', short: 'Instrumentation and Control', family: 'core',
    description: 'Measurement fundamentals, sensors and transducers, process measurement principles, signal conditioning and control theory.',
    subcategories: [
      s('Measurement Fundamentals'),
      s('Sensors and Transducers'),
      s('Process Measurement Principles'),
      s('Signal Conditioning'),
      s('Process Control Theory'),
      s('Control Systems'),
      s('Interview and Exam Prep', 'interview-exam-prep'),
    ],
  },
  {
    slug: 'computer-science', name: 'Computer Science and Software Engineering', short: 'Computer Science', family: 'computing',
    description: 'Programming, data structures, algorithms, operating systems, databases, architecture and software design.',
    subcategories: [
      s('Programming Languages'),
      s('Data Structures'),
      s('Algorithms'),
      s('Operating Systems'),
      s('Databases'),
      s('Computer Architecture'),
      s('Web Development'),
      s('APIs and Backend', 'apis-backend'),
      s('Software Engineering and Design Patterns', 'software-design'),
      s('Software Testing'),
    ],
  },
  {
    slug: 'automation-robotics', name: 'Automation, Robotics and Mechatronics', short: 'Automation and Robotics', family: 'computing',
    description: 'PLC, SCADA, DCS, HMI, industrial robots, servo and motion control, industrial networks and Industry 4.0.',
    subcategories: [
      s('PLC', 'plc'),
      s('SCADA and HMI', 'scada-hmi'),
      s('DCS', 'dcs'),
      s('Industrial Robotics'),
      s('Servo and Motion Control', 'motion-control'),
      s('Industrial Networks and Protocols', 'industrial-networks'),
      s('Machine Vision'),
      s('Mechatronic Systems', 'mechatronics'),
      s('Industry 4.0 and Digital Twins', 'industry-4-0'),
    ],
  },
  {
    slug: 'ai-data-engineering', name: 'Artificial Intelligence and Data Engineering', short: 'AI and Data', family: 'computing',
    description: 'Machine learning, deep learning, computer vision, NLP, generative AI, data science and data pipelines.',
    subcategories: [
      s('Machine Learning'),
      s('Deep Learning and Neural Networks', 'deep-learning'),
      s('Computer Vision'),
      s('Natural Language Processing', 'nlp'),
      s('Generative AI'),
      s('Data Science and Analytics', 'data-science'),
      s('Data Engineering and Pipelines', 'data-pipelines'),
      s('Big Data Platforms', 'big-data'),
      s('AI in Industry', 'industrial-ai'),
    ],
  },
  {
    slug: 'telecommunication-engineering', name: 'Telecommunications and Network Engineering', short: 'Telecom and Networks', family: 'computing',
    description: 'Network protocols, routing and switching, fiber optics, 4G and 5G, satellite links and network security.',
    subcategories: [
      s('Network Fundamentals and Protocols', 'network-fundamentals'),
      s('Routing and Switching'),
      s('Fiber Optic Communication', 'fiber-optics'),
      s('Cellular Networks', 'cellular-networks'),
      s('Wireless and Wi-Fi', 'wireless'),
      s('Satellite Communication'),
      s('Network Security'),
      s('Data Transmission and Coding', 'data-transmission'),
    ],
  },

  // Family 3: Energy and Resources
  {
    slug: 'petroleum-engineering', name: 'Petroleum, Oil and Gas Engineering', short: 'Petroleum, Oil and Gas', family: 'energy',
    description: 'Reservoirs, drilling, well logging, production, gas processing, LNG, refining and pipelines.',
    subcategories: [
      s('Petroleum Geology and Reservoir', 'reservoir-engineering'),
      s('Drilling Engineering', 'drilling'),
      s('Well Logging and Completion', 'well-logging'),
      s('Production Engineering'),
      s('Gas Processing and LNG', 'gas-processing-lng'),
      s('Refinery Operations', 'refining'),
      s('Pipeline Engineering and Integrity', 'pipelines'),
      s('Offshore Oil and Gas', 'offshore'),
    ],
  },
  {
    slug: 'renewable-energy', name: 'Renewable Energy and Power Systems', short: 'Renewable Energy', family: 'energy',
    description: 'Solar PV, wind, batteries and storage, green hydrogen, EV charging, microgrids and energy management.',
    subcategories: [
      s('Solar PV', 'solar-pv'),
      s('Wind Energy'),
      s('Batteries and Energy Storage', 'energy-storage'),
      s('Green Hydrogen and Fuel Cells', 'hydrogen-fuel-cells'),
      s('Inverters and Power Conversion', 'inverters'),
      s('EV and Charging Infrastructure', 'ev-charging'),
      s('Microgrids and Grid Integration', 'microgrids'),
      s('Energy Management and Audits', 'energy-management'),
    ],
  },
  {
    slug: 'environmental-engineering', name: 'Environmental Engineering', short: 'Environmental', family: 'energy',
    description: 'Water and wastewater treatment, air pollution control, waste management, EIA and sustainability.',
    subcategories: [
      s('Water Treatment'),
      s('Wastewater Treatment'),
      s('Air Pollution Control'),
      s('Solid and Hazardous Waste', 'waste-management'),
      s('Environmental Impact Assessment', 'eia'),
      s('Emissions Monitoring and Compliance', 'emissions-compliance'),
      s('Recycling and Circular Economy', 'recycling'),
      s('Sustainability'),
    ],
  },
  {
    slug: 'mining-engineering', name: 'Mining and Geological Engineering', short: 'Mining', family: 'energy',
    description: 'Mining methods, drilling and blasting, ventilation, rock mechanics, mineral processing and mine safety.',
    subcategories: [
      s('Mining Methods'),
      s('Drilling and Blasting'),
      s('Mine Ventilation'),
      s('Rock Mechanics'),
      s('Mineral Processing'),
      s('Geological Surveying and Exploration', 'exploration'),
      s('Mine Safety'),
    ],
  },

  // Family 4: Industry and Manufacturing
  {
    slug: 'manufacturing-engineering', name: 'Industrial, Production and Manufacturing Engineering', short: 'Manufacturing', family: 'industry',
    description: 'Manufacturing processes, CNC, additive manufacturing, lean, Six Sigma, SPC, production planning and maintenance.',
    subcategories: [
      s('Manufacturing Processes'),
      s('CNC Machining and Programming', 'cnc'),
      s('Additive Manufacturing', 'additive-manufacturing'),
      s('Lean Manufacturing'),
      s('Six Sigma and Quality', 'quality'),
      s('Statistical Process Control', 'spc'),
      s('Production Planning and Control', 'production-planning'),
      s('Industrial Engineering and Work Study', 'industrial-engineering'),
      s('Supply Chain'),
      s('Maintenance Engineering'),
    ],
  },
  {
    slug: 'materials-engineering', name: 'Materials and Metallurgical Engineering', short: 'Materials', family: 'industry',
    description: 'Metallurgy, heat treatment, welding, corrosion, polymers and composites, testing, NDT and failure analysis.',
    subcategories: [
      s('Engineering Materials'),
      s('Physical Metallurgy', 'metallurgy'),
      s('Heat Treatment'),
      s('Welding and Joining', 'welding'),
      s('Corrosion and Protection', 'corrosion'),
      s('Polymers and Composites'),
      s('Mechanical Testing'),
      s('Non-Destructive Testing', 'ndt'),
      s('Failure Analysis'),
    ],
  },
  {
    slug: 'safety-engineering', name: 'Safety, Fire Protection and Reliability Engineering', short: 'Safety and Reliability', family: 'industry',
    description: 'HAZOP, HAZID, risk assessment, FMEA, functional safety and SIL, fire protection, reliability and RCA.',
    subcategories: [
      s('Hazard Identification', 'hazard-identification'),
      s('Risk Assessment'),
      s('FMEA and FMECA', 'fmea'),
      s('Functional Safety and SIL', 'functional-safety'),
      s('Fire Detection'),
      s('Fire Suppression'),
      s('Reliability Engineering'),
      s('Root Cause Analysis'),
    ],
  },
  {
    slug: 'agricultural-engineering', name: 'Agricultural and Food Engineering', short: 'Agricultural and Food', family: 'industry',
    description: 'Irrigation, farm machinery, precision agriculture, grain handling, food processing, cold chain and food safety.',
    subcategories: [
      s('Irrigation Systems'),
      s('Farm Machinery'),
      s('Precision Agriculture'),
      s('Agricultural Automation'),
      s('Post-Harvest and Grain Handling', 'post-harvest'),
      s('Food Processing'),
      s('Cold Storage and Cold Chain', 'cold-chain'),
      s('Food Safety Engineering', 'food-safety'),
    ],
  },

  // Family 5: Specialized Engineering
  {
    slug: 'aerospace-engineering', name: 'Aerospace and Aeronautical Engineering', short: 'Aerospace', family: 'specialized',
    description: 'Aerodynamics, aircraft structures, propulsion, flight mechanics, avionics, spacecraft and UAVs.',
    subcategories: [
      s('Aerodynamics'),
      s('Aircraft Structures'),
      s('Propulsion and Jet Engines', 'propulsion'),
      s('Flight Mechanics'),
      s('Avionics'),
      s('Spacecraft and Satellite Systems', 'spacecraft'),
      s('Unmanned Aerial Vehicles', 'uav'),
    ],
  },
  {
    slug: 'biomedical-engineering', name: 'Biomedical and Biotechnology Engineering', short: 'Biomedical', family: 'specialized',
    description: 'Biomedical sensors, medical imaging, medical devices, biomaterials, prosthetics and bioprocess engineering.',
    subcategories: [
      s('Biomedical Sensors'),
      s('Medical Imaging'),
      s('Medical Devices and Equipment', 'medical-devices'),
      s('Biomaterials'),
      s('Prosthetics and Rehabilitation', 'prosthetics'),
      s('Bioprocess Engineering'),
      s('Laboratory Instrumentation'),
    ],
  },
  {
    slug: 'marine-engineering', name: 'Marine and Naval Engineering', short: 'Marine and Naval', family: 'specialized',
    description: 'Naval architecture, ship design, marine engines and propulsion, ship systems, offshore structures and safety.',
    subcategories: [
      s('Naval Architecture and Ship Design', 'naval-architecture'),
      s('Marine Engines and Propulsion', 'marine-propulsion'),
      s('Ship Auxiliary Systems', 'auxiliary-systems'),
      s('Ship Electrical Systems'),
      s('Offshore Structures'),
      s('Marine Safety'),
    ],
  },
];

export const getDiscipline = (slug: string) => DISCIPLINES.find((d) => d.slug === slug);
export const byFamily = (f: FamilySlug) => DISCIPLINES.filter((d) => d.family === f);

// Guard: slugs must be unique, and subcategory slugs unique inside a discipline.
const seen = new Set<string>();
for (const d of DISCIPLINES) {
  if (seen.has(d.slug)) throw new Error(`Duplicate discipline slug: ${d.slug}`);
  seen.add(d.slug);
  const subs = new Set<string>();
  for (const sc of d.subcategories) {
    if (subs.has(sc.slug)) throw new Error(`Duplicate subcategory slug "${sc.slug}" in ${d.slug}`);
    subs.add(sc.slug);
  }
}
