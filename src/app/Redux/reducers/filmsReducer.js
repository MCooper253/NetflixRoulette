import { ADD_MOVIE, SET_NUMBER_OF_FILMS } from '../actionTypes.js'

const initialState = {
    filmsArray: [],
    numberOfFilms: 0
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
      case SET_NUMBER_OF_FILMS: {
        return {
          ...state,
          numberOfFilms: action.payload.numberOfResults
        }
      };
      default:
        return state;
    }
  }

