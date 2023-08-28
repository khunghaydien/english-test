import { useParams } from "react-router-dom";
import ErrorPage from "@/common/error-page";
import ExamManagement from "@/component/admin/ExamManagement";
const AdminPage = () => {
  const { adminPage } = useParams();
  switch (adminPage) {
    case "exam-management":
      return <ExamManagement />;
    default:
      return <ErrorPage />;
  }
};
export default AdminPage;
