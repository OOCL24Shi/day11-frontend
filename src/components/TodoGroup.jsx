import TodoItem from "./TodoItem";

const TodoGroup = ({state}) => {

    return (
        <div>
            {state.map((todo) => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    );
}

export default TodoGroup;