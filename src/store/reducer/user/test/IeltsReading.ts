import { createSlice } from '@reduxjs/toolkit';
import { ieltsReading } from '@/store/action/user/test/IeltsReading';
import { Answer } from '@/model/exam';
type State ={
    reading: any,
    answer: Answer,
}
const initialState:State = {
    reading: null,
    answer:{}
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
        state.reading = action.payload;
      })
  },
});

export default reading.reducer;