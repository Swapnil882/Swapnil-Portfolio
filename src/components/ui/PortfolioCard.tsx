import Image from 'next/image';
import { Lock, Github } from 'lucide-react';
import { PortfolioItem } from '@/data/data';

interface PortfolioCardProps extends PortfolioItem {
  priority?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  desc,
  tags,
  category,
  github,
  priority = false,
}) => {
  const hasGithub = Boolean(github && github.trim() !== "" && github !== "#");
  const primaryCategory = category && category.length > 0 ? category[0] : (tags[0] || "Project");

  // Format clean address bar URL
  const getDisplayUrl = () => {
    if (title.toLowerCase().includes("market")) return "admin.marketyard.in";
    if (title.toLowerCase().includes("gcn")) return "operations.gcnportal.com";
    if (title.toLowerCase().includes("bynaus")) return "app.bynaus.ai";
    if (title.toLowerCase().includes("walstar")) return "walstareducation.com";
    if (title.toLowerCase().includes("chatbot")) return "ai-assistant.local:8000";
    if (title.toLowerCase().includes("feedback")) return "feedback-system.org";
    if (title.toLowerCase().includes("movie")) return "sentiment-nlp.ai";
    return `${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.app`;
  };

  const displayUrl = getDisplayUrl();

  return (
    <div
      className="group relative w-full h-full flex flex-col rounded-xl sm:rounded-2xl 
        bg-[#141414] border border-white/10 hover:border-[#FD853A]/50 
        transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FD853A]/10 
        overflow-hidden select-none"
      style={{
        boxShadow: '0 8px 24px -8px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* 1. Compact Browser Window Header */}
      <div className="bg-[#1b1b1b] border-b border-white/10 px-3 py-1.5 sm:py-2 flex items-center justify-between select-none">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#FF5F56]/85 group-hover:bg-[#FF5F56] transition-colors" />
          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/85 group-hover:bg-[#FFBD2E] transition-colors" />
          <span className="w-2 h-2 rounded-full bg-[#27C93F]/85 group-hover:bg-[#27C93F] transition-colors" />
        </div>

        {/* Address Pill */}
        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-black/40 border border-white/10 text-[10px] text-zinc-400 font-mono max-w-[160px] sm:max-w-[220px] truncate">
          <Lock size={9} className="text-[#FD853A] shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        {/* Category Pill */}
        <div className="shrink-0">
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#FD853A] px-2 py-0.5 rounded-full bg-[#FD853A]/10 border border-[#FD853A]/20">
            {primaryCategory}
          </span>
        </div>
      </div>

      {/* 2. Compact Viewport Screen (No domain redirect on click) */}
      <div className="relative w-full h-[160px] sm:h-[185px] md:h-[200px] bg-[#181818] overflow-hidden border-b border-white/10 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-10 transition-opacity" />
      </div>

      {/* 3. Compact Content Section Below Image */}
      <div className="p-4 sm:p-4.5 md:p-5 flex flex-col flex-1 justify-between gap-3 bg-[#141414]">
        {/* Title & Description */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#FD853A] transition-colors tracking-tight line-clamp-1">
              {title}
            </h3>

            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[9px] font-semibold tracking-wider uppercase shrink-0">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              Production
            </span>
          </div>

          <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed mt-1.5 line-clamp-2 min-h-[2.4rem]">
            {desc}
          </p>
        </div>

        {/* Tech Stack Badges (Compact) */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-white/[0.05] hover:bg-[#FD853A]/15 border border-white/10 hover:border-[#FD853A]/40 text-zinc-300 hover:text-white text-[10px] sm:text-[11px] font-medium transition-colors"
            >
              {tag}
            </span>
          ))}
          {tags.length > 5 && (
            <span className="px-1.5 py-0.5 rounded-full text-zinc-500 text-[10px] font-medium">
              +{tags.length - 5}
            </span>
          )}
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-between pt-2.5 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-2">
            {hasGithub && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
              >
                <Github size={13} />
                <span>Source Code</span>
              </a>
            )}

            <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 font-medium py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD853A]" />
              Enterprise Architecture
            </span>
          </div>

          <span className="text-[11px] text-zinc-500 font-medium">
            Internal Platform
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
