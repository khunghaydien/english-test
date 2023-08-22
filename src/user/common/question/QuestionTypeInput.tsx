type QuestionDetailTypeInput = {
  text: string;
  numbers: number[];
};
type Props = {
  questionDetail: QuestionDetailTypeInput;
};
const QuestionTypeInput = ({ questionDetail }: Props) => {
  const { text, numbers } = questionDetail;
  const parts = text.split("___");
  const textNodes: React.ReactNode[] = [];
  const inputNodes: React.ReactNode[] = [];
  parts.forEach((part, index) => {
    textNodes.push(<span key={`text-${index}`}>{part}</span>);
    if (index < part.length) {
      inputNodes.push(<input key={`input-${index}`} type="text" />);
    }
  });
  return (
    <>
      <p>{textNodes}</p>
      <div>{inputNodes}</div>
    </>
  );
};

export default QuestionTypeInput;
