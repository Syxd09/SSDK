import { Link } from "@tanstack/react-router";
import { Flame, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      {/* Top tagline bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-x py-3 text-center text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
          Shastric Accuracy &bull; Vedic Lineage
        </div>
      </div>

      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-primary">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <span className="font-serif text-xl block">Sri Shankara Dharmika Kendra</span>
              <span className="text-xs text-primary-foreground/60 block mt-0.5">Authentic Vedic Rituals and Shastric Consultations</span>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
            Preserving sacred traditions with absolute scriptural fidelity.
          </p>
          <div className="mt-6 space-y-2 text-sm text-primary-foreground/80">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> Inquiries: +91 9844266816</p>
            <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-accent" /> WhatsApp: +91 9844266816</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> seenufeana@yahoo.in</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Bengaluru, Karnataka, India</p>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="font-serif text-lg mb-4 text-accent">Kendra Office</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/services" className="hover:text-accent">Rituals & Consultations</Link></li>
            <li><Link to="/about" className="hover:text-accent">Our Lineage</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="font-serif text-lg mb-4 text-accent">Legal</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Terms of Service</Link></li>
            <li><Link to="/refund" className="hover:text-accent">Refund Policy</Link></li>
            <li><Link to="/sitemap" className="hover:text-accent">Sitemap</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/60 text-center md:text-left">
            &copy; 2026 Sri Shankara Dharmika Kendra. All rites reserved.
          </p>
          <p className="text-xs text-primary-foreground/50 text-center md:text-right">
            Powered by EC-CUBE INFOTRONICS
          </p>
        </div>
      </div>
    </footer>
  );
}
