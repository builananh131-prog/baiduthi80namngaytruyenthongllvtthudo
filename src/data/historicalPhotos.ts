export interface HistoricalPhoto {
  id: number;
  fileName: string;
  defaultUrl?: string;
  title: string;
  caption: string;
  period: string;
  dateOrYear: string;
  category: 'Khai sinh & Kháng chiến 1946-1954' | 'Kháng chiến chống Mỹ 1954-1975' | 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)';
}

export const HISTORICAL_PHOTOS: HistoricalPhoto[] = [
  {
    id: 1,
    fileName: '1.jpg',
    defaultUrl: 'https://i.postimg.cc/L6q9fVxy/19.jpg',
    title: 'Bác Hồ với cán bộ, chiến sĩ Lực lượng vũ trang Thủ đô',
    caption: 'Chủ tịch Hồ Chí Minh cùng các đồng chí lãnh đạo quân sự chỉ đạo, động viên cán bộ chiến sĩ LLVT Thủ đô trong những ngày đầu thành lập và chuẩn bị kháng chiến.',
    period: 'Mốc khởi nguồn & Kháng chiến toàn quốc',
    dateOrYear: 'Năm 1946',
    category: 'Khai sinh & Kháng chiến 1946-1954'
  },
  {
    id: 2,
    fileName: '2.jpg',
    title: '60 ngày đêm khói lửa kiên cường bám trụ trong lòng Hà Nội',
    caption: 'Các chiến sĩ Vệ quốc đoàn và Tự vệ Thành phố kiên cường bám trụ từng góc phố, công sự, giam chân quân viễn chinh Pháp suốt 60 ngày đêm mùa đông 1946.',
    period: 'Mùa đông năm 1946',
    dateOrYear: '19/12/1946 – 17/02/1947',
    category: 'Khai sinh & Kháng chiến 1946-1954'
  },
  {
    id: 3,
    fileName: '3.jpg',
    title: 'Chiến sĩ cảm tử quân ôm bom ba càng đón đánh xe tăng địch',
    caption: 'Hình ảnh bất tử của người chiến sĩ Thủ đô với lời thề thiêng liêng: "Quyết tử để Tổ quốc quyết sinh", sẵn sàng hy sinh thân mình chặn đứng bước tiến của xe tăng cơ giới thực dân.',
    period: 'Bản hùng ca Liên khu I',
    dateOrYear: 'Mùa đông 1946',
    category: 'Khai sinh & Kháng chiến 1946-1954'
  },
  {
    id: 4,
    fileName: '4.jpg',
    title: 'Chiến đấu anh dũng trong từng căn nhà, góc phố Thủ đô',
    caption: 'Chiến sĩ Tự vệ Hà Nội đục tường thông nhà tạo đường cơ động bí mật, tổ chức các tổ tam tam đánh phục kích, bắn tỉa tiêu hao sinh lực địch.',
    period: 'Chiến tranh nhân dân trong lòng phố cổ',
    dateOrYear: 'Giai đoạn 1946 – 1947',
    category: 'Khai sinh & Kháng chiến 1946-1954'
  },
  {
    id: 5,
    fileName: '5.jpg',
    title: 'Đoàn quân chiến thắng tiến về tiếp quản Thủ đô ngày 10/10/1954',
    caption: 'Các cánh quân của Đại đoàn 308 và Trung đoàn Thủ đô trùng điệp tiến về tiếp quản Hà Nội trong rừng cờ hoa rực rỡ và tiếng reo hò hân hoan của nhân dân.',
    period: 'Ngày Giải phóng Thủ đô',
    dateOrYear: '10/10/1954',
    category: 'Khai sinh & Kháng chiến 1946-1954'
  },
  {
    id: 6,
    fileName: '6.jpg',
    title: 'Lễ chào cờ lịch sử tại Sân vận động Cột cờ Hà Nội',
    caption: 'Đúng 15 giờ ngày 10/10/1954, hàng vạn quân dân Thủ đô nghiêm trang làm Lễ chào cờ chiến thắng dưới chân Cột cờ Hà Nội, đánh dấu mốc son lịch sử Thủ đô hoàn toàn giải phóng.',
    period: 'Ngày Giải phóng Thủ đô',
    dateOrYear: '10/10/1954',
    category: 'Khai sinh & Kháng chiến 1946-1954'
  },
  {
    id: 7,
    fileName: '7.jpg',
    title: 'Trận địa pháo cao xạ kiên cường bảo vệ bầu trời Hà Nội',
    caption: 'Lực lượng phòng không nhân dân và dân quân tự vệ Thủ đô kiên cường bám trận địa, hiệp đồng chặt chẽ đánh trả các cuộc tập kích đường không ác liệt của không quân Mỹ.',
    period: 'Kháng chiến chống Mỹ cứu nước',
    dateOrYear: 'Giai đoạn 1966 – 1972',
    category: 'Kháng chiến chống Mỹ 1954-1975'
  },
  {
    id: 8,
    fileName: '8.jpg',
    title: 'Nữ tự vệ Thủ đô hiên ngang bên mâm pháo phòng không',
    caption: 'Hình ảnh kiên trung của nữ tự vệ Hà Nội "tay búa tay súng", "vừa sản xuất vừa sẵn sàng chiến đấu", trực tiếp tham gia bắn rơi nhiều máy bay hiện đại của không quân Mỹ.',
    period: 'Đánh thắng chiến tranh phá hoại',
    dateOrYear: 'Giai đoạn 1967 – 1972',
    category: 'Kháng chiến chống Mỹ 1954-1975'
  },
  {
    id: 9,
    fileName: '9.jpg',
    title: 'Xác "pháo đài bay" B-52 rơi tại hồ Tiệp (Ngọc Hà, Ba Đình)',
    caption: 'Kỳ tích trong Chiến dịch 12 ngày đêm "Hà Nội - Điện Biên Phủ trên không" tháng 12/1972. Bắn rơi tại chỗ pháo đài bay chiến lược B-52 của đế quốc Mỹ khi chưa kịp cắt bom.',
    period: 'Điện Biên Phủ trên không',
    dateOrYear: 'Tháng 12/1972',
    category: 'Kháng chiến chống Mỹ 1954-1975'
  },
  {
    id: 10,
    fileName: '10.jpg',
    title: 'Quân và dân Thủ đô bên xác máy bay B-52 bị bắn hạ',
    caption: 'Cán bộ, chiến sĩ và nhân dân Thủ đô tự hào bên mảnh xác pháo đài bay B-52 của Mỹ, minh chứng cho ý chí kiên cường và sức mạnh của thế trận chiến tranh nhân dân.',
    period: 'Chiến thắng lịch sử tháng 12/1972',
    dateOrYear: 'Cuối năm 1972',
    category: 'Kháng chiến chống Mỹ 1954-1975'
  },
  {
    id: 11,
    fileName: '11.png',
    title: 'Đội hình khối duyệt binh Lực lượng vũ trang Thủ đô',
    caption: 'Khối cán bộ, chiến sĩ LLVT Bộ Tư lệnh Thủ đô trong quân dung chỉnh tề, chính quy, hiện đại, sẵn sàng nhận và hoàn thành xuất sắc mọi nhiệm vụ.',
    period: 'Xây dựng LLVT chính quy, tinh nhuệ',
    dateOrYear: 'Thời kỳ mới',
    category: 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)'
  },
  {
    id: 12,
    fileName: '12.jpg',
    title: 'Cán bộ, chiến sĩ LLVT Thủ đô hăng say huấn luyện sẵn sàng chiến đấu',
    caption: 'Công tác huấn luyện quân sự, diễn tập kỹ chiến thuật trên thao trường luôn được duy trì nghiêm ngặt, nâng cao khả năng cơ động và sức mạnh chiến đấu trong mọi tình huống.',
    period: 'Huấn luyện - Sẵn sàng chiến đấu',
    dateOrYear: 'Công tác huấn luyện thường niên',
    category: 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)'
  },
  {
    id: 13,
    fileName: '13.jpg',
    title: 'Diễn tập khu vực phòng thủ Thủ đô Hà Nội',
    caption: 'Diễn tập thực binh khu vực phòng thủ thành phố Hà Nội, hiệp đồng tác chiến chặt chẽ giữa các lực lượng quân sự, công an và các ban ngành đoàn thể Thủ đô.',
    period: 'Xây dựng thế trận quốc phòng toàn dân',
    dateOrYear: 'Diễn tập phòng thủ Thủ đô',
    category: 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)'
  },
  {
    id: 14,
    fileName: '14.jpg',
    title: 'Cán bộ, chiến sĩ LLVT Thủ đô dầm mình trong mưa lũ giúp nhân dân',
    caption: 'Hình ảnh người chiến sĩ Thủ đô không quản ngại gian khổ, nguy hiểm, dầm mình trong dòng nước lũ cứu hộ cứu nạn, bảo vệ tính mạng và tài sản của nhân dân khi có thiên tai.',
    period: 'Đội quân công tác & Dân vận khéo',
    dateOrYear: 'Phòng chống lụt bão, thiên tai',
    category: 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)'
  },
  {
    id: 15,
    fileName: '15.jpg',
    title: 'LLVT Thủ đô xung kích trên tuyến đầu chống dịch, chăm lo an sinh',
    caption: 'Cán bộ chiến sĩ Bộ Tư lệnh Thủ đô tiên phong nơi tuyến đầu phòng chống đại dịch, hỗ trợ nhu yếu phẩm và động viên nhân dân vượt qua khó khăn, tô thắm phẩm chất Bộ đội Cụ Hồ.',
    period: 'Tuyến đầu bảo vệ nhân dân',
    dateOrYear: 'Giai đoạn 2020 – 2022',
    category: 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)'
  },
  {
    id: 16,
    fileName: '16.jpg',
    title: 'Lễ đón nhận phần thưởng cao quý của Đảng và Nhà nước trao tặng',
    caption: 'Lực lượng vũ trang Thủ đô vinh dự được đón nhận Huân chương Sao Vàng và 03 lần danh hiệu Anh hùng LLVT nhân dân, ghi nhận những cống hiến đặc biệt xuất sắc cho Tổ quốc.',
    period: 'Vinh danh truyền thống anh hùng',
    dateOrYear: 'Kỷ niệm ngày truyền thống',
    category: 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)'
  },
  {
    id: 17,
    fileName: '17.jpg',
    title: 'Tượng đài "Quyết tử để Tổ quốc quyết sinh" tại Vườn hoa Vạn Xuân',
    caption: 'Tượng đài bất tử tôn vinh những người con ưu tú của Hà Nội đã hiến dâng tuổi thanh xuân trong mùa đông năm 1946 vì nền độc lập, tự do của non sông đất nước.',
    period: 'Di tích lịch sử & Giáo dục truyền thống',
    dateOrYear: 'Biểu tượng lịch sử Thủ đô',
    category: 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)'
  },
  {
    id: 18,
    fileName: '18.jpg',
    title: 'Khối diễu binh LLVT Thủ đô hùng dũng tiến qua Quảng trường Ba Đình',
    caption: 'Biểu dương sức mạnh và khí thế hào hùng của Lực lượng vũ trang Thủ đô Hà Nội, vững bước tiến vào Kỷ nguyên mới cùng đất nước xây dựng Thủ đô Văn hiến - Văn minh - Hiện đại.',
    period: 'Hào khí Thăng Long - Hà Nội',
    dateOrYear: 'Đại lễ diễu binh, diễu hành',
    category: 'Xây dựng & Bảo vệ Tổ quốc (1975 - nay)'
  }
];
