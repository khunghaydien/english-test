import { combineReducers } from "redux";
import api from "./Api";
import ui from "./UI";
const common = combineReducers({
  api,
  ui,
});
export default common;
