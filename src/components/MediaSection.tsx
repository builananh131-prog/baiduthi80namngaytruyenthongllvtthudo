import { useState } from 'react';
import { Music, Radio, Users, ChevronDown, ChevronUp, FileText, CheckCircle2, Film, Edit3 } from 'lucide-react';
import { CONTEST_INFO, PODCAST_GUESTS } from '../data/contestData';
import QRCodeDisplay from './QRCodeDisplay';
import AudioPlayerWidget from './AudioPlayerWidget';

export default function MediaSection() {
  const [songQrUrl, setSongQrUrl] = useState(CONTEST_INFO.song.defaultQrUrl);
  const [podcastQrUrl, setPodcastQrUrl] = useState(CONTEST_INFO.podcast.defaultQrUrl);
  const [showLyrics, setShowLyrics] = useState(false);
  const [showGuestsFull, setShowGuestsFull] = useState(false);
  const [isEditingLinks, setIsEditingLinks] = useState(false);
  const [mediaMode, setMediaMode] = useState<'video' | 'audio'>('video');

  return (
    <section id="media-section" className="mb-12 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 border border-red-200 px-3 py-1 rounded-full font-heading mb-1.5">
            <span>Phần 1 & 2</span>
            <span>•</span>
            <span>Đa Phương Tiện & Mã QR</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-stone-900">
            Sản Phẩm Đa Phương Tiện: Ca Khúc & Podcast
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setIsEditingLinks(!isEditingLinks)}
          className="no-print inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg border border-stone-300 transition-colors"
        >
          <Edit3 className="w-3.5 h-3.5 text-stone-500" />
          <span>{isEditingLinks ? 'Đóng chỉnh sửa link' : 'Tùy chỉnh link mã QR'}</span>
        </button>
      </div>

      {/* Optional Link Edit Bar */}
      {isEditingLinks && (
        <div className="no-print mb-6 p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-xs space-y-3">
          <p className="font-semibold text-amber-900">
            Cập nhật liên kết thực tế để mã QR tự động thay đổi sang đường dẫn bài dự thi của bạn:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-stone-700 mb-1">
                Link Video / Audio bài hát:
              </label>
              <input
                type="url"
                value={songQrUrl}
                onChange={(e) => setSongQrUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-1.5 border border-stone-300 rounded-md bg-white text-stone-800 text-xs focus:ring-1 focus:ring-red-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-stone-700 mb-1">
                Link Podcast phát thanh:
              </label>
              <input
                type="url"
                value={podcastQrUrl}
                onChange={(e) => setPodcastQrUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-1.5 border border-stone-300 rounded-md bg-white text-stone-800 text-xs focus:ring-1 focus:ring-red-600 focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Grid Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* CARD 1: VIDEO BÀI HÁT & QR */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-sm flex flex-col justify-between border-t-4 border-t-[#b71c1c]">
          <div>
            {/* Header of Card */}
            <div className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-[#b71c1c] flex items-center justify-center shrink-0 shadow-xs">
                <Music className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-700">
                  Mục 2 • Video Ca Khúc Truyền Thống
                </span>
                <h3 className="text-base sm:text-lg font-bold font-heading text-stone-900 leading-snug">
                  "{CONTEST_INFO.song.title}"
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Sáng tác: <strong>{CONTEST_INFO.song.composer}</strong> | Trình bày: <strong>{CONTEST_INFO.song.performer}</strong>
                </p>
              </div>
            </div>

            {/* Video / Audio Mode Switcher */}
            <div className="no-print mt-4 flex items-center justify-between bg-stone-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setMediaMode('video')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  mediaMode === 'video'
                    ? 'bg-white text-red-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Khung Video</span>
              </button>
              <button
                type="button"
                onClick={() => setMediaMode('audio')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  mediaMode === 'audio'
                    ? 'bg-white text-red-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>Trình phát Audio</span>
              </button>
            </div>

            {/* Video preview / Simulated Video Stage */}
            {mediaMode === 'video' ? (
              <div className="relative mt-4 aspect-video bg-stone-950 rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center text-center p-4 border border-stone-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer">
                    <Music className="w-6 h-6 ml-0.5" />
                  </div>
                  <h4 className="text-sm font-bold text-amber-300 font-heading">
                    {CONTEST_INFO.song.title}
                  </h4>
                  <p className="text-[11px] text-stone-300 max-w-xs mx-auto">
                    Kỷ niệm 80 năm Ngày truyền thống LLVT Thủ đô Hà Nội
                  </p>
                </div>
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-stone-400 font-mono">
                  <span>HD 1080p</span>
                  <span>Stereo High Quality</span>
                </div>
              </div>
            ) : null}

            {/* QR Code */}
            <div className="mt-4">
              <QRCodeDisplay
                data={songQrUrl}
                label="Quét mã QR để xem video ca khúc 'Tự hào người chiến sĩ Thủ đô'"
                downloadFilename="qr-video-tu-hao-nguoi-chien-si-thu-do.png"
                storageKey="song"
              />
            </div>

            {/* Lyrics Accordion */}
            <div className="no-print mt-3.5">
              <button
                type="button"
                onClick={() => setShowLyrics(!showLyrics)}
                className="w-full flex items-center justify-between py-2 px-3 text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-stone-100 rounded-lg border border-stone-200 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-stone-500" />
                  <span>Lời ca khúc "Tự hào người chiến sĩ Thủ đô"</span>
                </span>
                {showLyrics ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showLyrics && (
                <div className="mt-2 p-3.5 bg-amber-50/50 rounded-lg border border-amber-200/60 text-xs italic text-stone-800 space-y-1 leading-relaxed">
                  {CONTEST_INFO.song.lyrics.map((line, idx) => (
                    <p
                      key={idx}
                      className={line.startsWith('Đk:') ? 'font-bold not-italic text-red-900 pt-1.5' : ''}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Interactive Audio Player */}
          <div className="mt-5 pt-4 border-t border-stone-100">
            <AudioPlayerWidget
              title={CONTEST_INFO.song.title}
              subtitle="Giai điệu quân hành hào hùng"
              defaultDurationSeconds={CONTEST_INFO.song.durationSeconds || 255}
              type="song"
            />
          </div>
        </div>

        {/* CARD 2: PODCAST & QR */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-sm flex flex-col justify-between border-t-4 border-t-emerald-800">
          <div>
            {/* Header of Card */}
            <div className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 shadow-xs">
                <Radio className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Mục 1 • Podcast Phát Thanh Đặc Biệt
                </span>
                <h3 className="text-base sm:text-lg font-bold font-heading text-stone-900 leading-snug">
                  "{CONTEST_INFO.podcast.title}"
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Thực hiện: <strong>{CONTEST_INFO.contestant.name}</strong>
                </p>
              </div>
            </div>

            {/* Podcast Banner / Visual Preview */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 text-white border border-emerald-900/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-700/80 flex items-center justify-center shrink-0">
                  <Radio className="w-6 h-6 text-emerald-200 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-emerald-400">
                    Chuyên trang phát thanh số
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-heading text-white">
                    {CONTEST_INFO.podcast.title}
                  </h4>
                  <p className="text-[11px] text-emerald-200/90 font-medium">
                    Thời lượng phát thanh: {CONTEST_INFO.podcast.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="mt-4">
              <QRCodeDisplay
                data={podcastQrUrl}
                label="Quét mã QR để lắng nghe trọn vẹn tập Podcast phát thanh"
                downloadFilename="qr-podcast-llvt-thudo.png"
                storageKey="podcast"
              />
            </div>

            {/* Short summary */}
            <p className="text-xs text-stone-600 mt-3 leading-relaxed">
              {CONTEST_INFO.podcast.description}
            </p>
          </div>

          {/* Interactive Audio Player */}
          <div className="mt-5 pt-4 border-t border-stone-100">
            <AudioPlayerWidget
              title={CONTEST_INFO.podcast.title}
              subtitle="Giọng đọc truyền cảm & phỏng vấn thực địa"
              defaultDurationSeconds={677}
              type="podcast"
            />
          </div>
        </div>

      </div>

      {/* CREDITS & KHÁCH MỜI THAM GIA */}
      <div className="mt-8 bg-amber-50/70 border-l-4 border-amber-500 rounded-xl p-5 sm:p-6 border border-amber-200 shadow-xs">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-700" />
            <h3 className="text-base sm:text-lg font-bold font-heading text-red-950">
              Thông Tin Sản Phẩm & Danh Sách Khách Mời Tham Gia Podcast
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setShowGuestsFull(!showGuestsFull)}
            className="no-print text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
          >
            <span>{showGuestsFull ? 'Thu gọn' : 'Xem chi tiết'}</span>
            {showGuestsFull ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed">
          <strong>Sản phẩm đa phương tiện:</strong> Do sinh viên <strong>Bùi Thị Diễm</strong> trực tiếp xây dựng đề cương kịch bản, dẫn chuyện, thu âm, phỏng vấn thực địa, biên tập và dựng hậu kỳ.
        </p>

        {/* Guest List Grid */}
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PODCAST_GUESTS.slice(0, showGuestsFull ? PODCAST_GUESTS.length : 3).map((guest, idx) => (
            <div
              key={idx}
              className="bg-white/90 p-3 rounded-lg border border-amber-200/80 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-900 font-heading">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{guest.name}</span>
                </div>
                <div className="text-[11px] font-semibold text-stone-600 mt-0.5">
                  {guest.role}
                </div>
                <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                  {guest.bio}
                </p>
              </div>
              {guest.highlight && (
                <div className="mt-2 pt-1.5 border-t border-stone-100 text-[10px] text-amber-800 font-medium italic">
                  "{guest.highlight}"
                </div>
              )}
            </div>
          ))}
        </div>

        {!showGuestsFull && (
          <p className="text-xs text-stone-500 mt-3 italic text-right no-print">
            Cùng 2 khách mời tiêu biểu khác. Bấm "Xem chi tiết" để hiển thị đầy đủ danh sách.
          </p>
        )}
      </div>
    </section>
  );
}
