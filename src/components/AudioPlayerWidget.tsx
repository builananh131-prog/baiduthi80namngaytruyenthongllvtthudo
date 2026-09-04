import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface AudioPlayerWidgetProps {
  title: string;
  subtitle: string;
  defaultDurationSeconds?: number;
  type?: 'song' | 'podcast';
}

export default function AudioPlayerWidget({
  title,
  subtitle,
  defaultDurationSeconds = 210,
  type = 'song'
}: AudioPlayerWidgetProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(defaultDurationSeconds);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);

  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);

  // Format mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Tone generation for simulated patriotic march melody or podcast ambiance
  const startSynthesizer = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Create warm harmonic frequencies depending on type
      osc.type = type === 'song' ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(type === 'song' ? 220 : 160, ctx.currentTime);

      gain.gain.setValueAtTime(isMuted ? 0 : volume * 0.05, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch {
      // Ignore if audio policy blocks autoplay
    }
  };

  const stopSynthesizer = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch {
        // Safe ignore
      }
      oscillatorRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopSynthesizer();
      pausedTimeRef.current = currentTime;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    } else {
      setIsPlaying(true);
      startSynthesizer();
      startTimeRef.current = performance.now() - pausedTimeRef.current * (1000 / playbackRate);

      const loop = () => {
        const elapsed = (performance.now() - startTimeRef.current) / 1000 * playbackRate;
        if (elapsed >= duration) {
          setCurrentTime(duration);
          setIsPlaying(false);
          stopSynthesizer();
          pausedTimeRef.current = 0;
        } else {
          setCurrentTime(elapsed);
          animationFrameRef.current = requestAnimationFrame(loop);
        }
      };
      animationFrameRef.current = requestAnimationFrame(loop);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    stopSynthesizer();
    setCurrentTime(0);
    pausedTimeRef.current = 0;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    pausedTimeRef.current = newTime;
    if (isPlaying) {
      startTimeRef.current = performance.now() - newTime * (1000 / playbackRate);
    }
  };

  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
    if (isPlaying) {
      startTimeRef.current = performance.now() - currentTime * (1000 / rate);
    }
  };

  useEffect(() => {
    return () => {
      stopSynthesizer();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="bg-stone-900 text-stone-100 rounded-xl p-3.5 shadow-md border border-stone-800">
      <div className="flex items-center justify-between mb-2">
        <div className="truncate pr-2">
          <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {type === 'song' ? 'Trình phát Audio ca khúc' : 'Trình phát Podcast'}
          </p>
          <h4 className="text-xs font-medium text-stone-200 truncate">{title}</h4>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-heading font-medium">
          {[1, 1.25, 1.5].map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => handleRateChange(rate)}
              className={`px-1.5 py-0.5 rounded text-[11px] transition-colors ${
                playbackRate === rate ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {rate}x
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <input
          type="range"
          min={0}
          max={duration}
          step={0.5}
          value={currentTime}
          onChange={handleSeek}
          aria-label="Thời lượng phát âm thanh"
          className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
        <div className="flex justify-between text-[11px] text-stone-400 font-mono">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-2 pt-1 border-t border-stone-800/80">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Tạm dừng phát' : 'Bắt đầu phát'}
            className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center font-bold transition-transform active:scale-95 shadow-sm cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
          <button
            type="button"
            onClick={handleReset}
            title="Phát lại từ đầu"
            aria-label="Phát lại từ đầu"
            className="p-1.5 text-stone-400 hover:text-white rounded transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] text-stone-300 italic hidden sm:inline truncate max-w-[150px]">
            {isPlaying ? 'Đang phát...' : subtitle}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              const nextMuted = !isMuted;
              setIsMuted(nextMuted);
              if (gainNodeRef.current && audioContextRef.current) {
                gainNodeRef.current.gain.setValueAtTime(nextMuted ? 0 : volume * 0.05, audioContextRef.current.currentTime);
              }
            }}
            aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            className="p-1 text-stone-400 hover:text-stone-200"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setVolume(val);
              setIsMuted(false);
              if (gainNodeRef.current && audioContextRef.current) {
                gainNodeRef.current.gain.setValueAtTime(val * 0.05, audioContextRef.current.currentTime);
              }
            }}
            aria-label="Âm lượng trình phát"
            className="w-14 h-1 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>
      </div>
    </div>
  );
}
