import React from 'react'
import './input.css'

export const Input = ({todos, setTodos}) => {

  const addTask = (event) => {
    event.preventDefault()
    const input = document.querySelector("#addTaskInput")
    if(input.value != ''){
      const date = new Date(); 
      
      const newTask = {
        title: input.value,
        id: date.getTime(),
        done: false,
        isEditing: false,
      }
      setTodos([...todos, newTask])

      input.value = ""
  }else{
    alert("You need to write something in the input to save a task.")
  }
}
  
  return (
    <form className='form-container' onSubmit={(event) => addTask(event)}>
      <input type="text" className='input' id='addTaskInput' autoComplete='off'/>
      <button type="submit" className='submitBtn'>+ Add</button>
    </form>
  )
}
