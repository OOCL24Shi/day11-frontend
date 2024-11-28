import React, {createContext,useReducer} from "react";
import {initialState,todoReducer} from "./todoReducer";

export const TodoListContext = createContext();

export const TodoListProvider = ({children}) => {
    const [state,dispatch] = useReducer(todoReducer,initialState);

    return (
        <TodoListContext.Provider value={{state,dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
}