"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { contact, navItems } from "@/data/data";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    const subject = encodeURIComponent("Newsletter Subscription Request");
    const body = encodeURIComponent(
      `Hi Swapnil,\n\nPlease subscribe my email (${email}) to your newsletter & updates.\n\nThanks!`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const targetId = item.toLowerCase();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = targetId;
    }
  };

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: contact.github,
      ariaLabel: "Visit Swapnil Dalavi's GitHub profile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: contact.linkedin,
      ariaLabel: "Visit Swapnil Dalavi's LinkedIn profile",
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:${contact.email}`,
      ariaLabel: "Send an email to Swapnil Dalavi",
    },
    {
      name: "Phone",
      icon: Phone,
      url: `tel:${contact.phone}`,
      ariaLabel: "Call Swapnil Dalavi",
    },
  ];

  return (
    <footer className="relative w-full bg-[#111111] text-white overflow-hidden border-t border-white/10 rounded-t-[32px] sm:rounded-t-[48px]">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[220px] bg-gradient-to-b from-[#FD853A]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-16 pb-10 flex flex-col gap-12 lg:gap-14">
        {/* Top Callout Banner */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-md">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open for Full-Time & Freelance Roles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold tracking-tight text-white leading-tight">
              Have a project in mind? <span className="text-[#FD853A]">Let&apos;s build it.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
              Designing scalable Python backends, high-performance REST APIs, and intelligent data & AI pipelines that drive real production impact.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FD853A] hover:bg-[#e46e24] text-white text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-[#FD853A]/25 hover:shadow-[#FD853A]/40 hover:scale-[1.02] cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-200 text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} className="text-[#FD853A]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4-Column Footer Navigation & Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Identity & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FD853A] to-[#e46e24] flex items-center justify-center shadow-md shadow-[#FD853A]/25 border border-white/15">
                <span className="font-extrabold text-white text-base tracking-wider">SD</span>
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-tight">Swapnil Dalavi</span>
                <span className="text-xs text-[#FD853A] font-semibold tracking-wide uppercase">
                  Python & AI Developer
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mt-1">
              Building resilient backend services, REST APIs, and data-driven AI systems with clean architecture and production performance.
            </p>

            <div className="flex items-center gap-2.5 mt-2">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#FD853A]/15 border border-white/10 hover:border-[#FD853A]/60 text-zinc-300 hover:text-[#FD853A] hover:scale-110 transition-all duration-300 shadow-sm"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 lg:pl-4 flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-[#FD853A] uppercase">Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-zinc-300 hover:text-[#FD853A] text-sm transition-all duration-200 inline-flex items-center gap-1.5 hover:translate-x-1"
                  >
                    <span className="text-zinc-600 group-hover:text-[#FD853A]">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-[#FD853A] uppercase">Direct Contact</h3>
            <div className="flex flex-col gap-3.5">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-start gap-3 text-zinc-300 hover:text-[#FD853A] text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#FD853A]/50 transition-colors">
                  <Mail size={15} className="text-[#FD853A]" />
                </div>
                <span className="break-all pt-1">{contact.email}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="group flex items-center gap-3 text-zinc-300 hover:text-[#FD853A] text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#FD853A]/50 transition-colors">
                  <Phone size={15} className="text-[#FD853A]" />
                </div>
                <span>{contact.phone}</span>
              </a>

              <div className="flex items-start gap-3 text-zinc-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-[#FD853A]" />
                </div>
                <span className="pt-1">{contact.location}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter / Stay Connected */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-[#FD853A] uppercase">Stay Connected</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Drop your email to receive occasional updates on backend engineering, AI projects, and technical articles.
            </p>

            <form onSubmit={handleSubscribe} className="relative w-full mt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white/[0.06] border border-white/12 focus:border-[#FD853A] focus:ring-1 focus:ring-[#FD853A] text-white text-sm placeholder:text-zinc-500 rounded-xl px-4 py-3 pr-12 outline-none transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#FD853A] hover:bg-[#e46e24] text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer"
              >
                <Send size={15} />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1.5">
                <Check size={14} /> Thank you! Email subscription initiated.
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Swapnil Dalavi. All rights reserved.</p>

          <p className="hidden md:block text-zinc-500">
            Crafted with Next.js, Tailwind CSS & TypeScript
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#FD853A] transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FD853A]/60 group-hover:bg-[#FD853A]/10 transition-colors">
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
