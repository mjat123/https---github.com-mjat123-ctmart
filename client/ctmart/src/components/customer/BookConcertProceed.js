import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
function Profile() {

  return(
    <header className='App-header'>
    <div className="App">
      <div className='card'style={{width:'867px', height: '714px'}}>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', margin:"2rem"}}>SELECTED TICKETS</h1>

      <div className='wrapper'>
        <div className='column1'>
          <h1 style={{fontSize:'30px', color:'black', top:'3rem', marginLeft:'-15rem',fontWeight:'400'}}>Location</h1>
          <h1 style={{fontSize:'30px', color:'black', top:'3rem', marginLeft:'-15rem'}}>Gold</h1>
        </div>
        <div className='column2'>
          <h1 style={{fontSize:'30px', color:'black', top:'3rem', marginLeft:'-20rem',fontWeight:'400'}}>Price</h1>
          <h1 style={{fontSize:'30px', color:'black', top:'3rem', marginLeft:'-20rem'}}>Php 1,000.00</h1>
        </div>
        <h1 style={{fontSize:'50px', marginTop:'3rem', marginLeft:'-6rem'}}>SUMMARY</h1>
        <h1 style={{fontSize:'30px', color:'black', marginTop:'7rem', marginLeft:'-31rem',fontWeight:'600'}}>AURORA MUSIC FESTICAL 2022</h1>
        <h1 style={{fontSize:'20px', color:'black', top:'3rem', marginLeft:'-6rem',fontWeight:'400'}}>November 19, 2022 3:00PM</h1>
      </div>
      <div className='wrapper2'>
        <div className='column1'><h1 style={{fontSize:'20px', color:'black', marginTop:'2rem', marginLeft:'-4rem',fontWeight:'400'}}>GOLD</h1></div>
        <div className='column2'><h1 style={{fontSize:'20px', color:'black', marginTop:'2rem', marginLeft:'-4rem',fontWeight:'400'}}>1 X Php 1,000.00</h1></div>
        <div className='column3'><h1 style={{fontSize:'20px', color:'black', marginTop:'2rem', marginLeft:'2rem',fontWeight:'400'}}>Php 1,000.00</h1></div>
      </div>
      <div className='wrapper2'>
        <div className='column1'><h1 style={{fontSize:'20px', color:'black', marginTop:'2rem', marginLeft:'-4rem',fontWeight:'400'}}>Total Ticket</h1></div>
        <div className='column2'><h1 style={{fontSize:'20px', color:'black', marginTop:'2rem', marginLeft:'-4rem',fontWeight:'400'}}>1 X Php 1,000.00</h1></div>
      </div>        
      <Link to={'/BookConcert'}>
          <input style={{position:"absolute", left: "34rem", width:"253px", top:'5rem'}} className="btnAdd" type="submit" name="btnUpProf" label="btnUpProf" value="Add More Tickets"/><br/>
          </Link>
          <Link to={'/BookConcert/ProceedPayment/Success'}>
          <input style={{position:"relative", left: "25%", width:"253px"}} className="btnAdd" type="submit" name="btnUpProf" label="btnUpProf" value="Book Ticket"/><br/>
          </Link>
      </div>
      </div>
    </header>  
)
}


function UpdateProf() {
  return (
  <div className='App-header'>
    <div className='container-page'>{Profile()}</div>
    <AppBar position="static" style={{backgroundColor: "#FFC107", position: "absolute", top: "0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box>
          <input className='logo-menubar' type="image" src="/images/logo.png" alt="Submit"/>
          <Link to={'/CustomerHP'}><h4>CTMART</h4></Link>
          <Link to={'/BookConcert'}>
          <h5 className='label1' style={{ right: "27rem", color:"white", fontWeight:"800"}}>Book Concert</h5>
          </Link>
          <Link to={'/CheckReservation'}>
          <h5 className='label1' style={{ right: "10.5rem"}}>Check Reservation</h5>
          </Link>
          <Link to={'/UpdateProfile'}>
          <h5 className='label1' style={{ right: "-2rem"}}>Update Profile</h5>
          </Link>
          <Link to={'/'}>
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