"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, RotateCcw } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface MandateOption {
  id: string;
  label: string;
  scope: string;
  defaultPrompt: string;
}

const MANDATE_OPTIONS: MandateOption[] = [
  {
    id: "rtm",
    label: "Route-to-Market & FMCG",
    scope: "Distributor scaling & territory expansion",
    defaultPrompt:
      "I am looking to scale our B2B distribution network, territory design, and commercial stockist footprint across Kenya.",
  },
  {
    id: "infrastructure",
    label: "Capital Construction & Engineering",
    scope: "Civil projects, mechanical works & BQ review",
    defaultPrompt:
      "We require project management, contractor coordination, and technical delivery oversight for a construction or engineering mandate.",
  },
  {
    id: "partnerships",
    label: "Enterprise Accounts & Tenders",
    scope: "Corporate contracts & commercial bidding",
    defaultPrompt:
      "We would like to structure corporate supply framework agreements, institutional tenders, and strategic commercial partnerships.",
  },
  {
    id: "procurement",
    label: "Procurement & General Supplies",
    scope: "Industrial equipment, materials & spares sourcing",
    defaultPrompt:
      "We are seeking reliable procurement and supply chain sourcing for construction materials, mechanical parts, or institutional goods.",
  },
  {
    id: "advisory",
    label: "Commercial Strategy & Advisory",
    scope: "Executive counsel, turnarounds & board mandates",
    defaultPrompt:
      "I would like to explore an executive commercial strategy or advisory engagement for our leadership team.",
  },
];

