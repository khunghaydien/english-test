import { Answer, Question } from "./QuestionDetail";
type Props = {
  question: Question;
  clozePassage?: string;
  answered: Answer;
  onChange: (answer: Answer) => void;
};
const QuestionTypeInput = ({
  question,
  clozePassage,
  answered,
  onChange,
}: Props) => {
  const parts = clozePassage?.split("___");
  const textNodes: React.ReactNode[] = [];
  const handleAnswer = (answer: string, number: number) => {
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
            <>
              <span className="question-detail-item--number">
                {questions[index]}
              </span>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAnswer(e.target.value, parseInt(questions[index]))
                }
                className={`question-detail-item--input`}
                key={`input-${questions[index]}`}
                type="text"
              />
            </>
          )}
        </span>
      );
    }
  });
  return (
    <>
      <div className="question-type-input">{textNodes}</div>
    </>
  );
};

export default QuestionTypeInput;
