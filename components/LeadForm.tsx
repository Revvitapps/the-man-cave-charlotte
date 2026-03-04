"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  compact?: boolean;
  onSuccess?: () => void;
};

const defaultState = {
  name: "",
  phone: "",
  email: "",
  preferredDateTime: "",
  service: "",
  notes: "",
  company: ""
};

export default function LeadForm({ compact = false, onSuccess }: LeadFormProps) {
  const [form, setForm] = useState(defaultState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setForm(defaultState);
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" aria-label="Request appointment form">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
        className="hidden"
        aria-hidden="true"
      />

      <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-2"}>
        <FormInput label="Name" required value={form.name} onChange={(value) => setForm((prev) => ({ ...prev, name: value }))} />
        <FormInput
          label="Phone"
          type="tel"
          required
          value={form.phone}
          onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
        />
        <FormInput
          label="Email"
          type="email"
          required
          value={form.email}
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
        />
        <FormInput
          label="Preferred Day/Time"
          required
          value={form.preferredDateTime}
          onChange={(value) => setForm((prev) => ({ ...prev, preferredDateTime: value }))}
        />
      </div>

      <FormInput
        label="Service"
        required
        value={form.service}
        onChange={(value) => setForm((prev) => ({ ...prev, service: value }))}
        placeholder="Haircut, fade, beard trim..."
      />

      <label className="text-xs uppercase tracking-[0.1em] text-slatecool">
        Notes
        <textarea
          value={form.notes}
          onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
          rows={4}
          className="mt-1 w-full rounded-lg border border-slatecool/25 bg-charcoal px-3 py-2 text-sm text-white outline-none ring-bronze/60 placeholder:text-slatecool focus:ring-2"
          placeholder="Anything we should know?"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 rounded-full bg-bronze px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-bronze transition hover:brightness-110 disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Request Appointment"}
      </button>

      {status === "success" && <p className="text-xs text-green-300">Request sent. We’ll follow up shortly.</p>}
      {status === "error" && <p className="text-xs text-red-300">Could not submit. Please call us directly.</p>}
    </form>
  );
}

type FormInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function FormInput({ label, value, onChange, type = "text", required, placeholder }: FormInputProps) {
  return (
    <label className="text-xs uppercase tracking-[0.1em] text-slatecool">
      {label}
      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-slatecool/25 bg-charcoal px-3 py-2 text-sm text-white outline-none ring-bronze/60 placeholder:text-slatecool focus:ring-2"
      />
    </label>
  );
}
