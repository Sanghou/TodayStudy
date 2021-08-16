import { combineReducer } from "react-redux";
import { combineReducers } from "redux";

import questions from "./question";

const reducer = combineReducers({
  questions,
});

export default reducer;
