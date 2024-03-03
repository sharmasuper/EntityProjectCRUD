import React from 'react';
import AddTodo from './component/AddTodo/AddTodo';
import TodoList from './component/TodoList/TodoList';
import './App.css'
function App() {
  return (
    <div>
    <AddTodo/>
    <TodoList/>
    </div>
  );
}

export default App;
