import { exerciseType } from "@/const/Exam";
import MultipleChoiceQuestion from "@/common/exercise/MultipleChoiceQuestion";
import BlankFillQuestion from "@/common/exercise/BlankFillQuestion";
import GapFillQuestion from "@/common/exercise/GapFillQuestion";
import GapTableFillQuestion from "@/common/exercise/GapTableFillQuestion";
import { Answer, ExerciseDetail } from "@/model/exam";
import "./index.scss";
type Props = {
  type: string;
  exercise: string;
  exerciseDetail: ExerciseDetail;
  hint?: string;
  onChange: (answer: Answer) => void;
  answer: Answer;
};
const Exercise = ({
  type,
  exercise,
  exerciseDetail,
  hint,
  answer,
  onChange,
}: Props) => {
  const renderExerciseDetail = (
    type: string,
    exerciseDetail: ExerciseDetail,
    answer: Answer
  ) => {
    const {
      question = {},
      isMultipleChoice,
      instruction,
      clozePassage,
      clozeTable = [],
    } = exerciseDetail;
    switch (type) {
      case exerciseType.MULTIPLE_CHOICE_QUESTION:
        return (
          <MultipleChoiceQuestion
            question={question}
            answer={answer}
            onChange={onChange}
            isMultipleChoice={isMultipleChoice}
          />
        );
      case exerciseType.BLANK_FILL_QUESTION:
        return (
          <BlankFillQuestion
            question={question}
            answer={answer}
            onChange={onChange}
            instruction={instruction}
          />
        );
      case exerciseType.GAP_FILL_QUESTION:
        return (
          <GapFillQuestion
            question={question}
            answer={answer}
            clozePassage={clozePassage}
            onChange={onChange}
            instruction={instruction}
          />
        );
      case exerciseType.GAP_TABLE_FILL_QUESTION:
        return (
          <GapTableFillQuestion
            answer={answer}
            clozeTable={clozeTable}
            onChange={onChange}
            instruction={instruction}
          />
        );
    }
  };

  return (
    <div className="exercise">
      <div className="exercise-question">{exercise}</div>
      <div className="exercise-hint">{hint}</div>
      <div className="exercise-detail">
        {renderExerciseDetail(type, exerciseDetail, answer)}
      </div>
    </div>
  );
};

export default Exercise;
