// hold async stuff
// enables with redux
import axios from 'axios';
import { addMovie, setIsErrorTrue, setIsErrorFalse, toggle_isLoading } from './actions';

export const getMovies = (genre, sortCatagory) => {
    return (dispatch) => {
        console.log('begin api call, toggle api has been dispatched.');
        dispatch(toggle_isLoading());
        dispatch(setIsErrorFalse());

        let apiURL
        genre === 'all' ?
        apiURL = `http://localhost:4000/movies?sortOrder=desc&sortBy=${sortCatagory}` :
        apiURL = `http://localhost:4000/movies?filter=${genre}&sortOrder=desc&sortBy=${sortCatagory}`;

        axios.get(apiURL)
        .then(res => {
            console.log('finish api call, toggle api has been dispatched');
            dispatch(toggle_isLoading());
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