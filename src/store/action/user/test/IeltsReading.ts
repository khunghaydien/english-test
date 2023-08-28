import { callApi } from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const ieltsReading = createAsyncThunk(
  "pdf/ieltsReading",
  async (_, { dispatch }) => {
    const req = {
      url: "http://localhost:3000/pdf-translate",
    };
    const response = await callApi(req, dispatch);
    return response.data;
  }
);
