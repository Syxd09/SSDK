import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Post not found" }, { name: "robots", content: "noindex" }] };
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Sri Shankara Dharmika Kendra` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Person", name: post.author },
        }),
      }],
    };
  },
  component: Post,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <h1 className="font-serif text-4xl text-primary">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-accent">← Back to blog</Link>
      </div>
    </SiteLayout>
  ),
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="container-x py-16 max-w-3xl">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
          <Link to="/blog" className="hover:text-primary">Blog</Link> <span className="mx-2">/</span> <span className="text-primary">{post.title}</span>
        </nav>
        <time className="text-xs uppercase tracking-widest text-accent">{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-primary leading-tight">{post.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">By {post.author}</p>
        <div className="mt-8 overflow-hidden rounded-xl shadow-lg">
          <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover" />
        </div>
        <div className="prose prose-lg mt-10 max-w-none">
          {post.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/85 mb-5">{p}</p>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border/60 flex justify-between text-sm">
          <Link to="/blog" className="text-primary hover:text-accent">← All posts</Link>
          <Link to="/contact" className="text-primary hover:text-accent">Schedule a ritual →</Link>
        </div>
      </article>
    </SiteLayout>
  );
}
