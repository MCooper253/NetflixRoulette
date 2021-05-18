import { TOGGLE_SUCCESS_POST_MODAL, TOGGLE_POST_ISLOADING, TOGGLE_POST_ISERROR } from '../actionTypes.js'

const initialState = {
  showSuccessModal: false,
  isLaoding: false,
  isError: false,
};

export const postFilmReducer = function(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_SUCCESS_POST_MODAL: {
        const movieToAdd = action.payload;
        const currentFilms = [];
        return {
          ...state,
          filmsArray: !state.showSuccessModal
        }
      };
      case TOGGLE_POST_ISLOADING: {
        return {
          ...state,
          isLaoding: !state.isLaoding
        }
      }
      case TOGGLE_POST_ISERROR: {
        return {
          ...state,
          isError: !state.isError
        }
      }
      default:
        return state;
    }
  }
