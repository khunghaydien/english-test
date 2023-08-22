import { Option } from "@/common/field/Option";
import Radiobox from "@/common/field/Radiobox";
import SelectField from "@/common/field/SelectField";
import QuestionTypeInput from "./QuestionTypeInput";
export type QuestionDetail = {
  number: number;
  text: string;
};
export type Answer = {
  [key: number]: string;
};

export type Props = {
  type: string;
  options: Option[];
  questionDetails: QuestionDetail[] | any;
  onChange: (answer: Answer) => void;
  answered: Answer;
};

const QuestionDetail = ({
  questionDetails,
  onChange,
  options,
  type,
  answered,
}: Props) => {
  const onChangeValue = (selected: string, number: number) => {
    const newAnswered = { ...answered };
    newAnswered[number] = selected;
    onChange(newAnswered);
  };
  const isSelect = type === "YES_NO_NOTGIVEN" || type === "SELECT";
  const isRadiobox = type === "RADIO_BOX";
  const isInput = type === "INPUT";
  return (
    <>
      {/* {isSelect && (
        <div className="question-detail-multiple--select">
          {questionDetails.map(({ number, text }, idx) => (
            <div key={idx} className="question-detail-multiple--select-item">
              <div className="question-detail-item--number">{number}</div>
              <div className="question-detail-item--answer">
                <SelectField
                  selected={[answered[number]]}
                  options={options}
                  onChange={(selected: string[]) =>
                    onChangeValue(selected[0], number)
                  }
                  width="120px"
                />
              </div>
              {text && <div className="question-detail-item--text">{text}</div>}
            </div>
          ))}
        </div>
      )}
      {isRadiobox && (
        <div className="question-detail-single--radiobox">
          {questionDetails.map(({ number, text }, idx) => (
            <div key={idx} className="question-detail-single--radiobox-item">
              <div className="question-detail-single--radiobox-item--question">
                <div className="question-detail-item--number">{number}</div>
                {text && (
                  <div className="question-detail-item--text">{text}</div>
                )}
              </div>
              <Radiobox
                onChange={(selected: string) => onChangeValue(selected, number)}
                options={options}
                value={answered[number]}
              />
            </div>
          ))}
        </div>
      )} */}
      {isInput && <QuestionTypeInput questionDetail={questionDetails} />}
    </>
  );
};
export default QuestionDetail;
