import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restore, TodoSelector, clearTodos } from '../../Store/TodoSlice';
import Todo from './Todo';

function TodoList() {
  const dispatch = useDispatch()
  const allTodos = useSelector(TodoSelector.selectEntities)
  const todoCount = useSelector(TodoSelector.selectTotal)
  const DeleteShow = useSelector((state)=>state.Todos.deleteTodos)
   console.log(DeleteShow)

  const todoList = Object.entries(allTodos).map(([id, todoItem]) => (
    <Todo
      key={id}
      id={id}  
      completed={todoItem.completed}        
      text={todoItem.text} 
    />
    
  ))


// yaa
// const todoList = [];
// for(const id in allTodos) {
//   if(Object.hasOwnProperty.call(allTodos, id)) {
//     const todoItem = allTodos[id];
//     console.log("todoItem", todoItem);
//     todoList.push(
//       <Todo
//         key={todoItem.id}
//         id={todoItem.id}
//         completed={todoItem.completed}
//         text={todoItem.text}
//       />
//     );
//   }
// }

const ReWrite = (todo) =>{
  dispatch(Restore(todo))
}

const show = DeleteShow.map(item =>
  (
          <div className='delete-toddo' key={item.id}>
            <span>{item.text}</span>
            <p>complted value - {item.completed}</p>
            <button onClick={()=>ReWrite(item)}>RestoreButton</button>
          </div>
  )


)


  return (
    <div className='todo-list'>
      <h3>Your todo:</h3>
      {todoList}
      <h4>count :{todoCount} </h4>
      <button className='btn-primary' onClick={()=>{dispatch(clearTodos())}} >Clear All Todos</button>      
      <h4>deletedList</h4>
       {show}
     
    </div>

   
  );
}

export default TodoList;
