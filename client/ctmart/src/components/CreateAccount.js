
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams, userNavigate} from 'react-router-dom';
import axios from 'axios';
import RemoveCookie from '../hook/RemoveCookie';

function App() {

  let history = useNavigate();
  const{customerID}=useParams()
  const[customers,setCustomers] = useState([]);
  const[create_account, setCreate_Account] = useState({
    username:"",
    password:"",
    firstname:"",
    lastname:"",
    acc_type:"C"
  })
  const[create_customer, setCreate_Customer] = useState({
    // username:"",
    birthdate:"",
    age:"",
    email:""
  })

  const{username,password,firstname,lastname,acc_type}=create_account
  const{birthdate,age,email}=create_customer

  const onInputChange=(e)=>{
    setCreate_Customer({ ...create_customer,[e.target.name]: e.target.value});
    setCreate_Account({ ...create_account,[e.target.name]: e.target.value});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{

      if((username).length!=0 && 
        (password).length!=0 &&
        (firstname).length!=0 &&
        (lastname).length!=0 &&
        (birthdate).length!=0 &&
        (age).length!=0 &&
        (email).length!=0 
          
        ){

        const resultacc= await axios.post("http://localhost:8081/account/postAccount",create_account);
        RemoveCookie('usrin');
        console.log((resultacc.data));
        const resultcus = await axios.post("http://localhost:8081/customer/postCustomer",create_customer);
        RemoveCookie('usrin');
        console.log((resultcus.data));
        alert([username ]+" successfully added")
        history("/Login");
      }else{alert("Missing Field");}

    }catch(e){
      alert([username]+" Not Valid.");

    }
  }
  const cancelSubmit=async(e)=>{
    e.preventDefault();
    RemoveCookie('usrin');
    history("/Login");
  }

  return (
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins'}}>Create Account</h1>
      
        <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder='Enter Username' value={username} onChange={(e)=>onInputChange(e)} required /><br/>
        <label>Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password' value={password} onChange={(e)=>onInputChange(e)} required/><br/>
        <label>Firstname</label><br/>
        <input type="text" name="firstname" placeholder='Enter Firstname' value={firstname} onChange={(e)=>onInputChange(e)} required/><br/>
        <label>Lastname</label><br/>
        <input type="text" name="lastname" placeholder='Enter Lastname' value={lastname} onChange={(e)=>onInputChange(e)} required/><br/>
        <label>Birthdate</label><br/>
        <input type="date" name="birthdate" placeholder='Enter Birthdate' value={birthdate} onChange={(e)=>onInputChange(e)} required/><br/>
        <label>Age</label><br/>
        <input type="text" name="age" placeholder='Enter Age' value={age} onChange={(e)=>onInputChange(e)} required/><br/>
        <label>Email</label><br/>
        <input type="text" name="email" label="email" placeholder='Enter Email' value={email} onChange={(e)=>onInputChange(e)} required/><br/><br/>
        <input type="submit" value="Submit" onClick={(e)=>handleSubmit(e)} style={{width:"10rem"}}/>
        <input type="submit" value="Cancel" onClick={(e)=>cancelSubmit(e)} className="btnDel" />
      </div>
      </div>
    </div>
    </header>
  );
}

export default App;
