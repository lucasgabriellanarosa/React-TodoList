import React from 'react'
import './task.css'
import { AiOutlineCheckCircle, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";



export const Task = ({todo, completeTask, editTask, deleteTask}) => {
  
  const todoTitle = 'todoTitle_' + todo.id

  return (
    <li className={todo.done ? 'task completed' : 'task' }>
      <p id={todoTitle}>{todo.title}</p>
      <div className='btnContainer'>
        <AiOutlineCheckCircle className='todoBtn' onClick={() => completeTask(todo.id)}/>
        <AiOutlineEdit className='todoBtn' onClick={() => editTask(todo.id)}/> 
        <AiOutlineDelete className='todoBtn' onClick={() => deleteTask(todo.id)}/>
      </div> 
    </li>
  )
}
