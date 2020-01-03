import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  counterReducer,
  nameReducer
});

export function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENTED":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENTED":
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
}
export function nameReducer(state = { name: "" }, action) {
  return state;
}
