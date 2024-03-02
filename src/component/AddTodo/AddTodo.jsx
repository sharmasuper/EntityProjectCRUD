import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo, addTodos } from '../../Store/TodoSlice';
import { nanoid } from '@reduxjs/toolkit'
function AddTodo() {
   
    const dispatch = useDispatch();
    const [text,setText] = useState("")
    // console.log(text)
    const Submit = () =>{
        if(text.length>0){
        //  dispatch(addTodo({id:nanoid(), todo :text,completed:false}))
        const items = text.split(',');
        //   items.forEach((item)=>{
        //     dispatch(addTodo({id : nanoid(),text:item,completed : false}))
        //   })
          //second method
           dispatch(addTodos(items.map((items)=>({id :nanoid(),text :items , completed:false}))))
         
        }
    }
  return (
    <div className='container'>
      <p>To add multiple items write them comma seprated</p>
      <p>
      <i>eg : Eggs ,Bread ,Ham ,chesses</i>
      </p>
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={Submit} style={{background:"yellow"}}>AddTodos</button>
    </div>
  );
}

export default AddTodo;

