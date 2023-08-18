import { createSlice } from "@reduxjs/toolkit";
type State = {
  loading: boolean;
  message: any;
};
const initialState: State = {
  loading: false,
  message: null,
};
const api = createSlice({
  name: "api",
  initialState,
  reducers: {
    startLoading: (state: State) => {
      state.loading = true;
    },
    endLoading: (state: State) => {
      state.loading = false;
    },
    getApiResMessage: (state: State, action: any) => {
      state.message = action.message;
    },
  },
});
export const { startLoading, endLoading, getApiResMessage } = api.actions;
export default api.reducer;
