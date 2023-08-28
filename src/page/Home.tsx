import Colection from "@/component/home/Colection";
import { useParams } from "react-router-dom";
const HomePage = () => {
  const { userPage } = useParams();
  switch (userPage) {
    default:
      return <Colection />;
  }
};
export default HomePage;
