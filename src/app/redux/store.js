import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import { jokeInitialState } from "./jokes/jokeInitialState";
import createSagaMiddleware from "@redux-saga/core";
import { root } from "../redux/jokes/sagas";
import { rootReducer } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const initialState = {
    jokes: jokeInitialState,
};

export const store = createStore( rootReducer, initialState,  composeWithDevToolsDevelopmentOnly(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(root);