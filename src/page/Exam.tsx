import IeltsReading from "@/container/user/exam/IeltsReaing";
import { useParams } from "react-router-dom";
const ExamPage = () => {
  const { examType } = useParams();
  console.log(examType);
  switch (examType) {
    case "ielts-reading":
      return <IeltsReading />;
    default:
      return <IeltsReading />;
  }
};
export default ExamPage;
