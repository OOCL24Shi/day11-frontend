import {TodoListContext} from "../context/TodoListContext";
import {useContext}  from "react";
import {REMOVE, TOGGLE} from "../context/todoReducer";

const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoListContext);

    const handleToggle = () => {
        dispatch({type: TOGGLE, payload: todo.id});
    };

    const handleRemove = () => {
        dispatch({type: REMOVE, payload: todo.id});
    };

    return (
        <div>
            <div onClick={handleToggle}>{todo.text}</div>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}