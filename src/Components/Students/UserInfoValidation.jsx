import React from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from '@hookform/devtools';

let Render = 0;

function UserInfoValidation({ data }) {
  const form = useForm({
    defaultValues: {
      name: "Rohit Azad",
      Email: '',
      number: ['', ''],
      address: {
        city: '',
        pincode: ''
      },
      anotherPhoneNumber: [{
        firstname: '',
        LastName: "",
        RollNumber: "",
        address: [
          {
            city: "",
            state: "", 
            pincode: ""
          }
        ],
       age : 0,
       dataOfBirth : new Date()
      }]
    }
  })

  const { register, control, handleSubmit, formState: { errors } } = form
  const { fields, append, remove } = useFieldArray({
    name: "anotherPhoneNumber",
    control
  })

  const submit = (data) => {
    console.log(data)
  }

  Render++
  return (
    <>
      <div className='userForm'>
        <h2>User info Details-{Render}</h2>
        <form className='userDetailform' onSubmit={handleSubmit(submit)}>
          {/* Input for Name */}
          <div className='fromGroup'>
            <label>Name</label>
            <input type='text' {...register('name', {
                minLength :{
                     value : 4,
                     message : 'Please fill 4 length caracter'
                },
                minLength :{
                    value : 40,
                    message : 'limit exeed'
               }
                ,
              required: {
                value: true,
                message: "please fill your good name"
              },
              validate: (fieldValue) => {
                return fieldValue !== 'admin' || 'please enter another value mohit js'
              }
            })} placeholder='Enter Your Name' />
            <p className='error' style={{ color: "red" }}>{errors.name?.message}</p>
          </div>
          {/* Input for Email */}
          <div className='fromGroup'>
            <label>Email</label>
            <input type='email' {...register('Email', {
              pattern: {
                value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid Email id"
              },
              required: {
                value: true,
                message: "please fill your Email"
              },
              validate: {
                notAdminEmail: (value) => {
                  return value !== 'admin@admin.com' || 'Please choose another email id'
                },
                blockDomain: (value) => {
                  return !value.endsWith('test.com') || 'this domain is not allowed'
                },
                lengthError: (value) => {
                  return value.length > 6 || 'please write correct email format'
                }
              }
            })} placeholder='Enter Your Email' />
            <p className='error' style={{ color: "red" }}>{errors.Email?.message}</p>
          </div>
          {/* Input for Primary Mobile Number */}
          <div className='fromGroup'>
            <label>Primary Mobile No-</label>
            <input type='text' {...register('number.0', {
              required: {
                value: true,
                message: "please fill your good Number"
              }
            })} placeholder='Enter primary number' />
            <p className='error' style={{ color: "red" }}>{errors.number?.message}</p>
          </div>
          {/* Input for Secondary Mobile Number */}
          <div className='fromGroup'>
            <label>Secondary Mobile No-</label>
            <input type='text' {...register('number.1', {
              required: {
                value: true,
                message: "please fill your good Number"
              }
            })} placeholder='Enter Your secondary number' />
            <p className='error' style={{ color: "red" }}>{errors.number?.message}</p>
          </div>
          {/* Input for City */}
          <div className='fromGroup'>
            <label>City</label>
            <input type='text' {...register('address.city')} placeholder='City' />
            <p className='error' style={{ color: "red" }}>{errors.city?.message}</p>
          </div>
          {/* Input for Pincode */}
          <div className='fromGroup'>
            <label>Pincode</label>
            <input type='text' {...register('address.pincode')} placeholder='Enter Your Pincode' />
            <p className='error' style={{ color: "red" }}>{errors.pincode?.message}</p>
          </div>
          {/* Dynamic Fields */}
          <div>
            {fields.map((field, index) => (
              <div className='formGroup' key={index}>
                <label>Firstname</label>
                <input type='text' {...register(`anotherPhoneNumber.${index}.firstname`)} />
                <br />
                <label>Lastname</label>
                <input type='text' {...register(`anotherPhoneNumber.${index}.LastName`)} />
                <br />
                <label>RollNumber</label>
                <input type='text' {...register(`anotherPhoneNumber.${index}.RollNumber`)} />
                <br />
                {/* Address Fields */}
                {field.address.map((addressField, fieldIndex) => (
                  <div key={`${index}-${fieldIndex}`}>
                    <label>City</label>
                    <input type='text' {...register(`anotherPhoneNumber.${index}.address.${fieldIndex}.city`)} />
                    <br />
                    <label>State</label>
                    <input type='text' {...register(`anotherPhoneNumber.${index}.address.${fieldIndex}.state`)} />
                    <br />
                    <label>Pincode</label>
                    <input type='text' {...register(`anotherPhoneNumber.${index}.address.${fieldIndex}.pincode`)} />
                    <br />
                  </div>
                ))}
                {/* Add / Remove Buttons */}
                {index > 0 && <button className='btn btn-secondary' onClick={() => remove(index)}>Remove</button>}
              </div>
            ))}
            <button className='btn btn-secondary' onClick={() => append({ firstname: "", LastName: "", RollNumber: "", address: [{ state: "", city: "", pincode: "" }] })}>Add One More</button>
         
            <div className='fromGroup'>
            <label>age</label>
            <input type='number' {...register('age', {
                valueAsNumber:true,
                min : {
                    value : 3,
                    message : 'please fill age more then 3'
                   },
                   max:{
                   
                        value : 100,
                        message : 'you can not fill this form overage'
                     
                   },
              required: {
                value: true,
                message: "please fill your good age"
              }
           
            })} placeholder='Enter Your age' />
            <p className='error' style={{ color: "red" }}>{errors.age?.message}</p>
          </div>

          <div className='fromGroup'>
            <label>Date Of Birth</label>
            <input type='date' {...register('dataOfBirth', {
                valueAsDate:true,
               
              required: {
                value: true,
                message: "please fill your good dataOfBirth"
              }
           
            })} placeholder='Enter Your dataOfBirth' />
            <p className='error' style={{ color: "red" }}>{errors.dataOfBirth?.message}</p>
          </div>
         
         
          </div>

          <button className='btn btn-primary'>Save</button>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
}

export default UserInfoValidation;
