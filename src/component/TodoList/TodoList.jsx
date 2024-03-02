import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoSelectors, clearTodos, restoreTodo } from '../../Store/TodoSlice';
import Todo from './Todo';
function TodoList() {
    const dispatch = useDispatch()
    const allTodos = useSelector(TodoSelectors.selectEntities)
    const todoCount = useSelector(TodoSelectors.selectTotal)
    const deletedTodos = useSelector(state=>state.todos.deletedTodos)
     const todoList = [];
     for(const id in allTodos){
        if(Object.hasOwnProperty.call(allTodos,id)){

            const todoItem = allTodos[id];

            todoList.push(<Todo key={todoItem.id}
                 id = {todoItem.id} 
                completed={todoItem.completed}
                 text={todoItem.text}/>)
        }
     }
       const restore =(todo) => {
        dispatch(restoreTodo(todo))
       }

      const deletedList = deletedTodos.map(item=>(<div className='delete-todo' key={item.id}>
         <span>{item.text}</span>
         <button onClick={()=>restore(item)}>Restore</button>
      </div>))

  return (
    <div className='todo-list'>
       <h3>Your Todo :</h3>
       <h4>count: {todoCount}</h4>
       <button className='btn-primary' onClick={()=>{
        dispatch(clearTodos())
       }}>Clear All Todos</button>
      <div>{todoList}</div>
      <h3>Deleted Todos</h3>
      <div>{deletedList}</div>
    </div>
  );
}

export default TodoList;

