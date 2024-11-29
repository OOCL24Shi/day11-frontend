import TodoGenerator  from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import './TodoList.css';
import {useEffect} from "react";
import {ADD, INIT} from "../context/todoReducer";
import {useContext} from "react";
import {TodoContext} from "../App";
import getTodoList from "../api/todo";
import {TodoListContext} from "../context/TodoListContext";

const TodoList = () => {

    const {dispatch} = useContext(TodoListContext)

    useEffect(() => {
        getTodoList().then((todo) => {
            dispatch({type:INIT,payload:todo})
        });
    }, []);

  return (
      <div className="todo-list-container">
          <h2 className="todo-list-heading" >TodoList</h2>
        <TodoGroup/>
        <TodoGenerator/>
      </div>
  );
}

export default TodoList