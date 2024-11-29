import {useContext, useState} from "react";
import {TodoListContext} from "../context/TodoListContext";
import {ADD} from "../context/todoReducer";
import "./TodoGenerator.css";
import {addTodo} from "../api/todo";

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoListContext);

    const handleInput = (event) => {
        setText(event.target.value)
    }

    const addItem = async () => {
        if (text.trim()) {
            const newTodo = {text: text, done: false}
            const addedTodo = await addTodo(newTodo);
            console.log(addedTodo);
            dispatch({type: ADD, payload: newTodo});
        }
        setText("")
    }


    return (
        <div className="todo-generator">
            <input className="todo-input" maxLength={100} value={text} onChange={handleInput}/>
            <button className="add-button" onClick={addItem}>add</button>
        </div>
    );
}

export default TodoGenerator;