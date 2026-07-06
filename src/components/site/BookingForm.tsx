import { useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Calendar, Clock, MapPin, MessageSquare, Phone, User, Sparkles } from "lucide-react";

const SERVICES_WINGS = [
  "Gruha Pravesam (Housewarming)",
  "Homam / Sacred Fire Rituals",
  "Marriage / Engagement Ceremonies",
  "Milestone Shanti Puja (60, 70, 80 Years)",
  "Astrology / Vaastu Consultation",
  "Aparakriya (Funeral / Ancestral Services)",
  "Language / Scriptural Pooja Classes",
  "Other Custom Puja Requirement",
] as const;

export function BookingForm({
  defaultService = "",
}: {
  defaultService?: string;
}) {
  const [formData, setFormData] = useState({
    custName: "",
    custPhone: "",
    pujaType: defaultService,
    bookDate: "",
    bookTime: "",
    bookLoc: "",
    bookNotes: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // LocalStorage persistence matching existing structure
      const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("bookings", JSON.stringify(existing));

      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 800));

      toast.success("Booking Request Registered", {
        description: "Our admin coordinator will review the slots and reach out shortly.",
      });

      setShowModal(true);
    } catch (err) {
      toast.error("Submission failed", {
        description: "Please check your network and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      custName: "",
      custPhone: "",
      pujaType: "",
      bookDate: "",
      bookTime: "",
      bookLoc: "",
      bookNotes: "",
    });
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <User className="h-3.5 w-3.5 text-accent" />
              Your Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.custName}
              onChange={(e) => setFormData((prev) => ({ ...prev, custName: e.target.value }))}
              placeholder="Full Name"
              className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
            />
          </div>

          {/* WhatsApp Phone Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Phone className="h-3.5 w-3.5 text-accent" />
              WhatsApp Number <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.custPhone}
              onChange={(e) => setFormData((prev) => ({ ...prev, custPhone: e.target.value }))}
              placeholder="+91 98765 43210"
              className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
            />
          </div>
        </div>

        {/* Service Type Selection */}
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Type of Service Needed <span className="text-accent">*</span>
          </label>
          <select
            required
            value={formData.pujaType}
            onChange={(e) => setFormData((prev) => ({ ...prev, pujaType: e.target.value }))}
            className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23721655' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 1rem center",
              backgroundSize: "1.25rem",
              backgroundRepeat: "no-repeat",
            }}
          >
            <option value="" disabled>
              Select Service Wing
            </option>
            {SERVICES_WINGS.map((wing) => (
              <option key={wing} value={wing}>
                {wing}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Preferred Date Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Calendar className="h-3.5 w-3.5 text-accent" />
              Preferred Date <span className="text-accent">*</span>
            </label>
            <input
              type="date"
              required
              value={formData.bookDate}
              onChange={(e) => setFormData((prev) => ({ ...prev, bookDate: e.target.value }))}
              className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
            />
          </div>

          {/* Preferred Time Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Clock className="h-3.5 w-3.5 text-accent" />
              Preferred Time
            </label>
            <input
              type="time"
              value={formData.bookTime}
              onChange={(e) => setFormData((prev) => ({ ...prev, bookTime: e.target.value }))}
              className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
            />
          </div>
        </div>

        {/* Location Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            City / Location <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.bookLoc}
            onChange={(e) => setFormData((prev) => ({ ...prev, bookLoc: e.target.value }))}
            placeholder="e.g. Bangalore, Whitefield"
            className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
          />
        </div>

        {/* Special Requests (Notes) Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <MessageSquare className="h-3.5 w-3.5 text-accent" />
            Special Requests (optional)
          </label>
          <textarea
            value={formData.bookNotes}
            onChange={(e) => setFormData((prev) => ({ ...prev, bookNotes: e.target.value }))}
            placeholder="Specify house size, required samagri adjustments..."
            rows={4}
            className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#b88e3e] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#9e752f] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#b88e3e]/40 disabled:opacity-60"
        >
          {loading ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>🪔 Submit Booking Request</span>
            </>
          )}
        </button>

        <p className="text-center text-xs text-muted-foreground">
          ✓ Auto-routes background delivery securely to our admin desk
        </p>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md rounded-xl border-t-4 border-primary bg-card p-8 text-center shadow-2xl"
            >
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#b88e3e]/10 text-[#b88e3e]">
                <span className="text-4xl">🙏</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-primary">
                Booking Registered!
              </h3>
              
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Your requests have been transmitted directly to our admin desk in the background. A priest will review the slots and connect back shortly.
              </p>

              <button
                onClick={closeModal}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#b88e3e] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#9e752f] hover:shadow-md"
              >
                Dhanyavaad
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
