import {configureStore} from '@reduxjs/toolkit';
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {createWrapper} from 'next-redux-wrapper';
import logger from 'redux-logger';

import reducer from '../reducers';

const makeStore = (context) => configureStore({
    reducer : reducer,
    middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
})

export const wrapper = createWrapper(makeStore, {
    debug : process.env.NODE_ENV !== 'production'
})