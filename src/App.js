import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {TodoListProvider} from "./context/TodoListContext";
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import DoneList from "./components/DoneList";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoListProvider>
                <Router>
                    <nav>
                        <Link to={"/"}>Home</Link> | <Link to = "/donelist">Done List</Link>
                    </nav>
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/todo-list"/>}></Route>
                        <Route path={"/todo-list"} element={<TodoList/>}></Route>
                        <Route path={"/donelist"} element = {<DoneList/>}></Route>
                        <Route path={"*"} element={<PageNotFound/>}></Route>
                    </Routes>
                </Router>
            </TodoListProvider>
        </div>
    );
}

export default App;
