import { Link } from "@tanstack/react-router";
import { Flame, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-primary">
              <Flame className="h-5 w-5" />
            </span>
            <span className="font-serif text-xl">Sri Shankara Dharmika Kendra</span>
          </div>
          <p className="mt-5 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
            Authentic Vedic rituals performed with absolute shastric fidelity by
            lineage-trained priests. Serving families across India with reverence
            and precision.
          </p>
          <div className="mt-6 space-y-2 text-sm text-primary-foreground/80">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@onlineastropurohit.com</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Bengaluru, Karnataka, India</p>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-accent">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
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
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 text-xs text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} Sri Shankara Dharmika Kendra. All rites reserved.
        </div>
      </div>
    </footer>
  );
}
