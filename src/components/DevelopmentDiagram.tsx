import { useState } from 'react';
import { 
  Milestone, 
  Shield, 
  Award, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Layers, 
  Compass, 
  Building2,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface StageInfo {
  id: string;
  year: string;
  period: string;
  badge: string;
  orgName: string;
  role: string;
  highlights: string[];
  commanderOrRemark: string;
  color: {
    badgeBg: string;
    badgeText: string;
    border: string;
    nodeBg: string;
  };
}

const STAGES: StageInfo[] = [
  {
    id: 'stage-1946',
    year: '1946',
    period: 'Khai sinh & Lời thề Quyết tử',
    badge: 'Mốc khởi nguồn',
    orgName: 'Chiến khu 11 (Mặt trận Hà Nội)',
    role: 'Lực lượng vũ trang non trẻ ra đời bảo vệ Trung ương Đảng và Bác Hồ',
    highlights: [
      '19/10/1946: Thành lập Chiến khu 11 (Khu 11) - Ngày truyền thống vẻ vang',
      '19/12/1946: Nổ súng mở đầu Toàn quốc kháng chiến',
      '60 ngày đêm giam chân địch trong lòng Hà Nội, Trung đoàn Thủ đô ra đời với lời thề: "Quyết tử để Tổ quốc quyết sinh"'
    ],
    commanderOrRemark: 'Chủ tịch Hồ Chí Minh gửi thư khen: "Các em là đội cảm tử. Các em cảm tử để cho Tổ quốc quyết sinh."',
    color: {
      badgeBg: 'bg-red-100',
      badgeText: 'text-red-800',
      border: 'border-red-500',
      nodeBg: 'bg-red-600',
    }
  },
  {
    id: 'stage-1954',
    year: '1947 - 1954',
    period: 'Kháng chiến trường kỳ & Tiếp quản',
    badge: 'Chiến tranh nhân dân',
    orgName: 'Mặt trận Hà Nội - Tỉnh đội Hà Nội',
    role: 'Xây dựng cơ sở kháng chiến, phát triển chiến tranh du kích trong lòng địch',
    highlights: [
      'Tổ chức hàng trăm trận đánh táo bạo tập kích sân bay Gia Lâm, sân bay Bạch Mai',
      'Xây dựng các đội tự vệ bí mật, công an xung phong kiên cường bám dân, bám phố',
      '10/10/1954: Đại quân tiến về tiếp quản Thủ đô trong rợp bóng cờ hoa hân hoan'
    ],
    commanderOrRemark: 'Tiếp quản nguyên vẹn 100% công sở, nhà máy, xí nghiệp, bảo đảm tuyệt đối an toàn cho nhân dân Thủ đô.',
    color: {
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-800',
      border: 'border-amber-500',
      nodeBg: 'bg-amber-600',
    }
  },
  {
    id: 'stage-1957',
    year: '1957 - 1975',
    period: 'Quân khu Thủ đô & Đánh thắng B-52',
    badge: 'Kỳ tích lịch sử',
    orgName: 'Bộ Tư lệnh Quân khu Thủ đô',
    role: 'Xây dựng LLVT chính quy, đánh trả chiến tranh phá hoại, chi viện miền Nam',
    highlights: [
      'Năm 1957: Thành lập Bộ Tư lệnh Quân khu Thủ đô',
      '12 ngày đêm tháng 12/1972: Lập nên kỳ tích "Hà Nội - Điện Biên Phủ trên không", bắn rơi 32 máy bay Mỹ (trong đó có 23 chiếc B-52)',
      'Hàng chục vạn thanh niên Thủ đô "xẻ dọc Trường Sơn đi cứu nước", góp phần giải phóng miền Nam thống nhất đất nước'
    ],
    commanderOrRemark: 'Được Đảng, Nhà nước phong tặng danh hiệu Anh hùng Lực lượng vũ trang nhân dân cho quân và dân Thủ đô.',
    color: {
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      border: 'border-emerald-600',
      nodeBg: 'bg-emerald-700',
    }
  },
  {
    id: 'stage-1979',
    year: '1979 - 1989',
    period: 'Bảo vệ biên cương & Củng cố quốc phòng',
    badge: 'Chi viện biên cương',
    orgName: 'Quân khu Thủ đô Hà Nội',
    role: 'Tái lập theo Sắc lệnh 28-LCT, trực tiếp bảo vệ Thủ đô và chi viện tuyến đầu',
    highlights: [
      'Năm 1979: Tái lập Quân khu Thủ đô Hà Nội',
      'Thần tốc điều động hàng vạn cán bộ, chiến sĩ chi viện biên giới phía Bắc',
      'Tiêu biểu: Khúc tráng ca của Tiểu đoàn 1 Đông Anh chiến đấu quả cảm, bẻ gãy các đợt tấn công của địch tại Điểm cao 282 Văn Lãng – Lạng Sơn (4/3/1979)'
    ],
    commanderOrRemark: 'Lời Tư lệnh Đàm Quang Trung: "Chiến đấu bảo vệ biên giới cũng chính là chiến đấu bảo vệ Thủ đô từ xa."',
    color: {
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-800',
      border: 'border-blue-600',
      nodeBg: 'bg-blue-700',
    }
  },
  {
    id: 'stage-1999',
    year: '1999 - 2008',
    period: 'Thời kỳ Đổi mới & Hội nhập',
    badge: 'Khu vực phòng thủ',
    orgName: 'Bộ Chỉ huy Quân sự TP Hà Nội (Quân khu 1)',
    role: 'Xây dựng nền quốc phòng toàn dân gắn với thế trận an ninh nhân dân vững chắc',
    highlights: [
      'Năm 1999: Chuyển giao tổ chức thành Bộ CHQS thành phố Hà Nội',
      'Quy hoạch và xây dựng các thế trận phòng thủ liên hoàn, vững chắc tại 14 quận/huyện',
      'Bảo vệ an toàn tuyệt đối các sự kiện quốc tế lớn: Hội nghị APEC, SEA Games 22...'
    ],
    commanderOrRemark: 'Tạo môi trường hòa bình, ổn định tuyệt đối cho Thủ đô phát triển kinh tế, văn hóa và đối ngoại.',
    color: {
      badgeBg: 'bg-indigo-100',
      badgeText: 'text-indigo-800',
      border: 'border-indigo-600',
      nodeBg: 'bg-indigo-700',
    }
  },
  {
    id: 'stage-2008',
    year: '16/7/2008',
    period: 'Mốc son tái lập Bộ Tư lệnh Thủ đô Hà Nội',
    badge: 'Hợp nhất lịch sử',
    orgName: 'Bộ Tư lệnh Thủ đô Hà Nội (Trực thuộc Bộ Quốc phòng)',
    role: 'Sáp nhập Bộ CHQS TP Hà Nội và Bộ CHQS tỉnh Hà Tây, mở rộng địa giới hành chính',
    highlights: [
      '16/7/2008: Chủ tịch nước ký Sắc lệnh số 101/2008/SL-CTN tái lập Bộ Tư lệnh Thủ đô Hà Nội',
      'Hợp nhất 2 đơn vị giàu truyền thống, tổ chức lại cơ quan quân sự 30 quận, huyện, thị xã',
      'Là cơ quan quân sự cấp chiến dịch đặc biệt, trực thuộc Bộ Quốc phòng, đặt dưới sự lãnh đạo trực tiếp của Quân ủy Trung ương và Thành ủy Hà Nội'
    ],
    commanderOrRemark: 'Đánh dấu bước phát triển vượt bậc về quy mô lực lượng, trang bị và phạm vi phòng thủ bảo vệ trái tim của Tổ quốc.',
    color: {
      badgeBg: 'bg-red-100',
      badgeText: 'text-[#990000]',
      border: 'border-[#990000]',
      nodeBg: 'bg-[#990000]',
    }
  },
  {
    id: 'stage-now',
    year: '2008 - Nay',
    period: 'Kỷ nguyên Tinh - Gọn - Mạnh - Hiện đại (Hướng tới 80 năm)',
    badge: 'Hiện đại hóa',
    orgName: 'Bộ Tư lệnh Thủ đô Hà Nội',
    role: 'Xây dựng LLVT Thủ đô cách mạng, chính quy, tinh nhuệ, từng bước hiện đại',
    highlights: [
      'Xây dựng 3 thứ quân vững mạnh: Bộ đội thường trực tinh nhuệ, Lực lượng dự bị động viên hùng hậu, Dân quân tự vệ vững chắc, rộng khắp',
      'Hoàn thành xuất sắc nhiệm vụ phòng thủ khu vực, bảo vệ tuyệt đối an ninh trung tâm đầu não của Đảng, Nhà nước',
      'Tiên phong trên tuyến đầu phòng chống thiên tai, cứu hộ cứu nạn, dịch bệnh; đẩy mạnh chuyển đổi số và phong trào Tuổi trẻ sáng tạo trong Quân đội',
      'Tích cực thi đua lập thành tích xuất sắc chào mừng 80 năm Ngày truyền thống LLVT Thủ đô (19/10/1946 – 19/10/2026)'
    ],
    commanderOrRemark: 'Kế thừa xứng đáng 16 chữ vàng truyền thống: "Quyết tử để Tổ quốc quyết sinh - Đoàn kết, sáng tạo - Kiên cường, chiến thắng".',
    color: {
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      border: 'border-emerald-700',
      nodeBg: 'bg-emerald-800',
    }
  }
];

export default function DevelopmentDiagram() {
  const [activeStage, setActiveStage] = useState<string>('stage-now');
  const [viewMode, setViewMode] = useState<'timeline' | 'flowchart'>('timeline');

  const currentStage = STAGES.find((s) => s.id === activeStage) || STAGES[STAGES.length - 1];

  return (
    <section id="development-diagram" className="mb-14 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 border border-red-200 px-3 py-1 rounded-full font-heading mb-1.5">
            <Milestone className="w-3.5 h-3.5 text-red-700" />
            <span>Tư Liệu Lịch Sử Đặc Biệt</span>
            <span>•</span>
            <span>1946 - Nay</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-stone-900">
            Sơ Đồ Phát Triển Lực Lượng Vũ Trang Thủ Đô Hà Nội (1946 – Nay)
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
            Sơ đồ trực quan hệ thống hóa 80 năm lịch sử hình thành, kiện toàn tổ chức và những mốc son vẻ vang của Lực lượng vũ trang Thủ đô từ ngày đầu thành lập Chiến khu 11 đến Bộ Tư lệnh Thủ đô Hà Nội ngày nay.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="no-print inline-flex p-1 bg-stone-100 border border-stone-200 rounded-xl text-xs font-medium">
          <button
            type="button"
            onClick={() => setViewMode('timeline')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              viewMode === 'timeline'
                ? 'bg-white text-red-900 font-bold shadow-xs border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Tiến trình chi tiết</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('flowchart')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              viewMode === 'flowchart'
                ? 'bg-white text-red-900 font-bold shadow-xs border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Sơ đồ khối luồng (Flowchart)</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-7 shadow-sm">
        
        {/* SUMMARY BADGES */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 p-4 bg-stone-50 rounded-xl border border-stone-200 text-center">
          <div className="p-2 border-r last:border-r-0 border-stone-200">
            <div className="text-xl sm:text-2xl font-black font-heading text-red-800">80 Năm</div>
            <div className="text-[11px] font-medium text-stone-600">Ngày Truyền Thống (1946 - 2026)</div>
          </div>
          <div className="p-2 border-r last:border-r-0 border-stone-200">
            <div className="text-xl sm:text-2xl font-black font-heading text-amber-700">03 Lần</div>
            <div className="text-[11px] font-medium text-stone-600">Huân Chương Sao Vàng</div>
          </div>
          <div className="p-2 border-r last:border-r-0 border-stone-200">
            <div className="text-xl sm:text-2xl font-black font-heading text-emerald-800">Anh Hùng</div>
            <div className="text-[11px] font-medium text-stone-600">LLVT Nhân Dân vẻ vang</div>
          </div>
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-black font-heading text-blue-800">16 Chữ</div>
            <div className="text-[11px] font-medium text-stone-600">Truyền Thống Vàng son</div>
          </div>
        </div>

        {/* FLOWCHART VIEW */}
        {viewMode === 'flowchart' && (
          <div className="space-y-6">
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider text-center">
              Mô hình chuyển tiếp tổ chức qua các thời kỳ lịch sử
            </div>

            {/* Visual Roadmap Sequence */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {STAGES.slice(0, 4).map((s, idx) => (
                  <div
                    key={s.id}
                    onClick={() => setActiveStage(s.id)}
                    className={`cursor-pointer rounded-xl p-4 border transition-all relative ${
                      activeStage === s.id
                        ? 'border-red-600 bg-red-50/50 shadow-md ring-2 ring-red-500/20'
                        : 'border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${s.color.badgeBg} ${s.color.badgeText}`}>
                        {s.year}
                      </span>
                      <span className="text-[10px] font-semibold text-stone-400">Giai đoạn {idx + 1}</span>
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900 font-heading leading-snug">
                      {s.orgName}
                    </h4>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      {s.role}
                    </p>
                  </div>
                ))}
              </div>

              {/* Connector Arrow on Desktop */}
              <div className="my-4 flex items-center justify-center text-stone-300">
                <div className="h-0.5 flex-1 bg-stone-200"></div>
                <div className="px-3 text-xs font-bold text-red-800 flex items-center gap-1">
                  <span>Tiếp tục kiện toàn và nâng cấp cấp bậc chiến dịch</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div className="h-0.5 flex-1 bg-stone-200"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {STAGES.slice(4).map((s, idx) => (
                  <div
                    key={s.id}
                    onClick={() => setActiveStage(s.id)}
                    className={`cursor-pointer rounded-xl p-4 border transition-all relative ${
                      activeStage === s.id
                        ? 'border-red-600 bg-red-50/50 shadow-md ring-2 ring-red-500/20'
                        : 'border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${s.color.badgeBg} ${s.color.badgeText}`}>
                        {s.year}
                      </span>
                      <span className="text-[10px] font-semibold text-stone-400">Giai đoạn {idx + 5}</span>
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900 font-heading leading-snug">
                      {s.orgName}
                    </h4>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      {s.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Stage Detail Card */}
            <div className="mt-6 p-5 sm:p-6 bg-gradient-to-br from-stone-50 to-amber-50/30 rounded-xl border border-stone-200 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-800" />
                  <h3 className="text-base sm:text-lg font-bold font-heading text-red-950">
                    {currentStage.year} • {currentStage.orgName}
                  </h3>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${currentStage.color.badgeBg} ${currentStage.color.badgeText}`}>
                  {currentStage.period}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="text-xs sm:text-sm text-stone-700 font-medium">
                  <strong>Trọng trách then chốt:</strong> {currentStage.role}
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                    Sự kiện lịch sử tiêu biểu:
                  </div>
                  <ul className="space-y-1.5 pl-1">
                    {currentStage.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-sm text-stone-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {currentStage.commanderOrRemark && (
                  <div className="mt-3 p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 italic">
                    {currentStage.commanderOrRemark}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TIMELINE VIEW */}
        {viewMode === 'timeline' && (
          <div className="relative pl-4 sm:pl-8 border-l-2 border-red-700/70 space-y-8 my-4">
            {STAGES.map((stage) => (
              <div key={stage.id} className="relative group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[23px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white ${stage.color.nodeBg} shadow-sm group-hover:scale-125 transition-transform`}
                />

                <div className="bg-stone-50/70 hover:bg-stone-50 border border-stone-200/90 rounded-xl p-4 sm:p-5 transition-colors shadow-2xs">
                  {/* Top row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black font-heading text-red-900 bg-white border border-stone-200 px-2.5 py-0.5 rounded shadow-2xs">
                        {stage.year}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold font-heading text-stone-900">
                        {stage.orgName}
                      </h4>
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${stage.color.badgeBg} ${stage.color.badgeText}`}>
                      {stage.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 mb-3 font-medium">
                    {stage.role}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-stone-200/70">
                    {stage.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                        <ArrowRight className="w-3.5 h-3.5 text-red-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {stage.commanderOrRemark && (
                    <div className="mt-3 p-2.5 rounded-lg bg-white border border-stone-200 text-xs italic text-stone-600">
                      {stage.commanderOrRemark}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-stone-400" />
            <span>Nguồn tư liệu: Lịch sử Bộ Tư lệnh Thủ đô Hà Nội (1946 – 2026) & Cổng TTĐT Bộ Quốc phòng</span>
          </div>
          <div className="font-semibold text-red-900">
            Kỷ niệm 80 năm Ngày truyền thống LLVT Thủ đô (19/10/1946 – 19/10/2026)
          </div>
        </div>

      </div>
    </section>
  );
}
