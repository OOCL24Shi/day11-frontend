import TodoGenerator  from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import './TodoList.css';

const TodoList = () => {
  return (
      <div className="todo-list-container">
          <h2 className="todo-list-heading" >TodoList</h2>
        <TodoGroup/>
        <TodoGenerator/>
      </div>
  );
}

export default TodoList