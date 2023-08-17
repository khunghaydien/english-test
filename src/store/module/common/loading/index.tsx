import { Reducer } from "redux";

// Define types
interface LoadingState {
  isLoading: boolean;
}

// Define state and action types
interface LoadingAction {
  type: string;
}

// Initial state
const initialState: LoadingState = {
  isLoading: false,
};

// Reducer
const loading: Reducer<LoadingState, LoadingAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        isLoading: true,
      };
    case "STOP_LOADING":
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loading;
