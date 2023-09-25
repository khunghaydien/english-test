import { createSlice } from "@reduxjs/toolkit"
import { login } from "@/store/action/auth"
import Cookies from 'js-cookie';
export interface AuthState {
    accessToken: string | null,
}
const initialState: AuthState = {
    accessToken: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // ...
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.accessToken = action.payload
                if (state.accessToken)
                    Cookies.set('accessToken', state.accessToken, { expires: 1 });
            })
    }
})
export default auth.reducer