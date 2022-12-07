import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
function ConcertCon() {

  return(
    <header className='App-header'>
    <div>
    <h1 style={{fontFamily:'Poppins', textAlign: 'centar'}}>CONCERT</h1>
      <div className='concertTab'>

      <Box className='concertTbl tab-con'style={{backgroundColor:'#FFC107'}}>
        <Link to={'/Concert'}><h5 className='tab-con-label1'>ViewTable</h5></Link>
      </Box>
      
      <Box className='concertTbl tab-acc'>
      <Link to={'/Concert/UpdateConcert'}><h5 className='tab-con-label2'>UpdateConcert</h5></Link>
      </Box>
        <Box className='concertTbl tab-cus'>
        <Link to={'/Concert/AddConcert'}><h5 className='tab-con-label3'>AddConcert</h5></Link>
        </Box>
        <Box className='concertTbl'>
        <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem', position: 'absolute', marginTop:'1rem'}}>Concert</h1><br></br>
        <div className='content-concert'>
          <table id="tbl" >
  <tr>
    <th>id</th>
    <th>Performer</th>
    <th>Performer Type</th>
  </tr>
  <tr>
    <td>00001</td>
    <td>Markovian</td>
    <td>Singer</td>
    <td>
      <Link to={'./EditPerformer'}>
      <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Update"/>
      </Link> 
    </td>
    <td><input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete"/></td>
  </tr>  
  <tr>
  <td>00001</td>
    <td>Markovian</td>
    <td>Singer</td>
    <td>      
      <Link to={'./EditPerformer'}>
      <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Update"/>
      </Link> 
    </td>
    <td><input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete"/></td>  
  </tr>    
  </table>


        </div>
        </Box><br/><br/>
        <Link to={'/Venue'}>
          <input type="submit" name="btnUpdate" label="btnUpdate" value="View Venue" style={{bottom:'-50rem'}}/>
        </Link>
        <Link to={'/Performer'}>
          <input type="submit" name="btnUpdate" label="btnUpdate" value="View Performer" style={{bottom:'-50rem'}}/>
        </Link>
      </div>  
      </div>
    </header>  


        
)
}

function AdminHP() {
  return (
  <div className='App-header'>
    <div className='container-page'>{ConcertCon()}
    <AppBar className='admin-menu-bar'>
      <Container maxWidth="xl" style={{opacity:'1'}}>
        <Toolbar disableGutters style={{opacity:'1'}}>
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