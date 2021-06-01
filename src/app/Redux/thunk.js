import axios from 'axios';
import { addMovie, setIsErrorTrue, setIsErrorFalse, toggle_isLoading, setNumberOfFilms, postFilmIsLoadingSetFalse, postFilmIsLoadingSetTrue, togglePostFilmIsError, togglePostFilmModal } from './actions';

export const getMovies = (genre, sortCatagory) => {
    return (dispatch) => {
        dispatch(toggle_isLoading());
        dispatch(setIsErrorFalse());

        let apiURL
        genre === 'all' ?
        apiURL = `http://localhost:4000/movies?sortOrder=desc&sortBy=${sortCatagory}` :
        apiURL = `http://localhost:4000/movies?filter=${genre}&sortOrder=desc&sortBy=${sortCatagory}`;

        axios.get(apiURL)
        .then(res => {
            dispatch(toggle_isLoading());
            dispatch(setNumberOfFilms(res.data.totalAmount));
            return res.data.data;
        })
        .then(film => {
            dispatch(addMovie(film));
        })
        .catch(() => {
            dispatch(setIsErrorTrue());
            dispatch(toggle_isLoading());
        })
    }
}

export const postMovie = (body) => {
    console.log('postMovie thunk has run')
    return (dispatch) => {

        const apiURL = 'http://localhost:4000/movies';

        dispatch(postFilmIsLoadingSetTrue())

        axios.post(apiURL, body)
        .then(res => {
            dispatch(postFilmIsLoadingSetFalse());
            dispatch(togglePostFilmModal());
            console.log(res)
            console.log('then block run')
        })
        .catch(res => {
            dispatch(postFilmIsLoadingSetFalse());
            dispatch(togglePostFilmIsError());
            console.log(res)
            console.log('catch block run');
        })
    }
}