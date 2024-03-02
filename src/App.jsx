import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList'

function App() {
  

  return (
    <>
     <div className='App'>
      <h1 className='header'>Rtk Todo List</h1>
      <AddTodo/>
      <TodoList/>
     </div>
     
    </>
  )
}

export default App
