import { useState } from 'react';
import { Bookmark, Check, Copy } from 'lucide-react';
import { QuestionItem } from '../types';

interface QuestionCardProps {
  key?: string;
  question: QuestionItem;
  fontSize: number;
}

export default function QuestionCard({ question, fontSize }: QuestionCardProps) {
  const [copied, setCopied] = useState(false);
  const [isRead, setIsRead] = useState(false);

  const handleCopy = () => {
    // Collect full text of question and answers
    const textPieces: string[] = [];
    textPieces.push(`CÂU HỎI ${question.number}: ${question.title}\n`);
    question.sections.forEach((sec) => {
      if (sec.heading) textPieces.push(`\n${sec.heading}\n`);
      if (sec.subheading) textPieces.push(`${sec.subheading}\n`);
      sec.paragraphs.forEach((p) => textPieces.push(`${p}\n`));
      if (sec.bullets) {
        sec.bullets.forEach((b) => textPieces.push(`- ${b}\n`));
      }
      if (sec.highlight) {
        textPieces.push(`\n[GHI CHÚ]: ${sec.highlight.content}\n`);
      }
    });

    navigator.clipboard.writeText(textPieces.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      id={question.id}
      className="print-card scroll-mt-24 mb-10 bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Header of Question */}
      <div className="pb-5 mb-6 border-b-2 border-stone-100 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-[#b71c1c] text-white px-3 py-1 rounded-md text-xs sm:text-sm font-bold font-heading tracking-wide uppercase shadow-2xs">
              CÂU HỎI {question.number}
            </span>
            {isRead && (
              <span className="no-print inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">
                <Check className="w-3.5 h-3.5" />
                <span>Đã đọc</span>
              </span>
            )}
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-[#1a237e] leading-snug">
            {question.title}
          </h2>

          <p className="text-xs text-stone-500 font-medium italic">
            Tóm lược trọng tâm: {question.summary}
          </p>
        </div>

        {/* Action Controls for Question */}
        <div className="no-print flex items-center gap-1.5 shrink-0 self-start">
          <button
            type="button"
            onClick={() => setIsRead(!isRead)}
            title={isRead ? 'Đánh dấu chưa đọc' : 'Đánh dấu đã đọc'}
            className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
              isRead
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isRead ? 'fill-emerald-600' : ''}`} />
          </button>

          <button
            type="button"
            onClick={handleCopy}
            title="Sao chép nội dung câu hỏi và câu trả lời"
            className="p-2 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-600 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] text-emerald-700">Đã chép</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden sm:inline">Sao chép</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Answer Body with customizable font size */}
      <div
        className="text-stone-800 space-y-6 leading-relaxed"
        style={{ fontSize: `${fontSize}px` }}
      >
        {question.sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            {section.heading && (
              <h3 className="text-base sm:text-lg font-bold font-heading text-[#7f0000] border-l-4 border-amber-400 pl-3 pt-0.5 mt-6 mb-2">
                {section.heading}
              </h3>
            )}

            {section.subheading && (
              <h4 className="text-sm sm:text-base font-semibold font-heading text-stone-900 italic mt-3 mb-1">
                {section.subheading}
              </h4>
            )}

            {section.quote && (
              <blockquote className="my-4 p-4 sm:p-5 rounded-r-xl bg-emerald-50/70 border-l-4 border-emerald-700 text-stone-800 italic shadow-2xs">
                <p className="font-serif text-emerald-950 font-medium leading-relaxed">
                  "{section.quote.text}"
                </p>
                {section.quote.author && (
                  <footer className="mt-2 text-right text-xs sm:text-sm font-sans font-semibold text-emerald-800 not-italic">
                    — {section.quote.author}
                  </footer>
                )}
              </blockquote>
            )}

            {section.paragraphs && section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-justify leading-relaxed">
                {p}
              </p>
            ))}

            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc list-outside pl-6 space-y-2 text-justify">
                {section.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {section.highlight && (
              <div className="my-4 p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-300 shadow-2xs">
                {section.highlight.title && (
                  <div className="font-heading font-bold text-amber-950 text-sm sm:text-base mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    <span>{section.highlight.title}</span>
                  </div>
                )}
                <p className="text-stone-800 leading-relaxed text-justify">
                  {section.highlight.content}
                </p>
                {section.highlight.bullets && (
                  <ul className="list-disc list-outside pl-5 mt-2 space-y-1.5 text-stone-800">
                    {section.highlight.bullets.map((hb, hbIdx) => (
                      <li key={hbIdx} className="text-justify">{hb}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
