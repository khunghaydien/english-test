import classNames from "classnames";
import QuestionTitle from "./QuestionTitle";
import QuestionDetail, { Answer, Question } from "./QuestionDetail";
import Instruction from "./Instructions";
import "./index.scss";
import { Option } from "@/common/field/Option";

export type QuestionProps = {
  type: string;
  titleCaption: string;
  title: string;
  titleHint?: string;
  instruction?: any;
  question: Question;
  clozePassage?: string;
  options?: Option[];
};

export type Props = {
  className?: string;
  caption: string;
  onChange: (answered: Answer) => void;
  questions: QuestionProps[];
  answered: Answer;
};

const QuestionSet = ({
  className,
  questions,
  caption,
  onChange,
  answered,
}: Props) => {
  return (
    <div className={classNames("question-set", className)}>
      <div className="question-set-caption">{caption}</div>
      <div className="question-set-list">
        {questions.map(
          (
            {
              type,
              titleCaption,
              titleHint,
              instruction,
              question,
              clozePassage,
              options,
              title,
            },
            idx
          ) => (
            <div key={idx} className="question-set-item">
              <QuestionTitle
                caption={titleCaption}
                question={title}
                hint={titleHint}
              />
              <Instruction type={type} instructions={instruction} />
              <QuestionDetail
                type={type}
                question={question}
                options={options}
                answered={answered}
                onChange={onChange}
                clozePassage={clozePassage}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default QuestionSet;
