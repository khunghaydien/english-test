import { callApi } from "@/api";
import { GET_IELTS_READING_TEST, httpRequest } from "@/api/const";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const ieltsReading = createAsyncThunk(
  "pdf/ieltsReading",
  async (_, { dispatch }) => {
    const response = await callApi(httpRequest(GET_IELTS_READING_TEST), dispatch);
    return response.data;
  }
);
