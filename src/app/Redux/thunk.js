// hold async stuff
// enables with redux
import axios from 'axios';
import { addMovie } from './actions';
import { store } from './store';

export const getAllMovies = () => {
    return () => {
        axios.get('http://localhost:4000/movies?limit=1')
        .then(res => res.data.data[0])
        .then(film => {
            store.dispatch(addMovie(film))
        })
    }
}