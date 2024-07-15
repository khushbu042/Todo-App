import React, { useContext, useEffect } from "react"
import Todoinput from "./components/Todoinput"
import Todoitem from "./components/Todoitem.jsx"
import { TodoProvider } from "./contexts/TodoContexts"
import { useState } from "react"
function App() {
     
    const [todos,setTodos]=useState([]);

    /* Add Todo items */
    const addTodo = (todomsg) => {
        setTodos((prev) => [{id: Date.now(),...todomsg},...prev]);
    }

    /* Update Todo items */
    const updateTodo = (id,todomsg) => {
        setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todomsg : prevtodo )))
    }

     /*  Delete Todo items */
     const deleteTodo = (id) => {
      setTodos((prev)=>prev.filter((prevtodo)=>prevtodo.id !== id));
     }

    /* Complete Todo items */
     const completeTodo = (id) => { 
      setTodos(
        (prev) => 
          prev.map((prevtodo) => 
            prevtodo.id === id ?{...prevtodo,complete: !prevtodo.complete } : prevtodo))  
     }

     useEffect (() =>{
        const todos =JSON.parse(localStorage.getItem("todos"));

        if(todos && todos.length>0){
          setTodos(todos);
        }
     },[])

     useEffect (() => {
        localStorage.setItem("todos",JSON.stringify(todos));
     },[todos])
  return (
    <TodoProvider value={{addTodo,updateTodo,deleteTodo,completeTodo}} >
      <div className={`bg-zinc-800 min-h-screen py-8`}>
          <div className={`w-full max-w-2xl mx-auto rounded-lg px-3 py-4 text-white border`}>

            <h1 className={`text-5xl font-bold text-center mb-10 mt-2`}>_____To-Do Now_____</h1>

            <div className={`mb-16 w-inherit`}>
              <Todoinput/>
            </div>
        
            <div className={`flex flex-col gap-3`} >
              {todos.map((todo)=>(
                <div key={todo.id}>
                  <Todoitem todo={todo}/>
                </div> 
                ))}
            </div>

          </div>
      </div>    
    </TodoProvider>
  ) 
}

export default App
