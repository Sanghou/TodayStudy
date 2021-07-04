import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  contents: string;
  end: boolean;
};

let id = 1;

const todoReducers = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        id += 1;
        return [...state, action.payload];
      },
      prepare: ({ contents }: { contents: string }) => ({
        payload: {
          id,
          contents,
          end: false,
        },
      }),
    },
    checkTodo(state, action: PayloadAction<Todo>) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.end = !todo.end;
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      const todoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      return [...state.slice(0, todoIndex), ...state.slice(todoIndex + 1)];
    },
  },
});

export const { addTodo, checkTodo, removeTodo } = todoReducers.actions;
export default todoReducers.reducer;
