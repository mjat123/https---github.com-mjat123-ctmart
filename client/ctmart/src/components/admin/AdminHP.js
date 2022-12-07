import * as React from 'react';
import './admin.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
function Dashboard() {

  return(
    <header className='App-header'>
    <div className="App">
    <h1 style={{fontFamily:'Poppins', textAlign: 'centar'}}>Dashboard</h1>
      <Box className='dashb-box feature1'>
      </Box>
      <Box className='dashb-box feature2'>
      </Box>
      <Box className='dashb-box feature3'>
      </Box>
      
      <Box className='dashb-box feature5'>
        <Box className='dashb-box feature5 concertTbl tab-acc'>
          
      <Box className='dashb-box feature5 concertTbl tab-cus'>
        <Box className='dashb-box feature5 concertTbl tab-con'>
        <h5 style={{top: '0.5rem', left: '2.5rem', fontSize: '20px'}}>Concert</h5>
          <Box className='dashb-box feature5 concertTbl'>
          </Box>
        </Box>
        </Box>
        </Box>
      </Box>
      </div>
    </header>  


        
)
}


function AdminHP() {
  return (
  <div className='App-header'>
    <div className='container-page'>{Dashboard()}
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
  </div>
    
  );
}
export default AdminHP;