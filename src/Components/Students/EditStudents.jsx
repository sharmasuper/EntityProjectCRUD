import React from 'react';
import {useForm} from 'react-hook-form' 
import {DevTool} from '@hookform/devtools'
function EditStudents() {
    const form = useForm()
    const {register,control} = form
   
  return (
    <div>
    <form>
        <label htmlFor='username'>UserName</label>
        <input type='text' id='username' name='username' {...register("username")} /><br/>
            <pre/>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='channel' name='channel'{...register("email")} /><br/>
       <pre/>
        <button >Submit</button>

    </form>
    <DevTool control= {control}/>
    </div>
  );
}

export default EditStudents;
