import { combineReducers } from '@reduxjs/toolkit';
import user from './user';
import common from './common';

const rootReducer = combineReducers({
    user,
    common
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;