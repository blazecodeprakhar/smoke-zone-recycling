export interface Installation {
  id: string;
  name: string;
  location: string;
  type: 'Indoor Smoking Zone' | 'Outdoor Smoking Zone' | 'Modular Cabin' | 'Roof-top Lounge';
  image: string;
  description: string;
}

export interface FiltrationStage {
  stage: number;
  name: string;
  code: string;
  efficiency: string;
  description: string;
  target: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  output: string;
}

export const PROJECT_INFO = {
  name: "SMOKE ZONE",
  tagline: "Advanced Smoking Cabins & BUDDY BIN Circular Recycling Initiative",
  company: "Shravni's Hospitality",
  standard: "ASHRAE Compliant (American Society of Heating, Refrigerating and Air-Conditioning Engineers)",
  branchesCount: 18,
  activeCities: ["Pune", "Mumbai", "Bangalore", "Hyderabad"],
  contact: {
    phone: ["+91 9665 339 076", "+91 8352 060606", "+91 7727 973737"],
    email: "Director@shravnis.com",
    website: "www.shravnis.com",
    address: "Shop 03, Ground Floor, 'H' Building, Pebbles Urbania, Bavdhan Bk, Pune - 411021, India"
  },
  stats: [
    { value: "99.95%", label: "HEPA H13 Particulate Capture", detail: "Down to 0.3 microns" },
    { value: "18+", label: "Operating Branches", detail: "Across Tier-1 Corporate Hubs" },
    { value: "4-Stage", label: "Waste Fractioning", detail: "Filters, Tobacco, Paper & Liquid" },
    { value: "3-Tier", label: "Air Filtration", detail: "G3 Pre-Filter + HEPA + Coconut Carbon" }
  ]
};

export const FILTRATION_STAGES: FiltrationStage[] = [
  {
    stage: 1,
    name: "Primary Pre-Filter",
    code: "G3 Class",
    efficiency: "Coarse Particle Retention",
    target: "Dust, lint, and macro suspended particles",
    description: "Captures heavy dust and larger airborne debris, extending the operational lifespan of high-efficiency downstream filters.",
    iconName: "Shield"
  },
  {
    stage: 2,
    name: "Micro-Particulate HEPA",
    code: "HEPA H13",
    efficiency: "99.95% at ≥ 0.3 microns",
    target: "Fine smoke particles, tar aerosol & allergens",
    description: "Medical-grade HEPA filtration engineered to isolate airborne tobacco particulates and ultra-fine smoke aerosols.",
    iconName: "Wind"
  },
  {
    stage: 3,
    name: "Gas Phase Adsorption",
    code: "Activated Coconut Carbon",
    efficiency: "VOC & Odor Decontamination",
    target: "Tobacco gas, volatile organics & harsh odors",
    description: "High-porosity coconut-shell activated carbon chemically adsorbs harmful gaseous byproducts and persistent odors.",
    iconName: "Sparkles"
  }
];

export const BUDDY_BIN_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Source Collection",
    subtitle: "Dedicated BUDDY BINS",
    description: "Ergonomic BUDDY BINS placed strategically at corporate smoking areas keep butt litter segregated from municipal streams at point of disposal.",
    output: "Segregated Raw Cigarette Waste"
  },
  {
    step: 2,
    title: "Scheduled Emptying & Transport",
    subtitle: "PPE-Equipped Personnel",
    description: "Trained field staff conduct scheduled collections, transporting waste in contained receptacles to central processing centers.",
    output: "Contained Batch Transfers"
  },
  {
    step: 3,
    title: "Item-Wise Fractioning",
    subtitle: "Mechanical & Manual Sorting",
    description: "Raw butts are divided into distinct material streams: residual tobacco, cellulose acetate filters, paper wrappers, and ash residue.",
    output: "4 Purified Waste Streams"
  },
  {
    step: 4,
    title: "Controlled Washing & Agitation",
    subtitle: "Aqueous Phase Extraction",
    description: "Filter fibers undergo controlled washing and agitation to strip heavy tobacco residue into contained liquid streams.",
    output: "Decontaminated Fiber & Nicotine Wash"
  },
  {
    step: 5,
    title: "Contaminant & Liquid Isolation",
    subtitle: "Filtration & Screening",
    description: "Nicotine wash water is isolated for authorized treatment and disposal. Fine solid particles are screened to prevent environmental discharge.",
    output: "Safe Liquid & Micron Sludge Isolation"
  },
  {
    step: 6,
    title: "Material Repurposing",
    subtitle: "Circular Economy Output",
    description: "Decontaminated cellulose acetate is shredded and converted into non-food utility craft/padding. Tobacco and paper fractions undergo organic composting.",
    output: "Recycled Utility Materials & Organic Fertilizer"
  }
];

