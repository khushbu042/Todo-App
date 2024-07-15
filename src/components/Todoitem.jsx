import React, { useState,useContext } from 'react'
import { TodoContext } from '../contexts/TodoContexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan,faPenToSquare,faCheck} from '@fortawesome/free-solid-svg-icons'

const Todoitem = ({ todo }) => {

  const [updateTodoMsg,setUpdateTodoMsg]=useState(todo.todomsg)
  const [editable,setEditable]=useState(false);  
  const {deleteTodo,completeTodo,updateTodo} =useContext(TodoContext);

  const deleteitem = (id) => {
        deleteTodo(todo.id);
  }

  const togglecomplete = () => {
        completeTodo(todo.id);
  }

  const editTodo = (id) => {
        updateTodo(todo.id,{...todomsg, todomsg:updateTodoMsg});
        setEditable(false)
  }

  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 ${todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]" }`}>
          <input 
            type="checkbox" 
            checked={todo.complete} 
            onChange={togglecomplete}
            className={`cursor-pointer`}
          />

          <input
            type="text"
            readOnly={!editable}
            value={updateTodoMsg}
            onChange={(e)=>setUpdateTodoMsg(e.target.value)}
            className={`text-black w-full py-1 font-bold rounded-lg border outline-none bg-transparent ${editable ? "border-black/55 px-2" : "border-transparent"} ${todo.complete ? "line-through" :  "" }`}
          />
          
          <button 
            className={`inline-flex`}
            onClick={()=>{
               if(todo.complete) return ;
               
               if(editable){
                  editTodo();
               }else
                  setEditable((prev)=>!prev);  
            }}
            disabled={todo.complete}
          >
            {editable ? <FontAwesomeIcon icon={faCheck} color='#16a34a' size='lg'/> : <FontAwesomeIcon icon={faPenToSquare} color='#2563eb' size='lg' />}

          </button>

          <button onClick={deleteitem} 
          className=''>
              <FontAwesomeIcon icon={faTrashCan} color='#ef4444' size='lg'/>
          </button>
    </div> 
  );
    

}
export default Todoitem
