import React, {useEffect, useState} from 'react';
import './App.css';
import {json, Link, useNavigate, userNavigate} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import RemoveCookie from '../hook/RemoveCookie';
import SetCookie from '../hook/SetCookie';


function Login() {

  //initializing
  let history = useNavigate();
  const[accounts,setAccount] = useState([]);
  const[accountCus,setCustomer] = useState([]);
  const[accountlogin,setAccountlogin] = useState({
    username:Cookies.get('username'),
    password:""
  });
  const{username,password}=accountlogin
  const onInputChange=(e)=>{
    setAccountlogin({ ...accountlogin,[e.target.name]: e.target.value});
  };

  const onLogout=async(e)=>{
    sessionStorage.removeItem('username');
  }
  const onSubmit=async(e)=>{
    e.preventDefault();
    //setting a restrictions
    try{
      const result = await axios.get(`http://localhost:8081/account/getAccount?username=${username}`);
      const resultCustomer = await axios.get(`http://localhost:8081/customer/getCustomer?username=${username}`);
      setAccount(result.data);
      setCustomer(resultCustomer.data);
      SetCookie('usrin', JSON.stringify(result.data));
      console.log(localStorage.getItem(accountlogin.username)) 
      if((result.data)!=null){
        if((result.data.password)==[password]){
          if((result.data.acc_type)=="C"){
            if((resultCustomer.data.isdeleted)==1){
              alert("User " + [username]+ " has been blocked by the admin.");
            }else{
              const res = await axios.get(`http://localhost:8081/customer/getCustomer?username=${username}`);
              sessionStorage.setItem('accountID',[result.data.accountID]);
              sessionStorage.setItem('username',[result.data.username]);
              sessionStorage.setItem('firstname',[result.data.firstname]);
              sessionStorage.setItem('lastname',[result.data.lastname]);
              sessionStorage.setItem('customerID',[res.data.customerID]);
              sessionStorage.setItem('birthdate',[res.data.birthdate]);
              sessionStorage.setItem('age',[res.data.age]); 
              sessionStorage.setItem('email',[res.data.email]);
              sessionStorage.getItem('username',[res.data.username]);
              const getFirstname = sessionStorage.getItem('firstname',[result.data.firstname]);
              history(`/CustomerHP`);
            }

        }else if((result.data.acc_type)=="A"){
          const setUname = sessionStorage.setItem('username',[result.data.username]);
          const setfname = sessionStorage.setItem('firstname',[result.data.firstname]);
          const getFirstname = sessionStorage.getItem('firstname',[result.data.firstname]);
          history(`/AdminHP`);
        }
        }else{alert("Incorrect Password");}
      }else{alert("Invalid input " + [username]+ " does not exist!");}
      
    }catch(e){
      console.log("incorrect"+setAccount());
    }

  }

  

  return (
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins', content:"center"}}>Login</h1>
      
        <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder='Enter Username' value={username} onChange={(e)=>onInputChange(e)} required /><br/>
        
        <label>Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password' value={password} onChange={(e)=>onInputChange(e)} required /><br/>
        <Link style={{textDecoration: 'inherit'}} to={'/ForgotPass'}>
        <p className='linkbtn' style={{position: 'relative', left :'60%', top:'0.5rem'}}>Forgot Password</p>
        </Link><br/>

        <input className="btn1" type="submit" name="btnLogin" label="btnLogin" value="Login" onClick={(e)=>onSubmit(e)}/><br/>
        <Link to={'/CreateAccount'}>
        <input type="submit" name="btnCreateAcc" label="btnCreateAcc" value="Create Account"  onClick={(e)=>onLogout(e)}/>
        </Link>

      </div>
      </div>
    </div>
    </header>
  );
}

export default Login;