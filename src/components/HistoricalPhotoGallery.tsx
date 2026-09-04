import { useState, useEffect, useRef, ChangeEvent, DragEvent } from 'react';
import { 
  Images, 
  UploadCloud, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  FileText, 
  Check, 
  Info,
  Layers,
  Sparkles,
  Download,
  Copy
} from 'lucide-react';
import { HISTORICAL_PHOTOS, HistoricalPhoto } from '../data/historicalPhotos';
import { storePhoto, getAllStoredPhotoMap } from '../utils/photoStorage';

export default function HistoricalPhotoGallery() {
  const [photosMap, setPhotosMap] = useState<Record<string, string>>({});
  const [selectedPhoto, setSelectedPhoto] = useState<HistoricalPhoto | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isDragOver, setIsDragOver] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [viewLayout, setViewLayout] = useState<'grid' | 'detailed'>('grid');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const singleFileInputRef = useRef<HTMLInputElement>(null);
  const targetPhotoForSingleUpload = useRef<HistoricalPhoto | null>(null);

  // Load any previously saved photos from IndexedDB
  useEffect(() => {
    getAllStoredPhotoMap().then((map) => {
      setPhotosMap((prev) => ({ ...prev, ...map }));
    });
  }, []);

  // Handle batch file upload (multi-file or drag and drop)
  const processUploadedFiles = async (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const newMap: Record<string, string> = {};

    for (const file of fileArray) {
      const lowerName = file.name.toLowerCase();
      // Match by exact filename or match pattern like "1.jpg", "2.png"
      let matchedTarget: HistoricalPhoto | undefined = HISTORICAL_PHOTOS.find(
        (p) => p.fileName.toLowerCase() === lowerName
      );

      // If filename is something like "image-1.jpg" or "photo1.jpg" or "1 (1).jpg"
      if (!matchedTarget) {
        const numMatch = lowerName.match(/\b(\d{1,2})\b/);
        if (numMatch) {
          const num = parseInt(numMatch[1], 10);
          matchedTarget = HISTORICAL_PHOTOS.find((p) => p.id === num);
        }
      }

      if (matchedTarget) {
        await storePhoto(matchedTarget.fileName, file);
        const objUrl = URL.createObjectURL(file);
        newMap[matchedTarget.fileName] = objUrl;
      }
    }

    // If filenames didn't contain numbers and user just uploaded in order:
    if (Object.keys(newMap).length === 0 && fileArray.length > 0) {
      for (let i = 0; i < Math.min(fileArray.length, HISTORICAL_PHOTOS.length); i++) {
        const target = HISTORICAL_PHOTOS[i];
        const file = fileArray[i];
        await storePhoto(target.fileName, file);
        newMap[target.fileName] = URL.createObjectURL(file);
      }
    }

    setPhotosMap((prev) => ({ ...prev, ...newMap }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processUploadedFiles(e.target.files);
    }
  };

  const handleSingleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && targetPhotoForSingleUpload.current) {
      const file = e.target.files[0];
      const target = targetPhotoForSingleUpload.current;
      await storePhoto(target.fileName, file);
      const objUrl = URL.createObjectURL(file);
      setPhotosMap((prev) => ({ ...prev, [target.fileName]: objUrl }));
      targetPhotoForSingleUpload.current = null;
    }
  };

  const triggerSingleUpload = (photo: HistoricalPhoto) => {
    targetPhotoForSingleUpload.current = photo;
    if (singleFileInputRef.current) {
      singleFileInputRef.current.value = '';
      singleFileInputRef.current.click();
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processUploadedFiles(e.dataTransfer.files);
    }
  };

  // Filter photos
  const filteredPhotos = HISTORICAL_PHOTOS.filter((photo) => {
    if (selectedCategory === 'all') return true;
    return photo.category === selectedCategory;
  });

  const categories = [
    { id: 'all', label: 'Tất Cả 18 Ảnh Tư Liệu' },
    { id: 'Khai sinh & Kháng chiến 1946-1954', label: '1946 - 1954 (Khai sinh & K/c Pháp)' },
    { id: 'Kháng chiến chống Mỹ 1954-1975', label: '1954 - 1975 (K/c chống Mỹ & B-52)' },
    { id: 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)', label: '1975 đến nay (Xây dựng & Kỷ nguyên mới)' },
  ];

  const handleCopyCaption = (photo: HistoricalPhoto) => {
    const text = `TƯ LIỆU ẢNH ${photo.id}: ${photo.title}\nThời kỳ: ${photo.period} (${photo.dateOrYear})\nChú thích: ${photo.caption}`;
    navigator.clipboard.writeText(text);
    setCopiedId(photo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Helper to determine image source
  const getPhotoSrc = (photo: HistoricalPhoto) => {
    if (photosMap[photo.fileName]) {
      return photosMap[photo.fileName];
    }
    // Try serving from public folder
    return `/images/${photo.fileName}`;
  };

  const loadedCount = Object.keys(photosMap).length;

  return (
    <section id="historical-photos" className="mb-14 scroll-mt-24">
      {/* Hidden file inputs */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={singleFileInputRef}
        onChange={handleSingleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Section Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-stone-200 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 border border-red-200 px-3 py-1 rounded-full font-heading mb-2">
            <Images className="w-3.5 h-3.5 text-red-700" />
            <span>Tư Liệu Ảnh Lịch Sử Gốc</span>
            <span>•</span>
            <span>18 Bức Ảnh Tiêu Biểu</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-stone-900 leading-tight">
            Bộ Sưu Tập Hình Ảnh Lịch Sử 80 Năm LLVT Thủ Đô
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Tất cả 18 bức ảnh tư liệu gốc phản ánh trọn vẹn tiến trình lịch sử oanh liệt từ mùa đông 1946 đến kỷ nguyên vươn mình của Thủ đô và đất nước.
          </p>
        </div>

        {/* Action Controls */}
        <div className="no-print flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#b71c1c] hover:bg-[#9a1414] text-white shadow-sm transition-colors cursor-pointer"
            title="Tải hoặc thay thế 18 file ảnh gốc từ máy tính"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Tải 18 ảnh gốc</span>
          </button>

          <div className="flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200 text-xs">
            <button
              type="button"
              onClick={() => setViewLayout('grid')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                viewLayout === 'grid' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Lưới ảnh
            </button>
            <button
              type="button"
              onClick={() => setViewLayout('detailed')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                viewLayout === 'detailed' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>

      {/* Drag & Drop Notice Banner */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`no-print mb-6 p-4 rounded-2xl border-2 border-dashed transition-all ${
          isDragOver
            ? 'border-red-500 bg-red-50/80 scale-[1.01]'
            : 'border-stone-300 bg-stone-50/70 hover:bg-stone-50'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <UploadCloud className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-stone-900">
                Kéo & thả cả 18 file ảnh gốc (1.jpg đến 18.jpg) vào đây bất cứ lúc nào
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                Ứng dụng tự động lưu trữ nguyên bản file ảnh gốc trong trình duyệt, không dùng và không sửa đổi bằng AI.
                {loadedCount > 0 && (
                  <span className="ml-2 font-semibold text-emerald-700">
                    (Đã nhận diện: {loadedCount}/18 file ảnh)
                  </span>
                )}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-xs font-semibold text-red-700 hover:text-red-900 underline cursor-pointer"
          >
            Hoặc chọn file từ máy
          </button>
        </div>
      </div>

      {/* Period Filter Tabs */}
      <div className="no-print mb-6 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Photo Cards Grid */}
      {viewLayout === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map((photo) => (
            <article
              key={photo.id}
              className="group bg-white rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-4/3 bg-stone-100 overflow-hidden border-b border-stone-100">
                  <img
                    src={getPhotoSrc(photo)}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // If /images/1.jpg fails, try fallback to root /1.jpg
                      const target = e.currentTarget;
                      if (!target.src.includes(`/${photo.fileName}`)) {
                        target.src = `/${photo.fileName}`;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />

                  {/* Badges Overlay */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-bold font-heading px-2.5 py-0.5 rounded-md shadow-xs">
                      #{photo.id.toString().padStart(2, '0')} • {photo.fileName}
                    </span>
                  </div>

                  {/* Hover action overlay */}
                  <div className="no-print absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPhoto(photo)}
                      title="Xem phóng to chất lượng gốc"
                      className="p-2 rounded-full bg-white/90 hover:bg-white text-stone-900 shadow-md cursor-pointer hover:scale-110 transition-transform"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => triggerSingleUpload(photo)}
                      title="Thay file ảnh này từ máy tính"
                      className="p-2 rounded-full bg-white/90 hover:bg-white text-stone-900 shadow-md cursor-pointer hover:scale-110 transition-transform"
                    >
                      <UploadCloud className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-stone-500 font-medium">
                    <span className="text-red-700 font-semibold">{photo.period}</span>
                    <span>{photo.dateOrYear}</span>
                  </div>

                  <h3 className="text-sm font-bold font-heading text-stone-900 line-clamp-2 leading-snug group-hover:text-red-700 transition-colors">
                    {photo.title}
                  </h3>

                  <p className="text-xs text-stone-600 font-reading-sans line-clamp-3 leading-relaxed text-justify">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-4 py-2.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-[11px]">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  className="font-semibold text-red-800 hover:text-red-950 flex items-center gap-1 cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Xem ảnh lớn</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyCaption(photo)}
                  className="text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
                  title="Sao chép chú thích ảnh"
                >
                  {copiedId === photo.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600 font-medium">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Chép chú thích</span>
                    </>
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Detailed List View */
        <div className="space-y-4">
          {filteredPhotos.map((photo) => (
            <article
              key={photo.id}
              className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-2xs hover:shadow-sm transition-all flex flex-col sm:flex-row gap-5 items-center"
            >
              <div className="relative w-full sm:w-56 h-40 shrink-0 bg-stone-100 rounded-xl overflow-hidden border border-stone-200">
                <img
                  src={getPhotoSrc(photo)}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-stone-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  #{photo.id} • {photo.fileName}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-white/90 text-stone-800 hover:bg-white shadow-xs"
                  title="Phóng to"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-bold text-red-800 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                    {photo.period}
                  </span>
                  <span className="text-stone-500 font-medium">• {photo.dateOrYear}</span>
                </div>

                <h3 className="text-base font-bold font-heading text-stone-900 leading-snug">
                  {photo.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-700 font-reading-sans leading-relaxed text-justify">
                  {photo.caption}
                </p>

                <div className="pt-2 flex items-center gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => triggerSingleUpload(photo)}
                    className="no-print text-stone-600 hover:text-stone-900 underline font-medium cursor-pointer"
                  >
                    Thay file ảnh này
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => handleCopyCaption(photo)}
                    className="no-print text-stone-600 hover:text-stone-900 underline font-medium cursor-pointer"
                  >
                    {copiedId === photo.id ? 'Đã sao chép chú thích' : 'Sao chép chú thích'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Lightbox Modal for High Resolution Inspection */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2 min-w-0">
                <span className="bg-red-700 text-white text-xs font-bold font-heading px-2 py-0.5 rounded">
                  #{selectedPhoto.id}
                </span>
                <h3 className="text-sm sm:text-base font-bold font-heading truncate">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white cursor-pointer transition-colors"
                title="Đóng cửa sổ"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-2 min-h-[300px] overflow-hidden">
              <img
                src={getPhotoSrc(selectedPhoto)}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] max-w-full object-contain mx-auto"
              />

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={() => {
                  const idx = HISTORICAL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
                  const prevIdx = (idx - 1 + HISTORICAL_PHOTOS.length) % HISTORICAL_PHOTOS.length;
                  setSelectedPhoto(HISTORICAL_PHOTOS[prevIdx]);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white shadow-lg cursor-pointer transition-all"
                title="Ảnh trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const idx = HISTORICAL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
                  const nextIdx = (idx + 1) % HISTORICAL_PHOTOS.length;
                  setSelectedPhoto(HISTORICAL_PHOTOS[nextIdx]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white shadow-lg cursor-pointer transition-all"
                title="Ảnh tiếp theo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-5 bg-stone-950 border-t border-stone-800 text-stone-200 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span className="text-amber-400 font-semibold">{selectedPhoto.period}</span>
                <span>Mốc thời gian: {selectedPhoto.dateOrYear} • File: {selectedPhoto.fileName}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-stone-300 text-justify font-reading-sans">
                {selectedPhoto.caption}
              </p>
              <div className="pt-1 flex items-center justify-end gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => triggerSingleUpload(selectedPhoto)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 cursor-pointer"
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Thay file ảnh này</span>
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
