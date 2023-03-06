import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate, useParams} from 'react-router-dom';
import RemoveCookie from '../../hook/RemoveCookie';
import axios from 'axios';
function Profile() {
  // set session for user's info 
  const setaccountID = sessionStorage.getItem('accountID');
  const setcustomerID = sessionStorage.getItem('customerID');
  const setUname = sessionStorage.getItem('username');
  const setfname = sessionStorage.getItem('firstname');
  const setlname = sessionStorage.getItem('lastname');
  const setbirthdate = sessionStorage.getItem('birthdate');
  const setage = sessionStorage.getItem('age'); 
  const setemail = sessionStorage.getItem('email');

  let history = useNavigate();
    
  const{customerID}=useParams()
  const{accountID}=useParams()
  const[create_account, setCreate_Account] = useState({
    username:`${setUname}`,
    firstname:`${setfname}`,
    lastname:`${setlname}`
  })
  const[create_customer, setCreate_Customer] = useState({
    username:`${setUname}`,
    birthdate:`${setbirthdate}`,
    age:`${setage}`,
    email:`${setemail}`
  })

  const{username,firstname,lastname}=create_account
  const{birthdate,age,email}=create_customer

  //input change for the assigned variables
  const onInputChange=(e)=>{
    setCreate_Customer({ ...create_customer,[e.target.name]: e.target.value});
    setCreate_Account({ ...create_account,[e.target.name]: e.target.value});
  };

  const onSubmit=async(e)=>{
    e.preventDefault();
    console.log((setaccountID))
    console.log((setcustomerID))

    await axios.put(`http://localhost:8081/account/putAccountusername/${setaccountID}`,create_account)
    await axios.put(`http://localhost:8081/customer/putCustomer/${setcustomerID}`,create_customer)
    // sessionStorage.removeItem('username');
    // sessionStorage.removeItem('firstname');
    // sessionStorage.removeItem('lastname');
    sessionStorage.setItem('username',[create_account.username]);
    sessionStorage.setItem('firstname',[create_account.firstname]);
    sessionStorage.setItem('lastname',[create_account.lastname]);
    sessionStorage.setItem('email',[create_account.email]);
    window.location.reload();
    // alert([venue_name]+" successfully added")

  }

  return(
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '4rem',marginTop:"2rem"}}>Update Profile</h1>
        <div className='wrapper' style={{margin:"2rem",marginTop:"0rem"}}>
          <div className='column1'>
          <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder={setUname} value={username} onChange={(e)=>onInputChange(e)}/><br/>
        <label>Firstname</label><br/>
        <input type="text" name="firstname" placeholder={setfname} value={firstname} onChange={(e)=>onInputChange(e)}/><br/>
        <label>Lastname</label><br/>
        <input type="text" name="lastname" placeholder={setlname} value={lastname} onChange={(e)=>onInputChange(e)}/><br/>        
          </div>
          <div className='column2' style={{position:"relative", left: "-1%", marginRight:"2rem"}}>
          <label>Birthdate</label><br/>
        <input type="date" name="birthdate" placeholder={setbirthdate} value={birthdate} onChange={(e)=>onInputChange(e)}/><br/>
        <label>Age</label><br/>
        <input type="text" name="age" placeholder={setage} value={age} onChange={(e)=>onInputChange(e)}/><br/>
        <label>Email</label><br/>
        <input type="text" name="email" placeholder={setemail} value={email} onChange={(e)=>onInputChange(e)}/><br/><br/>
          </div>
          <Link to={'./ConfirmPass'}>
          <input style={{position:"relative", left: "65%", width:"253px"}} className="btnAdd" type="submit" name="btnUpProf" label="btnUpProf" value="Update Profile" onClick={(e)=>onSubmit(e)}/><br/>
          </Link>
        </div>
      </div>
      </div>
    </header>  
)
}


function UpdateProf() {
  const onLogout=async(e)=>{
    sessionStorage.removeItem('accountID');
    sessionStorage.removeItem('customerID');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('lastname');
    sessionStorage.removeItem('birthdate');
    sessionStorage.removeItem('age'); 
    sessionStorage.removeItem('email');
    RemoveCookie('usrin');
  }
  return (
  <div className='App-header'>
    <div className='container-page'>{Profile()}</div>
    <AppBar position="static" style={{backgroundColor: "#FFC107", position: "absolute", top: "0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box>
          <input className='logo-menubar' type="image" src="images/logo.png" alt="Submit"/>
          <Link to={'/CustomerHP'}><h4>CTMART</h4></Link>
          <Link to={'/BookConcert'}>
          <h5 className='label1' style={{ right: "27rem"}}>Book Concert</h5>
          </Link>
          <Link to={'/CheckReservation'}>
          <h5 className='label1' style={{ right: "10.5rem"}}>Check Reservation</h5>
          </Link>
          <Link to={'/UpdateProfile'}>
          <h5 className='label1' style={{ right: "-2rem", color:"white", fontWeight:"800"}}>Update Profile</h5>
          </Link>
          <Link to={'/'} onClick={(e)=>onLogout(e)}>
          <h5 className='label1' style={{ right: "-9.3rem"}}>Logout</h5>
          </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </div>
    
  );
}
export default UpdateProf;