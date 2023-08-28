import SelectField from "@/common/field/SelectField";
import { Option } from "@/common/field/Option";
import { Answer, Question } from "@/model/exam";
import { styled } from "styled-components";
type Props = {
  question: Question;
  clozePassage?: string;
  answer: Answer;
  onChange: (answer: Answer) => void;
  instruction?: Option;
};
const GapFillQuestion = ({
  question,
  clozePassage,
  answer,
  onChange,
  instruction,
}: Props) => {
  const parts = clozePassage?.split("___");
  const textNodes: React.ReactNode[] = [];
  const handleAnswer = (value: string, number: string) => {
    const newAnswered = { ...answer };
    newAnswered[number] = value;
    onChange(newAnswered);
  };
  const questions = Object.keys(question);
  parts?.forEach((part, index) => {
    if (index < part.length) {
      textNodes.push(
        <span key={index}>
          <span>{part}</span>
          {questions[index] && (
            <span>
              <span className="question-number">{questions[index]}</span>
              {instruction ? (
                <SelectField
                  className="question-select"
                  selected={answer[questions[index]]}
                  options={instruction}
                  onChange={(selected: string) =>
                    handleAnswer(selected, questions[index])
                  }
                  width="120px"
                />
              ) : (
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAnswer(e.target.value, questions[index])
                  }
                  className={`question-input`}
                  key={`input-${questions[index]}`}
                  type="text"
                />
              )}
            </span>
          )}
        </span>
      );
    }
  });
  return <GapFillComponent>{textNodes}</GapFillComponent>;
};

export default GapFillQuestion;
const GapFillComponent = styled.div``;
