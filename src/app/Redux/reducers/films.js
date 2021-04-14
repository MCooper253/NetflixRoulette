import { ADD_MOVIE, TOGGLE_API_CALL } from '../actionTypes.js'

const initialState = {
    films: [],
    isLoading: false,
    isError: false
    //HOW DOES THIS WANT TO LOOK? - COMBINE REDUCER
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
      // case TOGGLE_API_CALL: {
      //   const 
      // }
      default:
        return state;
    }
  }

  // REDUCER SHAPE STATE.

  //perhaps serpreate out a different reducer for isloading?

