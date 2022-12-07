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
      <div className='card'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '4rem',marginTop:"2rem"}}>Update Profile</h1>
        <div className='wrapper' style={{margin:"2rem",marginTop:"0rem"}}>
          <div className='column1'>
          <label>Username</label><br/>
        <input type="text" name="username" label="Username" placeholder='Enter Username'/><br/>
        <label>Password</label><br/>
        <input type="password" name="password" label="Password" placeholder='Enter Password'/><br/>
        <label>Name</label><br/>
        <input type="text" name="fullname" label="fullname" placeholder='Enter Name'/><br/>
        
          </div>
          <div className='column2' style={{position:"relative", left: "-1%", marginRight:"2rem"}}>
          <label>Birthdate</label><br/>
        <input type="date" name="birthdate" label="birthdate" placeholder='Enter Birthdate'/><br/>
        <label>Age</label><br/>
        <input type="text" name="age" label="age" placeholder='Enter Age'/><br/>
        <label>Email</label><br/>
        <input type="text" name="email" label="email" placeholder='Enter Email'/><br/><br/>
          </div>
          <Link to={'./ConfirmPass'}>
          <input style={{position:"relative", left: "65%", width:"253px"}} className="btnAdd" type="submit" name="btnUpProf" label="btnUpProf" value="Update Profile"/><br/>
          </Link>
        </div>
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