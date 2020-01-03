import { rootReducer } from "./reducers";
import { createStore } from "redux";

const INITIAL_STATE = {};

export const store = createStore(rootReducer, INITIAL_STATE);
