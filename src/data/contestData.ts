import { QuestionItem, PodcastGuest } from '../types';

export const CONTEST_INFO = {
  title: "Tìm Hiểu Lịch Sử 80 Năm Ngày Truyền Thống Lực Lượng Vũ Trang Thủ Đô",
  titleLine1: "Tìm Hiểu Lịch Sử 80 Năm Ngày Truyền Thống",
  titleLine2: "Lực Lượng Vũ Trang Thủ Đô",
  subPeriod: "(19/10/1946 – 19/10/2026)",
  tag: "BÀI DỰ THI",
  contestant: {
    name: "Bùi Thị Diễm",
    birthYear: "2005",
    organization: "Khoa Viết văn - Báo chí, Trường Đại học Văn hoá Hà Nội",
    role: "Sinh viên ngành Báo chí - Truyền thông",
  },
  song: {
    title: "Tự Hào Người Chiến Sĩ Thủ Đô",
    composer: "Nguyễn Tú",
    performer: "Tốp nam BĐ 15",
    duration: "4 phút 15 giây",
    durationSeconds: 255,
    defaultQrUrl: "https://youtu.be/TuHaoNguoiChienSiThuDo",
    description: "Ca khúc truyền thống ca ngợi khí thế hào hùng, phẩm chất kiên trung của người chiến sĩ Thủ đô qua các thời kỳ lịch sử.",
    lyrics: [
      "Trập trùng những bước chân xuyên qua đêm thâu",
      "Dưới mưa lạnh, sông sâu",
      "Bước chân quen, tạm rời xa Thành phố",
      "Sáu mươi ngày đêm kiên cường bám trụ",
      "Đập tan quân thù, đốt cháy \"pháo đài bay\"",
      "Sẵng sàng xung phong chúng tôi quyết tử",
      "Quên thân mình để Tổ quốc quyết sinh...",
      "Đk:",
      "Nguyện vì nước... người chiến sĩ Tự vệ Thành",
      "Truyền thống năm xưa vẫn vang vọng mãi",
      "Sóng lũ cuộn trào, mưa bom bão đạn nào có xá chi...",
      "Lời của Bác... người chiến sĩ Thủ đô khắc ghi",
      "Đoàn kết, vững tin một lòng theo Đảng",
      "Mãi luôn tự hào chúng tôi hát vang bài ca chiến sĩ...",
      "Bộ Tư lệnh Thủ đô anh hùng./."
    ]
  },
  podcast: {
    title: "Tiếp Nối Giá Trị 80 Năm Ngày Truyền Thống LLVT Thủ Đô",
    producer: "Bùi Thị Diễm (Khoa Viết văn - Báo chí, ĐH Văn hoá Hà Nội)",
    defaultQrUrl: "https://spotify.com/podcast/80nam-llvt-thudo-hanoi",
    description: "Tập Podcast đặc biệt kết nối các thế hệ nhân chứng lịch sử, lãnh đạo, nhà báo quân đội và thế hệ trẻ về hành trình 80 năm anh hùng của LLVT Thủ đô.",
    duration: "11 phút 17 giây"
  }
};

export const PODCAST_GUESTS: PodcastGuest[] = [
  {
    name: "NSƯT Phùng Đệ",
    role: "Cựu chiến sĩ Trung đoàn Thủ đô",
    bio: "Chiến đấu bảo vệ Hà Nội từ năm 13 tuổi, từng là chiến sĩ liên lạc dũng cảm trong 60 ngày đêm khói lửa lịch sử mùa đông năm 1946.",
    highlight: "Chứng nhân sống của lời thề 'Quyết tử để Tổ quốc quyết sinh' tại Liên khu I."
  },
  {
    name: "Đại tá Nguyễn Đức Hậu",
    role: "Nguyên Phó Chủ nhiệm Chính trị BTL Thủ đô",
    bio: "Nguyên Tổng Biên tập Báo Quốc phòng Thủ đô; hiện là Trưởng Ban Tuyên giáo Hội Cựu chiến binh Thủ đô Hà Nội.",
    highlight: "Chuyên gia nghiên cứu sâu sắc về truyền thống quân sự và công tác tư tưởng LLVT Thủ đô."
  },
  {
    name: "Trung tá QNCN Nguyễn Hữu Thu",
    role: "Nhà báo, Biên tập viên Báo Quốc phòng Thủ đô",
    bio: "Cán bộ trực tiếp thực hiện nhiều tuyến phóng sự chuyên sâu về xây dựng thế trận quốc phòng toàn dân và lực lượng thường trực Thủ đô.",
    highlight: "Góc nhìn truyền thông báo chí quân sự đương đại."
  },
  {
    name: "Trung tá QNCN Nguyễn Văn Tú",
    role: "Phòng Chính trị, Trường Quân sự BTL Thủ đô",
    bio: "Tác giả ca khúc nổi tiếng 'Tự hào người chiến sĩ Thủ đô' - tác phẩm được biểu diễn rộng rãi trong toàn quân và nhân dân.",
    highlight: "Tác giả sáng tác ca khúc chính thức của hội thi."
  },
  {
    name: "Nguyễn Thu An",
    role: "Đại diện tiếng nói tuổi trẻ thế hệ Gen Z",
    bio: "Sinh viên Trường Đại học Hải Phòng, tích cực tham gia các diễn đàn bảo vệ nền tảng tư tưởng trên không gian mạng.",
    highlight: "Cảm nhận và khát vọng của thế hệ trẻ hôm nay đối với lịch sử cha anh."
  }
];

