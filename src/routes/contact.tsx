import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { InquiryForm } from "@/components/site/InquiryForm";
import { services } from "@/data/services";

const searchSchema = z.object({ service: z.string().optional() });

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Schedule a Ritual" },
      { name: "description", content: "Book a Vedic ritual. Share your preferred date, gotra, and requirements. Our team coordinates priest, samagri, and logistics." },
      { property: "og:title", content: "Contact — Schedule a Vedic Ritual" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  validateSearch: searchSchema,
  component: Contact,
});

function Contact() {
  const { service } = Route.useSearch();
  const preset = services.find((s) => s.slug === service);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sankalpa & Coordination"
        title="Schedule Sacred Rites"
        subtitle="Provide your preferred dates, gotra, and specific ritual requirements. Our administrative team will coordinate the shastric preparations, pure samagri, and priest travel logistics for your family ceremony."
      />

      <section className="container-x py-20 grid md:grid-cols-2 gap-16 items-start">
        <div className="rounded-xl border border-border/60 bg-card p-8 shadow-sm">
          {preset && (
            <div className="mb-6 rounded-md bg-secondary/60 border border-border/60 p-4 text-sm">
              <span className="text-muted-foreground">Inquiring about: </span>
              <strong className="text-primary">{preset.title}</strong> — {preset.price}
            </div>
          )}
          <InquiryForm
            fields={[
              { name: "yajamana", label: "Yajamana Name", required: true },
              { name: "email", label: "Email Address", type: "email", required: true },
              { name: "phone", label: "Contact Number", required: true },
              { name: "details", label: "Ritual Details", textarea: true, required: true },
            ]}
            defaults={preset ? { details: `Inquiry for ${preset.title}\n\n` } : {}}
          />
        </div>

        <div className="space-y-8">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=753,fit=crop/jJbK2p43YCuTCpmg/ts74qs-y9OyZvYEvjHqQWJl.png"
              alt="Hands offering grains into a sacred golden fire"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="ornate-divider mb-3 justify-start">— Complete Ceremony Management —</div>
            <h2 className="font-serif text-3xl text-primary">Shastric Rigor, Managed Logistics</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From sourcing pure samagri to managing priest travel across India, we handle every operational detail. Your family can focus entirely on devotion while we ensure absolute scriptural fidelity.
            </p>
          </div>
          <blockquote className="rounded-xl bg-secondary/60 p-6 border border-border/60">
            <p className="font-serif text-lg text-foreground leading-snug">
              "Our family felt completely supported during the Griha Pravesam. The priests arrived with pure samagri and executed every rite with profound dignity."
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              <strong className="text-primary">S. Ramachandran</strong>, Bengaluru
            </footer>
          </blockquote>
        </div>
      </section>
    </SiteLayout>
  );
}
