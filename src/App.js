import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {TodoListProvider} from "./context/TodoListContext";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom"
import PageNotFound from "./components/PageNotFound"

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoListProvider>
                <Router>
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/todo-list"/>}></Route>
                        <Route path={"/todo-list"} element={<TodoList/>}></Route>
                        <Route path={"*"} element={<PageNotFound/>}></Route>
                    </Routes>
                </Router>
            </TodoListProvider>
        </div>
    );
}

export default App;
