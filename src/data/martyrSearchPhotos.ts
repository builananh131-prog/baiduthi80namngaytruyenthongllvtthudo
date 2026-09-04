export interface MartyrSearchPhoto {
  id: string;
  orderNumber: number;
  title: string;
  subtitle: string;
  defaultSrc: string;
  fallbackSrc: string;
  fileName: string;
  caption: string;
  highlightTag: string;
  keyMission: string;
}

export const MARTYR_SEARCH_PHOTOS: MartyrSearchPhoto[] = [
  {
    id: 'martyr-photo-1',
    orderNumber: 1,
    title: 'Cán bộ, chiến sĩ LLVT Thủ đô tìm kiếm, quy tập hài cốt liệt sĩ',
    subtitle: 'Khảo sát thực địa và cất bốc hài cốt liệt sĩ tại các chiến trường',
    defaultSrc: '/images/quy_tap_liet_si.jpg',
    fallbackSrc: '/assets/photo_quytap.jpg',
    fileName: 'quy_tap_liet_si.jpg',
    highlightTag: 'Khảo sát & Quy tập thực địa',
    keyMission: 'Ban Chỉ đạo 515 / LLVT Thủ đô',
    caption: 'Thực hiện Quyết định số 515/QĐ-TTg của Thủ tướng Chính phủ, cán bộ, chiến sĩ Bộ Tư lệnh Thủ đô Hà Nội không quản ngại gian khổ, hiểm nguy, hành quân đến các chiến trường xưa, kiên trì đào bới, cẩn trọng bóc tách từng lớp đất đá để tìm kiếm, cất bốc từng mảnh hài cốt và di vật thiêng liêng của các anh hùng liệt sĩ đưa về với đồng đội, quê hương.'
  },
  {
    id: 'martyr-photo-2',
    orderNumber: 2,
    title: 'Lễ phủ Quốc kỳ, truy điệu và an táng hài cốt liệt sĩ về đất mẹ',
    subtitle: 'Nghi thức quân đội trang nghiêm, thiêng liêng tri ân sự hy sinh anh dũng',
    defaultSrc: '/images/le_truy_dieu_liet_si.jpg',
    fallbackSrc: '/assets/photo_phuquocky.jpg',
    fileName: 'le_truy_dieu_liet_si.jpg',
    highlightTag: 'Nghi thức Đền ơn đáp nghĩa',
    keyMission: 'Truy điệu & An táng trang trọng',
    caption: 'Nghi lễ phủ lá cờ Tổ quốc đỏ thắm lên linh cữu các liệt sĩ và lễ truy điệu, an táng được tổ chức trọng thể theo nghi thức Quân đội nhân dân Việt Nam. Đây là minh chứng sâu sắc cho đạo lý truyền thống "Uống nước nhớ nguồn", "Ăn quả nhớ người trồng cây" của cán bộ, chiến sĩ LLVT Thủ đô và nhân dân Hà Nội đối với các anh hùng đã hy sinh vì Tổ quốc.'
  },
  {
    id: 'martyr-photo-3',
    orderNumber: 3,
    title: 'Mở rộng số hóa dữ liệu và lập bản đồ tìm kiếm thông tin liệt sĩ',
    subtitle: 'Ứng dụng công nghệ thông tin và bản đồ số hóa trong công tác chính sách',
    defaultSrc: '/images/tim_kiem_hai_cot.jpg',
    fallbackSrc: '/assets/btl_quy_tap_liet_si_1788537953859.jpg',
    fileName: 'tim_kiem_hai_cot.jpg',
    highlightTag: 'Chuyển đổi số & Dữ liệu mở rộng',
    keyMission: 'Chuẩn hóa cơ sở dữ liệu quốc gia',
    caption: 'Trong thời kỳ mới, LLVT Thủ đô đi đầu trong việc ứng dụng công nghệ, số hóa hàng vạn hồ sơ danh sách liệt sĩ, lập bản đồ tìm kiếm quy tập hài cốt liệt sĩ ở 3 cấp (xã, huyện, thành phố); phối hợp với các cơ quan y tế, pháp y lấy mẫu sinh phẩm ADN nhằm đẩy nhanh tiến độ xác định danh tính liệt sĩ còn thiếu thông tin.'
  },
  {
    id: 'martyr-photo-4',
    orderNumber: 4,
    title: 'Kết nối thông tin thân nhân liệt sĩ và đồng hành cùng các cựu chiến binh',
    subtitle: 'Tiếp nhận thông tin nhân chứng lịch sử và hỗ trợ các gia đình liệt sĩ',
    defaultSrc: '/assets/btl_phu_quoc_ky_1788537972572.jpg',
    fallbackSrc: '/images/le_truy_dieu_liet_si.jpg',
    fileName: 'ket_noi_than_nhan.jpg',
    highlightTag: 'Dân vận & Nghĩa tình quân - dân',
    keyMission: 'Tiếp nhận thông tin nhân chứng',
    caption: 'Các cơ quan quân sự từ Ban Chỉ huy Quân sự cấp xã, phường đến Bộ Tư lệnh Thủ đô thường xuyên đón tiếp, phối hợp với Hội Cựu chiến binh, Ban liên lạc các đơn vị chiến đấu và thân nhân liệt sĩ; cung cấp thông tin tra cứu sơ đồ mộ chí, hướng dẫn quy trình xác minh thực địa, mang lại niềm an ủi to lớn cho các gia đình liệt sĩ.'
  }
];
