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
      <div className='form'>
      <h1 style={{fontFamily:'Poppins'}}>Login</h1>
      
        <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder='Enter Username'/><br/>
        <label>Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password'/><br/>
        <Link style={{textDecoration: 'inherit'}} to={'/ForgotPass'}>
        <p className='linkbtn' style={{position: 'relative', left :'60%', top:'0.5rem'}}>Forgot Password</p>
        </Link><br/>
        <Link to={'/CustomerHP'}>
        <input className="btn1" type="submit" name="btnLogin" label="btnLogin" value="Login"/>
        </Link><br/>
        <Link to={'/CreateAccount'}>
        <input type="submit" name="btnCreateAcc" label="btnCreateAcc" value="Create Account"/>
        </Link>

      </div>
      </div>
    </div>
    </header>
  );
}

export default Login;