export const INSTALLATIONS: Installation[] = [
  {
    id: "pavilion-canopy",
    name: "Grand Highstreet Mall",
    location: "Hinjewadi Phase 1, Pune",
    type: "Outdoor Smoking Zone",
    image: "/media/pavilion-canopy.jpg",
    description: "Architectural white double-canopy smoking pavilion featuring ambient perimeter illumination, integrated bamboo planters, glass partition walls, and high-volume wall exhaust systems."
  },
  {
    id: "modular-white",
    name: "Mastercard Campus",
    location: "Pune Commercial Complex",
    type: "Modular Cabin",
    image: "/media/modular-cabin-white.jpg",
    description: "Self-contained modular smoking cubicle equipped with modern branding, under-counter LED accents, high-air-exchange louvers, and direct BUDDY BIN collection ports."
  },
  {
    id: "matte-black",
    name: "Indialand Global Tech Park",
    location: "Hinjewadi 7th Floor Roof-Top, Pune",
    type: "Roof-top Lounge",
    image: "/media/matte-black-booth.jpg",
    description: "Sleek matte-black container-style smoking booth with vertical slatted facade, full-height architectural glass window, and integrated service counter."
  },
  {
    id: "outdoor-wide",
    name: "Awfis DSL Abacus IT Park",
    location: "Hyderabad IT Hub",
    type: "Outdoor Smoking Zone",
    image: "/media/outdoor-installation-wide.jpg",
    description: "Covered outdoor smoking plaza with tension-membrane roof structure, continuous standing bars, and heavy-duty stainless steel ashtray bins."
  }
];

export const CLIENTS = [
  { name: "Mastercard", city: "Pune" },
  { name: "Godrej", city: "Pune" },
  { name: "Brookfield", city: "Pan-India" },
  { name: "Panchshil", city: "Pune" },
  { name: "Abacus IT Park", city: "Hyderabad" },
  { name: "R City Mall", city: "Mumbai" },
  { name: "Indialand", city: "Pune" },
  { name: "Mantri Business Park", city: "Pune / Bangalore" },
  { name: "Teerth Realties", city: "Pune" }
];

export const CABIN_VARIANTS = [
  {
    title: "Indoor Smoking Rooms / Lounges",
    description: "Enclosed architectural rooms built within airports, commercial offices, and malls. Equipped with negative pressure systems to prevent smoke escape.",
    features: ["Negative air pressure containment", "Automatic closing glass doors", "High-capacity 3-stage filtration", "ASHRAE isolated standard"]
  },
  {
    title: "Self-Contained Modular Cabins",
    description: "Portable plug-and-play indoor/outdoor cubicles designed for corporate campuses and SEZs with rapid installation and minimal footprint.",
    features: ["Plug-and-play electrical & HVAC setup", "Weatherproof exterior facade", "Built-in BUDDY BIN ports", "Custom branded finishes"]
  },
  {
    title: "Designated Outdoor Smoking Areas (DOSAs)",
    description: "Open-air structured pavilions with tension-membrane roofs, strategic windbreak glassing, and directional exhaust for outdoor plazas.",
    features: ["Architectural membrane canopy", "Integrated planters & seating bars", "Vandal-proof stainless ashtrays", "Illuminated evening perimeter"]
  },
  {
    title: "Executive Cigar Lounges & Bar Units",
    description: "Specialized luxury establishments legal under specific municipal regulations, combining hospitality counter services with air purification.",
    features: ["Luxury ambient lighting", "Acoustic glass insulation", "Carbon odor neutralization", "Integrated service counter"]
  }
];
