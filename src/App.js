import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {TodoListProvider} from "./context/TodoListContext";
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import DoneList from "./components/DoneList";
import Help from "./components/Help";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoListProvider>
                <Router>
                    <nav>
                        <Link to={"/"}>TodoList</Link> | <Link to = "/donelist">Done List</Link> | <Link to = "/help">Help</Link>
                    </nav>
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/todo-list"/>}></Route>
                        <Route path={"/todo-list"} element={<TodoList/>}></Route>
                        <Route path={"/donelist"} element = {<DoneList/>}></Route>
                        <Route path={"/help"} element={<Help/>}></Route>
                        <Route path={"*"} element={<PageNotFound/>}></Route>
                    </Routes>
                </Router>
            </TodoListProvider>
        </div>
    );
}

export default App;
