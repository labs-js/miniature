import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// App Reducers
import reducer from "./reducers";

// Combine Reducers
var reducers = combineReducers({
    // bookReducer: bookReducer
    // more if you want...
});

// Create Store
export default createStore(
    reducers,
    applyMiddleware(thunk,logger())
);
