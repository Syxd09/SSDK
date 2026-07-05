import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sri Shankara Dharmika Kendra" },
      { name: "description", content: "Preserving shastric accuracy across generations. Learn about our lineage-trained Vedic priests and traditional Pathashala training." },
      { property: "og:title", content: "About — Sri Shankara Dharmika Kendra" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Vedic Lineage"
        title={<>Preserving <em className="not-italic italic text-accent">Shastric Accuracy</em> Across Generations</>}
        subtitle="Every ritual and mantra at Sri Shankara Dharmika Kendra is executed in strict accordance with the Grihya Sutras, led by traditionally trained priests."
      />

      <section className="container-x py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=753,fit=crop/jJbK2p43YCuTCpmg/r6vums-EJjSLuJN9bsMBLGs.png"
            alt="Priest pouring ghee into a sacred fire"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <div className="ornate-divider mb-4 justify-start">— Our Foundation —</div>
          <h2 className="font-serif text-4xl text-primary">Schooled in the Pathashalas</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our priests undergo years of rigorous training in traditional Vedic Pathashalas, mastering the precise intonations of the Krishna Yajur Veda and classical Grihya Sutras. This ensures that every homam and pooja carries the full spiritual efficacy intended by the sages.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We manage the entire ritual setup with pure samagri and sacred fire preparation, allowing your family to focus entirely on devotion during both joyful milestones and solemn final rites.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="ornate-divider mb-4">— Our Acharyas —</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Qualified Vedic Scholars</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Rigorous Shastric Training", body: "Every priest at our Kendra has completed a minimum of eight years of traditional Gurukula education, specializing in ritual procedures and Vedic chanting." },
              { title: "Absolute Ritual Purity", body: "We maintain strict adherence to traditional codes of conduct and purification rites, ensuring the highest level of spiritual efficacy for your ceremonies." },
              { title: "Comprehensive Guidance", body: "From selecting auspicious mahurats via classical Jyotisha texts to executing complex Shanti ceremonies, our scholars provide clear, authoritative direction." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border/60 bg-card p-8">
                <h3 className="font-serif text-2xl text-primary">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary max-w-2xl mx-auto">Schedule a ritual with our Acharyas</h2>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/services" className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-accent hover:text-primary transition-colors">Schedule a Ritual</Link>
          <Link to="/services" className="inline-flex items-center rounded-full border border-primary/30 px-7 py-3.5 text-sm font-medium text-primary hover:bg-secondary transition-colors">View Services</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
