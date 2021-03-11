import { createStore } from "redux";
import rootReducer from "./reducers/movieHandlerReducer";

//func calls that middleware thunk or saga.

//spilt reduces into seversal reducers and use combine reducers


export default createStore(rootReducer);