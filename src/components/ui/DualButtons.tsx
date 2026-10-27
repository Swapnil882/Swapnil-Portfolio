'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function DualToggleButtons() {
  const [active, setActive] = useState<"portfolio" | "hire">("portfolio");

  const goTo = (target: string) => {
    const section = document.getElementById(target.replace("#", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const options = [
    { key: "portfolio", label: "Portfolio", target: "#projects" },
    { key: "hire", label: "Hire Me", target: "#contact" },
  ];

  return (
    <div className="flex border border-white/60 bg-black/25 backdrop-blur-md rounded-full gap-1.5 sm:gap-2 p-1 sm:p-[6px] w-fit h-[46px] sm:h-[52px] items-center justify-center shadow-lg">
      {options.map((option) => (
        <button
          key={option.key}
          onMouseEnter={() => setActive(option.key as typeof active)}
          onClick={() => goTo(option.target)}
          className={`group flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer select-none
            ${
              active === option.key
                ? "bg-[#FD853A] text-white font-semibold text-xs sm:text-base w-[130px] sm:w-[155px] md:w-[180px] h-[38px] sm:h-[44px] border border-white/20 shadow-md"
                : "bg-transparent text-white/90 font-medium text-xs sm:text-sm w-[90px] sm:w-[105px] md:w-[120px] h-[36px] sm:h-[40px] hover:text-white"
            }`}
        >
          {option.label}
          <ArrowUpRight
            size={14}
            className={`transition-all duration-300 ${
              active === option.key
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-1 group-hover:opacity-100"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
