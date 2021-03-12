import { ADD_MOVIE } from '../actionTypes.js'

//re-name to "films.js" or 

const initialState = {
    films: []
};

export const filmsReducer = function(state = initialState, action) {
    switch (action.type) {
      case ADD_MOVIE: {
        // necessary fileds 
        return {
            films: [...state.films, action.paylaod /* previoulsy map what I need for this payload on line 10 */]
          }
        };
      default:
        return state;
    }
  }

  // REDUCER SHAPE STATE.