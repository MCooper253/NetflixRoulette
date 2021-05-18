import { ADD_MOVIE, CLOSE_FILMBODY, SHOW_FILMBODY, SET_ISERROR_TRUE, SET_ISERROR_FALSE, TOGGLE_ISLOADING, SET_NUMBER_OF_FILMS, TOGGLE_SUCCESS_POST_MODAL } from './actionTypes';

export const addMovie = content => ({
    type: ADD_MOVIE,
    payload: content
});

export const toggle_isLoading = () => ({
    type: TOGGLE_ISLOADING
})

export const setIsErrorTrue = () => ({
    type: SET_ISERROR_TRUE
})

export const setIsErrorFalse = () => ({
    type: SET_ISERROR_FALSE
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

export const setNumberOfFilms = (content) => ({
    type: SET_NUMBER_OF_FILMS,
    payload: {
        numberOfResults: content
    }
})

export const togglePostFilmModal = () => ({
    type: TOGGLE_SUCCESS_POST_MODAL
})