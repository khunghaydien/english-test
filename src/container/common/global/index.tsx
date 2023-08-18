import Global from "@/common/global";
import { connect } from "react-redux";
const mapStateToProps = (state: any) => ({
  type: state.common.api.type,
  message: state.common.api.message,
  loading: state.common.api.loading,
});
export default connect(mapStateToProps)(Global);
