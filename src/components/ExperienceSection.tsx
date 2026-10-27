"use client";

import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  ChevronDown,
  Code,
  GraduationCap,
  Layers,
} from "lucide-react";
import { experiences } from "@/data/data";

const icons = [Briefcase, Code, GraduationCap, Layers];

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hits, setHits] = useState<boolean[]>(() =>
    Array(experiences.length + 1).fill(false),
  );

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const steps = Array.from(
      timeline.querySelectorAll<HTMLElement>(".exp-step"),
    );

    let ticking = false;

    const updateTimeline = () => {
      const rect = timeline.getBoundingClientRect();
      const marker = window.innerHeight * 0.65;
      const progress = Math.min(
        1,
        Math.max(0, (marker - rect.top) / Math.max(1, rect.height)),
      );

      timeline.style.setProperty("--p", progress.toFixed(4));

      const next = steps.map((step) => {
        const node = step.querySelector<HTMLElement>(".exp-node") ?? step;
        const box = node.getBoundingClientRect();
        return box.top + box.height / 2 < marker + 50;
      });

      setHits((prev) => {
        const updated = prev.map((val, i) => val || next[i] || false);
        const hasChanged = updated.some((val, i) => val !== prev[i]);
        return hasChanged ? updated : prev;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateTimeline();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateTimeline();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="experience" className="exp-wrap">
      <div className="exp-hero">
        <h2>
          My <em>Work Experience</em>
        </h2>
        <p>
          From machine learning internships to production backend services, here is
          how the journey unfolded. Scroll to follow the trail.
        </p>
        <div className="exp-cue" aria-hidden="true" />
      </div>

      <div className="exp-tl" ref={timelineRef}>
        <div className="exp-spine" aria-hidden="true">
          <i />
        </div>
        <div className="exp-packet" aria-hidden="true" />

        {experiences.map((exp, index) => {
          const Icon = icons[index % icons.length];
          const open = openIndex === index;
          const [summary, ...rest] = exp.highlights;

          return (
            <div
              key={`${exp.company}-${index}`}
              className={`exp-step${index % 2 === 1 ? " flip" : ""}${
                hits[index] ? " hit" : ""
              }${open ? " open" : ""}`}
            >
              <div className="exp-node" aria-hidden="true">
                <Icon />
              </div>

              <article className="exp-card">
                <h3>{exp.company}</h3>
                <div className="exp-role">{exp.role}</div>
                <p className="exp-meta">
                  <span>{exp.duration}</span>
                  <i aria-hidden="true" />
                  <span>{exp.location}</span>
                </p>
                <p className="exp-desc">{summary}</p>

                {rest.length > 0 && (
                  <>
                    <div className="exp-more" id={`exp-more-${index}`}>
                      <div>
                        <ul className="exp-list">
                          {rest.map((point, i) => (
                            <li key={i}>
                              <span className="exp-dot" aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="exp-toggle"
                      aria-expanded={open}
                      aria-controls={`exp-more-${index}`}
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      <span>{open ? "Show less" : "See more"}</span>
                      <ChevronDown />
                    </button>
                  </>
                )}
              </article>
            </div>
          );
        })}

        <div
          className={`exp-step exp-end${
            hits[experiences.length] ? " hit" : ""
          }`}
        >
          <b>Open to new opportunities</b>
        </div>
      </div>
    </section>
  );
}
