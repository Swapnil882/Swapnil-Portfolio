import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from './ArrowButton';
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
  caseStudy,
  priority = false,
}) => {
  const actionButtons = [
    { label: "Live Demo", url: liveDemo },
    { label: "GitHub", url: github },
    { label: "Case Study", url: caseStudy },
  ].filter((btn) => Boolean(btn.url) && btn.url.trim() !== "" && btn.url !== "#");

  const hasLink = Boolean(href && href.trim() !== "" && href !== "#");
  const primaryCategory = category && category.length > 0 ? category[0] : null;

  return (
    <div
      className="relative group 
        w-full 
        md:w-[633px] h-[280px] sm:h-[320px] md:h-[371px] 
        md:max-w-none 
        rounded-[18px] md:rounded-[22px] 
        overflow-hidden transition-all duration-300 cursor-pointer 
        shadow-lg border border-black/10 bg-[#161616]"
      style={{
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Background Image with smooth zoom on hover */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-top z-0 transition-transform duration-700 ease-out group-hover:scale-105"
        priority={priority}
      />

      {/* Multi-stop Scrim Gradient - guarantees crystal-clear text readability on white or dark backgrounds */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.15) 75%, rgba(0, 0, 0, 0.25) 100%)',
        }}
      />

      {/* Content Layer */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between">
        {/* Top Header: Category Tag & External Link */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 md:p-5 min-h-[52px] md:min-h-[64px]">
          {primaryCategory ? (
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-semibold text-[#FD853A] tracking-wider uppercase shadow-sm">
              {primaryCategory}
            </span>
          ) : (
            <div />
          )}

          {hasLink ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title}`}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 backdrop-blur-md border border-[#FD853A]/80 hover:bg-[#FD853A] hover:border-[#FD853A] flex items-center justify-center transition-all duration-300 group/btn shadow-md"
            >
              <ArrowButton className="transition-all duration-300 stroke-[#FD853A] group-hover/btn:stroke-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          ) : null}
        </div>

        {/* Unhovered Bottom Info Bar (Smoothly fades out on hover to avoid collision) */}
        <div className="p-4 sm:p-5 md:p-6 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-white tracking-tight drop-shadow-lg leading-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 line-clamp-1 mt-1 font-medium drop-shadow">
            {desc}
          </p>
        </div>

        {/* Hover Overlay with Full Details, Badges & Actions */}
        <div
          className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 md:inset-x-5 md:bottom-5
            bg-[#141414]/94 backdrop-blur-xl border border-white/15 rounded-xl sm:rounded-2xl
            p-4 sm:p-5 md:p-6
            opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
            transition-all duration-400 ease-out z-30 shadow-2xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                {title}
              </h3>
              {primaryCategory && (
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#FD853A] shrink-0">
                  {primaryCategory}
                </span>
              )}
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4 mt-1">
              {desc}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 sm:py-1 rounded-full bg-white/10 border border-white/10 text-white text-[11px] sm:text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons (Only rendered when active URLs exist) */}
          {actionButtons.length > 0 && (
            <div className="flex flex-wrap gap-2.5 mt-4 pt-3 border-t border-white/10">
              {actionButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-[#FD853A] hover:bg-[#e46e24] text-white text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-md shadow-[#FD853A]/25"
                >
                  {btn.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
