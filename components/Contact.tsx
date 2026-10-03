"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { profile, contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch (or forward to Formspree / Resend / Webhook)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 7000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-8 lg:px-12 bg-obsidian-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with .03 Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-300 uppercase mb-2">
              <span className="text-white font-bold">{contact.sectionTag.split("—")[0].trim()}</span>
              <span>—</span>
              <span>{contact.sectionTag.split("—")[1]?.trim() || "COMMERCIAL INQUIRIES"}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              {contact.sectionTitle}
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs font-mono tracking-wider text-emerald-400 flex items-center gap-1.5 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Direct Channel Open
            </span>
          </div>
        </div>

        {/* Two-Column Split Layout - Matching Reference Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-4">
                {contact.headline}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-md">
                {contact.subheadline}
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              {/* Location */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 block mb-1">
                  Location / Base
                </span>
                <p className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  {profile.location}
                  <span className="text-xs text-neutral-400 font-normal">({contact.availabilityNote})</span>
                </p>
              </div>

              {/* Phone */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 block mb-1">
                  Direct Phone / WhatsApp
                </span>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="text-base sm:text-lg font-semibold text-white hover:text-emerald-400 transition-colors flex items-center gap-2 font-mono"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  {profile.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 block mb-1">
                  Official Email
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-base sm:text-lg font-semibold text-white hover:text-emerald-400 transition-colors flex items-center gap-2 font-mono"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  {profile.email}
                </a>
              </div>

              {/* Direct LinkedIn */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 block mb-1">
                  LinkedIn Network
                </span>
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-xs font-semibold text-white uppercase tracking-wider transition-all"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>Connect on LinkedIn</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-3">
              <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
              <p className="text-xs text-neutral-400">
                {contact.officeHours}. Inquiries are reviewed personally.
              </p>
            </div>
          </div>

          {/* Right Column: Sleek Floating Contact Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-white/15 bg-obsidian-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                  CONTACT FORM
                </h4>
                <span className="text-xs font-mono text-neutral-300">
                  SECURE TRANSMISSION
                </span>
              </div>

              {isSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h5 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                    Message Dispatched Successfully
                  </h5>
                  <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                    Thank you. Wallace has received your communication and will respond promptly via your specified email or phone.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-semibold text-white uppercase tracking-wider hover:bg-white/10"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-widest text-neutral-300"
                    >
                      Your Full Name / Entity *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe, Managing Director"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-obsidian-950/60 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all font-mono"
                    />
                  </div>

                  {/* Phone & Email Dual Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono uppercase tracking-widest text-neutral-300"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+254 722 000 000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-obsidian-950/60 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all font-mono"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-widest text-neutral-300"
                      >
                        Corporate Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@enterprise.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-obsidian-950/60 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-widest text-neutral-300"
                    >
                      Inquiry Nature & Brief *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Outline your commercial expansion, advisory needs, or consultation request..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-obsidian-950/60 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all font-mono resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-white text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-white/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-obsidian-950 border-t-transparent rounded-full animate-spin" />
                        Transmitting Inquiry...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span>Dispatch Commercial Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-neutral-300 text-center font-mono">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Or direct WhatsApp dispatch to {profile.phone}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
