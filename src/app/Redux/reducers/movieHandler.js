import { ADD_MOVIE } from '../actionTypes.js'

const initialSate = {
    films: []
};

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO: {
        return {
          ...state,
          allIds: [...state.allIds, id],
          byIds: {
            ...state.byIds,
            [id]: {
              content,
              completed: false
            }
          }
        };
      }
      default:
        return state;
    }
  }