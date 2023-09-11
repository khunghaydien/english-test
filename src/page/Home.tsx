import Colection from "@/component/index/Colection";
import Set from "@/component/index/Set";
import Tip from "@/component/index/Tip";
import { useParams } from "react-router-dom";
const HomePage = () => {
  const { page } = useParams();
  switch (page) {
    case "tip":
      return <Tip />;
    case "exam-set":
      return <Set />;
    default:
      return <Colection />;
  }
};
export default HomePage;
