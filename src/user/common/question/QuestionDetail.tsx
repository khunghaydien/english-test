import { Option } from "@/common/field/Option";
import Choice, { Question as QuestionProps } from "./Choice";
import AnswerTheQuestion from "./AnswerTheQuestion";
import FillClozePassage from "./FillClozePassage";
import FillClozeTable, { Cell } from "./FillTheClozeTable";

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
  options?: Option;
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
const clozeTableTest: Cell[][] = [
  [
    { clozePassage: "Year" },
    { clozePassage: "Climate" },
    { clozePassage: "Finch’s condition" },
  ],
  [
    { clozePassage: "1977" },
    {
      clozePassage: " ___ ",
      question: {
        23: {},
      },
    },
    {
      clozePassage:
        "small-beak birds failing to survive, without the power to open ___ ",
      question: {
        24: {},
      },
    },
  ],
  [
    { clozePassage: "1985" },
    {
      clozePassage: " ___ brought by El Nino",
      question: {
        25: {},
      },
    },
    {
      clozePassage:
        "big-beak birds dying out, with ___ as the main food resource",
      question: {
        26: {},
      },
    },
  ],
];

const instructionSelect = {
  yes: { text: "Yes" },
  no: { text: "No" },
  notGiven: { text: "Not Given" },
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
        answered={answered}
        onChange={onChange}
      />
    </>
  );
};
export default QuestionDetail;
