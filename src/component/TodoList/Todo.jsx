import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteShow, TodoSelector, deleteTodo, updateTodo } from '../../Store/TodoSlice';

const  Todo = ({id,completed,text}) => {
  
  const todoCount = useSelector(state=>TodoSelector.selectById(state, id)) 
   
  console.log(todoCount.completed)
 
    const dispatch = useDispatch()

    const Toggle = () =>{
        dispatch(updateTodo({id:id ,changes :{completed : !completed}}))
    }
  const deleteItems = () =>{
    dispatch(deleteTodo(id)); 
  }
   
   
   function condition (id) {
          if(todoCount.completed===true){
            dispatch(DeleteShow(id))
          }
   }
  //dispatch(DeleteShow(id))

  return (
   
      <div className='todo'>
        <input type="checkbox" value={completed} onChange={Toggle} />
        <span>{text}</span>  
        <button onClick={deleteItems}>X</button>  
        <button onClick={()=>condition(id)}> DeleteShow</button>
     
      </div>
  );
}

export default Todo;
