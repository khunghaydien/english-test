import { ieltsReading } from "@/store/action/user/test/IeltsReading";
import Reading from "@/user/component/test/reading/Reading";
import { connect } from "react-redux";
const mapStateToProps = (state: any) => ({
  reading: state.user.test.ieltsReading.reading,
});
const mapDispatchToProps = (dispatch: any) => ({
  fetchReading: () => dispatch(ieltsReading()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Reading);
