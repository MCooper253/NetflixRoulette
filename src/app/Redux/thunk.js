// hold async stuff
// enables with redux
import axios from 'axios';
import { addMovie } from './actions';
//import { store } from './store';

export const getAllMovies = () => {
    return (something) => {
        axios.get('http://localhost:4000/movies')
        .then(res => {
            console.log(res.data.data);
            return res.data.data
        })
        .then(film => {
            console.log(film);
                something(addMovie(film));
        })
    }
}