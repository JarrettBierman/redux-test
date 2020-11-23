import { combineReducers } from "redux";
import artistReducer from "./artistReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    artist: artistReducer,
});

export default rootReducer;