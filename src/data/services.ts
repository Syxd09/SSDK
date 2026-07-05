export type Service = {
  slug: string;
  title: string;
  desc: string;
  price: string;
  image: string;
  category: "rituals" | "milestone" | "apara" | "hall" | "custom";
};

export const services: Service[] = [
  { slug: "ganapthi-pooja", category: "rituals", title: "Ganapthi Pooja and Homa", desc: "Sacred fire ritual dedicated to Lord Ganesha to remove obstacles. Includes food for 4 devotees.", price: "₹12,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-WHO8TdDV76PHDUlt.png" },
  { slug: "sathyanarayana-pooja", category: "rituals", title: "Sathyanarayana Pooja and Homa", desc: "Auspicious ritual and fire ceremony performed for family prosperity, wealth, and overall health.", price: "₹15,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/ned5d9-2PxuKdTFGPKtJ7an.png" },
  { slug: "sathyanarayana-monthly", category: "rituals", title: "Sathyanarayana Pooja (Monthly)", desc: "Special devotional Sathyanarayana Pooja conducted on every auspicious Poornami (Full Moon day).", price: "₹8,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-R2FvNxyMaRt2cfXt.png" },
  { slug: "sankasthahara-ganapati", category: "rituals", title: "Sankasthahara Ganapati Pooja", desc: "Devotional ritual dedicated to Lord Ganesha conducted on every monthly Chowthi.", price: "₹8,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-DJAPARRmOzjxY37d.png" },
  { slug: "upanayana", category: "rituals", title: "Upanayana Ceremony", desc: "Sacred thread ceremony marking a young boy's initiation into spiritual education. Includes food for 4 members.", price: "₹10,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-0PCc5c8RAatJW3JG.png" },
  { slug: "general-homa", category: "rituals", title: "General Homa", desc: "Traditional Vedic fire ritual performed to purify the surroundings and bring positive vibrations.", price: "₹3,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-L5PzfZe5Pb8YHxmp.png" },
  { slug: "engagement", category: "rituals", title: "Engagement Ceremony", desc: "Complete pre-wedding rituals and formal blessings including traditional Pooja and Sambhavana.", price: "₹12,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-gXhcGJjDkmiNndmZ.png" },
  { slug: "navagraha", category: "rituals", title: "Navagraha Pooja & Homa", desc: "Powerful ritual performed to appease the nine planetary deities for ultimate planetary balance.", price: "₹15,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/r1dygt-IGMO1XCMvVh6eSFc.png" },
  { slug: "marriage", category: "rituals", title: "Marriage Ceremony", desc: "Sacred wedding rituals conducted strictly according to ancient Vedic traditions. (Hall charges extra).", price: "₹28,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-egCrTHWncfRU2pjj.png" },
  { slug: "gomata-pooja", category: "rituals", title: "Gomata Pooja & Danaom", desc: "Sacred cow worship accompanied by traditional, scriptural cow donation (Dana) options.", price: "From ₹3,001", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-acbaWHcML5YQ3GiB.png" },
  { slug: "anna-prashana", category: "rituals", title: "Anna Prashana", desc: "Auspicious Vedic sanskar ceremony marking a newborn baby's very first intake of solid food.", price: "₹18,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-FMsbdRZlNfWxHSrU.png" },
  { slug: "punsurana", category: "rituals", title: "Punsurana (Pumsavana)", desc: "Traditional family ritual performed during early pregnancy milestones for parental well-being.", price: "₹5,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-vymep3YAMm5avNLi.png" },
  { slug: "seemantha", category: "rituals", title: "Baby Ceremony (Seemantha)", desc: "Traditional scriptural baby shower ritual. (Optional accompanying Homa setup available for +₹5,000).", price: "₹8,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-VtkYlhR29mupwvwA.png" },
  { slug: "aksharyaabiyasa", category: "rituals", title: "Aksharyaabiyasa", desc: "Holy educational initiation ceremony introducing young children to letters and formal writing.", price: "₹5,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-Xc9f9Sg5ESLgGZoJ.png" },

  { slug: "shashtipoorthi", category: "milestone", title: "60th Year Shanti (Shashtipoorthi)", desc: "Major lifecycle shanti prayers and renewal celebrations conducted on achieving 60 years of age.", price: "From ₹18,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/sasti-xyFi4psI3le373R2.png" },
  { slug: "bhimaratha", category: "milestone", title: "70th Year Shanti (Bhimaratha)", desc: "Auspicious family milestone shanti prayers safely conducted on crossing 70 years of age.", price: "From ₹20,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/sasti-xyFi4psI3le373R2.png" },
  { slug: "sahasrachandra", category: "milestone", title: "80th Year Shanti (Sahasrachandra)", desc: "Milestone shanti prayers honoring the sight of 1000 full moons at 80 years. (Hall charges separate).", price: "From ₹25,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/sasti-xyFi4psI3le373R2.png" },

  { slug: "dahana-karya", category: "apara", title: "1st Day of Dahana Karya", desc: "Dignified and traditional first-day cremation rituals performed strictly according to scriptural laws.", price: "₹15,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-rnyqeiqIyBoYhv1d.png" },
  { slug: "apara-karya", category: "apara", title: "11th & 12th Day of Apara Karya", desc: "Scriptural post-funeral family consolidation rites carefully conducted on the 11th and 12th days.", price: "From ₹30,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-HeUHFfAzsBGK0Ox9.png" },
  { slug: "shradd", category: "apara", title: "Shradd Ceremony", desc: "Annual ancestral remembrance ceremony. Includes custom catering arrangements for up to 8 members only.", price: "₹3,800", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-i6Yba1UqzuaNxdlB.png" },
  { slug: "tarpana", category: "apara", title: "Tarpana", desc: "Periodic, methodical water and sesame offerings extended to ancestors for their spiritual peace.", price: "₹500", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-fWo4KgBrs4jN6QMy.png" },

  { slug: "hall-full-day", category: "hall", title: "Hall Rent (Full Day)", desc: "Complete daily rental booking options for Marriages, large Engagements, or grand Naming functions.", price: "₹8,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-EaZOHGaWgjND4L4K.png" },
  { slug: "hall-half-day", category: "hall", title: "Hall Rent (Half Day)", desc: "Convenient half-day facility block configurations optimized for smaller family events and pujas.", price: "₹4,500", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-3XpMVY9Brrvc1esE.png" },
  { slug: "hall-vaikunta", category: "hall", title: "Hall for Vaikunta Samaradhane", desc: "Dedicated booking block reservations to securely execute peaceful memorial gathering ceremonies.", price: "₹8,000", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-JEpSJbmAqVgDWl5G.png" },
  { slug: "astrology-vastu", category: "hall", title: "Astrology & Vastu Consultation", desc: "Expert cosmic alignment readings alongside traditional structured home structural property assessments.", price: "₹500", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/hesqt7-qwK2W6NfvlaAzkgu.png" },

  { slug: "gruha-pravesha", category: "custom", title: "Gruha Pravesha & Vaskal Puja", desc: "Traditional housewarming property rituals alongside primary entrance frame scriptural blessings.", price: "On Request", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/housewarming-rd5BVfKyd0Tx8Vvl.jpg" },
  { slug: "naming-bhoomi", category: "custom", title: "Naming Ceremony & Bhoomi Pooja", desc: "Traditional child name allocation rituals along with sacred foundation ground-breaking blessings.", price: "On Request", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-WHO8TdDV76PHDUlt.png" },
  { slug: "ayushya-homa", category: "custom", title: "Mruthyunjaya & Ayushya Homa", desc: "Highly powerful intensive fire prayer systems custom engineered for recovery, health, and age longevity.", price: "On Request", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-GG7VGIDPQYeSweya.png" },
  { slug: "sanskrit-classes", category: "custom", title: "Sanskrit, Stotra, & Pooja Classes", desc: "Comprehensive learning systems covering basic linguistics, prayer chanting scripts, and procedural methods.", price: "On Request", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-erNnCkgR8DqFDO9h.png" },
  { slug: "yoga-kendra", category: "custom", title: "Yoga Kendra", desc: "Structured body postures, targeted deep meditation, and spiritual breathing mechanics available on site.", price: "On Request", image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-TBQfeeeCuYWDunHk.png" },
];

export const categoryLabels: Record<Service["category"], string> = {
  rituals: "Rituals & Poojas",
  milestone: "Milestone Shanti Ceremonies",
  apara: "Apara Karma (Remembrance)",
  hall: "Hall Rentals & Consultations",
  custom: "Custom & Educational Offerings",
};
