import { TOGGLE_SUCCESS_POST_MODAL, POST_ISLOADING_TRUE, POST_ISLOADING_FALSE, TOGGLE_POST_ISERROR } from '../actionTypes.js'

const initialState = {
  showSuccessModal: false,
  isLoading: false,
  isError: false,
};

export const postFilmReducer = function(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_SUCCESS_POST_MODAL: {
        return {
          ...state,
          showSuccessModal: !state.showSuccessModal
        }
      };
      case POST_ISLOADING_TRUE: {
        return {
          ...state,
          isLoading: true
        }
      }
      case POST_ISLOADING_FALSE: {
        return {
          ...state,
          isLoading: false
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
