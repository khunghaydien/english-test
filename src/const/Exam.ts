import image from "@/assets/ielts-volume.jpg";
export const ielts = [
  {
    value: "all",
    icon: "icon-library_books",
    text: "Toàn bộ đề thi",
  },
  {
    value: "academic",
    icon: "icon-person",
    text: "Đề thi học thuật",
  },
  {
    value: "general",
    icon: "icon-people",
    text: "Đề thi chung",
  },
];
export const ieltsSortBy = {
  newest: {
    text: "Mới nhất",
  },
  popular: {
    text: "Phổ biến",
  },
  highRanking: {
    text: "Thứ hạng cao",
  },
};
export const mocExam = [
  {
    id: "1",
    name: "Master IELTS General Training Volume 1",
    imageUrl: image,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 1000,
    },
    viewed: 12312,
    published: "07 Nov 2018",
    tested: 923452,
    process: 100,
  },
  {
    id: "2",
    name: "Master IELTS General Training Volume 1",
    imageUrl: image,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 1000,
    },
    viewed: 12312,
    published: "07 Nov 2018",
    tested: 923452,
    process: 100,
  },
  {
    id: "3",
    name: "Master IELTS General Training Volume 1",
    imageUrl: image,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 1000,
    },
    viewed: 12312,
    published: "07 Nov 2018",
    tested: 923452,
    process: 100,
  },
  {
    id: "4",
    name: "Master IELTS General Training Volume 1",
    imageUrl: image,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 1000,
    },
    viewed: 12312,
    published: "07 Nov 2018",
    tested: 923452,
    process: 100,
  },
];
export const exerciseType = {
  BLANK_FILL_QUESTION: "BLANK_FILL_QUESTION",
  MULTIPLE_CHOICE_QUESTION: "MULTIPLE_CHOICE_QUESTION",
  GAP_FILL_QUESTION: "GAP_FILL_QUESTION",
  GAP_TABLE_FILL_QUESTION: "GAP_TABLE_FILL_QUESTION",
};
type MocExamFeature = {
  [key: string]: any;
};
export const mocExamFeature: MocExamFeature = {
  locate: {
    imageUrl: image,
    imageAlt: "test image",
    name: "IELTS Locate and Explain",
    introduce:
      "Tính năng đặc biệt giúp bạn tìm kiếm chính xác vị trí của câu trả lời và giải thích chi tiết ngay trong đề thi.",
  },
  moc: {
    imageUrl: image,
    imageAlt: "test image",
    name: "Mock IELTS Band Scores",
    introduce:
      "Sau khi nộp bài, điểm của bạn sẽ được tự động đưa ra cùng với số câu trả lời chính xác. Chúng tôi sử dụng dữ liệu từ học viên và kết quả thi thực để tính toán điểm chuẩn.",
  },
  sidebyside: {
    imageUrl: image,
    imageAlt: "test image",
    name: "IELTS Side by Side",
    introduce:
      "Đề thi IELTS reading và phần trả lời được sắp xếp song song mang lại trải nghiệm làm bài trực tuyến tốt hơn.",
  },
  palette: {
    imageUrl: image,
    imageAlt: "test image",
    name: "IELTS Question Palette",
    introduce:
      "Tính năng giúp bạn điều hướng nhanh chóng. Tiết kiệm thời gian tìm kiếm và dành nhiều thời gian cho việc nâng cao điểm số .",
  },
  analy: {
    imageUrl: image,
    imageAlt: "test image",
    name: "IOT Analytics",
    introduce:
      "Tính năng mới giúp bạn theo dõi được quá trình ôn luyện và cải thiện từng ngày. Bạn biết band điểm trung bình, tổng thời gian luyện thi, các dạng câu hỏi và đề thi bạn cần cải thiện nhiều hơn để hoàn thành mục tiêu.",
  },
};
export const mocExamSet = [
  {
    id: "1",
    name: "IELTS Recent Mock Tests Volume 6",
    imageUrl: image,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 1000,
    },
    viewed: 12312,
    published: "07 Nov 2018",
    tested: 923452,
    type: "toeic",
    exams: mocExam,
  },
  {
    id: "2",
    name: "IELTS Recent Mock Tests Volume 6",
    imageUrl: image,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 1000,
    },
    viewed: 12312,
    published: "07 Nov 2018",
    tested: 923452,
    exams: mocExam,
  },
  {
    id: "2",
    name: "IELTS Recent Mock Tests Volume 6",
    imageUrl: image,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 1000,
    },
    viewed: 12312,
    published: "07 Nov 2018",
    tested: 923452,
    exams: mocExam,
  },
];
