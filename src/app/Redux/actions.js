import {
    ADD_MOVIE,
    CLOSE_FILMBODY,
    SHOW_FILMBODY,
    SET_ISERROR_TRUE,
    SET_ISERROR_FALSE,
    TOGGLE_ISLOADING,
    SET_NUMBER_OF_FILMS,
    TOGGLE_SUCCESS_POST_MODAL,
    TOGGLE_POST_ISERROR,
    POST_ISLOADING_TRUE,
    POST_ISLOADING_FALSE,
    TOGGLE_SUCCESS_DELETE_MODAL,
    TOGGLE_DELETE_ISERROR,
    DELETE_ISLOADING_TRUE,
    DELETE_ISLOADING_FALSE
} from './actionTypes';

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
});

export const postFilmIsLoadingSetTrue = () => ({
    type: POST_ISLOADING_TRUE
});

export const postFilmIsLoadingSetFalse = () => ({
    type: POST_ISLOADING_FALSE
});

export const togglePostFilmIsError = () => ({
    type: TOGGLE_POST_ISERROR
});

export const toggleDeleteSuccessFilmModal = () => ({
    type: TOGGLE_SUCCESS_DELETE_MODAL
});

export const deleteFilmIsLoadingSetTrue = () => ({
    type: DELETE_ISLOADING_TRUE
});

export const deleteFilmIsLoadingSetFalse = () => ({
    type: DELETE_ISLOADING_FALSE
});

export const toggleDeleteFilmIsError = () => ({
    type: TOGGLE_DELETE_ISERROR
});
