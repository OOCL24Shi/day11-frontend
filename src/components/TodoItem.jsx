import {TodoListContext} from "../context/TodoListContext";
import {useContext}  from "react";
import {REMOVE, TOGGLE} from "../context/todoReducer";
import "./TodoItem.css";

const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoListContext);

    const handleToggle = () => {
        dispatch({type: TOGGLE, payload: todo.id});
    };

    const handleRemove = () => {
        dispatch({type: REMOVE, payload: todo.id});
    };

    return (
        <div className={"todo-item"}>
            <div className={`todo-text ${todo.done ? 'completed' : ''}`} onClick={handleToggle}>{todo.text}</div>
            <button className="remove-button" onClick={handleRemove}>X</button>
        </div>
    );
}

export default TodoItem;