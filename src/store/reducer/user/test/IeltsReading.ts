import { createSlice } from '@reduxjs/toolkit';
import { ieltsReading } from '@/store/action/user/test/IeltsReading';
import { Answer } from '@/user/common/question/QuestionDetail';
type State ={
    reading: any,
    answered: Answer,
}
const initialState:State = {
    reading: null,
    answered:{
      1:'No',
      3:"NotGiven"
    }
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