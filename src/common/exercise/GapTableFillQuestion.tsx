import { Option } from "@/common/field/Option";
import FillClozePassage from "./GapFillQuestion";
import { Answer, Question } from "@/type/exam";
import { styled } from "styled-components";

export type Cell = {
  clozePassage: string;
  question?: Question;
};
type Props = {
  clozeTable: Cell[][];
  answer: Answer;
  onChange: (answer: Answer) => void;
  instruction?: Option;
};
const GapTableFillQuestion = ({
  clozeTable,
  answer,
  onChange,
  instruction,
}: Props) => {
  return (
    <GapTableFill>
      <tbody>
        {clozeTable.map((row, idx) => (
          <tr key={idx}>
            {row.map((cell, idx) => (
              <td key={idx}>
                <FillClozePassage
                  clozePassage={cell.clozePassage}
                  question={cell.question || {}}
                  answer={answer}
                  onChange={onChange}
                  instruction={instruction}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </GapTableFill>
  );
};

export default GapTableFillQuestion;
const GapTableFill = styled.table``;
