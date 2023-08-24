import { Option } from "@/common/field/Option";
import Radiobox from "@/common/field/Radiobox";
import { Answer, Question } from "./QuestionDetail";

type Props = {
  question: Question;
  options?: Option[];
  answered: Answer;
  onChange: (answer: Answer) => void;
};
const QuestionTypeRadiobox = ({
  question,
  options,
  answered,
  onChange,
}: Props) => {
  const questionNumber = parseInt(Object.keys(question)[0]);
  const handleAnswer = (answer: string) => {
    const newAnswered = { ...answered };
    newAnswered[questionNumber] = answer;
    onChange(newAnswered);
  };
  return (
    <div className="question-detail-type--radiobox">
      <div className="question-detail-type--radiobox-item">
        <div className="question-detail-type--radiobox-item--question">
          <div className="question-detail-item--number">{questionNumber}</div>
          <div className="question-detail-item--text">
            {question[questionNumber]}
          </div>
        </div>
        <Radiobox
          onChange={(selected: string) => handleAnswer(selected)}
          options={options || []}
          value={answered[questionNumber]}
        />
      </div>
    </div>
  );
};
export default QuestionTypeRadiobox;
