import { createContext,useContext } from "react";

export const TodoContext=createContext({
    addTodo: (todomsg) =>{},
    updateTodo:(id,todomsg)=>{},
    deleteTodo:(id)=>{},
    completeTodo:(id)=>{}
});

export const TodoProvider=TodoContext.Provider;