export default function Contact() {
  const { profile, contact } = portfolioData;

  const [selectedId, setSelectedId] = useState<string>(MANDATE_OPTIONS[0].id);
  const [senderIdentity, setSenderIdentity] = useState<string>("");
  const [customMessage, setCustomMessage] = useState<string>(
    MANDATE_OPTIONS[0].defaultPrompt
  );
  const [hasManuallyEdited, setHasManuallyEdited] = useState<boolean>(false);

  const selectedOption =
    MANDATE_OPTIONS.find((item) => item.id === selectedId) ||
    MANDATE_OPTIONS[0];

  const handleSelectOption = (option: MandateOption) => {
    setSelectedId(option.id);
    if (!hasManuallyEdited) {
      setCustomMessage(option.defaultPrompt);
    }
  };

  const handleResetPrompt = () => {
    setCustomMessage(selectedOption.defaultPrompt);
    setHasManuallyEdited(false);
  };

  const activeIdentityClean = senderIdentity.trim();

  const formattedMessage = activeIdentityClean
    ? `Hello Wallace, this is ${activeIdentityClean}.\n\nFocus: ${selectedOption.label}\n\n${customMessage.trim()}`
    : `Hello Wallace,\n\nFocus: ${selectedOption.label}\n\n${customMessage.trim()}`;

  const whatsAppHref = `https://wa.me/${profile.whatsApp}?text=${encodeURIComponent(
    formattedMessage
  )}`;

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Commercial Inquiry: ${selectedOption.label}${
      activeIdentityClean ? ` | ${activeIdentityClean}` : ""
    }`
  )}&body=${encodeURIComponent(
    `${formattedMessage}\n\n---\nDirect Contact Details:\n`
  )}`;

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-28 bg-obsidian-950 border-b border-hairline"
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Top Metadata Strip: 04 / LET'S TALK */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10 sm:pb-14 border-b border-hairline">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-stone">
            {contact.sectionIndex}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim">
            {contact.rightTag}
          </span>
        </div>

        {/* Main Split Layout */}
        <div className="pt-10 sm:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (5 cols): Headline & Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="font-display font-medium text-bone display-monumental mb-5">
                <span className="block">{contact.headlineLines[0]}</span>
                <span className="block">{contact.headlineLines[1]}</span>
                <span className="block">{contact.headlineLines[2]}</span>
              </h2>
              <p className="text-base text-bone-stone leading-relaxed max-w-[42ch]">
                {contact.subheadline}
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-5 pt-6 border-t border-hairline">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim mb-1.5">
                  DIRECT ELECTRONIC MAIL
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="min-h-[44px] inline-flex items-center gap-2 text-base sm:text-lg font-medium text-bone border-b border-brass pb-1 hover:text-brass-light transition-colors link-external"
                >
                  <span>{profile.email}</span>
                  <ArrowUpRight className="w-4 h-4 text-brass glyph-ne" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim mb-1">
                    WHATSAPP DIRECT
                  </span>
                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] font-mono text-sm text-bone hover:text-brass transition-colors inline-flex items-center gap-1.5 link-external"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brass glyph-ne" />
                  </a>
                </div>

                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim mb-1">
                    BASE & COVERAGE
                  </span>
                  <span className="font-mono text-sm text-bone-muted block py-2">
                    {contact.availabilityNote}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Professional Commercial Mandate Intake Console */}
          <div className="lg:col-span-7 bg-obsidian-850 border border-hairline p-5 sm:p-8 space-y-6">
            {/* Console Header */}
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-hairline">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brass shrink-0" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone">
                  COMMERCIAL MANDATE INTAKE
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brass">
                DIRECT PRINCIPAL DISPATCH
              </span>
            </div>

            {/* Step 1: Focus Area Pill Selector */}
            <div className="space-y-2.5">
              <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-bone-stone">
                01 / SELECT MANDATE SCOPE
              </label>
              <div className="flex flex-wrap gap-2">
                {MANDATE_OPTIONS.map((option) => {
                  const isSelected = option.id === selectedId;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option)}
                      className={`min-h-[40px] px-3.5 py-2 text-xs font-mono transition-all duration-150 flex items-center gap-2 border btn-tactile ${
                        isSelected
                          ? "border-brass bg-obsidian-750 text-brass shadow-sm"
                          : "border-hairline bg-obsidian-900/80 text-bone-stone hover:text-bone hover:border-white/20"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected ? "bg-brass" : "bg-bone-dim/40"
                        }`}
                      />
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
              <p className="font-mono text-[10.5px] text-bone-dim pt-0.5">
                Scope: {selectedOption.scope}
              </p>
            </div>

            {/* Step 2: Client Identity (Optional) */}
            <div className="space-y-2">
              <label
                htmlFor="client-identity"
                className="block font-mono text-[10px] uppercase tracking-[0.16em] text-bone-stone"
              >
                02 / YOUR NAME & ORGANIZATION{" "}
                <span className="text-bone-dim">(OPTIONAL)</span>
              </label>
              <input
                id="client-identity"
                type="text"
                value={senderIdentity}
                onChange={(e) => setSenderIdentity(e.target.value)}
                placeholder="e.g., James Mwangi / Apex Industrial Ltd"
                className="w-full min-h-[46px] px-3.5 bg-obsidian-900 border border-hairline focus:border-brass focus:outline-none text-bone placeholder:text-bone-dim/60 text-sm font-sans transition-colors rounded-none"
              />
            </div>

            {/* Step 3: Editable Brief / Custom Message */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="mandate-brief"
                  className="block font-mono text-[10px] uppercase tracking-[0.16em] text-bone-stone"
                >
                  03 / MANDATE BRIEF OR INQUIRY
                </label>
                {hasManuallyEdited && (
                  <button
                    type="button"
                    onClick={handleResetPrompt}
                    className="font-mono text-[10px] text-brass hover:text-brass-light inline-flex items-center gap-1 focus:outline-none"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset to default</span>
                  </button>
                )}
              </div>
              <textarea
                id="mandate-brief"
                rows={4}
                value={customMessage}
                onChange={(e) => {
                  setCustomMessage(e.target.value);
                  setHasManuallyEdited(true);
                }}
                placeholder="Type your brief, specific objectives, or inquiry here..."
                className="w-full p-3.5 bg-obsidian-900 border border-hairline focus:border-brass focus:outline-none text-bone placeholder:text-bone-dim/60 text-sm font-sans transition-colors resize-none rounded-none leading-relaxed"
              />
            </div>

            {/* Step 4: 1-Tap Outbound Dispatch */}
            <div className="pt-2 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[52px] px-5 bg-brass hover:bg-brass-light text-obsidian-950 font-medium text-sm tracking-tight flex items-center justify-between btn-tactile link-external"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 glyph-ne shrink-0" />
                </a>

                <a
                  href={mailtoHref}
                  className="min-h-[52px] px-5 border border-brass-rule bg-obsidian-750 hover:border-brass text-bone font-medium text-sm tracking-tight flex items-center justify-between btn-tactile link-external"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brass" />
                    <span>Email Direct</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-brass glyph-ne shrink-0" />
                </a>
              </div>

              {/* Direct Inbox Status Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-obsidian-900/60 border border-hairline text-bone-stone font-mono text-[11px]">
                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
                  <span>DIRECT INBOX: {profile.email}</span>
                </div>
                <span className="text-brass">Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
