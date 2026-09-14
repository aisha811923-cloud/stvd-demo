import { AcademicWing, MetricCard, NavItem, SchoolContactInfo, SchoolFacility } from "@/types";

export const SCHOOL_IDENTITY = {
  name: "St. Teresa Vidya Deep Senior Secondary School",
  shortName: "STVDS Udaipur",
  affiliation: "CBSE Affiliated, New Delhi",
  governingBody: "Prabhudasi Sisters of Ajmer",
  category: "Christian Minority Co-Educational Senior Secondary Institution",
  established: 1996,
  motto: "SEEK YE WISDOM",
  campusAddress: {
    street: "Sector 12, Saveena Township, NH 8 Bypass",
    city: "Udaipur",
    state: "Rajasthan",
    pincode: "313002",
  },
  contact: {
    phone: "+91 9667881122",
    email: "stteresavidyadeep@gmail.com",
    visitingHours: "Mon–Sat: 8:30 AM – 10:00 AM (or by appointment)",
    parentTeacherMeet: "Every Saturday: 12:30 PM – 1:15 PM",
  },
};

export const OPERATIONAL_HOURS = {
  summer: {
    season: "Summer Session",
    assembly: "7:50 AM",
    dismissalWeekday: "1:50 PM",
    dismissalSaturday: "12:30 PM",
    notes: "Nursery classes observe full holidays on all Saturdays",
  },
  winter: {
    season: "Winter Session",
    assembly: "8:20 AM",
    dismissalWeekday: "2:20 PM",
    dismissalSaturday: "1:00 PM",
    notes: "Nursery classes observe full holidays on all Saturdays",
  },
};

export const CURRENT_ACADEMIC_SESSION = "2027–2028";

export const ADMISSION_ELIGIBILITY = {
  session: CURRENT_ACADEMIC_SESSION,
  nurseryAgeLimit: {
    base: "3 Years",
    range: "2 Years 8 Months to 3 Years 8 Months (as of session commencement)",
  },
  requiredDocuments: [
    "Official Municipal Birth Certificate (Original + Copy)",
    "Countersigned Transfer Certificate / School Leaving Certificate (Class I onwards)",
    "Previous Academic Year Mark Sheet / Report Card",
    "Parent / Guardian Identification and Address Verification",
  ],
};

export const UNIFORM_SPECS = [
  {
    wing: "Foundational Wing (Nursery – HKG)",
    summer: "White shirt with red dots, checked shorts or frocks, black shoes, white socks",
    winter: "Maroon knit sweater, maroon scarf, white slacks",
    tagColor: "border-rose-500/30 text-rose-400 bg-rose-950/20",
  },
  {
    wing: "Primary & Middle Wing (Classes I – VIII)",
    summer: "Grey trousers / tunics, white shirt with grey pinstripe lining, tie & belt",
    winter: "Structured grey coat, grey scarf, white slacks for girls",
    tagColor: "border-slate-400/30 text-slate-300 bg-slate-900/30",
  },
  {
    wing: "Senior Secondary Wing (Classes IX – XII)",
    summer: "Carbon Blue trousers, white shirt with Carbon Blue lining, vest coat (girls), tie & belt",
    winter: "Carbon Blue blazer / coat and matching sleeveless knit sweater",
    tagColor: "border-blue-500/30 text-blue-400 bg-blue-950/20",
  },
  {
    wing: "House & Physical Education (All Wings)",
    summer: "Designated House-colored T-shirt, all-white trousers / skirts, white canvas shoes & socks",
    winter: "Official House track uniform with school crest",
    tagColor: "border-gold-500/30 text-gold-400 bg-gold-950/20",
  },
];

