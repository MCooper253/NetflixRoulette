import axios from 'axios';
import {
    addMovie,
    setIsErrorTrue,
    setIsErrorFalse,
    toggle_isLoading,
    setNumberOfFilms,
    postFilmIsLoadingSetFalse,
    postFilmIsLoadingSetTrue,
    togglePostFilmIsError,
    togglePostFilmModal,
    deleteFilmIsLoadingSetFalse,
    deleteFilmIsLoadingSetTrue,
    toggleDeleteFilmIsError,
    toggleDeleteSuccessFilmModal,
    editFilmIsLoadingSetTrue,
    editFilmIsLoadingSetFalse,
    toggleEditSuccessModal,
    toggleEditFilmIsError
} from './actions';

export const getMovies = (genre, sortCatagory, pagnation = 0) => {
    return (dispatch) => {
        dispatch(toggle_isLoading());
        dispatch(setIsErrorFalse());

        let apiURL
        genre === 'all' ?
        apiURL = `http://localhost:4000/movies?sortOrder=desc&sortBy=${sortCatagory}&offset=${pagnation}` :
        apiURL = `http://localhost:4000/movies?filter=${genre}&sortOrder=desc&sortBy=${sortCatagory}&offset=${pagnation}`;
        console.dir('GETMOVIESHASRUN');
        axios.get(apiURL)
        .then(res => {
            dispatch(toggle_isLoading());
            dispatch(setNumberOfFilms(res.data.totalAmount));
            return res.data.data;
        })
        .then(films => {
            dispatch(addMovie({
                movies: films,
                isPagnation: pagnation
            }));
        })
        .catch(() => {
            dispatch(setIsErrorTrue());
            dispatch(toggle_isLoading());
        })
    }
}

export const postMovie = (body) => {
    return (dispatch) => {

        const apiURL = 'http://localhost:4000/movies';

        dispatch(postFilmIsLoadingSetTrue())

        axios.post(apiURL, body)
        .then(res => {
            dispatch(postFilmIsLoadingSetFalse());
            dispatch(togglePostFilmModal());
        })
        .catch(res => {
            dispatch(postFilmIsLoadingSetFalse());
            dispatch(togglePostFilmIsError());
        })
    }
}

export const deleteMovie = (id) => {
    console.log('deleteMovie thunk has run')
    return (dispatch) => {

        const apiURL = `http://localhost:4000/movies/${id}`;
        console.log(apiURL);

        dispatch(deleteFilmIsLoadingSetTrue())

        axios.delete(apiURL)
        .then(res => {
            dispatch(deleteFilmIsLoadingSetFalse());
            dispatch(toggleDeleteSuccessFilmModal());
            console.log('delete then block run');
        })
        .catch(res => {
            dispatch(deleteFilmIsLoadingSetFalse());
            dispatch(toggleDeleteFilmIsError());
            console.log('delete catch block run');
        })
    }
}

export const editMovie = (body) => {
    return (dispatch) => {

        const apiURL = 'http://localhost:4000/movies';

        dispatch(editFilmIsLoadingSetTrue())

        axios.put(apiURL, body)
        .then(res => {
            dispatch(editFilmIsLoadingSetFalse());
            dispatch(toggleEditSuccessModal());
        })
        .catch(res => {
            dispatch(editFilmIsLoadingSetFalse());
            dispatch(toggleEditFilmIsError());
        })
    }
}