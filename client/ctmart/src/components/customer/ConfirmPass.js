import React from 'react';
import './App.css';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import { textAlign } from '@mui/system';


function Login() {

  let history = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    history("/Login");

}
  return (
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form' style={{marginRight: '0.5rem', marginBottom:'0.5rem', marginTop:'2rem'}}>
      <h1 style={{fontFamily:'Poppins', marginLeft: '-2rem'}}>"Username"</h1>
      <p style={{color: '#323232', position:'relative', width:'85%', opacity:'0.8'}}>
        If you're happy with the new profile, please enter your password:</p><br/>
        <label>Password</label>&nbsp;
        <input type="password" name="password" label="Password" placeholder='Enter Password' style={{width:"250px"}}/><br/><br/>
        <Link to={'/CustomerHP'}>
        <input style={{width:'180px', position:"relative", left: "20%"}}className="btn1" type="submit" name="btnLogin" label="btnLogin" value="Confirm Password"/>
        </Link><br/>
      </div>
      </div>
    </div>
    </header>
  );
}

export default Login;