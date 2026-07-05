import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-primary leading-snug">{service.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-serif text-lg text-primary font-semibold">{service.price}</span>
          <Link
            to="/contact"
            search={{ service: service.slug }}
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground hover:bg-accent hover:text-primary transition-colors"
          >
            {service.price === "On Request" ? "Inquire" : "Book Now"}
          </Link>
        </div>
      </div>
    </article>
  );
}
