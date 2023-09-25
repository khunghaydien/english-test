import ExamSet from "@/common/exam-set";
import { mocExamSet } from "@/const/Exam";
import "./Set.scss";
import classNames from "classnames";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Comment from "@/common/comment";
const ROOT = "exam-set";
type PracticeItemProps = {
  type: string;
  process: number;
  id: string;
  examType?: string;
};
const PracticeItem = ({ type, process, id, examType }: PracticeItemProps) => {
  const icon =
    type === "listening"
      ? "icon-assistive-listening-systems"
      : type === "speaking"
        ? "icon-mic"
        : type === "reading"
          ? "icon-book"
          : type === "writing"
            ? "icon-pencil"
            : "";
  return (
    <div className="practice-item">
      <div className="practice-item__header">
        <div className={classNames(icon, "practice-item--icon")}></div>
        <div className="progress">{process} %</div>
      </div>
      <NavLink to={`/exam/${examType}/${type}/${id}`}>
        <Test type={type}>
          <span className="icon-flash"></span>
          Làm bài
        </Test>
      </NavLink>
    </div>
  );
};
const Test = styled.div<{ type: string }>`
  width: 100px;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${({ type }) =>
    type === `listening`
      ? `#32b4c8`
      : type === `speaking`
        ? `#327846`
        : type === `reading`
          ? `#faaa5a`
          : type === `writing`
            ? `#c86478`
            : ``}
  }
  span {
    margin-right: 10px;
    cursor: pointer;
  }
`;
type ExamItemProps = {
  type?: string;
};
const ExamItem = ({ type }: ExamItemProps) => {
  type MocExamItem = {
    [key: string]: {
      id: string;
      process: number;
    };
  };
  const mocToeicExamItem: MocExamItem =
    type === "toeic"
      ? {
        listening: {
          id: "1",
          process: 100,
        },
        writing: {
          id: "1",
          process: 50,
        },
      }
      : {
        listening: {
          id: "1",
          process: 100,
        },
        writing: {
          id: "1",
          process: 50,
        },
        reading: {
          id: "1",
          process: 100,
        },
        speaking: {
          id: "1",
          process: 50,
        },
      };
  return (
    <>
      {Object.keys(mocToeicExamItem).map((key) => (
        <PracticeItem
          id={mocToeicExamItem[key].id}
          type={key}
          examType={type}
          process={mocToeicExamItem[key].process}
          key={key}
        />
      ))}
    </>
  );
};
const mocHeader = [
  "CÁC ĐỀ LUYỆN TẬP",
  "LISTENING",
  "READING",
  "WRITING",
  "SPEAKING",
];
const SetComponent = () => {
  return (
    <div className={`${ROOT}`}>
      <div className={`${ROOT}__title`}>
        <ExamSet />
      </div>
      <div className={`${ROOT}__list--header`}>
        {mocHeader.map((item, idx) => (
          <div key={idx} className={`${ROOT}__list--header-item`}>
            <Title type={item}>{item}</Title>
          </div>
        ))}
      </div>
      <div className={`${ROOT}__list`}>
        {mocExamSet.map((mocExamSet, idx) => (
          <div key={idx} className={`${ROOT}__item`}>
            <div className={`${ROOT}__item--name`}>
              <div>{mocExamSet.name}</div>
            </div>
            <div className={`${ROOT}__item--exam`}>
              <ExamItem type={mocExamSet.type} />
            </div>
          </div>
        ))}
      </div>
      <Comment />
    </div>
  );
};
const Title = styled.div<{ type: string }>`
color: ${({ type }) =>
    type === `LISTENING`
      ? `#32b4c8`
      : type === `SPEAKING`
        ? `#327846`
        : type === `WRITING`
          ? `#faaa5a`
          : type === `READING`
            ? `#c86478`
            : ``}
  }
`;
export default SetComponent;
