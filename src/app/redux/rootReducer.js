import { combineReducers } from "redux";
import { jokeReducer } from "./jokes/reducer";

export const rootReducer = combineReducers({
    jokes: jokeReducer,
});

