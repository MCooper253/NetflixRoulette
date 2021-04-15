import { ADD_MOVIE, CLOSE_FILMBODY, SHOW_FILMBODY, TOGGLE_ISERROR, TOGGLE_ISLOADING } from './actionTypes';

export const addMovie = content => ({
    type: ADD_MOVIE,
    payload: content
});

export const toggle_isLoading = () => ({
    type: TOGGLE_ISLOADING
})

export const toggle_isError = () => ({
    type: TOGGLE_ISERROR
})

export const showFilmBody = (content) => ({
    type: SHOW_FILMBODY,
    payload: {
        film: content
    }
})

export const closeFilmBody = () => ({
    type: CLOSE_FILMBODY
})