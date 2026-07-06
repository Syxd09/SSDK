import { useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Calendar as CalendarIcon, Clock, MapPin, MessageSquare, Phone, User, Sparkles, HelpCircle } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

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

const HOURS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const MINUTES = ["00", "15", "30", "45"];
const PERIODS = ["AM", "PM"];

export function BookingForm({
  defaultService = "",
}: {
  defaultService?: string;
}) {
  const [requestType, setRequestType] = useState<"booking" | "query">("booking");
  const [formData, setFormData] = useState({
    custName: "",
    custPhone: "",
    pujaType: defaultService,
    bookDate: "",
    bookTime: "",
    bookLoc: "",
    bookNotes: "",
  });

  const [timeState, setTimeState] = useState({
    hour: "",
    minute: "",
    period: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleTimeChange = (type: "hour" | "minute" | "period", val: string) => {
    setTimeState((prev) => {
      const updated = { ...prev, [type]: val };
      if (type === "hour") {
        if (!updated.minute) updated.minute = "00";
        if (!updated.period) updated.period = "AM";
      }
      if (updated.hour && updated.minute && updated.period) {
        setFormData((form) => ({
          ...form,
          bookTime: `${updated.hour}:${updated.minute} ${updated.period}`,
        }));
      } else {
        setFormData((form) => ({
          ...form,
          bookTime: "",
        }));
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (requestType === "booking" && !formData.bookDate) {
      toast.error("Preferred Date Required", {
        description: "Please select a preferred date to secure your booking.",
      });
      setLoading(false);
      return;
    }

    try {
      // LocalStorage persistence matching existing structure
      const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
      existing.push({
        ...formData,
        requestType,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("bookings", JSON.stringify(existing));

      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 800));

      const titleMessage = requestType === "booking" ? "Booking Request Registered" : "Inquiry Registered";
      const descMessage = requestType === "booking" 
        ? "Our admin coordinator will review the slots and reach out shortly."
        : "Our team will review your query and connect back with you soon.";

      toast.success(titleMessage, {
        description: descMessage,
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
    setTimeState({
      hour: "",
      minute: "",
      period: "",
    });
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Request Type Selector (Segmented Tab) */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-primary">
            Request Type
          </label>
          <div className="grid grid-cols-2 p-1 gap-1 rounded-full bg-secondary">
            <button
              type="button"
              onClick={() => setRequestType("booking")}
              className={`rounded-full py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                requestType === "booking"
                  ? "bg-[#b88e3e] text-white shadow-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Puja Booking
            </button>
            <button
              type="button"
              onClick={() => setRequestType("query")}
              className={`rounded-full py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                requestType === "query"
                  ? "bg-[#b88e3e] text-white shadow-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              General Inquiry / Query
            </button>
          </div>
        </div>

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
          <Select
            required
            value={formData.pujaType}
            onValueChange={(val) => setFormData((prev) => ({ ...prev, pujaType: val }))}
          >
            <SelectTrigger className="w-full h-auto py-3.5 bg-card text-left focus:ring-2 focus:ring-accent/15 focus:border-accent">
              <SelectValue placeholder="Select Service Wing" />
            </SelectTrigger>
            <SelectContent className="bg-card border border-border/80 shadow-2xl rounded-md max-h-[300px] overflow-y-auto">
              {SERVICES_WINGS.map((wing) => (
                <SelectItem 
                  key={wing} 
                  value={wing}
                  className="cursor-pointer hover:bg-accent/15 focus:bg-accent/15 text-foreground py-2.5 transition-colors"
                >
                  {wing}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {requestType === "booking" && (
          <div className="grid md:grid-cols-2 gap-5">
            {/* Preferred Date Field (Popover Calendar) */}
            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <CalendarIcon className="h-3.5 w-3.5 text-accent" />
                Preferred Date <span className="text-accent">*</span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md border border-input bg-card px-4 py-3.5 text-sm text-left transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none cursor-pointer"
                  >
                    <span className={formData.bookDate ? "text-foreground" : "text-muted-foreground"}>
                      {formData.bookDate 
                        ? format(new Date(formData.bookDate), "PPP") 
                        : "Select preferred date"}
                    </span>
                    <CalendarIcon className="h-4 w-4 opacity-50 text-accent" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card border border-border/80 shadow-2xl rounded-md" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.bookDate ? new Date(formData.bookDate) : undefined}
                    onSelect={(date) => {
                      setFormData((prev) => ({
                        ...prev,
                        bookDate: date ? format(date, "yyyy-MM-dd") : "",
                      }));
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Preferred Time Field (Popover Custom Time Picker) */}
            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Clock className="h-3.5 w-3.5 text-accent" />
                Preferred Time
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md border border-input bg-card px-4 py-3.5 text-sm text-left transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none cursor-pointer"
                  >
                    <span className={formData.bookTime ? "text-foreground" : "text-muted-foreground"}>
                      {formData.bookTime ? formData.bookTime : "Select preferred time"}
                    </span>
                    <Clock className="h-4 w-4 opacity-50 text-accent" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-3 bg-card border border-border/80 shadow-2xl rounded-md flex flex-col gap-3" align="start">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/60 pb-1.5">
                    <div>Hour</div>
                    <div>Min</div>
                    <div>AM/PM</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 h-40">
                    {/* Hour Column */}
                    <div className="overflow-y-auto pr-1 flex flex-col gap-0.5 scrollbar-thin">
                      {HOURS.map((h) => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => handleTimeChange("hour", h)}
                          className={`rounded-sm py-1.5 text-xs font-medium text-center transition-all ${
                            timeState.hour === h
                              ? "bg-[#b88e3e] text-white"
                              : "hover:bg-secondary text-foreground"
                          }`}
                        >
                          {h}
                        </button>
                      ))}
                    </div>

                    {/* Minute Column */}
                    <div className="overflow-y-auto pr-1 flex flex-col gap-0.5 scrollbar-thin">
                      {MINUTES.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => handleTimeChange("minute", m)}
                          className={`rounded-sm py-1.5 text-xs font-medium text-center transition-all ${
                            timeState.minute === m
                              ? "bg-[#b88e3e] text-white"
                              : "hover:bg-secondary text-foreground"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>

                    {/* Period Column */}
                    <div className="flex flex-col gap-0.5">
                      {PERIODS.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => handleTimeChange("period", p)}
                          className={`rounded-sm py-1.5 text-xs font-medium text-center transition-all ${
                            timeState.period === p
                              ? "bg-[#b88e3e] text-white"
                              : "hover:bg-secondary text-foreground"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        )}

        {/* Location Field (Required only for Bookings) */}
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            City / Location {requestType === "booking" && <span className="text-accent">*</span>}
          </label>
          <input
            type="text"
            required={requestType === "booking"}
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
            {requestType === "booking" ? "Special Requests (optional)" : "Your Inquiry Questions / Notes"}
          </label>
          <textarea
            value={formData.bookNotes}
            onChange={(e) => setFormData((prev) => ({ ...prev, bookNotes: e.target.value }))}
            placeholder={
              requestType === "booking" 
                ? "Specify house size, required samagri adjustments..." 
                : "Ask us anything about rituals, items needed, timings, or options..."
            }
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
              <span>
                {requestType === "booking" ? "Submit Booking Request" : "Submit Inquiry / Query"}
              </span>
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
                {requestType === "booking" ? (
                  <span className="text-4xl">🙏</span>
                ) : (
                  <HelpCircle className="h-8 w-8 text-[#b88e3e]" />
                )}
              </div>

              <h3 className="font-serif text-2xl font-semibold text-primary">
                {requestType === "booking" ? "Booking Registered!" : "Inquiry Registered!"}
              </h3>
              
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {requestType === "booking" 
                  ? "Your requests have been transmitted directly to our admin desk in the background. A priest will review the slots and connect back shortly."
                  : "Your query has been transmitted to our administrative desk. Our team will review your questions and reach out shortly."}
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
