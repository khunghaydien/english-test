import Admin from "@/component/admin";
import { Theme, changeTheme } from "@/store/reducer/common/UI";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => ({
  theme: state.common.ui.theme,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeTheme: (theme: Theme) => dispatch(changeTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
