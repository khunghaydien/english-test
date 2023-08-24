import SelectField from "@/common/field/SelectField";
import { Instruction } from "./AnswerTheQuestion";
import { Answer, Question } from "./Choice";
import { Option } from "@/common/field/Option";
type Props = {
  question: Question;
  clozePassage?: string;
  answered: Answer;
  onChange: (answer: Answer) => void;
  instruction?: Instruction;
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
  let option: Option[] = [];
  if (instruction)
    Object.keys(instruction).map((key) => {
      option.push({ value: key, text: instruction[key] });
    });
  const questions = Object.keys(question);
  parts?.forEach((part, index) => {
    if (index < part.length) {
      textNodes.push(
        <span key={index}>
          <span>{part}</span>
          {questions[index] && (
            <>
              <span className="question-detail-item--number">
                {questions[index]}
              </span>
              {instruction ? (
                <SelectField
                  selected={[answered[questions[index]]]}
                  options={option}
                  onChange={(selected: string[]) =>
                    handleAnswer(selected[0], questions[index])
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
            </>
          )}
        </span>
      );
    }
  });
  return <div className="question-type-input">{textNodes}</div>;
};

export default FillClozePassage;
