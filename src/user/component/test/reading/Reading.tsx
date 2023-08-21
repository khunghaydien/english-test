import Global from "@/container/common/global";
import "./index.scss";
import classNames from "classnames";
import { useEffect } from "react";
import QuestionSet from "@/user/common/question/QuestionSet";
type Props = {
  reading: any;
  fetchReading: () => void;
};

export default function Reading({ reading, fetchReading }: Props) {
  useEffect(() => {
    fetchReading();
  }, []);
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
              text: "NotGiven",
              value: "Not Given",
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
          number: [14],
          type: "RADIO_BOX",
          options: [
            {
              text: "A",
              value: "A brief history of Vikings",
            },
            {
              text: "B",
              value: "Recent Viking discoveries",
            },
            {
              text: "C",
              value: "A modem fascination with Vikings",
            },
            {
              text: "D",
              value: "Interpretations of Viking history",
            },
            {
              text: "E",
              value: "Viking history and nationalism",
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
      ],
    },
  ];
  const onChangeValue = (selected: string) => {
    console.log(selected);
  };
  return (
    <div className={classNames("reading")}>
      <Global />
      <div className="reading-passage">
        <div className="reading-content">{reading}</div>
      </div>
      <div className="reading-question">
        {setQuestions.map(({ caption, questions }, idx) => (
          <QuestionSet
            key={idx}
            caption={caption}
            onChange={onChangeValue}
            questionSet={questions}
          />
        ))}
      </div>
    </div>
  );
}
