'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperClass } from 'swiper';
import CustomeText from '@/components/ui/CustomeText';
import OrangeButton from '@/components/ui/OrangeButton';
import { GenericSlider } from '@/components/ui/GenericSlider';
import { PortfolioItem, contact } from '@/data/data';

interface PortfolioSectionProps {
  buttons: string[];
  portfolioData: PortfolioItem[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  buttons,
  portfolioData,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const filteredData =
    activeFilter === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category?.includes(activeFilter));

  const handleFilterChange = (category: string) => {
    if (category === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(category);
      setIsTransitioning(false);
    }, 180);
  };

  return (
    <div id="projects" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-12">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
          <CustomeText
            title="Lets Have a look at"
            className="font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-[#344054]"
          />
          <div className="flex items-start justify-start gap-4 flex-wrap">
            <CustomeText
              title="my"
              className="font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-[#344054]"
            />
            <CustomeText
              title="Portfolio"
              className="font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-[#FD853A]"
            />
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-[#D0D5DD] bg-white hover:bg-[#FD853A] hover:border-[#FD853A] text-[#344054] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group active:scale-95"
            >
              <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-[#D0D5DD] bg-white hover:bg-[#FD853A] hover:border-[#FD853A] text-[#344054] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group active:scale-95"
            >
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          <OrangeButton
            title="See All"
            onClick={() => window.open(contact.github, '_blank', 'noopener,noreferrer')}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-10 lg:gap-12 max-w-[1290px]">
        <div
          className={`w-full transition-all duration-300 ease-out ${
            isTransitioning ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
          }`}
        >
          <GenericSlider
            key={activeFilter}
            data={filteredData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
            onSwiperInstance={setSwiperInstance}
          />
        </div>

        <div className="w-full max-w-[947px] flex flex-wrap justify-center gap-3 sm:gap-4 items-center">
          {buttons.map((text) => (
            <button
              key={text}
              onClick={() => handleFilterChange(text)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === text
                  ? 'bg-[#FD853A] text-white shadow-lg shadow-[#FD853A]/25 scale-[1.02]'
                  : 'bg-[#F2F4F7] text-[#344054] hover:bg-[#FD853A] hover:text-white'
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
