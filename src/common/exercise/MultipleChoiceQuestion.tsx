import Radiobox from "@/common/field/Radiobox";
import Checkbox from "@/common/field/Checkbox";
import { Answer, Question } from "@/type/exam";
import { styled } from "styled-components";

type Props = {
  question: Question;
  answer: Answer;
  onChange: (answer: Answer) => void;
  isMultipleChoice?: boolean;
};

const MultipleChoiceQuestion = ({
  question,
  answer,
  onChange,
  isMultipleChoice,
}: Props) => {
  const handleAnswer = (value: string, key: string) => {
    const newAnswered = { ...answer };
    newAnswered[key] = value;
    onChange(newAnswered);
  };
  return (
    <MultipleChoice>
      {Object.keys(question).map((key) => (
        <div key={key} className="multiple-choice-question">
          <div className="multiple-choice-question-title">
            <div className="question-number">{key}</div>
            <div className="question-text">{question[key].question}</div>
          </div>
          {isMultipleChoice ? (
            <Checkbox
              className={"question-checkbox"}
              onChange={(selected: string) => handleAnswer(selected, key)}
              options={question[key].option}
              value={answer[key]}
            />
          ) : (
            <Radiobox
              className={"question-radiobox"}
              onChange={(selected: string) => handleAnswer(selected, key)}
              options={question[key].option}
              value={answer[key]}
            />
          )}
        </div>
      ))}
    </MultipleChoice>
  );
};
export default MultipleChoiceQuestion;
const MultipleChoice = styled.div`
  .multiple-choice-question-title {
    display: flex;
    align-items: center;
  }
`;
