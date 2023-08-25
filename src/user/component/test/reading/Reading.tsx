import Global from "@/container/common/global";
import "./index.scss";
import classNames from "classnames";
import { useEffect, useState, useRef } from "react";
import { Answer, ExerciseDetail } from "@/model/exam";
import Exercise from "@/user/common/exercise";

type Props = {
  reading: any;
  answer: Answer;
  fetchReading: () => void;
};

type Exercise = {
  type: string;
  exercise: string;
  exerciseDetail: ExerciseDetail;
  hint?: string;
};

const exercise: Exercise[] = [
  {
    type: "BLANK_FILL_QUESTION",
    exercise: "chúng ta không giống nhau",
    exerciseDetail: {
      question: {
        1: {
          question: "a charming lady in Nash’s eyes",
        },
        2: {
          question:
            " Nash’s passion for following particularly appreciated artists",
        },
        3: {
          question: "Nash’s works with contrast elements",
        },
        4: {
          question:
            "the noticeable impact on Nash’s growth exerted from the rearing environment",
        },
        5: {
          question:
            "high praise for Nash’s unique taste of presenting his works",
        },
      },
      isMultipleChoice: undefined,
      instruction: undefined,
      clozePassage: undefined,
      clozeTable: undefined,
    },
    hint: "",
  },
  {
    type: "BLANK_FILL_QUESTION",
    exercise: "chúng ta không giống nhau",
    exerciseDetail: {
      question: {
        6: {
          question: "a charming lady in Nash’s eyes",
        },
        7: {
          question:
            " Nash’s passion for following particularly appreciated artists",
        },
        8: {
          question: "Nash’s works with contrast elements",
        },
        9: {
          question:
            "the noticeable impact on Nash’s growth exerted from the rearing environment",
        },
        10: {
          question:
            "high praise for Nash’s unique taste of presenting his works",
        },
      },
      instruction: {
        A: {
          text: "A",
        },
        B: {
          text: "B",
        },
        C: {
          text: "C",
        },
        D: {
          text: "D",
        },
        E: {
          text: "E",
        },
      },
    },
  },
  {
    type: "GAP_FILL_QUESTION",
    exercise: "chúng ta không giống nhau",
    exerciseDetail: {
      question: {
        11: {},
        12: {},
        13: {},
        14: {},
        15: {},
      },
      clozePassage: `The Earth could become uninhabitable, like other planets, through a major change in the ___
      . Volcanic eruptions of ___
      can lead to shortages of ___
      in a wide area. An asteroid hitting the Earth could create a ___
      that would result in a new ___
      . Plans are being made to use ___
      to deflect asteroids heading for the Earth.`,
      instruction: {
        yes: { text: "Yes" },
        no: { text: "No" },
        notGiven: { text: "Not Given" },
      },
    },
  },
  {
    type: "GAP_FILL_QUESTION",
    exercise: "chúng ta không giống nhau",
    exerciseDetail: {
      question: {
        16: {},
        17: {},
        18: {},
        19: {},
        20: {},
      },
      clozePassage: `The Earth could become uninhabitable, like other planets, through a major change in the ___
      . Volcanic eruptions of ___
      can lead to shortages of ___
      in a wide area. An asteroid hitting the Earth could create a ___
      that would result in a new ___
      . Plans are being made to use ___
      to deflect asteroids heading for the Earth.`,
    },
  },
  {
    type: "MULTIPLE_CHOICE_QUESTION",
    exercise: "chúng ta không giống nhau",
    exerciseDetail: {
      question: {
        21: {
          question: "What is the writer’s purpose in Reading Passage 2?",
          option: {
            A: "to propose a new theory about the causes of natural disasters",
            B: "to prove that generally held beliefs about the future are all mistaken",
            C: "to present a range of opinions currently held by scientists",
            D: "to argue the need for a general change in behavior",
          },
        },
        24: {
          question: "What is the writer’s purpose in Reading Passage 2?",
          option: {
            A: "to propose a new theory about the causes of natural disasters",
            B: "to prove that generally held beliefs about the future are all mistaken",
            C: "to present a range of opinions currently held by scientists",
            D: "to argue the need for a general change in behavior",
          },
        },
      },
    },
  },
  {
    type: "MULTIPLE_CHOICE_QUESTION",
    exercise: "chúng ta không giống nhau",
    exerciseDetail: {
      question: {
        22: {
          question: "What is the writer’s purpose in Reading Passage 2?",
          option: {
            A: "to propose a new theory about the causes of natural disasters",
            B: "to prove that generally held beliefs about the future are all mistaken",
            C: "to present a range of opinions currently held by scientists",
            D: "to argue the need for a general change in behavior",
          },
        },
        23: {
          question: "What is the writer’s purpose in Reading Passage 2?",
          option: {
            A: "to propose a new theory about the causes of natural disasters",
            B: "to prove that generally held beliefs about the future are all mistaken",
            C: "to present a range of opinions currently held by scientists",
            D: "to argue the need for a general change in behavior",
          },
        },
      },
      isMultipleChoice: true,
    },
  },
  {
    type: "GAP_TABLE_FILL_QUESTION",
    exercise: "chúng ta không giống nhau",
    exerciseDetail: {
      clozeTable: [
        [
          {
            clozePassage: `
      Origins:`,
            question: {},
          },
          {
            clozePassage: `
            Word ‘Viking’ is ___ 
            Vikings came from Scandinavia.`,
            question: {
              25: {},
            },
          },
        ],
        [
          {
            clozePassage: `Dates of the Viking Age`,
            question: {},
          },
          {
            clozePassage: `In Britain: AD ___ -1066 Length varies elsewhere`,
            question: {
              26: {},
            },
          },
        ],
        [
          {
            clozePassage: `Territorial extent:`,
            question: {},
          },
          {
            clozePassage: `In doubt – but most of Europe
            Possibly raided as far away as ___
            `,
            question: {
              27: {},
            },
          },
        ],
        [
          {
            clozePassage: `End of the Viking Age:`,
            question: {},
          },
          {
            clozePassage: `Vikings had assimilated into ___ 
            , & adopted a new ___ 
            system.
            `,
            question: {
              28: {},
            },
          },
        ],
      ],
      instruction: {
        yes: { text: "Yes" },
        no: { text: "No" },
        notGiven: { text: "Not Given" },
      },
    },
  },
  {
    type: "GAP_TABLE_FILL_QUESTION",
    exercise: "chúng ta không giống nhau",
    exerciseDetail: {
      clozeTable: [
        [
          {
            clozePassage: `
      Origins:`,
            question: {},
          },
          {
            clozePassage: `
            Word ‘Viking’ is ___ 
            Vikings came from Scandinavia.`,
            question: {
              25: {},
            },
          },
        ],
        [
          {
            clozePassage: `Dates of the Viking Age`,
            question: {},
          },
          {
            clozePassage: `In Britain: AD ___ -1066 Length varies elsewhere`,
            question: {
              26: {},
            },
          },
        ],
        [
          {
            clozePassage: `Territorial extent:`,
            question: {},
          },
          {
            clozePassage: `In doubt – but most of Europe
            Possibly raided as far away as ___
            `,
            question: {
              27: {},
            },
          },
        ],
        [
          {
            clozePassage: `End of the Viking Age:`,
            question: {},
          },
          {
            clozePassage: `Vikings had assimilated into ___ 
            , & adopted a new ___ 
            system.
            `,
            question: {
              28: {},
            },
          },
        ],
      ],
    },
  },
];
export default function Reading({ reading, fetchReading, answer }: Props) {
  useEffect(() => {
    fetchReading();
  }, []);
  const [currentAnser, setCurrentAnswer] = useState(answer);
  const onChange = (answer: Answer) => {
    console.log(answer);
    setCurrentAnswer(answer);
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
        <div className="reading-exercise">
          {exercise.map(({ type, exercise, exerciseDetail, hint }, idx) => (
            <div key={idx} className="reading-exercise-item">
              <Exercise
                type={type}
                exercise={exercise}
                exerciseDetail={exerciseDetail}
                hint={hint}
                onChange={onChange}
                answer={currentAnser}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
