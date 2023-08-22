import classNames from "classnames";
import QuestionTitle, { Props as QuestionsProps } from "./QuestionTitle";
import QuestionDetail, {
  Answer,
  QuestionDetail as QuestionDetailProps,
} from "./QuestionDetail";
import Instruction from "./Instructions";
import { Option } from "@/common/field/Option";
import "./index.scss";
import { Instruction as InstructionProps } from "@/common/table";

type QuestionSet = {
  instructions?: InstructionProps[];
  options?: Option[];
  type: string;
  questionDetail: QuestionDetailProps[] | any;
  questionTitle: QuestionsProps;
};

export type Props = {
  className?: string;
  caption: string;
  onChange: (answered: Answer) => void;
  questionSet: QuestionSet[];
  answered: Answer;
};

const QuestionSet = ({
  className,
  questionSet,
  caption,
  onChange,
  answered,
}: Props) => {
  const onChangeValue = (answered: Answer) => {
    onChange(answered);
  };
  return (
    <div className={classNames("question-set", className)}>
      <div className="question-set-caption">{caption}</div>
      <div className="question-set-list">
        {questionSet.map(
          (
            { questionTitle, questionDetail, options, type, instructions },
            idx
          ) => (
            <div key={idx} className="question-set-item">
              <QuestionTitle
                caption={questionTitle.caption}
                question={questionTitle.question}
                hint={questionTitle.hint}
              />
              <Instruction
                type={type}
                instructions={instructions || undefined}
              />
              <QuestionDetail
                answered={answered}
                type={type}
                options={options ? options : []}
                questionDetails={questionDetail}
                onChange={onChangeValue}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default QuestionSet;
