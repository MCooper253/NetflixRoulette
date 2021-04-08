import { ADD_MOVIE } from './actionTypes';
import { TOGGLE_DISPLAY_GENRE } from './actionTypes';

export const addMovie = content => ({
    type: ADD_MOVIE,
    payload: content
});

export const changeDisplayGenre = genre => ({
    type: TOGGLE_DISPLAY_GENRE,
    payload: genre
});