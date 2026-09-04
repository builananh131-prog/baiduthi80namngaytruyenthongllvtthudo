import { useState } from 'react';
import { Award, User, Calendar, GraduationCap } from 'lucide-react';
import { CONTEST_INFO } from '../data/contestData';

export default function Header() {
  const { subPeriod, contestant } = CONTEST_INFO;

  return (
    <header className="relative bg-gradient-to-br from-[#7f0000] via-[#991b1b] to-[#b71c1c] text-white border-b-4 border-amber-400 shadow-md">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center relative z-10">
        
        {/* Emblem & Top Tag */}
        <div className="inline-flex items-center gap-2 bg-amber-400 text-red-950 px-4 py-1.5 rounded-full font-heading text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs mb-3">
          <Award className="w-4 h-4 text-red-900" />
          <span>BÀI DỰ THI</span>
        </div>

        {/* Main Title - Sized precisely so both lines fit on 1 single line each */}
        <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold uppercase font-heading tracking-tight leading-snug max-w-4xl mx-auto drop-shadow-md text-amber-50">
          <span className="block whitespace-nowrap">
            {CONTEST_INFO.titleLine1}
          </span>
          <span className="block mt-1 sm:mt-1.5 whitespace-nowrap text-amber-100">
            {CONTEST_INFO.titleLine2}
          </span>
        </h1>

        {/* Subtitle / Timeline */}
        <div className="mt-2 text-base sm:text-lg font-semibold text-amber-200 font-heading tracking-wide">
          {subPeriod}
        </div>

        {/* Contestant Information Badge */}
        <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-xs sm:text-sm text-stone-100 shadow-inner">
          <div className="flex items-center gap-1.5 font-medium">
            <User className="w-4 h-4 text-amber-300 shrink-0" />
            <span><strong>Thí sinh:</strong> {contestant.name}</span>
          </div>

          <div className="h-3 w-px bg-white/30 hidden sm:block" />

          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-4 h-4 text-amber-300 shrink-0" />
            <span><strong>Năm sinh:</strong> {contestant.birthYear}</span>
          </div>

          <div className="h-3 w-px bg-white/30 hidden sm:block" />

          <div className="flex items-center gap-1.5 font-medium">
            <GraduationCap className="w-4 h-4 text-amber-300 shrink-0" />
            <span><strong>Đơn vị:</strong> {contestant.organization}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
