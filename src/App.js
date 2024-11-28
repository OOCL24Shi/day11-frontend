import { createContext, useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./context/todoReducer";
import {TodoListProvider} from "./context/TodoListContext";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoListProvider>
        <TodoList/>
      </TodoListProvider>
    </div>
  );
}

export default App;
