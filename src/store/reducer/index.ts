import { combineReducers } from '@reduxjs/toolkit';
import user from './user';
import common from './common';
import auth from './auth';

const rootReducer = combineReducers({
    user,
    common,
    auth
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;