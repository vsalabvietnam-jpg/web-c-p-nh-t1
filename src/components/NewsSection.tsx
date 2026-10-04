import React from 'react';
import { ArrowRight, Calendar, BookOpen, Clock } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/mockData';
import { useContent } from '../context/ContentContext';
import { SectionEditButton } from './SectionEditButton';
import { ParallaxImage } from './ParallaxImage';

interface NewsSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectArticle }) => {
  const { siteData } = useContent();
  const articles = siteData.articles?.length ? siteData.articles : ARTICLES;

  return (
    <section id="news" className="py-20 lg:py-28 bg-[#F8F4EB] border-t border-[#E5DAC4] relative overflow-hidden">
      {/* Subtle Ambient Leaf Shadow & Sunbeam */}
      <div className="leaf-shadow-ambient opacity-50" />
      <div className="sunbeam-overlay opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-6">
          <SectionEditButton sectionTab="news" label="Chỉnh sửa Tin tức & Bài viết" />
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBDDC8] border border-[#D9C8AC] text-[#8C521E] text-xs font-semibold tracking-wider uppercase mb-3 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-[#B2641E]" />
              <span>Góc chia sẻ & Trải nghiệm</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] tracking-tight">
              Tin tức & <span className="text-[#8C521E] italic">Kiến thức</span>
            </h2>
            <p className="mt-4 text-[#55493D] text-base sm:text-lg leading-relaxed">
              Cập nhật những chia sẻ chuyên sâu về tinh dầu nguyên chất, lối sống xanh và những câu chuyện mộc mạc từ đại ngàn.
            </p>
          </div>

          <div className="hidden md:block">
            <span className="text-xs text-[#7A6B5A] uppercase tracking-wider font-semibold">
              Bài viết mới cập nhật tuần này
            </span>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              id={`article-card-${article.id}`}
              onClick={() => onSelectArticle(article)}
              className="group bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#DDD0BC] hover:border-[#8C521E] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image with Gentle Parallax */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE7D8]">
                <ParallaxImage
                  src={article.image}
                  alt={article.title}
                  speed={0.12}
                  maxOffset={20}
                  scale={1.08}
                  containerClassName="w-full h-full"
                  className="group-hover:scale-106 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#241D17]/85 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-semibold z-10">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#7A6B5A] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#8C521E]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#7A6B5A]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241D17] group-hover:text-[#8C521E] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-[#55493D] text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer read more */}
                <div className="pt-6 mt-6 border-t border-[#E5DAC4] flex items-center justify-between text-xs sm:text-sm font-semibold text-[#8C521E] group-hover:text-[#5E340E]">
                  <span>Đọc bài viết đầy đủ</span>
                  <div className="w-7 h-7 rounded-full bg-[#EBDDC8] group-hover:bg-[#8C521E] text-[#8C521E] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
