import IeltsReading from "@/container/user/exam/IeltsReaing";
import { useParams } from "react-router-dom";
const ExamPage = () => {
  const { type, examType } = useParams();
  console.log(type);
  switch (type) {
    case "ielts-reading":
      return <IeltsReading />;
  }
  switch (type) {
    case "ielts-reading":
      return <IeltsReading />;
    default:
      return <IeltsReading />;
  }
};
export default ExamPage;
