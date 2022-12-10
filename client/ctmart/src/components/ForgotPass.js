import React, {useEffect, useState} from 'react';
import './App.css';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import axios from 'axios';

function ForgotPass() {
  let history = useNavigate();

  const[accounts,setAccount] = useState([]);
  const[accountlogin,setAccountlogin] = useState({
    username:"",
    newpassword:"",
    password:""
  });
  const{username,newpassword,password}=accountlogin
  const onInputChange=(e)=>{
    setAccountlogin({ ...accountlogin,[e.target.name]: e.target.value});
  };

  const onSubmit=async(e)=>{
    e.preventDefault();
    try{
      const result = await axios.get(`http://localhost:8081/account/getAccount?username=${username}`);
      setAccount(result.data);
      if((result.data)!=null){
        if((accountlogin.newpassword)==[accountlogin.password]){
          await axios.put(`http://localhost:8081/account/putAccountPassword/${(result.data.accountID)}`,accountlogin);
          alert((result.data.username)+"Password Updated");
          history("/login")
        }else{alert("Password Not Match");}
      }else{alert("ID Number" + [username]+ "does not exist!");}
      
    }catch(e){
      console.log("ID Number" + [username]+ "does not exist!");
    }
  }

  return (
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins'}}>Forgot Password?</h1>
      
        <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder='Enter Username' value={username} onChange={(e)=>onInputChange(e)}/><br/>
        <label>New Password</label><br/>
        <input type="password" name="newpassword" label="Password" placeholder='Enter Password' value={newpassword} onChange={(e)=>onInputChange(e)}/><br/>
        <label>Confirm New Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password' value={password} onChange={(e)=>onInputChange(e)}/><br/><br/>
        <input type="submit" name="btnChangePass" label="btnChangePass" value="Change Password" onClick={(e)=>onSubmit(e)}/>

      </div>
      </div>
    </div>
    </header>
  );
}

export default ForgotPass;

