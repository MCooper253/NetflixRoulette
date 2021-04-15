import { TOGGLE_ISLOADING, SET_ISERROR_TRUE, SET_ISERROR_FALSE } from '../actionTypes.js'

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
      case SET_ISERROR_TRUE: {
        return {
            ...state,
            isError: true
        }
      };
      case SET_ISERROR_FALSE: {
        return {
            ...state,
            isError: false
        }
      };
      default:
        return state;
    }
  }