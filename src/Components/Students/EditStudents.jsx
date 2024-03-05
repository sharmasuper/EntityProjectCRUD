import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

///pattern validation

function EditStudents() {
  const form = useForm();
  const { register, control, handleSubmit,formState } = form;
  const {errors} = formState;


 
  const onsubmit = (data) => {
    console.log(data);
  };

  renderCount++;

  return (
    <div>
      <h1>EditStudents - ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onsubmit)} noValidate>
        <div className="form-control">
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
        />
        <p className="errors">{errors.username?.message}</p>
        </div>
        <br />
        <pre />
        <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="channel"
          name="channel"
          {...register("email", {
            pattern: {
              value: /ms6375349671@gmail.com/, // ager value: true kardo to sabhi email prini ho jaygi ,spicief email liku to vahi email chahiy nhi to error show hoga
              message: "invalid",
            },
          })}
        />
        </div>
        <br />
        <p className="errors">{errors.email?.message}</p>
        <pre />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
//devTool Visulization =>
//npm command - npm install -D @hookform/devtools
export default EditStudents;
