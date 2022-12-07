import React from 'react';
import './App.css';
import {Link, useNavigate, userNavigate} from 'react-router-dom';

function ForgotPass() {

  let history = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    history("/Login");

}
  return (
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins'}}>Forgot Password?</h1>
      
        <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder='Enter Username'/><br/>
        <label>New Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password'/><br/>
        <label>Confirm New Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password'/><br/><br/>
        <input type="submit" name="btnChangePass" label="btnChangePass" value="Change Password" onClick={(e)=>handleSubmit(e)}/>

      </div>
      </div>
    </div>
    </header>
  );
}

export default ForgotPass;

