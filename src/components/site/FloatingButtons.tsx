import { useEffect, useState } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-ring"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+919876543210"
        aria-label="Call"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <Phone className="h-5 w-5" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary shadow-lg hover:scale-110 transition-transform duration-300 animate-fade-up"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
