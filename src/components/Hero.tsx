import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SectionEditButton } from './SectionEditButton';
import { useParallax } from '../hooks/useParallax';

interface HeroProps {
  onExploreStory: () => void;
  onExploreProducts?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStory }) => {
  const { siteData } = useContent();
  const { hero } = siteData.texts;

  const { ref: heroBgRef, style: heroBgStyle } = useParallax<HTMLDivElement>({
    speed: 0.18,
    maxOffset: 50,
    scale: 1.15,
  });

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-stone-950"
    >
      {/* Background Image: Vietnamese Misty Mountains with Essential Oil & Botanicals */}
      <div ref={heroBgRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div style={heroBgStyle} className="w-full h-full transition-transform duration-100 ease-out">
          <img
            src={hero.bgImage && hero.bgImage !== '/images/banner/banner-hero-tinh-hoa-thien-nhien.jpg' ? hero.bgImage : '/images/banner/banner-hero-cam-rung-tay-giang.jpg'}
            alt="Tinh Dầu Cam Rừng Tây Giang - VSA LAB"
            className="w-full h-full object-cover object-center sm:object-right"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Soft directional dark gradient to preserve right side scenery while keeping text on left razor sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-stone-950/30" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:py-44 w-full">
        {/* Admin Quick Edit Button */}
        <div className="mb-4">
          <SectionEditButton sectionTab="hero" label="Chỉnh sửa Banner Hero" />
        </div>

        {/* Hero Text Content */}
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Label */}
          <p className="text-white/90 text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4 drop-shadow-sm">
            {hero.eyebrow}
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6 drop-shadow-md whitespace-pre-line">
            {hero.title}
          </h1>

          {/* Subtitle Description */}
          <p className="text-stone-100/95 text-sm sm:text-lg md:text-xl font-light leading-relaxed mb-6 sm:mb-8 max-w-xl drop-shadow-sm whitespace-pre-line">
            {hero.subtitle}
          </p>

          {/* Primary Action Button (Pill style matching screenshot) */}
          <div className="w-full sm:w-auto">
            <button
              id="hero-explore-story-btn"
              onClick={onExploreStory}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#8C521E]/95 hover:bg-[#724116] text-[#FAF5EB] font-medium text-sm sm:text-base shadow-2xl hover:shadow-black/40 transition-all duration-300 border border-[#E8DEC8]/60 backdrop-blur-md cursor-pointer drop-shadow-md active:scale-[0.98]"
            >
              <span>{hero.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#F5EDE1] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
