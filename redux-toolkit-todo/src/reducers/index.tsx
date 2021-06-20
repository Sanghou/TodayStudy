import { createReducer } from "@reduxjs/toolkit";

const counterReducer = createReducer(0, {
  increment: (state, action) => state + action.payload,
  decrement: (state, action) => state - action.payload,
});

export default counterReducer;
