import { TOGGLE_SUCCESS_EDIT_MODAL, EDIT_ISLOADING_TRUE, EDIT_ISLOADING_FALSE, TOGGLE_EDIT_ISERROR } from '../actionTypes.js';

const initialState = {
    showSuccessModal: false,
    isLoading: false,
    isError: false,
  };
  
  export const editFilmReducer = function(state = initialState, action) {
      switch (action.type) {
        case TOGGLE_SUCCESS_EDIT_MODAL: {
          console.dir('toggle edit success reducer has run')
          return {
            ...state,
            showSuccessModal: !state.showSuccessModal
          }
        };
        case EDIT_ISLOADING_TRUE: {
          console.log('edit isLoading has been set true')
          return {
            ...state,
            isLoading: true
          }
        }
        case EDIT_ISLOADING_FALSE: {
          console.log('edit isLoading has been set false')
          return {
            ...state,
            isLoading: false
          }
        }
        case TOGGLE_EDIT_ISERROR: {
          console.log('edit isLoading error has been toggled')
          return {
            ...state,
            isError: !state.isError
          }
        }
        default:
          return state;
      }
    }