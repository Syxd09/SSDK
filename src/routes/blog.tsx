import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Vedic Wisdom & Ritual Guides" },
      { name: "description", content: "Guides and reflections on Vedic rituals, homams, and shastric practice from our acharyas." },
      { property: "og:title", content: "Blog — Vedic Wisdom & Ritual Guides" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Journal"
        title="Vedic Wisdom & Ritual Guides"
        subtitle="Reflections and practical guides from our acharyas on ceremonies, sacred texts, and the living tradition."
      />
      <section className="container-x py-16 grid md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm hover:shadow-lg transition-all"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <time className="text-xs uppercase tracking-widest text-accent">{new Date(p.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time>
              <h3 className="mt-2 font-serif text-2xl text-primary leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <span className="mt-4 inline-block text-xs font-medium uppercase tracking-wider text-primary group-hover:text-accent transition-colors">Read more →</span>
            </div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
