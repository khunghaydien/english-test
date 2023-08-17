import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./module";
const configureStore = (initialState: any) => {
  const middlewares = [thunkMiddleware];
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  return store;
};
export default configureStore;
