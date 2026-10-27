'use client';

import confetti from 'canvas-confetti';
import { contact } from '@/data/data';

interface BtnProps {
  className?: string;
  children: React.ReactNode;
}

export function ScrollToContactButton({ className = "", children }: BtnProps) {
  const handleHireClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Calculate click / button position for origin
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // 2. Wave 1: Immediate Paper Blast explosion right from the button
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { x, y },
      colors: ['#FD853A', '#FEB273', '#FF6B00', '#171717', '#101828', '#ffffff'],
      startVelocity: 38,
      scalar: 1.15,
      shapes: ['square', 'circle'],
      ticks: 240,
      zIndex: 99999,
    });

    // 3. Wave 2: Double celebratory side cannons (left & right party blast)
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 60,
        origin: { x: 0.05, y: Math.max(0.3, Math.min(y, 0.85)) },
        colors: ['#FD853A', '#FEB273', '#FFB020', '#14B8A6', '#6366F1', '#EC4899'],
        startVelocity: 45,
        scalar: 1.1,
        ticks: 260,
        zIndex: 99999,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 60,
        origin: { x: 0.95, y: Math.max(0.3, Math.min(y, 0.85)) },
        colors: ['#FD853A', '#FEB273', '#FFB020', '#14B8A6', '#6366F1', '#EC4899'],
        startVelocity: 45,
        scalar: 1.1,
        ticks: 260,
        zIndex: 99999,
      });
    }, 160);

    // 4. Smoothly scroll down to contact section
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 450);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleHireClick}
    >
      {children}
    </button>
  );
}

export function SendMessageButton({ className = "", children }: BtnProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const visitorEmail = (
          document.getElementById("contact-email") as HTMLInputElement | null
        )?.value.trim();
        const subject = encodeURIComponent("Portfolio Contact Request");
        const body = encodeURIComponent(
          `Hi Swapnil,\n\nMy email is ${visitorEmail || "not provided"}.\nI would like to discuss a project with you.\n\nThanks!`
        );
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      }}
    >
      {children}
    </button>
  );
}

export function NewsletterButton({ className = "", children }: BtnProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const email = (
          document.querySelector('input[placeholder="Email Address"]') as HTMLInputElement | null
        )?.value.trim();
        const subject = encodeURIComponent("Newsletter Subscription Request");
        const body = encodeURIComponent(
          `Hi Swapnil,\n\nPlease subscribe my email: ${email || "not provided"} to your newsletter.\n\nThanks!`
        );
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      }}
    >
      {children}
    </button>
  );
}