export const SCHOOL_ANTHEM = {
  title: "School Anthem",
  source: "Official Student Handbook (Page 28)",
  patron: "St. Teresa our Patron Saint",
  sections: [
    {
      type: "verse",
      lines: [
        "St. Teresa our Patron Saint",
        "Whom we love, whom we praise",
        "St. Teresa is our Patron Saint",
        "As we tread our life's long way",
      ],
    },
    {
      type: "chorus",
      lines: [
        "Long live St. Teresa\t(2)",
        "Our Alma Mater\t(2)",
        "We'll always remember you",
        "You are our guiding light.",
      ],
    },
    {
      type: "verse",
      lines: [
        "St. Teresa, is model guide",
        "To all the Vidya Deep Students",
        "In her footsteps we will strive",
        "To lead strong and upright lives.",
      ],
    },
    {
      type: "chorus",
      lines: [
        "We stand for courage and truth",
        "Sincerity and loyalty",
        "More than gold we value these",
        "Our riches so full and free.",
      ],
    },
    {
      type: "verse",
      lines: [
        "Long after school days are O'er",
        "We'll sing from life's far shores",
        "For all the virtues we have learnt,",
        "We will thank St. Teresa our Patron.",
      ],
    },
  ],
  lyrics: [
    "St. Teresa our Patron Saint",
    "Whom we love, whom we praise",
    "St. Teresa is our Patron Saint",
    "As we tread our life's long way",
    "Long live St. Teresa (2)",
    "Our Alma Mater (2)",
    "We'll always remember you",
    "You are our guiding light.",
    "St. Teresa, is model guide",
    "To all the Vidya Deep Students",
    "In her footsteps we will strive",
    "To lead strong and upright lives.",
    "We stand for courage and truth",
    "Sincerity and loyalty",
    "More than gold we value these",
    "Our riches so full and free.",
    "Long after school days are O'er",
    "We'll sing from life's far shores",
    "For all the virtues we have learnt,",
    "We will thank St. Teresa our Patron.",
  ],
};

export const TRANSPORT_OVERVIEW = {
  status: "Available",
  headline: "Secure Campus Transit Network",
  description:
    "STVDS provides safe, regulated school bus and van transit covering key residential sectors across Udaipur including Saveena, Sector 14, Sector 11, Hiran Magri, Goverdhan Vilas, and connecting corridors.",
};

export const SCHOOL_INFO: SchoolContactInfo = {
  legalName: SCHOOL_IDENTITY.name,
  shortName: SCHOOL_IDENTITY.shortName,
  motto: SCHOOL_IDENTITY.motto,
  affiliationNumber: SCHOOL_IDENTITY.affiliation,
  board: "Central Board of Secondary Education (CBSE), New Delhi",
  establishedYear: SCHOOL_IDENTITY.established,
  managingSociety: SCHOOL_IDENTITY.governingBody,
  principalName: "Sr. Ranjana",
  address: {
    line1: "Sector 12, Saveena Township",
    line2: "NH 8 Bypass",
    locality: "Saveena",
    city: SCHOOL_IDENTITY.campusAddress.city,
    state: SCHOOL_IDENTITY.campusAddress.state,
    pincode: SCHOOL_IDENTITY.campusAddress.pincode,
    country: "India",
  },
  phones: [SCHOOL_IDENTITY.contact.phone],
  whatsapp: SCHOOL_IDENTITY.contact.phone,
  emails: [SCHOOL_IDENTITY.contact.email],
  timings: "Mon–Sat: 8:30 AM – 10:00 AM | Saturday PTM: 12:30 PM – 1:15 PM",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    description: "Our 30-year legacy, leadership & values",
  },
  { label: "Academics", href: "/academics", description: "CBSE curriculum from Nursery to Class XII" },
  { label: "Campus", href: "/campus", description: "Laboratories, sports grounds & smart classes" },
  { label: "Events", href: "/events", description: "Campus life, sports meets & academic calendar" },
];

export const HERO_METRICS: MetricCard[] = [
  {
    id: "legacy",
    value: "1996",
    label: "Established",
    subtext: "Three Decades of Academic & Moral Stewardship in Udaipur",
    iconName: "Award",
  },
  {
    id: "pass-rate",
    value: "100%",
    label: "CBSE Pass Rate",
    subtext: "Consistent First-Division Distinction in Board Exams",
    iconName: "GraduationCap",
  },
  {
    id: "ratio",
    value: "25:1",
    label: "Student-Teacher Ratio",
    subtext: "Individualized Mentorship & Attentive Classroom Care",
    iconName: "Users",
  },
  {
    id: "facilities",
    value: "15+",
    label: "Specialized Labs & Arenas",
    subtext: "Modern STEM Labs, Central Library & Athletic Grounds",
    iconName: "FlaskConical",
  },
];

