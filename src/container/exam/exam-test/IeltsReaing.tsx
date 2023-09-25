import IeltsReading from "@/component/exam/exam-test/ielts/IeltsReading";
import { ieltsReading } from "@/store/action/user/test/IeltsReading";
import { connect } from "react-redux";
const mapStateToProps = (state: any) => ({
  reading: state.user.test.ieltsReading.reading,
  answer: state.user.test.ieltsReading.answer,
});
const mapDispatchToProps = (dispatch: any) => ({
  fetchReading: () => dispatch(ieltsReading()),
});
export default connect(mapStateToProps, mapDispatchToProps)(IeltsReading);
