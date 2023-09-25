import { useParams } from "react-router-dom";
import IeltsReading from "@/container/exam/exam-test/IeltsReaing"
const ExamTestPage = () => {
  const { type } = useParams();
  switch (type) {
    case "ielts-reading":
      return <IeltsReading />;
  }
};
export default ExamTestPage;
