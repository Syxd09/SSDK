import { useState } from "react";
import { toast } from "sonner";

type Field = { name: string; label: string; type?: string; textarea?: boolean; required?: boolean };

export function InquiryForm({
  fields,
  submitLabel = "Submit Inquiry",
  defaults = {},
}: {
  fields: Field[];
  submitLabel?: string;
  defaults?: Record<string, string>;
}) {
  const [values, setValues] = useState<Record<string, string>>(defaults);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to Supabase/Firebase. For now, persist locally + toast.
    try {
      const existing = JSON.parse(localStorage.getItem("inquiries") || "[]");
      existing.push({ ...values, at: new Date().toISOString() });
      localStorage.setItem("inquiries", JSON.stringify(existing));
      await new Promise((r) => setTimeout(r, 500));
      toast.success("Inquiry received", {
        description: "Our team will reach out shortly for coordination.",
      });
      setValues({});
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {fields.map((f) => (
        <div key={f.name}>
          <label className="block text-xs font-medium uppercase tracking-wider text-primary mb-2">
            {f.label}{f.required && <span className="text-accent"> *</span>}
          </label>
          {f.textarea ? (
            <textarea
              required={f.required}
              rows={5}
              value={values[f.name] || ""}
              onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          ) : (
            <input
              required={f.required}
              type={f.type || "text"}
              value={values[f.name] || ""}
              onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-accent hover:text-primary transition-colors disabled:opacity-60"
      >
        {loading ? "Submitting…" : submitLabel}
      </button>
    </form>
  );
}
