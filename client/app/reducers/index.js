import { combineReducers } from "redux"
// App Reducers
import bookReducer from "./books";

// Combine Reducers
export default combineReducers({
    bookReducer: bookReducer
    // more if you want...
});

