import Radiobox from "@/common/field/Radiobox";
import Checkbox from "@/common/field/Checkbox";

type Option = {
  [key: string]: string;
};

type QuestionInfo = {
  question: string;
  option?: Option;
};

export type Question = {
  [key: string]: QuestionInfo;
};

export type Answer = {
  [key: string]: string;
};

type Props = {
  question: Question;
  answered: Answer;
  onChange: (answer: Answer) => void;
  isMultipleChoice?: boolean;
};

const Choice = ({ question, answered, onChange, isMultipleChoice }: Props) => {
  const handleAnswer = (answer: string, key: string) => {
    const newAnswered = { ...answered };
    newAnswered[key] = answer;
    onChange(newAnswered);
  };
  return (
    <div className="question-choice">
      {Object.keys(question).map((key) => (
        <div key={key} className="question-choice-item">
          <div className="question-number">
            {key}
            {question[key].question}
          </div>
          {isMultipleChoice ? (
            <Checkbox
              onChange={(selected: string) => handleAnswer(selected, key)}
              options={question[key].option}
              value={answered[key]}
            />
          ) : (
            <Radiobox
              onChange={(selected: string) => handleAnswer(selected, key)}
              options={question[key].option}
              value={answered[key]}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default Choice;
