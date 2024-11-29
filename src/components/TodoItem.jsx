import {TodoListContext} from "../context/TodoListContext";
import {useContext, useState} from "react";
import {REMOVE, TOGGLE, EDIT} from "../context/todoReducer";
import "./TodoItem.css";
import {deleteTodo, editTodo, toggleTodo} from "../api/todo";
import {Modal, Input} from "antd";


const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoListContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tempText, setTempText] = useState(todo.text);

    const handleToggle = () => {

        const toggleMsg = toggleTodo({id: todo.id, done: !todo.done});
        dispatch({type: TOGGLE, payload: todo.id});
    };

    const handleRemove = () => {
        const deleteMsg = deleteTodo(todo.id);
        dispatch({type: REMOVE, payload: todo.id});
    };

    const handleEdit = () => {
        setIsModalVisible(true);
        setTempText(todo.text);
    };

    const handleSave = () => {
        if (!tempText || !tempText.trim() || tempText === todo.text) {
            return;
        }
        const editMsg = editTodo({id: todo.id, text: tempText});
        dispatch({type: EDIT, payload: {id: todo.id, text: tempText}}); // Save changes
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className={"todo-item"}>
            <div className={`todo-text ${todo.done ? 'completed' : ''}`} onClick={handleToggle}>{todo.text}</div>
            <button className="edit-button" onClick={handleEdit}>
                Edit
            </button>
            <button className="remove-button" onClick={handleRemove}>X</button>

            <Modal
                title="Edit Todo"
                visible={isModalVisible}
                onOk={handleSave}
                onCancel={handleCancel}
            >
                <Input
                    value={tempText}
                    onChange={(event) => setTempText(event.target.value)}
                />
            </Modal>
        </div>
    );
}

export default TodoItem;