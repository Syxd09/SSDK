import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sri Shankara Dharmika Kendra" },
      { name: "description", content: "How we handle information you share when booking rituals and inquiries." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="How we collect, use, and protect the information you share with us." />
      <article className="container-x py-16 max-w-3xl prose prose-neutral">
        <p>We collect only the information required to coordinate your ritual — name, phone, email, and ceremony details. Contact submissions are stored securely and used solely to respond to your inquiry.</p>
        <h2>What we collect</h2>
        <p>Contact details you provide via our forms, and standard server logs (IP, browser) for security and analytics.</p>
        <h2>How we use it</h2>
        <p>To coordinate rituals, share mahurats, and communicate about your booking. We do not sell personal data to third parties.</p>
        <h2>Contact</h2>
        <p>Reach us at info@onlineastropurohit.com with any privacy questions.</p>
      </article>
    </SiteLayout>
  ),
});
