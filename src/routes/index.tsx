import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Sparkles, ShieldCheck, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Shankara Dharmika Kendra — Authentic Vedic Rituals" },
      { name: "description", content: "Book scripturally accurate Vedic rituals and poojas performed by lineage-trained priests. Homams, ceremonies, and consultations across India." },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

const popular = services.slice(0, 3);
const testimonials = [
  { quote: "Our family felt completely supported during the Griha Pravesam. The priests arrived with pure samagri and executed every rite with profound dignity.", name: "S. Ramachandran", city: "Bengaluru" },
  { quote: "The Sathyanarayana Pooja was conducted with such precision and devotion. Every mantra was chanted flawlessly.", name: "Meera Iyer", city: "Chennai" },
  { quote: "Handled our Shashtipoorthi celebrations end-to-end. Impeccable coordination and true shastric fidelity.", name: "K. Venkatesh", city: "Hyderabad" },
];
const faqs = [
  { q: "How do I book a ritual?", a: "Choose a service, click Book Now, and share your preferred date and gotra. Our coordinator will confirm mahurat and logistics within 24 hours." },
  { q: "Do you provide samagri?", a: "Yes. We source pure, traditionally prepared samagri and bring everything required for the ceremony to your location." },
  { q: "Which cities do you serve?", a: "Our priests travel across India. Additional travel costs apply for outstation bookings." },
  { q: "Are your priests trained in the Vedas?", a: "Every acharya has completed a minimum of eight years of Gurukula education in Krishna Yajur Veda and Grihya Sutras." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/jJbK2p43YCuTCpmg/f1e9qx-PV1XxVNAFB9cEDwJ.png)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        <div className="relative container-x py-32 md:py-44 text-center text-primary-foreground">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="ornate-divider text-accent mb-5">— Shastric Vedic Rites —</div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl mx-auto">
              Authentic <em className="text-accent not-italic italic">Vedic Rituals</em>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/85 leading-relaxed">
              We perform scripturally accurate ceremonies with absolute shastric fidelity, bringing qualified priests and pure samagri directly to your home.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-primary shadow-md hover:bg-accent/90 transition-all">
                View Rituals
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                Schedule a Ritual
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POPULAR RITUALS */}
      <section className="container-x py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="ornate-divider mb-4">— Popular Rituals —</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">Our most requested ceremonies</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {popular.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <span className="font-serif text-2xl text-primary">Explore all 30+ offerings</span>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent hover:text-primary transition-colors">
              View Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE OFFERINGS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="ornate-divider mb-4">— Sacred Services —</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Our Core Offerings</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Select from our structured ceremony packages, each conducted in strict accordance with the Grihya Sutras by lineage-trained priests.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Flame, title: "Sacred Homams", body: "Milestone fire rituals including Ayushya and Navagraha homams, executed with pure samagri and precise mantra intonations." },
              { icon: Sparkles, title: "Gruha Pravesam", body: "Complete housewarming ceremony management, covering Vastu Pooja, Punyahavachanam, and protective homams for your new home." },
              { icon: ShieldCheck, title: "Shastric Consultations", body: "Professional Astrology and Vaastu guidance rooted in classical Jyotisha texts, offering practical remedies without superstition." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border/60 bg-card p-8 hover:shadow-lg transition-shadow">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-accent mb-5">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-2xl text-primary">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=753,fit=crop/jJbK2p43YCuTCpmg/nutulb-kKxL3hSdM54hENGm.png"
              alt="Qualified Vedic priest in traditional saffron attire holding a sacred brass vessel"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <div>
            <div className="ornate-divider mb-4 justify-start">— Vedic Lineage —</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Trained in the Vedas</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our priests hold authentic lineages from traditional Pathashalas. Every mantra is chanted with precise intonation, respecting the exact injunctions of sacred texts.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We manage the entire ritual setup—from selecting auspicious timings to arranging pure samagri—ensuring absolute spiritual integrity for your family.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent hover:text-primary transition-colors">
              Learn about our lineage <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-x text-center">
          <div className="ornate-divider mb-3 text-accent">— Our Commitment —</div>
          <h2 className="font-serif text-3xl md:text-4xl mb-12">Preserving Sacred Traditions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "100%", l: "Shastric Accuracy" },
              { n: "12+", l: "Lineage Priests" },
              { n: "1500+", l: "Rituals Completed" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-5xl md:text-6xl text-accent">{s.n}</div>
                <div className="mt-2 text-sm uppercase tracking-widest text-primary-foreground/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="ornate-divider mb-4">— Devotee Voices —</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">Blessings from families we've served</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-xl border border-border/60 bg-card p-8 shadow-sm">
              <div className="flex text-accent mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-serif text-lg text-foreground leading-snug">"{t.quote}"</p>
              <footer className="mt-5 text-sm text-muted-foreground">
                <strong className="text-primary">{t.name}</strong>, {t.city}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-12">
            <div className="ornate-divider mb-4">— Frequently Asked —</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-border/60 bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-serif text-lg text-primary">
                  {f.q}
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-28 text-center">
        <div className="ornate-divider mb-4">— Book Your Ritual —</div>
        <h2 className="font-serif text-4xl md:text-5xl text-primary max-w-2xl mx-auto">
          Ready to schedule a sacred ceremony?
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
          Share your preferred date, gotra, and ritual requirements. Our coordinators will handle the rest.
        </p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-accent hover:text-primary transition-colors">
          Schedule a Ritual <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
