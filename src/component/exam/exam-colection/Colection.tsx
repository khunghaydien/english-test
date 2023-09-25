import { Colection as ColectionProps } from "@/type/Volume";
import "./Colection.scss";
import { useLocation, useNavigate } from "react-router-dom";
import image from "@/assets/ielts-volume.jpg";
import { useEffect, useState } from "react";
import SelectField from "@/common/field/SelectField";
import { ielts, ieltsSortBy } from "@/const/Exam";
import classNames from "classnames";
import Pagination from "@/common/pagination";
import Vote from "@/common/vote";
import Volume from "@/common/volume";
const colections: ColectionProps[] = [
  {
    colectionId: "colection-1",
    colectionName: "colection-1",
    imageUrl: `${image}`,
    imageAlt: "ielst colection",
    vote: {
      star: 3.4,
      quantity: 100,
    },
    volumes: [
      {
        volumeId: "colection-1-volume-1",
        volumeName: "colection-1-volume-1",
        isViewed: true,
      },
      {
        volumeId: "colection-1-volume-2",
        volumeName: "colection-1-volume-2",
        isViewed: true,
      },
      {
        volumeId: "colection-1-volume-3",
        volumeName: "colection-1-volume-3",
        isViewed: true,
      },
      {
        volumeId: "colection-1-volume-4",
        volumeName: "colection-1-volume-4",
        isViewed: true,
      },
      {
        volumeId: "colection-1-volume-5",
        volumeName: "colection-1-volume-5",
        isViewed: false,
      },
    ],
  },
  {
    colectionId: "colection-2",
    colectionName: "colection-2",
    imageUrl: `${image}`,
    imageAlt: "ielst colection",
    vote: {
      star: 3.4,
      quantity: 100,
    },
    volumes: [
      {
        volumeId: "colection-2-volume-1",
        volumeName: "colection-2-volume-1",
        isViewed: false,
      },
      {
        volumeId: "colection-2-volume-2",
        volumeName: "colection-2-volume-2",
        isViewed: false,
      },
      {
        volumeId: "colection-2-volume-3",
        volumeName: "colection-2-volume-3",
        isViewed: false,
      },
      {
        volumeId: "colection-2-volume-4",
        volumeName: "colection-2-volume-4",
        isViewed: false,
      },
      {
        volumeId: "colection-2-volume-5",
        volumeName: "colection-2-volume-5",
        isViewed: false,
      },
    ],
  },
  {
    colectionId: "colection-3",
    colectionName: "colection-3",
    imageUrl: `${image}`,
    imageAlt: "ielst colection",
    vote: {
      star: 3.4,
      quantity: 100,
    },
    volumes: [
      {
        volumeId: "colection-3-volume-1",
        volumeName: "colection-3-volume-1",
        isViewed: false,
      },
      {
        volumeId: "colection-3-volume-2",
        volumeName: "colection-3-volume-2",
        isViewed: false,
      },
      {
        volumeId: "colection-3-volume-3",
        volumeName: "colection-3-volume-3",
        isViewed: false,
      },
      {
        volumeId: "colection-3-volume-4",
        volumeName: "colection-3-volume-4",
        isViewed: false,
      },
      {
        volumeId: "colection-3-volume-5",
        volumeName: "colection-3-volume-5",
        isViewed: false,
      },
    ],
  },
];
const ROOT = "colection";
const ExamColection = () => {
  const [type, setColection] = useState("");
  const navigation = useNavigate();
  const onClickVolume = (volumeId: string) => {
    navigation(`/exam${location.pathname}/${volumeId}`);
  };
  const location = useLocation();
  let tmpType = "";
  useEffect(() => {
    switch (location.pathname) {
      case "/toeic-reading":
        tmpType = "Toeic Reading Tests";
        break;
      case "/toeic-listening":
        tmpType = "Toeic Listening Tests";
        break;
      case "/ielts-reading":
        tmpType = "IELTS Reading Tests";
        break;
      case "/ielts-listening":
        tmpType = "IELTS Listening Tests";
        break;
      case "/ielts-speaking":
        tmpType = "IELTS Speaking Tests";
        break;
      case "/ielts-writing":
        tmpType = "IELTS Writing Tests";
        break;
    }
    setColection(tmpType);
  }, [location.pathname]);
  const [selected, setSelected] = useState({
    type: ielts[0].value,
    sortBy: "newest",
  });

  const onChangeType = (type: string) => {
    setSelected({ ...selected, type });
  };

  const onChangeSort = (sortBy: string) => {
    setSelected({ ...selected, sortBy });
  };
  return (
    <div className="colection">
      <div className={`${ROOT}-header`}>
        <div className={`${ROOT}-header-title`}>{type}</div>
        <div className={`${ROOT}-header-sort`}>
          {ielts.map(({ value, text, icon }) => (
            <div
              className={classNames(`${ROOT}-header-sort--type`, {
                ["active"]: value === selected.type,
              })}
              key={value}
              onClick={() => onChangeType(value)}
            >
              <div className={classNames("icon", icon)}></div>
              <div className="text">{text}</div>
            </div>
          ))}
          <SelectField
            className={`${ROOT}-header-sort--by`}
            options={ieltsSortBy}
            onChange={onChangeSort}
            selected={selected.sortBy}
          />
        </div>
      </div>
      <div className={`${ROOT}-body`}>
        {colections.map(
          ({
            colectionId,
            colectionName,
            vote,
            volumes,
            imageUrl,
            imageAlt,
          }) => (
            <div className={`${ROOT}-body--container`} key={colectionId}>
              <div className={`${ROOT}-body--image`}>
                <img src={imageUrl} alt={imageAlt} />
              </div>
              <div key={colectionId} className={`${ROOT}-body-item`}>
                <div className={`${ROOT}-body-item--name`}>{colectionName}</div>
                <Vote
                  star={vote.star}
                  quantity={vote.quantity}
                  className={`${ROOT}-body-item--vote`}
                />
                <Volume volumes={volumes} onClickVolume={onClickVolume} />
              </div>
            </div>
          )
        )}
      </div>
      <Pagination quantity={20} />
    </div>
  );
};
export default ExamColection;
