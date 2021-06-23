import { useDispatch } from "react-redux";

import { Todo, removeTodo, checkTodo } from "../reducers/todos";

function TodoRow({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      {todo.contents} {todo.id}
    </div>
  );
}

export default TodoRow;
