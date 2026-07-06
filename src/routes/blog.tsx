import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Gallery — Sri Shankara Dharmika Kendra" },
      { name: "description", content: "Every ritual and setup is crafted with deep reverence and traditional values. Browse our recent service setups." },
      { property: "og:title", content: "Gallery — Sri Shankara Dharmika Kendra" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: GalleryPage,
});

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "satyanarayan", label: "Satyanarayan Puja" },
  { id: "gruhapravesham", label: "Gruhapravesham" },
  { id: "navratri", label: "Navratri" },
  { id: "ganesh", label: "Ganesh Chaturthi" },
  { id: "homam", label: "Homam" },
] as const;

type GalleryItem = {
  category: typeof CATEGORIES[number]["id"];
  image: string;
  title: string;
  desc: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    category: "satyanarayan",
    image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/whatsapp-image-2026-06-03-at-7.23.22-pm-xSqvFOzEDuzsv9aM.jpeg",
    title: "Satyanarayan Puja Setup",
    desc: "Kalasha decoration with flower garlands & prasad thali arrangement",
  },
  {
    category: "homam",
    image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/whatsapp-image-2026-06-03-at-7.19.26-pm-1-1eJc67gVmGCKih4I.jpeg",
    title: "Shiva Rangoli & Navagraha Setup",
    desc: "Traditional rangoli with oil diyas and Navagraha kalashas",
  },
  {
    category: "navratri",
    image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/whatsapp-image-2026-06-03-at-7.23.17-pm-LZ0ndivKkAkaGjGX.jpeg",
    title: "Navratri Devi Decoration",
    desc: "Multi-tier kalasha setup with vibrant floral garlands & silk drapes",
  },
  {
    category: "gruhapravesham",
    image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/housewarming-rd5BVfKyd0Tx8Vvl.jpg",
    title: "Gruha Pravesam Door Frame Puja",
    desc: "Vaskal Puja door frame blessings and mango leaf toran installation",
  },
  {
    category: "homam",
    image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-WHO8TdDV76PHDUlt.png",
    title: "Ganapathi Homa Fire Ritual",
    desc: "Sacred fire invocation performed to clear obstacles and invite success",
  },
  {
    category: "ganesh",
    image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-DJAPARRmOzjxY37d.png",
    title: "Ganesh Chaturthi Utsav Puja",
    desc: "Auspicious decorative setup for home Ganesha festival celebrations",
  },
  {
    category: "satyanarayan",
    image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/ned5d9-2PxuKdTFGPKtJ7an.png",
    title: "Sathyanarayana Puja",
    desc: "Holy worship and Katha reading ceremony setup for family prosperity",
  },
  {
    category: "homam",
    image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/r1dygt-IGMO1XCMvVh6eSFc.png",
    title: "Navagraha Shanti Setup",
    desc: "Nine planetary symbols and kalashas for planetary alignment",
  },
  {
    category: "gruhapravesham",
    image: "https://assets.zyrosite.com/jJbK2p43YCuTCpmg/generated/generated-0PCc5c8RAatJW3JG.png",
    title: "Vastu Pooja Setup",
    desc: "Consecration and Vastu Mandala prayers to balance energies",
  },
];

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<typeof CATEGORIES[number]["id"]>("all");

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sacred Visuals"
        title="Our Work Gallery"
        subtitle="Every ritual and setup is crafted with deep reverence and traditional shastric values. Browse our recent ceremonies."
      />

      {/* FILTER SYSTEM */}
      <section className="container-x py-10 sticky top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border/60">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-[#b88e3e] text-white shadow-sm"
                  : "bg-secondary text-primary hover:bg-[#b88e3e] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* PHOTO GRID SECTION */}
      <section className="container-x py-16">
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.image}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary/30 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#f7d086] mb-1">
                      {CATEGORIES.find((c) => c.id === item.category)?.label}
                    </span>
                    <h3 className="font-serif text-lg text-white font-medium leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 border-t border-border/40 group-hover:bg-secondary/10 transition-colors">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-accent mb-1">
                    {CATEGORIES.find((c) => c.id === item.category)?.label}
                  </span>
                  <h3 className="font-serif text-lg text-primary font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* DECORATIVE DIVIDER */}
      <div className="text-center py-8 text-[#b88e3e] text-lg tracking-[0.4em] select-none font-medium">
        ✦ ॐ ✦ ॐ ✦ ॐ ✦
      </div>

      {/* BOOKING SECTION */}
      <section className="bg-secondary/40 py-20 border-t border-border/50" id="book">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-12">
            <span className="ornate-divider mb-4">— Schedule Request —</span>
            <h2 className="font-serif text-4xl text-primary font-medium">Book a Puja</h2>
            <p className="mt-3 text-muted-foreground">
              Fill in your details to secure an automated booking immediately
            </p>
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-8 md:p-12 shadow-md">
            <BookingForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
