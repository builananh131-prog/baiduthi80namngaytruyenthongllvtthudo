import { useState, useEffect } from 'react';
import Header from './components/Header';
import StickyNav from './components/StickyNav';
import MediaSection from './components/MediaSection';
import DevelopmentDiagram from './components/DevelopmentDiagram';
import HistoricalPhotoGallery from './components/HistoricalPhotoGallery';
import MartyrSearchSection from './components/MartyrSearchSection';
import QuestionCard from './components/QuestionCard';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';
import { CONTEST_QUESTIONS } from './data/contestData';

export default function App() {
  const [fontSize, setFontSize] = useState<number>(16.5);
  const [fontStyle, setFontStyle] = useState<'sans' | 'serif'>('sans');
  const [activeSection, setActiveSection] = useState<string>('media-section');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleFontSizeChange = (delta: number) => {
    setFontSize((prev) => {
      const next = prev + delta * 1.5;
      return Math.min(22, Math.max(14, next));
    });
  };

  const handleToggleFontStyle = () => {
    setFontStyle((prev) => (prev === 'sans' ? 'serif' : 'sans'));
  };

  const handleSelectSearchResult = (questionId: string) => {
    const el = document.getElementById(questionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll spy to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['media-section', 'development-diagram', 'historical-photos', 'martyr-search-section', 'cau-1', 'cau-2', 'cau-3', 'cau-4', 'cau-5'];
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('media-section');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#263238] flex flex-col selection:bg-amber-200 selection:text-red-950">
      {/* Header */}
      <Header />

      {/* Sticky Navigation */}
      <StickyNav
        fontSize={fontSize}
        onFontSizeChange={handleFontSizeChange}
        onSearchClick={() => setIsSearchOpen(true)}
        activeSection={activeSection}
        fontStyle={fontStyle}
        onToggleFontStyle={handleToggleFontStyle}
      />

      {/* Main Container */}
      <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 flex-1">
        
        {/* Phần 1: Mã QR của Podcast & Phần 2: Video bài hát */}
        <MediaSection />

        {/* Sơ đồ tiến trình phát triển của LLVT Thủ đô từ 1946 đến nay */}
        <DevelopmentDiagram />

        {/* 18 Bức ảnh tư liệu gốc trước các câu hỏi */}
        <HistoricalPhotoGallery />

        {/* Chiến dịch 500 ngày đêm: Cuộc hành quân trong thời bình tìm kiếm, xác định danh tính liệt sĩ */}
        <MartyrSearchSection />

        {/* Phần 3: Toàn văn 5 câu hỏi bài dự thi */}
        <div className="mt-12">
          <div className="mb-6 pb-2 border-b-2 border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#b71c1c] rounded-full" />
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-stone-900 uppercase">
                Phần 3: Toàn Văn Nội Dung Bài Thi (5 Câu Hỏi)
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-medium hidden sm:inline">
              Định dạng bài đọc chuẩn chấm thi A4
            </span>
          </div>

          <div className="space-y-8">
            {CONTEST_QUESTIONS.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                fontSize={fontSize}
                fontStyle={fontStyle}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
