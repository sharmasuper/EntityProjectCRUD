import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import { DevTool } from '@hookform/devtools';
let Render = 0;

function UserInfoValidation({data}) {
  const form = useForm({
    defaultValues : {
        name : "Rohit Azad",
        Email : '',
        number : ['',''],
        address : {
            city : '',
            pincode : ''
        }
    }
     
  })
//   console.log(form)
  const {register,control,handleSubmit,formState :{errors}} = form
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
        <input type='text' {...register('name',
        
        {
            required : {
                value :true,
                message : "please fill your good name"
            },
            validate : (fieldValue) =>{
                return fieldValue !== 'admin' || 'please enter another value mohit js'
            }
      


        })}  placeholder='Enter Your Name' />
        <p className='error' style={{color:"red"}}>{errors.name?.message}</p>
        </div>
        <div className='fromGroup'>
        <label>Email</label>
        <input type='Email' {...register('Email',{
            pattern :{
                value : /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message : "invalid Email id"
            }
         ,
        
            required:{
                value:true,
                message:"please fill your Email"
            }
           
        ,
            validate : {
                notAdminEmail : (value) =>{
                    return value !== 'admin@admin.com' || 'Please choose another email id'
                },
                blockDomain : (value) =>{
                    return  !value.endsWith('test.com') || 'this domain is not allowed'
                },
                lengthError : (value) =>{
                    return value.length > 6 || 'please write correct email formate'
                }
            }
        
      
        
         })} placeholder='Enter Your Name' />
         <p className='error' style={{color:"red"}}>{errors.Email?.message}</p>
        </div> 
        <div className='fromGroup'>
        <label>Mobbile No-</label>
        <input type='text' {...register('number.0',{
            required:{
                value:true,
                message:"please fill your good Number"
            }
        })}  placeholder='Enter primary number' />
         <p className='error' style={{color:"red"}}>{errors.number?.message}</p>
        </div>

        <div className='fromGroup'>
        <label>Mobbile secondary No-</label>
        <input type='text' {...register('number.1',{
            required:{
                value:true,
                message:"please fill your good Number"
            }
        })}  placeholder='Enter Your secondary number' />
         <p className='error' style={{color:"red"}}>{errors.number?.message}</p>
        </div>

        <div className='fromGroup'>
        <label>City</label>
        <input type='city' {...register('address.city'
           
        )}  placeholder='city' />
         <p className='error' style={{color:"red"}}>{errors.city?.message}</p>
        </div>
          
        <div className='fromGroup'> 
        <label>pincode</label>
        <input type='text' {...register('address.pincode' 
        )}  placeholder='Enter Your Name' />
         <p className='error' style={{color:"red"}}>{errors.pincode?.message}</p>
        </div>



        <button className='btn btn-primary'>Save</button>
    </form>
    <DevTool control={control}/>
    </div>
    </>
  );
}

export default UserInfoValidation;

