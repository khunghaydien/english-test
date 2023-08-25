import SelectField from "@/common/field/SelectField";
import { Answer, Question } from "./Choice";
import { Option } from "@/common/field/Option";
type Props = {
  question: Question;
  clozePassage?: string;
  answered: Answer;
  onChange: (answer: Answer) => void;
  instruction?: Option;
};
const FillClozePassage = ({
  question,
  clozePassage,
  answered,
  onChange,
  instruction,
}: Props) => {
  const parts = clozePassage?.split("___");
  const textNodes: React.ReactNode[] = [];
  const handleAnswer = (answer: string, number: string) => {
    const newAnswered = { ...answered };
    newAnswered[number] = answer;
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
              <span className="number">{questions[index]}</span>
              {instruction ? (
                <SelectField
                  selected={answered[questions[index]]}
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
                  className={`question-detail-item--input`}
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
  return <div className="question-type-input">{textNodes}</div>;
};

export default FillClozePassage;
