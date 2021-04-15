import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { rootReducer }from "./reducers/combinedReducer";

//func calls that middleware thunk or saga.

//spilt reduces into seversal reducers and use combine reducers

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

//USE COMBINE REDUCER!!