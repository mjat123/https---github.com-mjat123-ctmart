import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import 'react-slideshow-image/dist/styles.css';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, userNavigate, useParams} from 'react-router-dom';
import RemoveCookie from '../../hook/RemoveCookie';
import axios from 'axios';

function Column2(){
  return(
  <div>
    <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '1rem',marginTop:"2rem"}}>Available Concert</h1>
    <div className='content-rec' style={{width: '50rem', height:'40rem', margin: '1rem'}}>
      <h2 style={{margin: '1rem'}}>Aurora Music Festival 2022</h2>
      <h4 style={{color: 'white', textAlign: 'left', margin:'4.5rem'}}>City De Mare, SRP</h4><br/>
      <Box className='rectangle' style={{margin:'1rem'}}>
        <h5 style={{top:'0.5rem', fontWeight: 'bold',margin: '0.5rem'}}>November 19, 2022</h5>
        
        <h5 style={{top:'2.5rem', margin: '0.5rem'}}>3:00 PM</h5>
        </Box>
        <h1 style={{color: 'white', textAlign: 'left', margin:'1rem',marginTop:'1rem'}}>TICKETS</h1>
        <form style={{marginLeft: '1rem',marginTop:'-2rem'}}>
          <label style={{color: 'white'}}>Select Ticket Type</label><br/>
          <select style={{height: '50px'}} name="Select Dates" id="date">
            <option value="VIP">VIP</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
          </select>
          <p style={{color: 'white', position: 'absolute', margin:'0.5rem', marginLeft:'0.2rem'}}>Available Number of Tickets:</p>
          <p style={{color: 'white', position: 'absolute', margin:'0.5rem',marginLeft:'13rem', fontWeight:'bold'}}>50</p>
        </form>
        <form style={{marginLeft: '1rem',marginTop:'1.5rem'}}>
        <label style={{color: 'white'}}>Price</label><br/>
        <input type="text" name="ticket_price" value="1000" style={{width:'150px'}} readOnly={true}/><br/>
        <label style={{color: 'white'}}>Quantity</label>
        <input type="text" name="ticket_quantity" value="1" style={{width:'50px', marginLeft:'1rem'}}/>
        <input type="submit" name="add" value="+" style={{width:'50px', background:'gray'}}/>
        <input type="submit" name="minus" value="-" style={{width:'50px', background:'red'}}/>
        </form>
        </div>
    </div>
  )
}



function Content(){

  const[isVisible, setIsVisible] = useState(false)

  function handleClick(){
    setIsVisible(true);
  }
  return(
  <header className='App-header'>
    <div className="App">
      <div className='card-content'>
      <div className='wrapper'>
        <div className='column1'>
        <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '3rem',marginTop:"2rem"}}>BOOK CONCERT</h1>  
        <form style={{marginLeft: '5rem'}}>
        <label>Select Date</label><br/>
          <input type="date" id="concert_date" name="concert_date" style={{height: '50px'}}/><br/>
        </form>
        <form style={{marginLeft: '5rem'}}>
        <label>Select Concert</label><br/>
        <select style={{height: '50px'}} name="Select Dates" id="date">
          <option value="Markovian">Markovian</option>
          <option value="Aurora Festival">Aurora Festival</option>
          </select>
        </form>
        <Link to={'/BookConcert'}>
          <input style={{position:"relative", left: "4rem", width:"100px"}} className="btnAdd" onClick={handleClick} type="submit" name="Go" value="Go"/><br/>
          </Link>
          <Link to={'/BookConcert/ProceedPayment'}>
          <input style={{position:"relative", left: "4rem", bottom:'-17rem'}} className="btnCreateAcc" type="submit" name="Proceed" value="Proceed"/><br/>
          </Link>
        </div>
        {isVisible && <div className='column2' style={{ position:"relative", left: "-1%"}}>
            {Column2()}
            </div>}
      </div>
      </div>
    </div>
  </header>  
    )
}

function BookConcert() {
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
    <div className='container-page'>{Content()}</div>
    <AppBar position="static" style={{backgroundColor: "#FFC107", position: "absolute", top: "0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box>
          <input className='logo-menubar' type="image" src="images/logo.png" alt="Submit"/>
          <Link to={'/CustomerHP'}><h4>CTMART</h4></Link>
          <Link to={'/BookConcert'}>
          <h5 className='label1' style={{ right: "27rem", color:"white", fontWeight:"800"}}>Book Concert</h5>
          </Link>
          <Link to={'/CheckReservation'}>
          <h5 className='label1' style={{ right: "10.5rem"}}>Check Reservation</h5>
          </Link>
          <Link to={'/UpdateProfile'}>
          <h5 className='label1' style={{ right: "-2rem",}}>Update Profile</h5>
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
export default BookConcert;