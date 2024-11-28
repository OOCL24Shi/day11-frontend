import {useContext} from "react";
import {TodoListContext} from "../context/TodoListContext";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
  const {state} = useContext(TodoListContext)
  return (
      <div>
        {state.map((todo) => {
          return <TodoItem key={todo.id} todo={todo}/>
        })}
      </div>
  );
}

export default TodoGroup;