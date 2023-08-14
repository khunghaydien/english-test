import VolumeInfo, { Volume } from "./volume";
import image from "./../../../assets/ielts-volume.jpg";
const volume: Volume = {
  basic: {
    logoUrl: `${image}`,
    logoAlt: "test",
    title: "IELTS Mock Test 2023 January",
    voteStar: 5,
    voteNumber: 1000,
  },
  detail: {
    published: "21 Feb 2023",
    views: 3528624,
    testTaken: 744461,
  },
};
const Header = () => {
  return <VolumeInfo volume={volume} id={"1"} />;
};
export default Header;