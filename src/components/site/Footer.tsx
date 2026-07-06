import { Link } from "@tanstack/react-router";

export function Footer() {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Rituals & Consultations", to: "/services" },
    { label: "Our Lineage", to: "/about" },
    { label: "Gallery", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="mt-24 bg-[#150f0a] text-[#f0e6d6]">
      {/* Top section */}
      <div className="container-x pt-16 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left — Brand */}
          <div className="md:max-w-md">
            <div className="w-10 h-1 bg-[#c41e3a] mb-5" />
            <h2 className="font-serif text-3xl text-[#f0e6d6]">
              Sri Shankara Dharmika Kendra
            </h2>
            <p className="mt-2 text-[#c8b8a0] text-sm">
              Authentic Vedic Rituals and Shastric Consultations
            </p>
          </div>

          {/* Right — Nav + Contact */}
          <div className="md:text-right">
            {/* Horizontal nav with dashes */}
            <nav className="flex flex-wrap md:justify-end gap-x-1 gap-y-1 text-sm text-[#f0e6d6]">
              {navItems.map((item, i) => (
                <span key={item.to} className="inline-flex items-center">
                  <Link to={item.to} className="hover:text-[#e8a84a] transition-colors">
                    {item.label}
                  </Link>
                  {i < navItems.length - 1 && (
                    <span className="mx-1.5 text-[#f0e6d6]/30">-</span>
                  )}
                </span>
              ))}
            </nav>

            {/* Kendra Office + contacts */}
            <div className="mt-8">
              <p className="text-green-500 text-sm tracking-wider font-medium">
                Kendra Office
              </p>
              <div className="mt-4 space-y-2 text-sm text-[#f0e6d6]">
                <p>
                  <a
                    href="mailto:seenufeana@yahoo.in"
                    className="underline underline-offset-2 hover:text-[#e8a84a] transition-colors"
                  >
                    seenufeana@yahoo.in
                  </a>
                </p>
                <p>Bengaluru, Karnataka, India</p>
                <p>Inquiries: +91 9844266816</p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/919844266816"
                    className="underline underline-offset-2 hover:text-[#e8a84a] transition-colors"
                  >
                    +91 9844266816
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container-x">
        <div className="h-px bg-[#f0e6d6]/10" />
      </div>

      {/* Bottom section */}
      <div className="container-x py-8 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-sm text-[#f0e6d6] flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#c41e3a] rounded-full" />
            &copy; 2026 Sri Shankara Dharmika Kendra
          </p>
          <p className="mt-3 text-sm text-[#c8b8a0]">
            Preserving sacred traditions with absolute scriptural fidelity.
          </p>
        </div>
        <div className="flex items-start md:items-center md:h-full">
          <p className="text-xs tracking-[0.25em] uppercase text-[#c41e3a] font-medium whitespace-nowrap">
            Shastric Accuracy &bull; Vedic Lineage
          </p>
        </div>
      </div>
    </footer>
  );
}
