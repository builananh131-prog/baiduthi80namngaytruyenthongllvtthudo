import { useState, useRef, ChangeEvent } from 'react';
import { 
  HeartHandshake, 
  UploadCloud, 
  Maximize2, 
  Copy, 
  Check, 
  X, 
  ShieldCheck, 
  SearchCheck, 
  FileCheck2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { MARTYR_SEARCH_PHOTOS, MartyrSearchPhoto } from '../data/martyrSearchPhotos';
import { storePhoto } from '../utils/photoStorage';

export default function MartyrSearchSection() {
  const [photosMap, setPhotosMap] = useState<Record<string, string>>({});
  const [selectedPhoto, setSelectedPhoto] = useState<MartyrSearchPhoto | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const singleFileInputRef = useRef<HTMLInputElement>(null);
  const targetPhotoRef = useRef<MartyrSearchPhoto | null>(null);

  const handleSingleUpload = (photo: MartyrSearchPhoto) => {
    targetPhotoRef.current = photo;
    if (singleFileInputRef.current) {
      singleFileInputRef.current.value = '';
      singleFileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && targetPhotoRef.current) {
      const file = e.target.files[0];
      const target = targetPhotoRef.current;
      await storePhoto(`martyr_${target.fileName}`, file);
      const url = URL.createObjectURL(file);
      setPhotosMap((prev) => ({ ...prev, [target.id]: url }));
      targetPhotoRef.current = null;
    }
  };

  const handleCopyCaption = (photo: MartyrSearchPhoto) => {
    const text = `HÌNH ẢNH: ${photo.title}\nNhiệm vụ: ${photo.keyMission}\nChú thích: ${photo.caption}`;
    navigator.clipboard.writeText(text);
    setCopiedId(photo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getImageSrc = (photo: MartyrSearchPhoto) => {
    if (photosMap[photo.id]) {
      return photosMap[photo.id];
    }
    return photo.defaultSrc;
  };

  return (
    <section id="martyr-search-section" className="mb-14 scroll-mt-24">
      {/* Hidden file input for custom replacement */}
      <input
        type="file"
        ref={singleFileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Section Header */}
      <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 text-white border-l-4 border-amber-400 shadow-md">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 border border-amber-400/40 px-3 py-1 rounded-full font-heading mb-2.5">
          <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
          <span>Đạo Lý Uống Nước Nhớ Nguồn • Đền Ơn Đáp Nghĩa</span>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-amber-100 leading-snug">
          Chiến dịch 500 ngày đêm: Cuộc hành quân trong thời bình tìm kiếm, xác định danh tính liệt sĩ
        </h2>
        
        <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-3xl leading-relaxed">
          Các cán bộ, chiến sĩ cùng toàn thể người dân tham gia chiến dịch tìm kiếm, quy tập hài cốt liệt sĩ để bày tỏ sự tôn kính, tri ân và lòng biết ơn sâu sắc công lao to lớn của các anh hùng liệt sĩ đã hy sinh vì Tổ quốc.
        </p>
      </div>

      {/* Photo Frames Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MARTYR_SEARCH_PHOTOS.map((photo) => (
          <article
            key={photo.id}
            className="group bg-white rounded-2xl border-2 border-stone-200 hover:border-red-300 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Photo Frame Container */}
              <div className="relative aspect-16/10 bg-stone-900 overflow-hidden border-b border-stone-100">
                <img
                  src={getImageSrc(photo)}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src !== photo.fallbackSrc) {
                      img.src = photo.fallbackSrc;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />

                {/* Mission Tag Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-[#b71c1c]/90 backdrop-blur-md text-white text-xs font-bold font-heading px-3 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                    <span>Khung {photo.orderNumber}: {photo.highlightTag}</span>
                  </span>
                </div>

                {/* Hover Quick Actions */}
                <div className="no-print absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(photo)}
                    title="Xem phóng to ảnh"
                    className="p-2.5 rounded-full bg-white/95 text-stone-900 hover:bg-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSingleUpload(photo)}
                    title="Tải ảnh thay thế từ máy tính"
                    className="p-2.5 rounded-full bg-white/95 text-stone-900 hover:bg-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                  >
                    <UploadCloud className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-800">
                  <SearchCheck className="w-3.5 h-3.5 text-red-700" />
                  <span>{photo.keyMission}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-heading text-stone-900 leading-snug group-hover:text-[#b71c1c] transition-colors">
                  {photo.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-700 font-reading-sans leading-relaxed text-justify">
                  {photo.caption}
                </p>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="px-5 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="font-semibold text-red-800 hover:text-red-950 flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Xem toàn màn hình</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSingleUpload(photo)}
                  className="no-print text-stone-500 hover:text-stone-800 underline cursor-pointer"
                  title="Tải ảnh khác từ máy tính"
                >
                  Đổi ảnh
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => handleCopyCaption(photo)}
                  className="text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer font-medium"
                >
                  {copiedId === photo.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Chép chú thích</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal for Martyr Search Photos */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="bg-red-700 text-white text-xs font-bold font-heading px-2.5 py-0.5 rounded">
                  Khung #{selectedPhoto.orderNumber}
                </span>
                <h3 className="text-sm sm:text-base font-bold font-heading truncate">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white cursor-pointer transition-colors"
                title="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-2 min-h-[320px] overflow-hidden">
              <img
                src={getImageSrc(selectedPhoto)}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[62vh] max-w-full object-contain mx-auto"
              />

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={() => {
                  const idx = MARTYR_SEARCH_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
                  const prevIdx = (idx - 1 + MARTYR_SEARCH_PHOTOS.length) % MARTYR_SEARCH_PHOTOS.length;
                  setSelectedPhoto(MARTYR_SEARCH_PHOTOS[prevIdx]);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white shadow-lg cursor-pointer transition-all"
                title="Khung trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const idx = MARTYR_SEARCH_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
                  const nextIdx = (idx + 1) % MARTYR_SEARCH_PHOTOS.length;
                  setSelectedPhoto(MARTYR_SEARCH_PHOTOS[nextIdx]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white shadow-lg cursor-pointer transition-all"
                title="Khung tiếp theo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-5 bg-stone-950 border-t border-stone-800 text-stone-200 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span className="text-amber-400 font-semibold">{selectedPhoto.highlightTag}</span>
                <span>{selectedPhoto.keyMission}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-stone-300 text-justify font-reading-sans">
                {selectedPhoto.caption}
              </p>
              <div className="pt-2 flex items-center justify-end gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => handleSingleUpload(selectedPhoto)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 cursor-pointer"
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Thay ảnh khung này</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleCopyCaption(selectedPhoto)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 cursor-pointer"
                >
                  {copiedId === selectedPhoto.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Đã chép chú thích</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép chú thích</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
