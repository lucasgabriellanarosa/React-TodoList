import './App.css'
import { LuListTodo } from "react-icons/lu";
import { Input } from './components/Input/Input';
import { useState } from 'react';
import { Task } from './components/Task/Task';
import { EditTodoForm } from './components/editTodoForm/editTodoForm';


function App() {

  const [todos, setTodos] = useState([])

  const completeTask = (id) => {
    setTodos(todos.map((todo) =>  todo.id === id ? { ...todo, done: !todo.done } : todo))
  }

  const deleteTask = (id) => {
    setTodos(todos.filter( todo => todo.id != id))
  }

  const editTask = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
  }

  return (
    <div className='app-container'>
      <h1 className='app-title'> <LuListTodo /> Todo List</h1>
      <Input todos={todos} setTodos={setTodos} /> 
      <ul className='todoList'>
        {
          todos.sort((a, b) => b.id - a.id).map((todo) => todo.isEditing ? <EditTodoForm key={todo.id} todo={todo} editTask={editTask} todos={todos} setTodos={setTodos}/> : <Task key={todo.id} todo={todo} deleteTask={deleteTask} editTask={editTask} completeTask={completeTask}/>
          )
        }
      </ul>
    </div>
  )
}

export default App
