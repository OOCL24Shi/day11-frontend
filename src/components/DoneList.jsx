import {useContext} from "react";
import {TodoListContext} from "../context/TodoListContext";

const DoneList = () => {

    const {state} = useContext(TodoListContext);

    const doneList = state.filter((todo) => todo.done);
    return (
        <div>
            {doneList.map((todo) => {
                return <div>{todo.text}</div>
            })}
        </div>
    );
}

export default DoneList