import { Option } from "@/common/field/Option";

type Menu = {
  value: string;
  text: string;
  subValue: Option;
};
export const menu: Menu[] = [
  {
    value: "toeic",
    text: "Thư viện luyện đề thi Toeic",
    subValue: {
      reading: { text: "Reading", isLink: true, path: "toeic/reading" },
      listening: { text: "Listening", isLink: true, path: "toeic/listening" },
    },
  },
  {
    value: "ielts",
    text: "Thư viện luyện đề thi IELTS",
    subValue: {
      reading: { text: "Reading", isLink: true, path: "ielts/reading" },
      listening: { text: "Listening", isLink: true, path: "ielts/listening" },
      speaking: { text: "Speaking", isLink: true, path: "ielts/speaking" },
      writing: { text: "Writing", isLink: true, path: "ielts/writing" },
    },
  },
];
