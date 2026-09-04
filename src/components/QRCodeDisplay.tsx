import { useState, useEffect, useRef, type ChangeEvent } from 'react';
import QRCode from 'qrcode';
import { Download, ExternalLink, QrCode as QrIcon, Upload, RotateCcw } from 'lucide-react';

interface QRCodeDisplayProps {
  data: string;
  label: string;
  size?: number;
  downloadFilename?: string;
  showLink?: boolean;
  onCustomImageChange?: (imgUrl: string | null) => void;
  storageKey?: string;
}

export default function QRCodeDisplay({
  data,
  label,
  size = 180,
  downloadFilename = 'qr-code.png',
  showLink = true,
  storageKey
}: QRCodeDisplayProps) {
  const [qrUrl, setQrUrl] = useState<string>('');
  const [customImage, setCustomImage] = useState<string | null>(() => {
    if (storageKey) {
      try {
        return localStorage.getItem(`qr_custom_${storageKey}`) || null;
      } catch {
        return null;
      }
    }
    return null;
  });
  const [error, setError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // If data is already an image data URL, use it directly
    if (data.startsWith('data:image/')) {
      setQrUrl(data);
      setError(false);
      return;
    }

    let isMounted = true;
    QRCode.toDataURL(data, {
      width: size * 2,
      margin: 2,
      color: {
        dark: '#1b1b1b',
        light: '#ffffff',
      },
    })
      .then((url) => {
        if (isMounted) {
          setQrUrl(url);
          setError(false);
        }
      })
      .catch((err) => {
        console.error('QR generation error:', err);
        if (isMounted) setError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [data, size]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result as string;
        if (result) {
          setCustomImage(result);
          if (storageKey) {
            try {
              localStorage.setItem(`qr_custom_${storageKey}`, result);
            } catch {
              // Ignore quota errors
            }
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetCustomImage = () => {
    setCustomImage(null);
    if (storageKey) {
      try {
        localStorage.removeItem(`qr_custom_${storageKey}`);
      } catch {
        // Ignore
      }
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const activeDisplayUrl = customImage || qrUrl;

  const handleDownload = () => {
    if (!activeDisplayUrl) return;
    const link = document.createElement('a');
    link.href = activeDisplayUrl;
    link.download = downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center bg-stone-50 border border-dashed border-stone-300 rounded-xl p-4 text-center">
      <div className="relative bg-white p-2.5 rounded-lg shadow-sm border border-stone-200">
        {activeDisplayUrl && !error ? (
          <img
            src={activeDisplayUrl}
            alt={label}
            className="w-[170px] h-[170px] object-contain rounded"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-[170px] h-[170px] flex flex-col items-center justify-center bg-stone-100 text-stone-400 text-xs">
            <QrIcon className="w-10 h-10 mb-2 text-stone-400 animate-pulse" />
            <span>Đang tạo mã QR...</span>
          </div>
        )}
      </div>

      <p className="font-heading text-xs md:text-sm font-semibold text-stone-700 mt-2.5 max-w-[220px]">
        {label}
      </p>

      {customImage && (
        <span className="mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
          Đang sử dụng ảnh QR bạn tải lên
        </span>
      )}

      <div className="no-print mt-3 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={handleDownload}
          title="Tải mã QR chất lượng cao về máy"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-700 text-xs font-medium rounded-md border border-stone-300 shadow-xs transition-colors cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-stone-500" />
          <span>Tải QR</span>
        </button>

        {showLink && !customImage && (
          <a
            href={data}
            target="_blank"
            rel="noopener noreferrer"
            title="Mở liên kết gốc"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium rounded-md border border-stone-200 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            <span>Mở link</span>
          </a>
        )}

        {/* Upload Custom QR image button */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Tải ảnh mã QR của bạn lên thay thế"
          className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium rounded-md border border-stone-300 transition-colors cursor-pointer"
        >
          <Upload className="w-3.5 h-3.5 text-stone-500" />
          <span>Đổi ảnh QR</span>
        </button>

        {customImage && (
          <button
            type="button"
            onClick={handleResetCustomImage}
            title="Khôi phục mã QR hệ thống ban đầu"
            className="inline-flex items-center gap-1 px-2 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-medium rounded-md border border-red-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-red-600" />
            <span>Đặt lại</span>
          </button>
        )}
      </div>
    </div>
  );
}
