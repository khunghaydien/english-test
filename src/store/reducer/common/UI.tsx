import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type Theme = "light" | "dark" | "custom";
type State = {
  theme: Theme;
};
const initialState: State = {
  theme: "light",
};

const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeTheme: (state: State, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = ui.actions;
export default ui.reducer;
