
import { TOGGLE_SUCCESS_DELETE_MODAL, DELETE_ISLOADING_TRUE, DELETE_ISLOADING_FALSE, TOGGLE_DELETE_ISERROR } from '../actionTypes.js';

const initialState = {
    showSuccessModal: false,
    isLoading: false,
    isError: false,
  };
  
  export const deleteFilmReducer = function(state = initialState, action) {
      switch (action.type) {
        case TOGGLE_SUCCESS_DELETE_MODAL: {
          return {
            ...state,
            showSuccessModal: !state.showSuccessModal
          }
        };
        case DELETE_ISLOADING_TRUE: {
          return {
            ...state,
            isLoading: true
          }
        }
        case DELETE_ISLOADING_FALSE: {
          return {
            ...state,
            isLoading: false
          }
        }
        case TOGGLE_DELETE_ISERROR: {
          return {
            ...state,
            isError: !state.isError
          }
        }
        default:
          return state;
      }
    }