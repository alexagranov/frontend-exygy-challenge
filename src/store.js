import {
    applyMiddleware, combineReducers, compose, createStore
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as reducers from './reducers';

const storeMiddleware = applyMiddleware(
    thunk,
    createLogger({
        predicate: () => process.env.NODE_ENV === 'development'
    })
);

const initialState = {};
export const createNewStore = (state = initialState) => (
    createStore(
        combineReducers({ ...reducers }),
        state,
        compose(storeMiddleware)
    )
);

let store;
export const getStore = () => store || (createNewStore());
