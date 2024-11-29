import {useContext, useState} from "react";
import {TodoListContext} from "../context/TodoListContext";
import {ADD} from "../context/todoReducer";
import "./TodoGenerator.css";

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoListContext);

    const handleInput = (event) => {
        setText(event.target.value)
    }

    const addItem = () => {
        if (text.trim()) {
            dispatch({type: ADD, payload: text});
        }
        setText("")
    }

    return (
        <div className="todo-generator">
            <input className = "todo-input" maxLength={100} value={text} onChange={handleInput}/>
            <button className="add-button" onClick={addItem}>add</button>
        </div>
    );
}

export default TodoGenerator;