export const CONTEST_QUESTIONS: QuestionItem[] = [
  {
    id: "cau-1",
    number: 1,
    title: "Ngày truyền thống của lực lượng vũ trang Thủ đô Hà Nội là ngày, tháng, năm nào? Vì sao ngày đó được công nhận là ngày truyền thống của lực lượng vũ trang Thủ đô Hà Nội?",
    summary: "Xác định dấu mốc ngày 19/10/1946 và quyết định thành lập Chiến khu XI - tổ chức quân sự thống nhất đầu tiên của LLVT Thủ đô.",
    sections: [
      {
        heading: "1. Khẳng định ngày truyền thống chính thức",
        paragraphs: [
          "Ngày truyền thống của lực lượng vũ trang (LLVT) Thủ đô Hà Nội là ngày 19 tháng 10 năm 1946."
        ]
      },
      {
        heading: "2. Cơ sở xác định ngày 19 tháng 10 năm 1946 là ngày truyền thống",
        paragraphs: [
          "Đối với một quốc gia dân tộc nói chung, mỗi tổ chức chính trị - xã hội và mỗi đơn vị quân đội nói riêng, việc xác định “Ngày truyền thống” có ý nghĩa vô cùng quan trọng. “Ngày truyền thống” là cơ sở gắn kết Con Người – Xã Hội, gắn kết thế hệ này với thế hệ khác – điểm tựa cho sự trường tồn lịch sử.",
          "Theo “Quy chế về ngày truyền thống và các hoạt động kỷ niệm nhân ngày truyền thống của Quân đội và các đơn vị Quân đội nhân dân Việt Nam” ban hành kèm Quyết định số 159/2007/QĐ-BQP ngày 10/10/2007 của Bộ Quốc phòng, tại Điều 5 xác định rõ: Ngày truyền thống của đơn vị là ngày đơn vị được cấp có thẩm quyền ra quyết định thành lập hoặc ngày diễn ra sự kiện có dấu ấn thiêng liêng, đáng ghi nhớ nhất đối với đơn vị và được cấp có thẩm quyền công nhận."
        ],
        highlight: {
          title: "Dấu mốc lịch sử quyết định",
          content: "Trước dã tâm quay lại xâm lược của thực dân Pháp, Thường vụ Trung ương Đảng đã triệu tập Hội nghị Quân sự toàn quốc vào ngày 19 tháng 10 năm 1946. Hội nghị nhận định: 'Nhất định không sớm thì muộn Pháp sẽ đánh mình và mình cũng nhất định phải đánh Pháp'. Để chuẩn bị kháng chiến, Hội nghị quyết định chia lại các chiến khu quân sự trong toàn quốc, trong đó thành lập Chiến khu XI (Khu đặc biệt Hà Nội). Bộ Chỉ huy Chiến khu XI có chức năng, nhiệm vụ chỉ đạo, chỉ huy thống nhất toàn bộ lực lượng vũ trang và công tác quốc phòng trên địa bàn Thủ đô."
        }
      },
      {
        heading: "3. Ý nghĩa lịch sử và quá trình pháp lý chuẩn hóa",
        paragraphs: [
          "Chiến khu XI là tổ chức quân sự thống nhất đầu tiên của LLVT Thủ đô, đặt nền móng lãnh đạo, chỉ huy tập trung và trực tiếp chuẩn bị mọi mặt cho cuộc chiến đấu 60 ngày đêm giam chân địch trong lòng Hà Nội, bảo vệ an toàn tuyệt đối cho Trung ương Đảng, Chính phủ rút lên chiến khu Việt Bắc kháng chiến trường kỳ.",
          "Mặc dù qua các thời kỳ lịch sử, để đáp ứng yêu cầu của từng giai đoạn cách mạng, LLVT Thủ đô đã trải qua 10 lần thay đổi tổ chức và tên gọi (từ Khu đặc biệt Hà Nội, Chiến khu XI, Liên khu III, Thành đội Hà Nội, Bộ Tư lệnh Thủ đô, Quân khu Thủ đô cho đến Bộ Tư lệnh Thủ đô Hà Nội ngày nay), nhưng bản chất và truyền thống hào hùng khởi nguồn từ Chiến khu XI vẫn luôn là dòng chảy xuyên suốt.",
          "Trên cơ sở hội thảo khoa học lịch sử chặt chẽ và nguyện vọng tha thiết của cán bộ, chiến sĩ, ngày 14/12/2006, Bộ Quốc phòng đã ban hành Quyết định số 3585/QĐ-BQP; và sau khi mở rộng địa giới hành chính Thủ đô, ngày 31/5/2010, Bộ Quốc phòng tiếp tục ban hành Quyết định số 1850/QĐ-BQP chính thức công nhận ngày 19 tháng 10 năm 1946 là Ngày Truyền thống của Lực lượng vũ trang Bộ Tư lệnh Thủ đô Hà Nội."
        ]
      }
    ]
  },
  {
    id: "cau-2",
    number: 2,
    title: "Những mốc son và chiến công tiêu biểu của LLVT Thủ đô Hà Nội trong 80 năm xây dựng, chiến đấu và trưởng thành (1946 - 2026)?",
    summary: "Hệ thống toàn diện 3 thời kỳ lịch sử oanh liệt: Kháng chiến chống Pháp (1945-1954), Kháng chiến chống Mỹ (1954-1975), và Đổi mới bảo vệ Tổ quốc (1975 đến nay).",
    sections: [
      {
        heading: "I. Thời kỳ đấu tranh giành chính quyền và kháng chiến chống thực dân Pháp (1945 – 1954)",
        paragraphs: [
          "Trải qua 80 năm xây dựng, chiến đấu và trưởng thành, LLVT Thủ đô Hà Nội đã lập nên những chiến công lẫy lừng gắn liền với các chặng đường lịch sử của dân tộc:"
        ],
        bullets: [
          "Mùa thu năm 1945: Các đội tiền thân như Đoàn Thanh niên tuyên truyền xung phong Hoàng Diệu, Đội Danh dự Việt Minh, Đội Tự vệ công nhân cứu quốc... đã làm nòng cốt bảo vệ quần chúng tiến hành Tổng khởi nghĩa Tháng Tám thắng lợi tại Hà Nội ngày 19/8/1945; bảo vệ tuyệt đối an toàn Lễ Tuyên ngôn Độc lập ngày 2/9/1945 tại Quảng trường Ba Đình.",
          "Bản hùng ca 60 ngày đêm 'Quyết tử để Tổ quốc quyết sinh' (19/12/1946 – 17/2/1947): Đúng 20h03 ngày 19/12/1946, pháo đài Láng nổ súng mở đầu Toàn quốc kháng chiến. LLVT Thủ đô kiên cường cầm chân quân viễn chinh Pháp suốt 60 ngày đêm (vượt gấp đôi thời gian Trung ương giao), tiêu diệt gần 2.000 tên địch, phá hủy hàng chục xe tăng, thiết giáp, bảo vệ cơ quan đầu não kháng chiến rút lên chiến khu an toàn, tổ chức cuộc rút quân thần kỳ qua sông Hồng đêm 17-18/2/1947.",
          "Đẩy mạnh chiến tranh du kích trong lòng địch (1947 - 1954): Lập nhiều chiến công xuất sắc như tập kích Sân bay Bạch Mai (1950) phá hủy 25 máy bay địch; tập kích Sân bay Gia Lâm (3/1954) phá hủy 18 máy bay, chặt đứt cầu hàng không tiếp viện của thực dân Pháp cho tập đoàn cứ điểm Điện Biên Phủ.",
          "Tiếp quản giải phóng Thủ đô (10/10/1954): Đúng ngày 10/10/1954, các cánh quân của Đại đoàn 308 và Trung đoàn Thủ đô trùng điệp tiến về giải phóng Hà Nội trong cờ hoa rực rỡ, tiếp thu nguyên vẹn thành phố, hoàn thành xuất sắc chặng đường 9 năm trường kỳ kháng chiến chống thực dân Pháp."
        ]
      },
      {
        heading: "II. Kháng chiến chống Mỹ, cứu nước (1954 – 1975)",
        paragraphs: [
          "Trong cuộc kháng chiến chống Mỹ cứu nước, quân và dân Thủ đô vừa hăng hái thi đua sản xuất xây dựng chủ nghĩa xã hội, vừa kiên cường đánh trả các cuộc tập kích đường không ác liệt:"
        ],
        bullets: [
          "Đánh thắng chiến tranh phá hoại lần thứ nhất (1966 - 1968): Bắn rơi hàng trăm máy bay Mỹ. Ngày 29/6/1966, dũng cảm chiến đấu bảo vệ kho xăng Đức Giang; các phân đội súng máy cao xạ tự vệ bắn rơi cả máy bay phản lực hiện đại F-105D sấm sét và máy bay trinh sát không người lái.",
          "Đỉnh cao Chiến dịch 'Điện Biên Phủ trên không' (12/1972): Trong 12 ngày đêm khói lửa cuối tháng 12/1972, quân và dân Hà Nội phối hợp chặt chẽ với Quân chủng PK-KQ đập tan cuộc tập kích đường không chiến lược bằng B-52 của đế quốc Mỹ. Bắn rơi 32 máy bay (trong đó có 25 pháo đài bay B-52, 2 chiếc cánh cụp cánh xòe F-111). Chiến thắng chấn động địa cầu buộc Mỹ phải ký Hiệp định Paris, rút quân về nước.",
          "Hậu phương lớn chi viện tiền tuyến lớn: Trong 10 năm (1965 – 1975), LLVT Thủ đô đã tổ chức 29 đợt tuyển quân, đưa hơn 89.000 thanh niên Thủ đô và trực tiếp huấn luyện 42 tiểu đoàn quân tăng cường chi viện cho các chiến trường miền Nam, góp phần làm nên Đại thắng mùa Xuân 1975 thống nhất non sông."
        ]
      },
      {
        heading: "III. Xây dựng và bảo vệ Tổ quốc, đổi mới và hội nhập (1975 đến nay)",
        paragraphs: [
          "Bước vào giai đoạn hòa bình, thống nhất và đổi mới toàn diện, LLVT Thủ đô tiếp tục hoàn thành xuất sắc mọi nhiệm vụ được giao:"
        ],
        bullets: [
          "Chiến đấu bảo vệ biên giới và làm nghĩa vụ quốc tế: Tháng 3/1979, các tiểu đoàn bộ đội địa phương của Hà Nội (tiêu biểu là Tiểu đoàn 1 huyện Đông Anh tại điểm cao 282 Pò Pó, Văn Lãng, Lạng Sơn) đã kiên cường chiến đấu, lập chiến công xuất sắc; tham gia mở hàng chục km đường chiến dịch tại mặt trận Vị Xuyên - Hà Tuyên năm 1986.",
          "Sáp nhập, mở rộng địa giới hành chính (2008): Bộ Tư lệnh Thủ đô Hà Nội được tái lập, sáp nhập Bộ CHQS tỉnh Hà Tây và Ban CHQS huyện Mê Linh, xây dựng khu vực phòng thủ Thủ đô ngày càng vững chắc toàn diện.",
          "Lực lượng xung kích trong thời bình: Luôn là lực lượng nòng cốt đi đầu trong phòng chống thiên tai, cứu hộ cứu nạn (như trận lụt lịch sử tháng 11/2008, phòng chống lụt bão sông Đáy, sông Bùi); tiên phong trên tuyến đầu chống đại dịch COVID-19 (2020 - 2022); đồng thời bảo vệ an toàn tuyệt đối các sự kiện chính trị, ngoại giao cấp quốc gia và quốc tế diễn ra trên địa bàn."
        ],
        highlight: {
          title: "Phần thưởng cao quý được Đảng và Nhà nước trao tặng",
          content: "Những cống hiến to lớn của LLVT Thủ đô đã được ghi nhận bằng nhiều huân huy chương cao quý nhất:",
          bullets: [
            "03 lần được phong tặng danh hiệu cao quý Anh hùng Lực lượng vũ trang nhân dân (năm 1978, 2002, 2005)",
            "Huân chương Sao Vàng - phần thưởng cao quý nhất của Đảng và Nhà nước (năm 2011)",
            "02 Huân chương Hồ Chí Minh (năm 1984, 2002)",
            "Hàng trăm tập thể, cá nhân được phong tặng danh hiệu Anh hùng LLVTND và huân, huy chương các loại."
          ]
        }
      }
    ]
  },
  {
    id: "cau-3",
    number: 3,
    title: "Nêu và làm rõ truyền thống tiêu biểu của Lực lượng vũ trang Thủ đô Hà Nội?",
    summary: "5 giá trị cốt lõi làm nên linh hồn người chiến sĩ Thủ đô: Vì nhân dân chiến đấu, Quyết tử để Tổ quốc quyết sinh, Đoàn kết sáng tạo, Quyết đánh biết thắng, Nét đẹp văn hóa người Tràng An.",
    sections: [
      {
        paragraphs: [
          "Sinh ra và chiến đấu trên mảnh đất Thăng Long – Hà Nội ngàn năm văn hiến, Lực lượng vũ trang Thủ đô vừa mang bản chất truyền thống tốt đẹp của Quân đội nhân dân Việt Nam anh hùng, vừa đúc kết nên những nét giá trị truyền thống tiêu biểu, đặc sắc riêng biệt:"
        ],
        quote: {
          text: "Quyết tử để Tổ quốc quyết sinh. Đoàn kết sáng tạo; Đề cao cảnh giác; Tích cực rèn luyện; Sẵn sàng chiến đấu; Đã đánh là thắng!"
        }
      },
      {
        heading: "1. Từ nhân dân mà ra, vì nhân dân mà chiến đấu",
        paragraphs: [
          "LLVT Thủ đô ra đời trong phong trào cách mạng của quần chúng. Cán bộ, chiến sĩ đều là con em của nhân dân lao động, học sinh, sinh viên, trí thức đất kinh kỳ và nông dân ngoại thành. Trong kháng chiến, nhân dân đùm bọc, nuôi nấng, đào hầm nuôi giấu bộ đội, tiếp đạn cho các ụ pháo; các mẹ, các chị Tứ Tổng vượt làn đạn chèo đò đưa Trung đoàn Thủ đô qua sông Hồng. Trong thời bình, bộ đội Thủ đô luôn gắn bó máu thịt với nhân dân, là lực lượng xung kích đi đầu cứu trợ khi lũ lụt ngập úng, dập dịch bệnh, bảo vệ tính mạng và tài sản cho nhân dân."
        ]
      },
      {
        heading: "2. Quyết tử để Tổ quốc quyết sinh",
        paragraphs: [
          "Đây là linh hồn, là biểu tượng ngời sáng nhất của LLVT Thủ đô. Tinh thần ấy bắt đầu từ lời thề quyết tử trong mùa đông năm 1946: hình ảnh chiến sĩ cảm tử quân ôm bom ba càng lao vào xe tăng địch tại phố Hàng Đậu, Bắc Bộ Phủ, Giảng Võ; tiểu đội trưởng Nguyễn Ngọc Nại cùng đồng đội chiến đấu đến viên đạn cuối cùng tại bãi Tàm Xá để bảo vệ đường rút quân của Trung đoàn. Trong kháng chiến chống Mỹ, đó là tinh thần 'nhằm thẳng quân thù mà bắn' trên các nóc nhà cao tầng, bảo vệ từng nhịp cầu Long Biên, từng góc phố Khâm Thiên, Yên Phụ."
        ]
      },
      {
        heading: "3. Đoàn kết, sáng tạo, đề cao cảnh giác",
        paragraphs: [
          "Đoàn kết giữa bộ đội chủ lực, bộ đội địa phương và dân quân tự vệ; đoàn kết gắn bó giữa quân dân Hà Nội với vùng đất Xứ Đoài (Hà Tây trước đây) và các tỉnh lân cận. Tinh thần sáng tạo thể hiện qua nghệ thuật tác chiến: đục tường thông nhà tạo đường cơ động tác chiến bí mật trong phố cổ; sáng tạo cách đánh đặc công bất ngờ vào sào huyệt sâu của địch (sân bay Bạch Mai, Gia Lâm); thiết lập thế trận phòng không nhiều tầng nhiều lớp bắn rơi cả pháo đài bay B-52 và máy bay cánh cụp cánh xòe F-111."
        ]
      },
      {
        heading: "4. Quyết đánh, biết thắng, đã đánh là thắng",
        paragraphs: [
          "Thừa hưởng tinh hoa quân sự từ cha ông ta thời Lý, Trần, Lê, Quang Trung kết hợp khoa học quân sự mác-xít và nghệ thuật quân sự Hồ Chí Minh, LLVT Thủ đô luôn biết đánh giá chính xác tương quan lực lượng, tận dụng thế trận chiến tranh nhân dân 'lấy ít địch nhiều, lấy nhỏ thắng lớn', đã ra quân là đánh chắc thắng, lập nên những kỳ tích lịch sử như 60 ngày đêm năm 1946 và 12 ngày đêm Điện Biên Phủ trên không năm 1972."
        ]
      },
      {
        heading: "5. Nếp sống văn hóa, kỷ luật tự giác, nghiêm minh",
        paragraphs: [
          "Mang cốt cách thanh lịch, văn minh của người Tràng An, chiến sĩ LLVT Thủ đô luôn giữ vững nếp sống văn hóa, tinh thần lạc quan yêu đời ngay giữa chiến trường khói lửa khốc liệt. Trong vòng vây lửa đạn 1946, các chiến sĩ vẫn tổ chức tiệc trà ngoại giao văn minh, đàng hoàng với đại diện các nước; tổ chức đám cưới giữa trận địa pháo cao xạ năm 1972; và ngày nay luôn là hình mẫu chuẩn mực về lễ tiết tác phong, kỷ luật chính quy, xứng danh 'Bộ đội Cụ Hồ' nét đẹp văn hóa Người chiến sĩ Thủ đô."
        ]
      }
    ]
  },
  {
    id: "cau-4",
    number: 4,
    title: "Viết về một tập thể hoặc cá nhân tiêu biểu trong xây dựng, giữ gìn, phát huy giá trị truyền thống của LLVT Thủ đô Hà Nội",
    summary: "Tiểu đoàn 1 Bộ đội địa phương huyện Đông Anh và khúc tráng ca bất tử trên Điểm cao 282 Văn Lãng – Lạng Sơn (Tháng 3/1979).",
    sections: [
      {
        heading: "TIỂU ĐOÀN 1 BỘ ĐỘI ĐỊA PHƯƠNG HUYỆN ĐÔNG ANH",
        subheading: "Khúc tráng ca trên Điểm cao 282 Văn Lãng – Lạng Sơn (Tháng 3/1979)",
        paragraphs: [
          "Khi nhắc đến những tấm gương kiên cường kế thừa truyền thống 'Quyết tử để Tổ quốc quyết sinh', một mốc son tiêu biểu đầy xúc động và tự hào của LLVT Thủ đô chính là chiến công của Tiểu đoàn 1 Bộ đội địa phương huyện Đông Anh trên mặt trận Văn Lãng – Lạng Sơn trong cuộc chiến đấu bảo vệ biên giới phía Bắc tháng 3 năm 1979.",
          "Đầu năm 1979, khi tiếng súng nổ rộ trên toàn tuyến biên giới phía Bắc, theo lời kêu gọi của Đảng và Lệnh Tổng động viên, ngày 20/2/1979, Tiểu đoàn 1 huyện Đông Anh được thành lập thần tốc tại thôn Cổ Dương (Đông Anh). Lực lượng của Tiểu đoàn nòng cốt là cán bộ sỹ quan kinh qua chống Mỹ kết hợp với thanh niên dự bị động viên hạng II, công nhân, đoàn viên các xã trong huyện cùng một số đồng chí học viên Trường Sĩ quan Lục quân 1 được tăng cường."
        ],
        quote: {
          text: "Chiến đấu bảo vệ biên giới cũng chính là chiến đấu bảo vệ Thủ đô từ xa. Các đồng chí hãy dũng cảm tiến lên!",
          author: "Lời Tư lệnh Đàm Quang Trung căn dặn bộ đội Đông Anh tại ga Đồng Mỏ"
        }
      },
      {
        heading: "Trận địa chốt giữ Điểm cao 282 (Đồi Pò Pó) - Ngày 4/3/1979",
        paragraphs: [
          "Đêm ngày 3 rạng sáng ngày 4/3/1979, sau những chặng hành quân thần tốc, Tiểu đoàn đã có mặt tại xã Tân Lang, huyện Văn Lãng, tỉnh Lạng Sơn và nhanh chóng tiếp quản trận địa. Trong đó, Đại đội 3 do Đại đội trưởng Khoan và Chính trị viên Ngọc chỉ huy nhận nhiệm vụ chốt giữ Điểm cao 282 (Đồi Pò Pó) – vị trí chiến lược xung yếu án ngữ con đường độc đạo dẫn sâu vào ngã ba Bình Gia, Thái Nguyên.",
          "Khoảng 8 giờ sáng ngày 4/3/1979, sau loạt pháo kích cấp tập, đối phương huy động lực lượng lớn áp dụng chiến thuật 'biển người' hòng đè bẹp điểm cao 282. Dưới sự chi viện đắc lực của Đại đội 4 hỏa lực và Đại đội 1, 47 cán bộ chiến sĩ Đại đội 3 đã kiên cường bám trụ từng tấc đất. Khẩu đại liên của địch vừa nhô lên đã bị chiến sĩ Ngô Đắc Lộc dùng súng phóng lựu AT tiêu diệt gọn. Khi quân địch đánh vu hồi thọc sâu lên đồi, Phó Tiểu đoàn trưởng Trịnh Danh Dầm đã chỉ huy bộ đội phản kích dũng mãnh, đánh bật quân xâm lược ra khỏi giao thông hào.",
          "Trận đánh giằng co ác liệt kéo dài suốt từ 8 giờ sáng đến 17 giờ chiều cùng ngày. Kết quả, cán bộ chiến sĩ Tiểu đoàn 1 Đông Anh đã bẻ gãy hoàn toàn các đợt tấn công của đối phương, tiêu diệt 360 tên địch, phá hủy 2 đại liên, thu nhiều vũ khí chiến lợi phẩm. Riêng đồng chí Dương Tu Bé với súng AT đã dũng cảm diệt 30 tên địch. Để làm nên thắng lợi ấy, 5 người con ưu tú của quê hương Đông Anh đã anh dũng hy sinh, hiến dâng tuổi thanh xuân để giữ vững từng tấc đất biên cương."
        ],
        highlight: {
          title: "Sự ghi nhận thiêng liêng của chính quyền và nhân dân",
          content: "Đồng chí Lương Viết Mậu - Bí thư Huyện ủy Văn Lãng lúc đó đã xúc động phát biểu: 'Chúng tôi vô cùng biết ơn Tiểu đoàn 1 Bộ đội địa phương huyện Đông Anh. Nếu không có Tiểu đoàn 1 Đông Anh chặn đứng địch ở Đồi Pò Pó, huyện Văn Lãng đã có thể rơi vào tay giặc.'"
        }
      },
      {
        paragraphs: [
          "Chiến công trên Cao điểm 282 Pò Pó là minh chứng hùng hồn cho tinh thần quả cảm 'đâu có giặc là ta cứ đi' của tuổi trẻ Hà Nội, tô thắm trang sử vẻ vang của lực lượng vũ trang Thủ đô, để lại bài học sâu sắc về nghệ thuật xây dựng lực lượng vũ trang địa phương thời chiến và tình đoàn kết quân dân bền chặt."
        ]
      }
    ]
  },
  {
    id: "cau-5",
    number: 5,
    title: "Trên cương vị công tác của mình, bạn làm gì để góp phần xây dựng Thủ đô Hà Nội “Văn hiến, Văn minh, Hiện đại” cùng đất nước bước vào Kỷ nguyên mới?",
    summary: "5 cam kết hành động cụ thể của một sinh viên Báo chí – Truyền thông (ĐH Văn hoá Hà Nội) phụng sự Thủ đô trong Kỷ nguyên mới.",
    sections: [
      {
        paragraphs: [
          "Là một sinh viên đang theo học ngành Báo chí – Truyền thông tại Trường Đại học Văn hoá Hà Nội, tôi nhận thức sâu sắc rằng: Báo chí không chỉ phản ánh thực tế đời sống mà còn giữ vai trò định hướng tư tưởng, truyền bá tri thức và lan tỏa những giá trị chân – thiện – mỹ. Đứng trước thềm của 'Kỷ nguyên mới – Kỷ nguyên vươn mình của dân tộc', việc chung tay xây dựng Thủ đô Hà Nội 'Văn hiến – Văn minh – Hiện đại' chính là sứ mệnh nghề nghiệp, là lẽ sống và trách nhiệm cao cả của mỗi người làm báo trẻ.",
          "Để biến nhận thức thành hành động thiết thực, tôi xác định tập trung thực hiện 5 cam kết hành động cụ thể sau:"
        ]
      },
      {
        heading: "1. Rèn luyện bản lĩnh chính trị và đạo đức nghề nghiệp: 'Mắt sáng, lòng trong, bút sắc'",
        paragraphs: [
          "Trong thời đại mạng xã hội bùng nổ thông tin và sự tác động mạnh mẽ của trí tuệ nhân tạo (AI), người làm báo rất dễ bị cuốn vào vòng xoáy thông tin giả hoặc chạy theo thị hiếu tầm thường. Tôi xác định luôn trau dồi lý luận Mác - Lênin, tư tưởng Hồ Chí Minh, kiên định nền tảng tư tưởng của Đảng; nghiêm chỉnh tuân thủ 10 điều Quy định đạo đức người làm báo Việt Nam. Mỗi câu chữ viết ra phải chân thật, khách quan, mang tính xây dựng, đặt lợi ích của Đảng, của nhân dân và uy tín của Thủ đô lên trên hết."
        ]
      },
      {
        heading: "2. Nâng cao kỹ năng số và tư duy báo chí hiện đại",
        paragraphs: [
          "Tính 'Hiện đại' đòi hỏi người làm truyền thông trẻ phải đổi mới không ngừng. Tôi tích cực trau dồi các kỹ năng báo chí đa nền tảng: sản xuất Podcast, phóng sự truyền hình ngắn, đồ họa thông tin (Infographic), báo chí dữ liệu (Data journalism). Đồng thời, theo đuổi trường phái 'Báo chí giải pháp' (Solutions Journalism) – không chỉ phát hiện những điểm nghẽn, bất cập của đô thị mà còn tích cực tham vấn ý kiến chuyên gia, hiến kế giải pháp công nghệ, giao thông xanh, chuyển đổi số nhằm xây dựng đô thị Hà Nội thông minh, hiện đại."
        ]
      },
      {
        heading: "3. Là cầu nối truyền thông lan tỏa nét đẹp 'Văn hiến – Văn minh'",
        paragraphs: [
          "Thủ đô Hà Nội sở hữu kho tàng di sản văn hóa đồ sộ và truyền thống anh hùng ngàn đời. Là sinh viên báo chí, tôi chủ động thực hiện các tuyến bài, đề tài chuyên sâu về phố nghề, di tích lịch sử, tinh thần dũng cảm của LLVT Thủ đô qua các thời kỳ. Tôi ứng dụng các nền tảng số để kể câu chuyện văn hóa Thăng Long bằng ngôn ngữ trẻ trung, giúp thế hệ Gen Z và bạn bè quốc tế thấu hiểu, trân trọng và tự hào về bản sắc văn hóa kinh kỳ, xây dựng nếp sống thanh lịch nơi công cộng."
        ]
      },
      {
        heading: "4. Xung kích đấu tranh phản bác các quan điểm sai trái trên không gian mạng",
        paragraphs: [
          "Hà Nội luôn là địa bàn trọng điểm các thế lực thù địch tìm cách chống phá tư tưởng. Với nghiệp vụ báo chí được đào tạo, tôi luôn nêu cao tinh thần cảnh giác, chủ động kiểm chứng nguồn tin (fact-check), kịp thời phát hiện thông tin xấu độc, tham gia viết bài, sản xuất video đấu tranh phản bác các luận điệu xuyên tạc, bảo vệ hình ảnh bình yên của Thủ đô và nền tảng tư tưởng của Đảng."
        ]
      },
      {
        heading: "5. Tích cực dấn thân vì cộng đồng và phong trào thanh niên",
        paragraphs: [
          "Nhà báo giỏi là người sống sâu sắc với đời sống nhân dân. Tôi cam kết luôn tiên phong tham gia các phong trào tình nguyện của Thành đoàn, Hội Sinh viên Hà Nội; các chiến dịch 'Mùa hè xanh', bảo vệ môi trường, văn hóa giao thông; hòa mình vào đời sống của người lao động, sinh viên Thủ đô để phát hiện và tôn vinh những tấm gương 'Người tốt, việc tốt', lan tỏa năng lượng tích cực khắp cộng đồng."
        ],
        highlight: {
          title: "Lời kết",
          content: "Bằng niềm tự hào được học tập và cống hiến dưới bầu trời Hà Nội anh hùng, tôi nguyện không ngừng rèn đức, luyện tài, dùng ngòi bút và sản phẩm truyền thông của mình để viết tiếp truyền thống vẻ vang 80 năm LLVT Thủ đô, đóng góp sức trẻ cùng Thủ đô cất cánh trong kỷ nguyên mới!"
        }
      }
    ]
  }
];
