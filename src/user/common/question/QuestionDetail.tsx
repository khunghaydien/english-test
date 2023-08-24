import { Option } from "@/common/field/Option";
import Choice, { Question as QuestionProps } from "./Choice";
import AnswerTheQuestion from "./AnswerTheQuestion";
import FillClozePassage from "./FillClozePassage";
import FillClozeTable from "./FillTheClozeTable";

export type Question = {
  [key: number]: string;
};
export type Answer = {
  [key: number]: string;
};

export type Props = {
  type: string;
  question: Question;
  clozePassage?: string;
  options?: Option[];
  answered: Answer;
  onChange: (answer: Answer) => void;
};

const questionChoice: QuestionProps = {
  1: {
    question: "What is your favorite color?",
    option: {
      A: "Red",
      B: "Blue",
      C: "Green",
    },
  },
  2: {
    question: "What is your favorite animal?",
    option: {
      A: "Dog",
      B: "Cat",
      C: "Rabbit",
    },
  },
};

const questionSelect = {
  4: {
    question: "What is your favorite color?",
  },
  5: {
    question: "What is your favorite animal?",
  },
};

const questionCloze = {
  23: {
    question: "",
  },
  24: {
    question: "",
  },
  25: {
    question: "",
  },
  26: {
    question: "",
  },
  27: {
    question: "",
  },
};
const questionClozeTable = {
  23: {
    question: "",
  },
  24: {
    question: "",
  },
  25: {
    question: "",
  },
};
const clozeTableTest: string[][] = [
  ["test", "test ___ abc", "abc"],
  ["test", "test ___ abc", "acsjk ___ sks"],
];
const instructionSelect = {
  yes: "Yes",
  no: "No",
  notGiven: "Not Given",
};
const QuestionDetail = ({ type, answered, onChange, clozePassage }: Props) => {
  const isSelect = type === "YES_NO_NOTGIVEN" || type === "SELECT";
  const isRadiobox = type === "RADIO_BOX";
  const isInput = type === "INPUT";
  return (
    <>
      {isSelect && (
        <AnswerTheQuestion
          question={questionSelect}
          answered={answered}
          onChange={onChange}
        />
      )}
      {isRadiobox && (
        <>
          <Choice
            question={questionChoice}
            answered={answered}
            onChange={onChange}
            isMultipleChoice
          />
          <Choice
            question={questionChoice}
            answered={answered}
            onChange={onChange}
            isMultipleChoice={false}
          />
        </>
      )}
      {isInput && (
        <>
          <FillClozePassage
            question={questionCloze}
            answered={answered}
            clozePassage={clozePassage}
            onChange={onChange}
          />
          <FillClozePassage
            question={questionCloze}
            answered={answered}
            clozePassage={clozePassage}
            onChange={onChange}
            instruction={instructionSelect}
          />
        </>
      )}
      <FillClozeTable
        clozeTable={clozeTableTest}
        question={questionClozeTable}
        answered={answered}
        onChange={onChange}
      />
    </>
  );
};
export default QuestionDetail;
