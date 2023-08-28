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
      reading: { text: "Reading" },
      listening: { text: "Listening" },
    },
  },
  {
    value: "ielts",
    text: "Thư viện luyện đề thi IELTS",
    subValue: {
      reading: { text: "Reading" },
      listening: { text: "Listening" },
      speaking: { text: "Speaking" },
      writing: { text: "Writing" },
    },
  },
];
