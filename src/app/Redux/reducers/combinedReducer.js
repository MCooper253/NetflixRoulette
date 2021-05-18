import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { filmsReducer } from './filmsReducer';
import { filmBodyReducer } from './filmBodyReducer';
import { postFilmReducer } from './postFilmReducer'


export const rootReducer = combineReducers({
    films: filmsReducer,
    apiState: loadingReducer,
    filmBody: filmBodyReducer,
    postFilm: postFilmReducer
});