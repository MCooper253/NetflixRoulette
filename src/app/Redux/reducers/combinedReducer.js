import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { filmsReducer } from './filmsReducer';
import { filmBodyReducer } from './filmBodyReducer';
import { postFilmReducer } from './postFilmReducer';
import { deleteFilmReducer } from './deleteFilmReducer';
import { editFilmReducer } from './editFilmReducer';


export const rootReducer = combineReducers({
    films: filmsReducer,
    apiState: loadingReducer,
    filmBody: filmBodyReducer,
    postFilm: postFilmReducer,
    deleteFilm: deleteFilmReducer,
    editFilm: editFilmReducer
});