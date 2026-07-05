import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Sri Shankara Dharmika Kendra" },
      { name: "description", content: "Our policy on cancellations, rescheduling, and refunds for ritual bookings." },
      { property: "og:url", content: "/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Refund Policy" subtitle="Cancellations, rescheduling, and refund arrangements for ritual bookings." />
      <article className="container-x py-16 max-w-3xl prose prose-neutral">
        <p>Cancellations 7 or more days before the scheduled mahurat are eligible for a full refund, less any samagri already procured. Cancellations 3–6 days prior are eligible for a 50% refund. Cancellations within 48 hours are non-refundable.</p>
        <h2>Rescheduling</h2>
        <p>You may reschedule at no cost up to 72 hours before the ceremony, subject to priest availability and an auspicious mahurat.</p>
      </article>
    </SiteLayout>
  ),
});
