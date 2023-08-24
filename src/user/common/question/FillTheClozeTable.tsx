import { useEffect, useState } from "react";
import { Instruction } from "./AnswerTheQuestion";
import { Answer, Question } from "./Choice";
import FillClozePassage from "./FillClozePassage";
type Props = {
  question: Question;
  clozeTable?: string[][];
  answered: Answer;
  onChange: (answer: Answer) => void;
  instruction?: Instruction;
};
const RenderTable = ({
  question,
  clozeTable = [],
  answered,
  onChange,
  instruction,
}: Props) => {
  const resultTable: React.ReactNode[][] = [];
  const [questions, setQuestions] = useState(question);
  useEffect(() => {
    let newQuestion = {};
    for (let i = 0; i < clozeTable.length; i++) {
      const row: React.ReactNode[] = [];
      for (let j = 0; j < clozeTable[i].length; j++) {
        const cell = clozeTable[i][j];
        const parts = cell.split("___");
        if (parts.length > 1 && newQuestion) {
          const currentQuestion: Question = Object.keys(questions)
            .splice(0, parts.length)
            .reduce((acc, key) => {
              acc[key] = questions[key];
              return acc;
            }, {} as Question);
          newQuestion = Object.keys(questions)
            .splice(parts.length)
            .reduce((acc, key) => {
              acc[key] = questions[key];
              return acc;
            }, {} as Question);
          setQuestions(newQuestion);
          console.log(currentQuestion);
          console.log(questions);
          row.push(
            <FillClozePassage
              question={currentQuestion}
              clozePassage={cell}
              answered={answered}
              onChange={onChange}
              instruction={instruction}
            />
          );
        } else row.push(cell);
      }
      resultTable.push(row);
    }
  }, []);
  return (
    <table>
      <tbody>
        {resultTable.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <td key={columnIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const FillClozeTable = ({
  question,
  clozeTable,
  answered,
  onChange,
  instruction,
}: Props) => {
  return (
    <div>
      <h1>Rendered Table</h1>
      <RenderTable
        clozeTable={clozeTable}
        question={question}
        answered={answered}
        onChange={onChange}
        instruction={instruction}
      />
    </div>
  );
};
export default FillClozeTable;
