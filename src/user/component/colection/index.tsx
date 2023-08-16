import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { Colection as ColectionProps } from "../../model/Volume";
import "./index.scss";
import { useLocation, useNavigate } from "react-router-dom";
import image from "./../../../assets/ielts-volume.jpg";
import { useEffect, useState } from "react";
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
const TestColection = () => {
  const [type, setColection] = useState("");
  const navigation = useNavigate();
  const onClickVolume = (volumeId: string) => {
    navigation(`/test/${volumeId}`);
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
  return (
    <div className="test-colection">
      <Header type={type} />
      <Body colections={colections} onClickVolume={onClickVolume} />
      <Footer />
    </div>
  );
};
export default TestColection;
