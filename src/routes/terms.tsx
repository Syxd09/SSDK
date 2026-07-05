import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Sri Shankara Dharmika Kendra" },
      { name: "description", content: "Terms governing the use of our website and ritual booking services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle="The agreement between our Kendra and the families we serve." />
      <article className="container-x py-16 max-w-3xl prose prose-neutral">
        <p>By booking a ritual, you agree to provide accurate ceremony details, coordinate access to the venue, and honour scheduled mahurats. Additional travel and samagri costs may apply based on location and ceremony scope.</p>
        <h2>Booking</h2>
        <p>All bookings are confirmed only after our team communicates the mahurat and priest availability.</p>
        <h2>Conduct of Rituals</h2>
        <p>All rituals are conducted in strict accordance with the Grihya Sutras. We reserve the right to advise on procedural adjustments for scriptural accuracy.</p>
      </article>
    </SiteLayout>
  ),
});