export const ACADEMIC_WINGS: AcademicWing[] = [
  {
    id: "pre-primary",
    title: "Foundational Wing",
    classes: "Nursery, LKG, UKG",
    ageRange: "3 - 5 Years",
    description: "Nurturing early curiosity through joyful play-way pedagogy, sensory exploration, and emotional foundation.",
    highlights: ["Montessori-aligned learning corners", "Phonics and linguistic fundamentals", "Safe indoor activity arena"],
    icon: "Sparkles",
  },
  {
    id: "primary",
    title: "Primary Wing",
    classes: "Classes I to V",
    ageRange: "6 - 10 Years",
    description: "Developing robust conceptual numeracy, language mastery, environmental awareness, and creative self-expression.",
    highlights: ["Interactive smart boards", "Experiential learning kits", "Foundational computer literacy"],
    icon: "BookOpen",
  },
  {
    id: "middle",
    title: "Middle Wing",
    classes: "Classes VI to VIII",
    ageRange: "11 - 13 Years",
    description: "Transitioning into analytical reasoning, hands-on scientific discovery, and communicative eloquence.",
    highlights: ["Integrated STEM practicals", "Bilingual debate & literary clubs", "Organized intra-school sports leagues"],
    icon: "Compass",
  },
  {
    id: "secondary",
    title: "Secondary Wing",
    classes: "Classes IX & X",
    ageRange: "14 - 15 Years",
    description: "Disciplined preparation for CBSE All India Secondary School Examinations (AISSE) with regular mock assessments.",
    highlights: ["Specialized science lab sessions", "Continuous diagnostic evaluations", "Career orientation workshops"],
    icon: "ShieldCheck",
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary Wing",
    classes: "Classes XI & XII",
    ageRange: "16 - 17 Years",
    description: "High-rigor academic specialization across Science (Medical & Non-Medical), Commerce, and Humanities streams.",
    highlights: ["State-of-the-art Physics, Chem & Bio labs", "Accountancy & Economics workshops", "Competitive exam guidance (JEE/NEET/CUET)"],
    icon: "Target",
  },
];

export const CAMPUS_FACILITIES: SchoolFacility[] = [
  {
    id: "physics-lab",
    title: "Advanced Physics Laboratory",
    category: "STEM Laboratories",
    description: "Spacious, dark-room equipped laboratory calibrated for optical, electrical, and mechanical experimentations under CBSE standards.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    specifications: ["Individual experiment workstations", "Precision optical benches & galvanometers", "Strict fire & electrical safety protocol"],
  },
  {
    id: "chemistry-lab",
    title: "Modern Chemistry Laboratory",
    category: "STEM Laboratories",
    description: "Fume-hood ventilated practical lab enabling safe chemical synthesis, qualitative analysis, and titration experiments.",
    imageUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1200&q=80",
    specifications: ["Dedicated reagent storage & eye-wash stations", "Borosilicate apparatus for all students", "Digital pH meters and balances"],
  },
  {
    id: "computer-lab",
    title: "Digital IT & Coding Center",
    category: "STEM Laboratories",
    description: "High-speed networked computing facility introducing students from primary to senior secondary to programming and multimedia tools.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    specifications: ["1:1 student-to-PC terminal ratio", "Fiber-optic filtered broadband connectivity", "Python, Scratch & Web Development suites"],
  },
  {
    id: "library",
    title: "Central Academic Library",
    category: "Campus Infrastructure",
    description: "Quiet sanctuary housing over 8,000 curriculum textbooks, classic literature, national periodicals, and digital research archives.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    specifications: ["Dedicated reading halls for junior & senior students", "Daily national newspapers & academic journals", "Automated book circulation catalog"],
  },
  {
    id: "sports-arena",
    title: "Athletics & Sports Ground",
    category: "Sports & Athletics",
    description: "Expansive outdoor arenas for football, volleyball, track events, badminton, and supervised physical drill drills.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    specifications: ["Regulation volleyball & badminton courts", "Sprint track and long-jump pit", "Certified physical education instructors"],
  },
];
