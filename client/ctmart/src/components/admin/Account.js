import * as React from 'react';
import './admin.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
function AccountTable() {

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
        <input type="text" name="birthdate" label="birthdate" placeholder='Enter Birthdate'/><br/>
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


function Account() {
  return (
  <div className='App-header'>
    <div className='container-page'>{AccountTable()}</div>
    <AppBar className='admin-menu-bar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box>
          <input className='admin-logo' type="image" src="images/logo.png" alt="Submit"/>
          <h4 className='admin-logo-label'>CTMART</h4>
          <Link to={'/AdminHP'}>
          <h5 className='admin-label1' style={{opacity:'1'}}>DASHBOARD</h5>
          <Box className='tab1'>
          <h5 className='admin-label' style={{opacity:'1'}}>DASHBOARD</h5>
          </Box>
          </Link>
          <Link to={'/Concert'}>
          <h5 className='admin-label2' style={{opacity:'1'}}>CONCERT</h5>
          <Box className='tab2'>
          <h5 className='admin-label' style={{opacity:'1'}}>CONCERT</h5>
          </Box>
          </Link>
          <Link to={'/Account'}>
          <h5 className='admin-label3' style={{opacity:'1'}}>ACCOUNT</h5>
          <Box className='tab3'>
          <h5 className='admin-label' style={{opacity:'1'}}>ACCOUNT</h5>
          </Box>
          </Link>
          <Link to={'/RecycleBin'}>
          <h5 className='admin-label4' style={{opacity:'1'}}>RECYCLE BIN</h5>
          <Box className='tab4'>
          <h5 className='admin-label' style={{opacity:'1'}}>RECYCLE BIN</h5>
          </Box>
          </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </div>
    
  );
}
export default Account;