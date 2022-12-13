import React, { useState } from 'react';
import './App.css';
import {Link, useNavigate, userNavigate} from 'react-router-dom';

function App() {

  const[username,setUsername] = useState('')
  const[password,setPassword]= useState('')
  const[name,setName] = useState('')
  const[birthdate,setBirthdate]= useState('')
  const[age,setAge] = useState('')
  const[email,setEmail]= useState('')
  const[type,setType]= useState('C')
  

  let history = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    const account={username,password,name,birthdate,age,email,type}
    fetch("http://localhost:8081/account/postAccount",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(account)
    }).then(()=>{
      console.log("added")
      alert([username]+" successfully added")
      history("/Login");
    })
    
    [type]=setType(e.target.value)

}

  return (
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins'}}>Create Account</h1>
      
        <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)} /><br/>
        <label>Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <label>Name</label><br/>

        <input type="text" name="fullname" label="fullname" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>

        <label>Birthdate</label><br/>
        <input type="date" name="birthdate" label="birthdate" placeholder='Enter Birthdate' value={birthdate} onChange={(e)=>setBirthdate(e.target.value)}/><br/>
        <label>Age</label><br/>
        <input type="text" name="age" label="age" placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)}/><br/>
        <label>Email</label><br/>
        <input type="text" name="email" label="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <input type="submit" name="type" label="type" onClick={(e)=>handleSubmit(e)}/>

      </div>
      </div>
    </div>
    </header>
  );
}

export default App;
