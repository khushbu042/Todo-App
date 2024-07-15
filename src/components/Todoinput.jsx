import React, { useState, useContext } from 'react'
import { TodoContext } from '../contexts/TodoContexts';

const Todoinput = () => {
      const [todomsg,setTodomsg]=useState("");
      const {addTodo} =useContext(TodoContext);

      const add = (e) => {
          e.preventDefault();
          if(!todomsg) return ;
          addTodo({ todomsg, complete:false});
          setTodomsg("");
      }
  return (
    <>
         <form onClick={add} className='flex'>
            <input 
              type="text" 
              placeholder='Write Your Todo'
              value={todomsg}
              onChange={(e) => setTodomsg(e.target.value)}
              className={`w-full border border-black/10 text-black px-3 py-2 rounded-l-lg duration-150 outline-none bg-slate-100`}
            />
            <button type='submit'
              className={`bg-green-600 rounded-r-lg px-3 py-1 shrink-0 text-white`}
            >
              Add Task
            </button>
         </form>
    </>
  )
}

export default Todoinput
