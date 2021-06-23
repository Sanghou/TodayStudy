import { combineReducers } from "@reduxjs/toolkit";
import users from "./user";
import todos from "./todos";

const reducer = combineReducers({
  users,
  todos,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
