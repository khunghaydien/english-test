import Global from "@/common/global";
import { connect } from "react-redux";
const mapStateToProps = (state: any) => ({
  loading: state.common.api.loading,
});
export default connect(mapStateToProps)(Global);
