import React from 'react';
import './App.css';
import {Link, useNavigate, userNavigate} from 'react-router-dom';

function App() {

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
      <h1 style={{fontFamily:'Poppins'}}>Create Account</h1>
      
        <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder='Enter Username'/><br/>
        <label>Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password'/><br/>
        <label>Name</label><br/>
        <input type="text" name="fullname" label="fullname" placeholder='Enter Full Name'/><br/>
        <label>Birthdate</label><br/>
        <input type="date" name="birthdate" label="birthdate" placeholder='Enter Birthdate'/><br/>
        <label>Age</label><br/>
        <input type="text" name="age" label="age" placeholder='Enter Age'/><br/>
        <label>Email</label><br/>
        <input type="text" name="email" label="email" placeholder='Enter Email'/><br/><br/>
        <input type="submit" name="type" label="type" onClick={(e)=>handleSubmit(e)}/>

      </div>
      </div>
    </div>
    </header>
  );
}

export default App;
