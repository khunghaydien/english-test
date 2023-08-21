import classNames from "classnames";
import QuestionTitle, { Props as QuestionsProps } from "./QuestionTitle";
import QuestionDetail, {
  QuestionDetail as QuestionDetailProps,
} from "./QuestionDetail";
import Instruction from "./Instructions";
import { Option } from "@/common/field/Option";
import "./index.scss";

type QuestionSet = {
  options?: Option[];
  type: string;
  questionDetail: QuestionDetailProps[];
  questionTitle: QuestionsProps;
};

export type Props = {
  className?: string;
  caption: string;
  onChange: (selected: string) => void;
  questionSet: QuestionSet[];
};

const QuestionSet = ({ className, questionSet, caption, onChange }: Props) => {
  const onChangeValue = (selected: string) => {
    onChange(selected);
  };
  return (
    <div className={classNames("question-set", className)}>
      <div className="question-set-caption">{caption}</div>
      <div className="question-set-list">
        {questionSet.map(
          ({ questionTitle, questionDetail, options, type }, idx) => (
            <div key={idx} className="question-set-item">
              <QuestionTitle
                caption={caption}
                question={questionTitle.question}
                hint={questionTitle.hint}
              />
              <Instruction type={type} />
              <QuestionDetail
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
