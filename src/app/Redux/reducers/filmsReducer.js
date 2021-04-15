import { ADD_MOVIE } from '../actionTypes.js'

const initialState = {
    filmsArray: []
};

export const filmsReducer = function(state = initialState, action) {
    switch (action.type) {
      case ADD_MOVIE: {
        const movieToAdd = action.payload;
        const currentFilms = [];
        return {
          ...state,
          filmsArray: currentFilms.concat(movieToAdd)
        }
      };
      default:
        return state;
    }
  }

