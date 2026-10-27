import Image from 'next/image';
import { Lock, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '@/data/data';

interface PortfolioCardProps extends PortfolioItem {
  priority?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  href,
  desc,
  tags,
  category,
  liveDemo,
  github,
  priority = false,
}) => {
  const hasLiveDemo = Boolean(liveDemo && liveDemo.trim() !== "" && liveDemo !== "#");
  const hasGithub = Boolean(github && github.trim() !== "" && github !== "#");
  const hasDirectLink = Boolean(href && href.trim() !== "" && href !== "#");
  const primaryCategory = category && category.length > 0 ? category[0] : (tags[0] || "Project");

  // Format clean address bar URL
  const getDisplayUrl = () => {
    if (hasLiveDemo && liveDemo) {
      try {
        const parsed = new URL(liveDemo);
        return parsed.hostname.replace(/^www\./, "");
      } catch {
        return liveDemo.replace(/^https?:\/\//, "").replace(/\/$/, "");
      }
    }
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
      className="group relative w-full h-full flex flex-col rounded-2xl sm:rounded-3xl 
        bg-[#141414] border border-white/10 hover:border-[#FD853A]/50 
        transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#FD853A]/10 
        overflow-hidden cursor-pointer"
      style={{
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* 1. Browser Shell Window Header */}
      <div className="bg-[#1c1c1c] border-b border-white/10 px-3.5 sm:px-4 py-2.5 flex items-center justify-between select-none">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/85 group-hover:bg-[#FF5F56] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/85 group-hover:bg-[#FFBD2E] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/85 group-hover:bg-[#27C93F] transition-colors" />
        </div>

        {/* Address Bar Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-[11px] text-zinc-400 font-mono max-w-[180px] sm:max-w-[240px] truncate">
          <Lock size={10} className="text-[#FD853A] shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        {/* Category Pill */}
        <div className="shrink-0">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FD853A] px-2 py-0.5 rounded-full bg-[#FD853A]/10 border border-[#FD853A]/20">
            {primaryCategory}
          </span>
        </div>
      </div>

      {/* 2. Browser Viewport Screen (Screenshot Mockup) */}
      <div className="relative w-full aspect-[16/10] bg-[#1a1a1a] overflow-hidden border-b border-white/10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          priority={priority}
        />
        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-10 transition-opacity" />
      </div>

      {/* 3. Below-the-fold Content Section */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4 bg-[#141414]">
        {/* Title & Description */}
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FD853A] transition-colors tracking-tight leading-tight">
              {title}
            </h3>

            {hasLiveDemo ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[10px] font-semibold tracking-wider uppercase shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10 text-[10px] font-medium tracking-wide uppercase shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD853A]" />
                Production
              </span>
            )}
          </div>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2.5 line-clamp-3">
            {desc}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-[#FD853A]/15 border border-white/10 hover:border-[#FD853A]/40 text-zinc-300 hover:text-white text-[11px] sm:text-xs font-medium transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-2">
            {hasLiveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FD853A] hover:bg-[#e46e24] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-[#FD853A]/20 hover:scale-[1.02]"
              >
                <span>Launch Demo</span>
                <ExternalLink size={13} />
              </a>
            )}

            {hasGithub && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
            )}

            {!hasLiveDemo && !hasGithub && (
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-medium py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD853A]" />
                Enterprise Platform
              </span>
            )}
          </div>

          {hasDirectLink && !hasLiveDemo && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-[#FD853A] font-medium flex items-center gap-1 transition-colors"
            >
              <span>Explore</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
