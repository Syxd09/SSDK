import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { services } from "@/data/services";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Sri Shankara Dharmika Kendra" },
      { name: "description", content: "All pages available on our site." },
      { property: "og:url", content: "/sitemap" },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Directory" title="Sitemap" />
      <div className="container-x py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="font-serif text-2xl text-primary mb-4">Main</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-foreground hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="text-foreground hover:text-accent">About</Link></li>
            <li><Link to="/services" className="text-foreground hover:text-accent">Services</Link></li>
            <li><Link to="/blog" className="text-foreground hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="text-foreground hover:text-accent">Contact</Link></li>
            <li><Link to="/privacy" className="text-foreground hover:text-accent">Privacy</Link></li>
            <li><Link to="/terms" className="text-foreground hover:text-accent">Terms</Link></li>
            <li><Link to="/refund" className="text-foreground hover:text-accent">Refund Policy</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-primary mb-4">Rituals</h2>
          <ul className="space-y-2 text-sm max-h-[400px] overflow-auto pr-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/contact" search={{ service: s.slug }} className="text-foreground hover:text-accent">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-primary mb-4">Blog</h2>
          <ul className="space-y-2 text-sm">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="text-foreground hover:text-accent">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SiteLayout>
  ),
});
