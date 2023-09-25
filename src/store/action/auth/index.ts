import { callApi } from "@/api";
import { CHANGE_PASSWORD, FORGOT_PASSWORD, LOGIN, METHOD, REGISTER, httpRequest } from "@/api/const";
import { ForgotPassword, LoginForm } from "@/type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  'account/login',
  async (payload: LoginForm, { dispatch }) => {
    const response = await callApi(httpRequest(LOGIN, METHOD.POST, payload), dispatch);
    return response.data
  },
)
export const register = createAsyncThunk(
  'account/register',
  async (payload: LoginForm, { dispatch }) => {
    const response = await callApi(httpRequest(REGISTER, METHOD.POST, payload), dispatch);
    return response.data
  },
)
export const changePassword = createAsyncThunk(
  'account/change-password',
  async (payload: LoginForm, { dispatch }) => {
    const response = await callApi(httpRequest(CHANGE_PASSWORD, METHOD.PATCH, payload), dispatch);
    return response.data
  }
)

export const forgotPassword  = createAsyncThunk(
  'account/forgot-password',
  async(payload: ForgotPassword, {dispatch})=>{
    const response = await callApi(httpRequest(FORGOT_PASSWORD, METHOD.POST, payload), dispatch);
    return response.data
  }
)