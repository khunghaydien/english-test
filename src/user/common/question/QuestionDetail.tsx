import { Option } from "@/common/field/Option";
import SelectField from "@/common/field/SelectField";
export type QuestionDetail = {
  number: number;
  text: string;
};

export type Props = {
  type: string;
  options: Option[];
  questionDetails: QuestionDetail[];
  onChange: (selected: string) => void;
};

const QuestionDetail = ({
  questionDetails,
  onChange,
  options,
  type,
}: Props) => {
  const onChangeValue = (selected: string[]) => {
    onChange(selected[0]);
  };
  const isSelect = type === "YES_NO_NOTGIVEN" || type === "SELECT";
  const isRadiobox = type === "RADIO_BOX";
  return (
    <div className="question-detail">
      {questionDetails.map(({ number, text }, idx) => (
        <div key={idx} className="question-detail-item">
          <div className="question-detail-item--number">{number}</div>
          <div className="question-detail-item--answer">
            {isSelect && (
              <SelectField
                options={options}
                onChange={onChangeValue}
                width="120px"
              />
            )}
          </div>
          {text && <div className="question-detail-item--text">{text}</div>}
          {isRadiobox && <>{}</>}
        </div>
      ))}
    </div>
  );
};
export default QuestionDetail;
