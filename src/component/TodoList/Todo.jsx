import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../Store/TodoSlice';

const  Todo = ({text,completed,id}) => {
    const dispatch = useDispatch()
    const Toggle = () =>{
         dispatch(updateTodo({
            id:id,changes : {completed:!completed}
         }))
    };

    const deleteItem =() =>{
        dispatch(deleteTodo(id));
    }

  return (
    <div className='todo'>
      <input type='checkBox' value={completed} onChange={Toggle} />
      <span>{text}</span>
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default Todo;
