import React from 'react';
import { Phone, Facebook } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface FloatingContactButtonsProps {
  facebookUrl?: string;
  zaloPhone?: string;
  hotlinePhone?: string;
}

export const FloatingContactButtons: React.FC<FloatingContactButtonsProps> = ({
  facebookUrl = 'https://www.facebook.com/share/192hEhEYeV/?mibextid=wwXIfr',
  zaloPhone,
  hotlinePhone,
}) => {
  const { siteData } = useContent();
  const rawHotline = hotlinePhone || siteData.texts.contact.hotline || '0833-15-3388';
  const cleanPhone = (zaloPhone || rawHotline).replace(/[^0-9]/g, '');

  return (
    <div
      aria-label="Kênh liên hệ nhanh"
      className="floating-contact-buttons fixed right-3.5 sm:right-5 md:right-6 bottom-6 sm:bottom-8 z-40 flex flex-col items-center gap-3 sm:gap-3.5 select-none"
    >
      {/* 1. Facebook Messenger / Fanpage Button */}
      <div className="relative group flex items-center justify-end">
        {/* Tooltip Label */}
        <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#18261D]/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-lg border border-white/10 hidden sm:block">
          Facebook Vườn Tinh Dầu
        </span>

        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn tin qua Facebook Vườn Tinh Dầu"
          title="Nhắn tin Facebook"
          className="floating-contact-btn relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/40 border-2 border-white/80 cursor-pointer"
        >
          <Facebook className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current" />
        </a>
      </div>

      {/* 2. Zalo Chat Button */}
      <div className="relative group flex items-center justify-end">
        {/* Tooltip Label */}
        <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#18261D]/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-lg border border-white/10 hidden sm:block">
          Chat Zalo: {rawHotline}
        </span>

        <a
          href={`https://zalo.me/${cleanPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat trực tuyến qua Zalo"
          title="Chat Zalo"
          className="floating-contact-btn relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0068FF] hover:bg-[#0058dd] text-white flex items-center justify-center shadow-lg hover:shadow-blue-600/40 border-2 border-white/80 cursor-pointer p-2"
        >
          {/* Authentic Zalo Vector Icon */}
          <svg
            viewBox="0 0 48 48"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 23.95C44 12.93 35.05 4 24 4S4 12.93 4 23.95c0 6.07 2.7 11.51 6.97 15.22-.38 2.66-1.58 6.02-3.15 8.16a.8.8 0 0 0 .84 1.25c3.74-.75 8.21-2.4 10.9-4.04 1.41.34 2.89.52 4.44.52 11.05 0 20-8.93 20-19.11z"
              fill="#0068FF"
            />
            {/* White Zalo Typography */}
            <path
              d="M14.5 30V18h8.8v2.4h-5.6l5.7 7.2v2.4H14.5zm11.2 0V18h3.2v12h-3.2zm6.2 0V18h3.1v1.6c.7-1.2 2-1.8 3.5-1.8 2.8 0 4.8 2.1 4.8 5.4v6.8h-3.1v-6.3c0-1.8-1-2.9-2.5-2.9s-2.7 1.1-2.7 2.9v6.3h-3.1z"
              fill="#ffffff"
            />
          </svg>
        </a>
      </div>

      {/* 3. Phone Hotline Button with Pulsing Wave Rings (matching user reference image) */}
      <div className="relative group flex items-center justify-end">
        {/* Tooltip Label */}
        <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#18261D]/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-lg border border-white/10 hidden sm:block">
          Hotline: <strong className="text-amber-300 font-bold">{rawHotline}</strong> (Gọi ngay)
        </span>

        {/* Concentric Pulsing Wave Rings */}
        <div className="absolute inset-0 rounded-full bg-red-500/40 animate-contact-wave pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-orange-500/35 animate-contact-wave-delayed pointer-events-none" />

        <a
          href={`tel:${cleanPhone}`}
          aria-label={`Gọi điện thoại hotline: ${rawHotline}`}
          title={`Gọi ngay: ${rawHotline}`}
          className="floating-contact-btn relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#EA580C] via-[#DC2626] to-[#EF4444] hover:from-[#C2410C] hover:to-[#DC2626] text-white flex items-center justify-center shadow-xl shadow-red-500/40 border-2 border-white cursor-pointer"
        >
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white animate-phone-ring" />
        </a>
      </div>
    </div>
  );
};
