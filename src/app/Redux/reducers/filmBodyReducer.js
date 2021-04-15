import { SHOW_FILMBODY, CLOSE_FILMBODY } from '../actionTypes.js'

const initialState = {
    filmBodyToRender: null,
};

export const filmBodyReducer = function(state = initialState, action) {
    switch (action.type) {
      case SHOW_FILMBODY: {
        return {
            ...state,
            filmBodyToRender: action.payload
        }
      };
      case CLOSE_FILMBODY: {
        return {
            ...state,
            filmBodyToRender: null
        }
      };
      default:
        return state;
    }
  }