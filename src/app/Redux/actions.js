import { ADD_MOVIE } from './actionTypes';
import { START_API_CALL, END_API_CALL } from './actionTypes';

export const addMovie = content => ({
    type: ADD_MOVIE,
    payload: content
});

export const startApiCall = () => ({
    type: START_API_CALL
});

export const endApiCall = () => ({
    type: END_API_CALL
});