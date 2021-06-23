import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReducerType } from "../reducers";
import { Todo, addTodo } from "../reducers/todos";

import TodoRow from "./todoRow";

function Todos() {
  const todos = useSelector<ReducerType, Todo[]>((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInput = (e: any) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({ contents: newTodo }));
    setNewTodo("");
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" value={newTodo} onChange={handleInput} />
        <button type="submit"> Add todo</button>
      </form>
      <ul>
        {todos.map((todo: Todo) => (
          <TodoRow key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
