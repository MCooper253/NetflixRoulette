import axios from 'axios';
import { addMovie, setIsErrorTrue, setIsErrorFalse, toggle_isLoading, setNumberOfFilms, togglePostFilmModal } from './actions';

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

        console.dir(body)
        const apiURL = 'http://localhost:4000/movies';
        
        axios.post(apiURL, body)
        .then(res => {
            
        })
        .catch(res => {
            dispatch(togglePostFilmModal());
            console.dir(res);
            console.log('somthing-went-wrong!');
        })
    }
}