import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import './TodoList.css';
import {useEffect, useState} from "react";
import {INIT} from "../context/todoReducer";
import {useContext} from "react";
import getTodoList from "../api/todo";
import {TodoListContext} from "../context/TodoListContext";
import {Spin, Pagination} from "antd";


const TodoList = () => {

    const {state, dispatch} = useContext(TodoListContext)
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [pageSize, setPageSize] = useState(10);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedTodos = state.slice(startIndex, endIndex);

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    useEffect(() => {
        getTodoList().then((todo) => {
            dispatch({type: INIT, payload: todo})
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };


    return loading ? (

            <Spin size="large"/>
        )
        :
        (
            <div className="todo-list-container">
                <h2 className="todo-list-heading">TodoList</h2>
                <TodoGenerator/>
                <TodoGroup state={paginatedTodos}/>
                <br/>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={state.length}
                    onChange={handlePageChange}
                    showSizeChanger
                />
            </div>
        );
}

export default TodoList