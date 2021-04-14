import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { filmsReducer }from "./reducers/films";

//func calls that middleware thunk or saga.

//spilt reduces into seversal reducers and use combine reducers

export const store = createStore(
    filmsReducer,
    applyMiddleware(thunk)
);

//USE COMBINE REDUCER!!