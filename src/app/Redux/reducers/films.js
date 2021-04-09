import { ADD_MOVIE, TOGGLE_DISPLAY_GENRE } from '../actionTypes.js'

//re-name to "films.js" or 

const initialState = {
    films: [],
    displayGenre: ['all'] //this does not need to be known to the whole application so does ti need to be in sate.

    //where are the sorting operation taking place, can it be extracetd from client?
};

export const filmsReducer = function(state = initialState, action) {
    switch (action.type) {
      case ADD_MOVIE: {
        const movieToAdd = action.payload;
        const currentFilms = [];
        return {
          ...state,
          films: currentFilms.concat(movieToAdd)
        }
      };
      case TOGGLE_DISPLAY_GENRE: {
        const displayGenre = action.payload
        return {
          ...state,
          displayGenre: [displayGenre]
        }
      };
      default:
        return state;
    }
  }

  // REDUCER SHAPE STATE.