import Global from "@/container/common/global";
import "./index.scss";
import classNames from "classnames";
import { useEffect, useState, useRef } from "react";
import QuestionSet from "@/user/common/question/QuestionSet";
import { Answer } from "@/user/common/question/QuestionDetail";

type Props = {
  reading: any;
  answered: Answer;
  fetchReading: () => void;
};
export default function Reading({ reading, fetchReading, answered }: Props) {
  useEffect(() => {
    fetchReading();
  }, []);
  const [currentAnsered, setCurrentAnswered] = useState(answered);
  const setQuestions = [
    {
      caption: "SECTION 1: QUESTIONS 1-14",
      questions: [
        {
          type: "YES_NO_NOTGIVEN",
          options: [
            {
              text: "Yes",
              value: "Yes",
            },
            {
              text: "No",
              value: "No",
            },
            {
              text: "Not Given",
              value: "NotGiven",
            },
          ],
          questionDetail: [
            {
              number: 1,
              text: "It seems predictable that some species will disappear.",
            },
            {
              number: 2,
              text: " The nature of the Earth and human biology make it impossible for human beings to survive another million years.",
            },
            {
              number: 3,
              text: "An eruption by Yellowstone is likely to be more destructive than previous volcanic eruptions.",
            },
            {
              number: 4,
              text: "There is a greater chance of the Earth being hit by small asteroids than large ones.",
            },
            {
              number: 5,
              text: "If the world becomes uninhabitable, it is most likely to be as a result of a natural disaster.",
            },
          ],
          questionTitle: {
            caption: "Questions 1-5",
            question:
              "Complete the notes below.Write NO MORE THAN TWO WORDS OR A NUMBER for each answer",
            hint: "Write your questionDetail in boxes 1-5 on your answer sheet.",
          },
        },
        {
          type: "SELECT",
          instructions: [
            {
              value: "",
              instruction: "List of times & places",
            },
            {
              value: "A",
              instruction: "In the UK today",
            },

            {
              value: "B",
              instruction: "In 19th-century Norway",
            },
            {
              value: "C",
              instruction: "In 19th-century Sweden",
            },
            {
              value: "D",
              instruction: "In 19th-century England",
            },
            {
              value: "E",
              instruction: "In Denmark today",
            },
            {
              value: "F",
              instruction: "In 9th-century Persia",
            },
            {
              value: "G",
              instruction: "In mid-20th century Soviet Union",
            },
            {
              value: "H",
              instruction: "In Russia today",
            },
          ],
          options: [
            {
              text: "A",
              value: "A",
            },
            {
              text: "B",
              value: "B",
            },
            {
              text: "C",
              value: "C",
            },
            {
              text: "D",
              value: "D",
            },
            {
              text: "E",
              value: "E",
            },
            {
              text: "F",
              value: "F",
            },
            {
              text: "G",
              value: "G",
            },
            {
              text: "H",
              value: "H",
            },
          ],
          questionDetail: [
            {
              number: 6,
              text: " A geographer documents Viking culture as it happens.",
            },
            {
              number: 7,
              text: "A philosopher classifies cultures hierarchically.",
            },

            {
              number: 8,
              text: " Historians assert that Viking history is based more on legends than facts.",
            },
            {
              number: 9,
              text: "Young people learn about Viking cultural and economic activities.",
            },

            {
              number: 10,
              text: "People see themselves as unrelated to Vikings.",
            },
            {
              number: 11,
              text: " An historian claims Viking colonists to modem-day Canada came from his land.",
            },
            {
              number: 12,
              text: "Viking conquests are exaggerated to bolster the country’s ego after a territorial loss.",
            },
            {
              number: 13,
              text: "DNA tests show locals are closely related to Swedes.",
            },
          ],
          questionTitle: {
            caption: "Questions 6-13",
            question:
              "Look at the following statements and the list of times and places below.Match each statement with the correct place or time: A-H.",
            hint: "Write the correct letter, A-H, in boxes 6-13 on your answer sheet.",
          },
        },
        {
          type: "RADIO_BOX",
          options: [
            {
              value: "A",
              text: "A brief history of Vikings",
            },
            {
              value: "B",
              text: "Recent Viking discoveries",
            },
            {
              value: "C",
              text: "A modem fascination with Vikings",
            },
            {
              value: "D",
              text: "Interpretations of Viking history",
            },
            {
              value: "E",
              text: "Viking history and nationalism",
            },
          ],
          questionDetail: [
            {
              number: 14,
              text: "Which might be a suitable title for passage?",
            },
          ],
          questionTitle: {
            caption: "Question 14",
            question: "Choose the correct letter A-E.",
            hint: "Write the correct letter in box 14 on your answer sheet.",
          },
        },
        {
          type: "INPUT",
          questionDetail: {
            text: "The Earth could become uninhabitable, like other planets, through a major change in the ___ . Volcanic eruptions of ___  can lead to shortages of ___ in a wide area. An asteroid hitting the Earth could create a ___  that would result in a new ___ . Plans are being made to use ___ to deflect asteroids heading for the Earth.",
            number: [21, 22, 23, 24, 25, 26],
          },
          questionTitle: {
            caption: "Questions 21-26",
            question:
              "complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            hint: "Write your answers in boxes 21-26 on your answer sheet.",
          },
        },
      ],
    },
  ];
  const onChangeValue = (answered: Answer) => {
    console.log(answered);
    setCurrentAnswered(answered);
  };
  const leftPaneRef = useRef<HTMLDivElement>(null);
  const rightPaneRef = useRef<HTMLDivElement>(null);
  const gutterHorizontal = useRef<HTMLDivElement>(null);
  const [leftPaneWidth, setLeftPaneWidth] = useState<number>(50);
  const [clientX, setClientX] = useState<number>(0);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setClientX(e.clientX);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (e: MouseEvent) => {
    const deltaX = e.clientX - clientX;
    const totalWidth = gutterHorizontal.current!.parentElement!.offsetWidth;
    const leftWidth = leftPaneWidth + (deltaX / totalWidth) * 100;
    if (leftWidth >= 20 && leftWidth <= 80) {
      setLeftPaneWidth(leftWidth);
    }
  };
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  return (
    <div className={classNames("reading")}>
      <Global />
      <div
        className="gutter-horizontal"
        ref={gutterHorizontal}
        onMouseDown={handleMouseDown}
        style={{ left: `calc(${leftPaneWidth}% - 10px)` }}
      ></div>
      <div
        className="left-pane"
        ref={leftPaneRef}
        style={{ width: `${leftPaneWidth}%` }}
      >
        <div className="reading-passage">
          <div className="reading-content">{reading}</div>
        </div>
      </div>
      <div
        className="right-pane"
        ref={rightPaneRef}
        style={{ width: `${100 - leftPaneWidth}%` }}
      >
        <div className="reading-question">
          {setQuestions.map(({ caption, questions }, idx) => (
            <QuestionSet
              key={idx}
              caption={caption}
              onChange={onChangeValue}
              questionSet={questions}
              answered={currentAnsered}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
