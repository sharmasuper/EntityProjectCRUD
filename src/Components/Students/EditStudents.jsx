import React from 'react';
import {useForm} from 'react-hook-form' 
import {DevTool} from '@hookform/devtools'
let renderCount = 0;

 ///pattern validation

function EditStudents() {
    const form = useForm()
    const {register,control,handleSubmit} = form

   const onsubmit = (data) =>{
    console.log(data)
   }

  renderCount++
   
 

  return (
    <div>
        <h1>EditStudents - ({renderCount/2})</h1>
    <form onSubmit={handleSubmit(onsubmit)} noValidate>
        <label htmlFor='username'>UserName</label>
        <input type='text' id='username' {...register("username",{required :"Username is required" })} /> 
       <br/>  
            <pre/>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='channel' name='channel'
         {...register("email",{
            pattern : {
                value : /ms6375349671@gmail.com/,
                message : "invalid"

            },
         })} /><br/>
       <pre/>
        <button >Submit</button>

    </form>
    <DevTool control= {control}/>
    </div>
  );
}
//devTool Visulization =>
//npm command - npm install -D @hookform/devtools
export default EditStudents;


