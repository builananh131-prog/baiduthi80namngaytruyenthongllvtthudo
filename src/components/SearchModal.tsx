import { useState, useMemo } from 'react';
import { Search, X, ChevronRight, FileText } from 'lucide-react';
import { CONTEST_QUESTIONS } from '../data/contestData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (questionId: string) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectResult }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const normalized = query.toLowerCase().trim();

    const results: {
      questionId: string;
      questionNumber: number;
      questionTitle: string;
      matchSnippet: string;
    }[] = [];

    CONTEST_QUESTIONS.forEach((q) => {
      let snippet = '';
      if (q.title.toLowerCase().includes(normalized)) {
        snippet = `Tiêu đề câu hỏi: ${q.title}`;
      } else {
        // Search in sections
        for (const sec of q.sections) {
          if (sec.heading && sec.heading.toLowerCase().includes(normalized)) {
            snippet = `Mục: ${sec.heading}`;
            break;
          }
          for (const p of sec.paragraphs) {
            const idx = p.toLowerCase().indexOf(normalized);
            if (idx !== -1) {
              const start = Math.max(0, idx - 40);
              const end = Math.min(p.length, idx + normalized.length + 60);
              snippet = `...${p.substring(start, end)}...`;
              break;
            }
          }
          if (snippet) break;
        }
      }

      if (snippet) {
        results.push({
          questionId: q.id,
          questionNumber: q.number,
          questionTitle: q.title,
          matchSnippet: snippet,
        });
      }
    });

    return results;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm mốc lịch sử, sự kiện, chiến công..."
            autoFocus
            className="flex-1 text-sm bg-transparent border-none focus:outline-none text-stone-800 placeholder-stone-400 font-medium"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 hover:bg-stone-100 rounded text-stone-400"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-md transition-colors"
          >
            Đóng
          </button>
        </div>

        {/* Suggested Quick Searches */}
        {!query && (
          <div className="p-4 bg-stone-50 text-xs border-b border-stone-100">
            <span className="font-semibold text-stone-600 mr-2">Gợi ý từ khóa:</span>
            <div className="inline-flex flex-wrap gap-1.5 mt-1 sm:mt-0">
              {['19/10/1946', 'Chiến khu XI', 'Điện Biên Phủ trên không', 'Tiểu đoàn 1 Đông Anh', 'Điểm cao 282', 'Văn hiến Văn minh'].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="px-2 py-0.5 bg-white hover:bg-stone-200 border border-stone-200 rounded text-stone-700 cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto divide-y divide-stone-100 p-2">
          {query.trim() && searchResults.length === 0 ? (
            <div className="p-8 text-center text-sm text-stone-500">
              Không tìm thấy đoạn văn bản nào khớp với từ khóa "{query}".
            </div>
          ) : (
            searchResults.map((res) => (
              <button
                key={res.questionId}
                type="button"
                onClick={() => {
                  onSelectResult(res.questionId);
                  onClose();
                }}
                className="w-full text-left p-3 hover:bg-amber-50/70 rounded-xl transition-colors group flex items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-white bg-[#b71c1c] px-2 py-0.5 rounded">
                      CÂU {res.questionNumber}
                    </span>
                    <span className="text-xs font-semibold text-stone-800 line-clamp-1">
                      {res.questionTitle}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-2 italic">
                    {res.matchSnippet}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-700 shrink-0 mt-2" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
