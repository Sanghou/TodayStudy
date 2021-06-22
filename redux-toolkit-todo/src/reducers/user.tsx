import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
}

let tempId = 3;

export const userReducer = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "User" },
    { id: 2, name: "User" },
  ] as User[],
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      action.payload.id = tempId + 1;
      tempId += 1;
      return [...state, action.payload];
    },
  },
});

export const { addUser } = userReducer.actions;
export default userReducer.reducer;
