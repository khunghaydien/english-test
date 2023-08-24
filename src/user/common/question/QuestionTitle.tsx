export type Props = {
  caption: string;
  question: string;
  hint?: string;
};
const QuestionTitle = ({ caption, question, hint }: Props) => {
  return (
    <div className="question">
      <div className="question-caption">{caption}</div>
      <div className="question-title">{question}</div>
      <div className="question-title">{hint}</div>
    </div>
  );
};
export default QuestionTitle;
