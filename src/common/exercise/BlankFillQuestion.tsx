import SelectField from "@/common/field/SelectField";
import { Option } from "@/common/field/Option";
import { Answer, Question } from "@/type/exam";
import { styled } from "styled-components";

type Props = {
  question: Question;
  answer: Answer;
  onChange: (answer: Answer) => void;
  instruction?: Option;
};

const BlankFillQuestion = ({
  question,
  answer,
  onChange,
  instruction,
}: Props) => {
  const handleAnswer = (value: string, key: string) => {
    const newAnswered = answer;
    newAnswered[key] = value;
    onChange(newAnswered);
  };
  return (
    <BlankFillComponent>
      {Object.keys(question).map((key) => (
        <div key={key} className="blank-fill-question">
          <div className="question-number">{key}</div>
          <div className="question-answer">
            {instruction ? (
              <SelectField
                className="question-select"
                selected={answer[key]}
                options={instruction}
                onChange={(selected: string) => handleAnswer(selected, key)}
                width="120px"
              />
            ) : (
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAnswer(e.target.value, key)
                }
                className={`question-input`}
                type="text"
              />
            )}
          </div>
          <div className="question-text">{question[key].question}</div>
        </div>
      ))}
    </BlankFillComponent>
  );
};
export default BlankFillQuestion;
const BlankFillComponent = styled.div`
  .blank-fill-question {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: unset;
    }
  }
`;
