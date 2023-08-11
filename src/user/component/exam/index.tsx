import BodyExam from "./Body";
import HeaderExam from "./Header";
import "./index.scss";
const Exam = () => {
  return (
    <>
      <HeaderExam title="IELTS Reading Tests" type="ielts-reading" />
      <BodyExam />
    </>
  );
};

export default Exam;
