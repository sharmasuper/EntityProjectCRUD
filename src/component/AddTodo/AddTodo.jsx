import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, addTodos } from '../../Store/TodoSlice';
import { nanoid } from '@reduxjs/toolkit';
   
function AddTodo() {
  const dispatch = useDispatch()
 const [text,setText] = useState("")
//    console.log(text)
   const submit =() =>{
    if(text.length>0){
      
          const items = text.split(',');
        // items.forEach((item)=>{
        //     dispatch(addTodo({id:nanoid(),todo:item,completed:false}))
        // })
        dispatch(addTodos(items.map((items)=>({id:nanoid(),text:items,completed:false}))))
    }
   }
  return (
    <div>
      <h1>AddTods</h1>
    <p>To add multiple items write them comma seprated</p>
    <p>
     <i>eg:eggs ,bread,Ham ,chesses</i>
     </p>
     <input value={text} onChange={(e)=>setText(e.target.value)}/>
     <button onClick={submit} style={{background:"yellow"}}>AddTodos</button>
     
    </div>
  );
}

export default AddTodo;
