// hold async stuff
// enables with redux
import axios from 'axios';
import { addMovie } from './actions';

export const getAllMovies = () => {
    return (something) => {
        axios.get('http://localhost:4000/movies')
        .then(res => {
            return res.data.data
        })
        .then(film => {
                something(addMovie(film, 'all'));
        })
    }
}

export const getMovies = (genre, sortCatagory) => {
    console.log('getMoviesByGenre has been called.')
    return (something) => {
        let apiURL

        genre === 'all' ?
        apiURL = `http://localhost:4000/movies?sortOrder=desc&sortBy=${sortCatagory}` :
        apiURL = `http://localhost:4000/movies?filter=${genre}&sortOrder=desc&sortBy=${sortCatagory}`;

        axios.get(apiURL)
        .then(res => {
            return res.data.data;
        })
        .then(film => {
            something(addMovie(film))
        })
    }
}