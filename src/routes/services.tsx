import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services, categoryLabels, type Service } from "@/data/services";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rituals, Poojas & Homams" },
      { name: "description", content: "Full catalog of Vedic rituals — Ganapthi Pooja, Sathyanarayana Pooja, Navagraha Homa, Upanayana, Marriage, Shashtipoorthi and more. Book with lineage-trained priests." },
      { property: "og:title", content: "Vedic Services & Rituals" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const cats: Array<Service["category"] | "all"> = ["all", "rituals", "milestone", "apara", "hall", "custom"];

function ServicesPage() {
  const [filter, setFilter] = useState<Service["category"] | "all">("all");
  const [q, setQ] = useState("");
  const [showFiltersMenu, setShowFiltersMenu] = useState(false);

  const filtered = services.filter((s) => {
    if (filter !== "all" && s.category !== filter) return false;
    if (q && !s.title.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const grouped = filter === "all"
    ? (Object.keys(categoryLabels) as Service["category"][]).map((c) => ({
        c,
        items: filtered.filter((s) => s.category === c),
      })).filter((g) => g.items.length)
    : [{ c: filter as Service["category"], items: filtered }];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sacred Catalog"
        title="Rituals & Poojas"
        subtitle="Every ceremony conducted in strict accordance with the Grihya Sutras. Choose a service to view details and book with our coordination team."
      />

      <section className="container-x py-10 sticky top-20 z-30 bg-background/85 backdrop-blur-md border-b border-border/60">
        <div className="flex flex-col md:flex-row gap-4 md:items-start md:justify-between">
          
          {/* Collapsible Filter Accordion */}
          <div className="flex-1 max-w-md w-full relative">
            <button
              type="button"
              onClick={() => setShowFiltersMenu((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-full border border-input bg-card px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary cursor-pointer hover:bg-secondary transition-colors"
            >
              <span>Filter: {filter === "all" ? "All Categories" : categoryLabels[filter]}</span>
              <span className="text-accent text-[10px]">{showFiltersMenu ? "▲" : "▼"}</span>
            </button>
            
            {showFiltersMenu && (
              <div className="absolute left-0 right-0 mt-2 z-40 flex flex-col gap-1.5 p-2 rounded-lg bg-card border border-border/80 shadow-2xl animate-fade-in">
                {cats.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setFilter(c);
                      setShowFiltersMenu(false);
                    }}
                    className={`text-left rounded-md px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                      filter === c
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent/15 text-primary"
                    }`}
                  >
                    {c === "all" ? "All" : categoryLabels[c]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search rituals…"
            className="w-full md:w-72 rounded-full border border-input bg-background px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>
      </section>

      <div className="container-x py-16 space-y-20">
        {grouped.map((g) => (
          <section key={g.c}>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8">
              {categoryLabels[g.c]}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {g.items.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </section>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No rituals match your search.</p>
        )}
      </div>

      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="container-x max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Get in touch</h2>
            <p className="mt-3 text-muted-foreground">Tell us about the ritual you'd like to schedule.</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-8 shadow-sm">
            <InquiryForm
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "phone", label: "Phone Number", required: true },
                { name: "email", label: "Email", type: "email" },
                { name: "message", label: "Service Required / Message", textarea: true, required: true },
              ]}
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
