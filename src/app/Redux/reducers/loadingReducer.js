import { TOGGLE_ISLOADING, TOGGLE_ISERROR } from '../actionTypes.js'

const initialState = {
    isLoading: false,
    isError: false
};

export const loadingReducer = function(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_ISLOADING: {
        const newLoadingStatus = !state.isLoading;
            return {
              ...state,
              isLoading: newLoadingStatus,
          }
      };
      case TOGGLE_ISERROR: {
        const newErrorStatus = !state.isError;
        return {
            ...state,
            isError: newErrorStatus
        }
      };
      default:
        return state;
    }
  }