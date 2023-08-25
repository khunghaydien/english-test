import { Option } from "@/common/field/Option";
import { Answer, Question } from "./Choice";
import FillClozePassage from "./FillClozePassage";

export type Cell = {
  clozePassage: string;
  question?: Question;
};
type Props = {
  clozeTable: Cell[][];
  answered: Answer;
  onChange: (answer: Answer) => void;
  instruction?: Option;
};
const FillClozeTable = ({
  clozeTable,
  answered,
  onChange,
  instruction,
}: Props) => {
  return (
    <table border={1}>
      <tbody>
        {clozeTable.map((row, idx) => (
          <tr key={idx}>
            {row.map((cell, idx) => (
              <td key={idx}>
                <FillClozePassage
                  clozePassage={cell.clozePassage}
                  question={cell.question || {}}
                  answered={answered}
                  onChange={onChange}
                  instruction={instruction}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FillClozeTable;
