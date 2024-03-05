import React from 'react';
import './App.css'
import EditStudents from './Components/Students/EditStudents';
import UserInfoValidation from './Components/Students/UserInfoValidation';
function App() {
  const userData = {
    name : "sharmaji",
    Email:"RohitAzadh@gmail.com",
    number:9414971315
  }
  return (
    <div>
      {/* <EditStudents/> */}
      <UserInfoValidation data ={userData}/>
    </div>
  );
}

export default App;
