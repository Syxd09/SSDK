import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container-x py-20 md:py-28 text-center">
        {eyebrow && <div className="ornate-divider mb-4">— {eyebrow} —</div>}
        <h1 className="font-serif text-4xl md:text-6xl text-primary max-w-3xl mx-auto leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
