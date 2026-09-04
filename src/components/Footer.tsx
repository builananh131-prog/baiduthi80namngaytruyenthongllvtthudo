import { ArrowUp, Award, Printer } from 'lucide-react';
import { CONTEST_INFO } from '../data/contestData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c1917] text-stone-300 border-t-4 border-amber-400 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">
        
        <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider font-heading">
          <Award className="w-4 h-4" />
          <span>Kỷ Niệm 80 Năm Ngày Truyền Thống LLVT Thủ Đô (19/10/1946 – 19/10/2026)</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold uppercase font-heading text-white max-w-2xl leading-snug">
          <span>{CONTEST_INFO.titleLine1}</span>
          <br />
          <span>{CONTEST_INFO.titleLine2}</span>
        </h3>

        <div className="text-xs sm:text-sm text-stone-400 space-y-1">
          <p>
            <strong>Thực hiện:</strong> Thí sinh {CONTEST_INFO.contestant.name} – {CONTEST_INFO.contestant.role}
          </p>
          <p>
            {CONTEST_INFO.contestant.organization}
          </p>
        </div>

        <div className="no-print pt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Lên đầu trang</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>In bài dự thi</span>
          </button>
        </div>

        <div className="pt-6 border-t border-stone-800/80 text-[11px] text-stone-500 max-w-xl">
          Bài dự thi được trình bày theo định dạng số hóa đa phương tiện, tích hợp mã QR truy cập nhanh video ca khúc và tập podcast đối thoại lịch sử.
        </div>
      </div>
    </footer>
  );
}
