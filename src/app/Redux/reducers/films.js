import { ADD_MOVIE } from '../actionTypes.js'

//re-name to "films.js" or 

const initialState = {
    films: []
};

export const filmsReducer = function(state = initialState, action) {
    switch (action.type) {
      case ADD_MOVIE: {
        const movieToAdd = action.payload;
        const currentState = state.films;
        return {
            //films: [...currentState, movieToAdd]
            films: currentState.concat(movieToAdd)
          }
        };
      default:
        return state;
    }
  }

  // REDUCER SHAPE STATE.