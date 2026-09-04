import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { Download, ExternalLink, QrCode as QrIcon } from 'lucide-react';

interface QRCodeDisplayProps {
  data: string;
  label: string;
  size?: number;
  downloadFilename?: string;
  showLink?: boolean;
}

export default function QRCodeDisplay({
  data,
  label,
  size = 180,
  downloadFilename = 'qr-code.png',
  showLink = true
}: QRCodeDisplayProps) {
  const [qrUrl, setQrUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
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

  const handleDownload = () => {
    if (!qrUrl) return;
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center bg-stone-50 border border-dashed border-stone-300 rounded-xl p-4 text-center">
      <div className="relative bg-white p-2.5 rounded-lg shadow-sm border border-stone-200">
        {qrUrl && !error ? (
          <img
            src={qrUrl}
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

      <div className="no-print mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={handleDownload}
          title="Tải mã QR chất lượng cao về máy"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-700 text-xs font-medium rounded-md border border-stone-300 shadow-xs transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-stone-500" />
          <span>Tải mã QR</span>
        </button>

        {showLink && (
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
      </div>
    </div>
  );
}
