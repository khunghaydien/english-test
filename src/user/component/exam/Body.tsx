import { Colection as ColectionProps } from "../../model/Volume";
import Colection from "./Colection";
const colections: ColectionProps[] = [
  {
    colectionId: "colection-1",
    colectionName: "colection-1",
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
const BodyExam = () => {
  return (
    <>
      <Colection colections={colections} />
    </>
  );
};

export default BodyExam;
