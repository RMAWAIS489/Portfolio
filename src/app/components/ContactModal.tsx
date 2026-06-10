"use client";

import { useEffect, useState } from "react";
import { services } from "./services-data";

interface Props {
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}


export default function ContactModal({ onClose }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setApiError("");

    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setApiError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setApiError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(2,11,14,0.85)] backdrop-blur-[2px] p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[580px] border-2 border-[#00E5FF] bg-[#021114] shadow-[0_0_40px_rgba(0,229,255,0.2)] flex flex-col max-h-[90vh] overflow-hidden">

        {/* Continuous scan beam */}
        <div className="contact-scan-beam absolute inset-x-0 pointer-events-none z-50" />

        {/* ── Title bar ── */}
        <div className="flex items-center justify-between px-4 py-[10px] border-b-2 border-[#00E5FF] bg-[#021320] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-[28px] h-[28px] border-2 border-[#7ba205] flex items-center justify-center shrink-0">
              <span className="text-[#7ba205] font-black text-[14px] leading-none">@</span>
            </div>
            <span className="text-[14px] font-bold tracking-wider uppercase text-[#7ba205] [font-family:var(--font-orbitron),sans-serif]">
              CONTACT
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-[28px] h-[28px] border border-[#7ba205] flex items-center justify-center text-[#7ba205] hover:bg-[#00E5FF] hover:text-[#021114] transition-colors duration-150 text-[12px] font-bold"
            aria-label="Close"
          >
            X
          </button>
        </div>

        {/* ── Sub-header ── */}
        <div className="flex items-center gap-6 px-4 py-[7px] border-b border-[rgba(0,229,255,0.15)] bg-[#021114] shrink-0 flex-wrap">
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
            SYSTEM_ROOT
          </span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
            ACCESS LEVEL: PUBLIC
          </span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] contact-blink [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
            AWAITING INPUT...
          </span>
        </div>

        {/* ── Body ── */}
        <div className="contact-scroll overflow-y-auto flex-1 px-5 py-4">
          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
              <div className="w-[56px] h-[56px] border-2 border-[#aaff00] flex items-center justify-center">
                <span className="text-[#aaff00] text-[28px] font-black">✓</span>
              </div>
              <p className="text-[16px] font-bold text-[#aaff00] uppercase tracking-[0.14em] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                MESSAGE RECEIVED
              </p>
              <p className="text-[12px] text-[rgb(159,161,162)] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] max-w-[320px] leading-[18px]">
                Thanks for reaching out. I&apos;ll review your request and get back to you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-2 border border-[#00E5FF] px-6 py-[8px] text-[12px] font-bold uppercase tracking-[0.14em] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#021114] transition-colors [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
              >
                CLOSE
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

              {/* prompt line */}
              <p className="text-[11px] text-[rgba(0,229,255,0.55)] tracking-[0.1em] uppercase [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                &gt;&gt; Fill in the details below and I&apos;ll get back to you.
              </p>

              {/* Name */}
              <div className="flex flex-col gap-[6px]">
                <label className="field-label">NAME *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="contact-input"
                  autoComplete="off"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[6px]">
                <label className="field-label">EMAIL *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="contact-input"
                  autoComplete="off"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-[6px]">
                <label className="field-label">SERVICE REQUIRED *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="contact-input contact-select"
                >
                  <option value="" disabled>
                    -- Select a service --
                  </option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other / Not sure yet</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[6px]">
                <label className="field-label">MESSAGE *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Briefly describe your project or what you need..."
                  rows={4}
                  className="contact-input resize-none"
                />
              </div>

              {/* Error message */}
              {apiError && (
                <p className="text-[11px] text-red-400 border border-red-400/40 bg-red-400/5 px-3 py-2 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]">
                  ⚠ {apiError}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-1 border border-[#00E5FF] bg-[#00E5FF] px-4 py-[10px] text-[13px] font-bold uppercase tracking-[0.14em] text-[#021114] hover:bg-[#021114] hover:text-[#00E5FF] transition-colors duration-150 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "TRANSMITTING..." : "TRANSMIT MESSAGE →"}
              </button>
            </form>
          )}
        </div>

        {/* ── Footer ── */}
        {!submitted && (
          <div className="flex items-center justify-end px-4 py-[8px] border-t-2 border-[#00E5FF] bg-[#021320] shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-[6px] border border-[#7ba205] text-[#7ba205] text-[12px] font-bold tracking-wide uppercase [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] hover:bg-[#00E5FF] hover:text-[#021114] transition-all duration-150"
            >
              ABORT
            </button>
          </div>
        )}

        <style>{`
          .contact-scroll::-webkit-scrollbar { width: 6px; }
          .contact-scroll::-webkit-scrollbar-track { background: transparent; }
          .contact-scroll::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.45); }
          .contact-scroll { scrollbar-width: thin; scrollbar-color: rgba(0,229,255,0.45) transparent; }

          .field-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: rgba(0,229,255,0.7);
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
          }

          .contact-input {
            background: #010c0e;
            border: 1px solid rgba(0,229,255,0.4);
            color: #00E5FF;
            padding: 8px 12px;
            font-size: 13px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
            outline: none;
            transition: border-color 0.15s, box-shadow 0.15s;
            width: 100%;
          }
          .contact-input::placeholder {
            color: rgba(0,229,255,0.25);
          }
          .contact-input:focus {
            border-color: #00E5FF;
            box-shadow: 0 0 0 1px rgba(0,229,255,0.3), 0 0 12px rgba(0,229,255,0.1);
          }

          .contact-select {
            appearance: none;
            -webkit-appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2300E5FF' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 12px center;
            padding-right: 32px;
            cursor: pointer;
          }
          .contact-select option {
            background: #010c0e;
            color: #00E5FF;
          }

          @keyframes contactBlink {
            0%, 49% { color: #00E5FF; }
            50%, 100% { color: #01636f; }
          }
          .contact-blink {
            animation: contactBlink 1.2s step-start infinite;
          }

          @keyframes contactScan {
            0%   { top: -4px; }
            100% { top: calc(100% + 80px); }
          }
          .contact-scan-beam {
            height: 4px;
            background: linear-gradient(to right, rgba(0,229,255,0), rgba(0,229,255,0.8), rgba(0,229,255,0));
            filter: blur(1px);
            animation: contactScan 3s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
