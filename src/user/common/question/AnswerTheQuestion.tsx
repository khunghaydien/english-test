import SelectField from "@/common/field/SelectField";
import { Question, Answer } from "./Choice";
import { Option } from "@/common/field/Option";

export type Instruction = {
  [key: string]: string;
};

type Props = {
  question: Question;
  answered: Answer;
  onChange: (answer: Answer) => void;
  instruction?: Instruction;
};
const AnswerTheQuestion = ({
  question,
  answered,
  onChange,
  instruction,
}: Props) => {
  const handleAnswer = (answer: string, key: string) => {
    const newAnswered = { ...answered };
    newAnswered[key] = answer;
    onChange(newAnswered);
  };
  let option: Option[] = [];
  if (instruction)
    Object.keys(instruction).map((key) => {
      option.push({ value: key, text: instruction[key] });
    });
  return (
    <>
      {Object.keys(question).map((key) => (
        <div key={key} className="question-detail-type--select-item">
          <div className="question-detail-item--number">{key}</div>
          <div className="question-detail-item--answer">
            {instruction ? (
              <SelectField
                selected={[answered[key]]}
                options={option}
                onChange={(selected: string[]) =>
                  handleAnswer(selected[0], key)
                }
                width="120px"
              />
            ) : (
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAnswer(e.target.value, key)
                }
                className={`question-detail-item--input`}
                type="text"
              />
            )}
          </div>
          <div className="question-detail-item--text">
            {question[key].question}
          </div>
        </div>
      ))}
    </>
  );
};
export default AnswerTheQuestion;
