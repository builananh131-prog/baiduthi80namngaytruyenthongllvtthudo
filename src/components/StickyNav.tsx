import { useState, useEffect } from 'react';
import { Printer, ZoomIn, ZoomOut, Search, Volume2, Type } from 'lucide-react';

interface StickyNavProps {
  fontSize: number;
  onFontSizeChange: (delta: number) => void;
  onSearchClick: () => void;
  activeSection: string;
  fontStyle?: 'sans' | 'serif';
  onToggleFontStyle?: () => void;
}

export default function StickyNav({
  fontSize,
  onFontSizeChange,
  onSearchClick,
  activeSection,
  fontStyle = 'sans',
  onToggleFontStyle,
}: StickyNavProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'media-section', label: '🎙️ Đa phương tiện & QR' },
    { id: 'development-diagram', label: '🏛️ Sơ đồ phát triển' },
    { id: 'historical-photos', label: '📷 18 Ảnh tư liệu' },
    { id: 'martyr-search-section', label: '🕊️ Chiến dịch 500 ngày đêm' },
    { id: 'cau-1', label: 'Câu 1' },
    { id: 'cau-2', label: 'Câu 2' },
    { id: 'cau-3', label: 'Câu 3' },
    { id: 'cau-4', label: 'Câu 4' },
    { id: 'cau-5', label: 'Câu 5' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#b71c1c] shadow-sm">
      {/* Progress line */}
      <div
        className="h-1 bg-amber-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Navigation buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#b71c1c] text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={onSearchClick}
            title="Tìm kiếm nội dung bài thi"
            aria-label="Tìm kiếm nội dung bài thi"
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-stone-500" />
            <span className="hidden md:inline">Tìm</span>
          </button>

          {/* Font Family Toggle */}
          {onToggleFontStyle && (
            <button
              type="button"
              onClick={onToggleFontStyle}
              title={
                fontStyle === 'sans'
                  ? 'Đang dùng phông Be Vietnam Pro (Chuẩn hiện đại). Bấm để đổi sang Noto Serif (Chuẩn báo chí)'
                  : 'Đang dùng phông Noto Serif (Chuẩn báo chí). Bấm để đổi sang Be Vietnam Pro (Chuẩn hiện đại)'
              }
              aria-label="Đổi kiểu phông chữ"
              className="px-2 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Type className="w-3.5 h-3.5 text-stone-600" />
              <span className="hidden md:inline font-mono text-[11px]">
                {fontStyle === 'sans' ? 'Phông Sans' : 'Phông Serif'}
              </span>
            </button>
          )}

          <div className="flex items-center bg-stone-100 rounded-lg p-0.5 border border-stone-200">
            <button
              type="button"
              onClick={() => onFontSizeChange(-1)}
              disabled={fontSize <= 14}
              title="Giảm cỡ chữ"
              aria-label="Giảm cỡ chữ"
              className="px-2 py-1 text-xs font-bold text-stone-700 hover:bg-white rounded disabled:opacity-40 transition-colors cursor-pointer flex items-center gap-0.5"
            >
              <ZoomOut className="w-3 h-3" />
              <span>A-</span>
            </button>
            <span className="text-[11px] font-mono text-stone-500 px-1 select-none">
              {fontSize}px
            </span>
            <button
              type="button"
              onClick={() => onFontSizeChange(1)}
              disabled={fontSize >= 22}
              title="Tăng cỡ chữ"
              aria-label="Tăng cỡ chữ"
              className="px-2 py-1 text-xs font-bold text-stone-700 hover:bg-white rounded disabled:opacity-40 transition-colors cursor-pointer flex items-center gap-0.5"
            >
              <ZoomIn className="w-3 h-3" />
              <span>A+</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            title="In bài dự thi (hoặc lưu PDF)"
            aria-label="In bài dự thi"
            className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">In bài</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
