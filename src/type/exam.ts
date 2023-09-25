import { Option } from "@/common/field/Option";
import { Cell } from "@/common/exercise/GapTableFillQuestion";

type QuestionOption = {
  [key: string]: string;
};

export type Instruction = Option;

export type QuestionDetail = {
  question?: string;
  option?: QuestionOption;
};

export type Question = {
  [key: string]: QuestionDetail;
};

export type Answer = {
  [key: string]: string;
};

export type ExerciseDetail = {
  question?: Question;
  isMultipleChoice?: boolean;
  instruction?: Option;
  clozePassage?: string;
  clozeTable?: Cell[][];
};
