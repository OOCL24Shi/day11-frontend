import {useContext} from "react";
import {TodoListContext} from "../context/TodoListContext";
import TodoItem from "./TodoItem";

const DoneList = () => {

    const {state} = useContext(TodoListContext);

    const doneList = state.filter((todo) => todo.done);
    return (
        <div className="todo-list-container">
            <h2 className="todo-list-heading">TodoList</h2>

            {doneList.map((todo) => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
        ;
}

export default DoneList