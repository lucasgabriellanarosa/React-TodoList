import React from 'react'
import './editTodoForm.css'
import { MdCancel, MdCheckCircle } from "react-icons/md";


export const EditTodoForm = ({todo, editTask, todos, setTodos}) => {

  const updateTask = () => {
    const newTitle = document.querySelector("[data-newtasktitleinput]").value

    if(newTitle != ''){
      setTodos(todos.map(todo => todo.id === todo.id ? {...todo, title: newTitle, isEditing: !todo.isEditing} : todo ))
      console.log(todos)
    }else{
      alert("You need to write something in the input to update a task.")
    }
  }

  return (
    <form action="" className='editTodoForm'>
      <input type="text" className='input editInput' data-newtasktitleinput defaultValue={todo.title}/>
      <div className='btnContainer'>
        <MdCancel className='todoBtn editBtn' onClick={() => editTask(todo.id)}/>
        <MdCheckCircle className='todoBtn editBtn' onClick={() => updateTask()}/>
      </div> 
    </form>
  )
}
