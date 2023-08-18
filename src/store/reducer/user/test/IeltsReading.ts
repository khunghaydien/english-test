import { createSlice } from '@reduxjs/toolkit';
import { ieltsReading } from '@/store/action/user/test/IeltsReading';
type State ={
    reading: any,
}
const initialState:State = {
    reading: null,
}
const reading = createSlice({
  name: 'ieltsReading',
  initialState,
  reducers: {
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(ieltsReading.fulfilled, (state, action) => {
        console.log(action);
        state.reading = action.payload;
      })
  },
});

export default reading.reducer;