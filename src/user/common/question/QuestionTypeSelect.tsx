import { Option } from "@/common/field/Option";
import { Answer, Question } from "./QuestionDetail";
import SelectField from "@/common/field/SelectField";

type Props = {
  question: Question;
  answered: Answer;
  options?: Option[];
  onChange: (answer: Answer) => void;
};

const QuestionTypeSelect = ({
  question,
  answered,
  options,
  onChange,
}: Props) => {
  const handleAnswer = (answer: string, number: number) => {
    const newAnswered = { ...answered };
    newAnswered[number] = answer;
    onChange(newAnswered);
  };
  return (
    <div className="question-detail-type--select">
      {Object.keys(question).map((key) => (
        <div key={key} className="question-detail-type--select-item">
          <div className="question-detail-item--number">{key}</div>
          <div className="question-detail-item--answer">
            <SelectField
              selected={[answered[parseInt(key)]]}
              options={options || []}
              onChange={(selected: string[]) =>
                handleAnswer(selected[0], parseInt(key))
              }
              width="120px"
            />
          </div>
          <div className="question-detail-item--text">
            {question[parseInt(key)]}
          </div>
        </div>
      ))}
    </div>
  );
};
export default QuestionTypeSelect;
