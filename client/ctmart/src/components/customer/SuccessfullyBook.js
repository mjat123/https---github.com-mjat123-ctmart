import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
function Prompt() {

  return(
    <header className='App-header'>
    <div className="App">
      <div className='card' style={{width:'500px', height: '200px'}}>
      <h1 style={{fontFamily:'Poppins', textAlign: 'center', margin:'2rem'}}>Successfully Booked!</h1>

        <Link to={'/CustomerHP'}>
          <input style={{position:"relative", left: '5rem', width:"253px"}} className="btnAdd" type="submit" name="btnUpProf" label="btnUpProf" value="Done"/><br/>
          </Link>
      </div>
      </div>
    </header>  
)
}


function UpdateProf() {
  return (
  <div className='App-header'>
    <div className='container-page'>{Prompt()}</div>
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
export default Prompt;