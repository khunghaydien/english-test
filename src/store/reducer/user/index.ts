import { combineReducers } from '@reduxjs/toolkit';
import test from './test';
import notification from './notification';

const rootReducer = combineReducers({
    test,
    notification
});

export default rootReducer;