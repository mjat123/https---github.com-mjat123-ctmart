import React, {useEffect, useState} from 'react';
import './App.css';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import axios from 'axios';



function Login() {

  let history = useNavigate();

  const[accounts,setAccount] = useState([]);
  const[accountlogin,setAccountlogin] = useState({
    username:"",
    password:""
  });
  const{username,password}=accountlogin
  const onInputChange=(e)=>{
    setAccountlogin({ ...accountlogin,[e.target.name]: e.target.value});
  };

  const onSubmit=async(e)=>{
    e.preventDefault();
    try{
      const result = await axios.get(`http://localhost:8081/account/getAccount?username=${username}`);
      setAccount(result.data);
      console.log((result.data.username)+" logged in.")
      if((result.data)!=null){
        
        if((result.data.password)==[password]){
          if((result.data.type)=="C"){
            history(`/CustomerHP/${accountlogin.username}`);
        }else if((result.data.type)=="A"){
          history(`/AdminHP/${accountlogin.username}`);
        }
        }else{alert("Incorrect Password");}
      }else{alert("User" + [username]+ "does not exist!");}
      
    }catch(e){
      console.log("ID Number " + [username]+ " does not exist!");
    }
  }

  

  return (
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins'}}>Login</h1>
      
        <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder='Enter Username' value={username} onChange={(e)=>onInputChange(e)}/><br/>
        <p>{username}</p>
        <label>Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password' value={password} onChange={(e)=>onInputChange(e)}/><br/>
        <Link style={{textDecoration: 'inherit'}} to={'/ForgotPass'}>
        <p className='linkbtn' style={{position: 'relative', left :'60%', top:'0.5rem'}}>Forgot Password</p>
        </Link><br/>

        <input className="btn1" type="submit" name="btnLogin" label="btnLogin" value="Login" onClick={(e)=>onSubmit(e)}/><br/>
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