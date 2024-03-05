import React from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';
let Render = 0;

function EditStudents() {
  const form = useForm()
//   console.log(form)
  const {register,control,handleSubmit} = form
//console.log(register("name"))
// const {name,ref,onChange,onBlur} = register('name')
const submit = (data) =>{
    console.log(data)
}

    Render++
  return (
    <>
    <div className='userForm'>
    <h2>User info Details-{Render}</h2>  
    <form className='userDetailform' onSubmit={handleSubmit(submit)}>
        <div className='fromGroup'>
        <label>Name</label>
        <input type='text' {...register('name')}  placeholder='Enter Your Name' />
        </div>
        <div className='fromGroup'>
        <label>Email</label>
        <input type='Email' {...register('Email')} placeholder='Enter Your Name' />
        </div>
        <div className='fromGroup'>
        <label>Mobbile No-</label>
        <input type='number' {...register('number')}  placeholder='Enter Your Name' />
        </div>
        <button className='btn btn-primary'>Save</button>
    </form>
    <DevTool control={control}/>
    </div>
    </>
  );
}

export default EditStudents;

