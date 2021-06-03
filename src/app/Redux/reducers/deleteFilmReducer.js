
import { TOGGLE_SUCCESS_DELETE_MODAL, DELETE_ISLOADING_TRUE, DELETE_ISLOADING_FALSE, TOGGLE_DELETE_ISERROR } from '../actionTypes.js';

const initialState = {
    showSuccessModal: false,
    isLoading: false,
    isError: false,
  };
  
  export const deleteFilmReducer = function(state = initialState, action) {
      switch (action.type) {
        case TOGGLE_SUCCESS_DELETE_MODAL: {
          console.dir('this reducer has run')
          return {
            ...state,
            showSuccessModal: !state.showSuccessModal
          }
        };
        case DELETE_ISLOADING_TRUE: {
          console.log('delete isLoading has been set true')
          return {
            ...state,
            isLoading: true
          }
        }
        case DELETE_ISLOADING_FALSE: {
          console.log('delete isLoading has been set false')
          return {
            ...state,
            isLoading: false
          }
        }
        case TOGGLE_DELETE_ISERROR: {
          console.log('delete isLoading error has been toggled')
          return {
            ...state,
            isError: !state.isError
          }
        }
        default:
          return state;
      }
    }