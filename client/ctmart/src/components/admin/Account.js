import * as React from 'react';
import './admin.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import Avatar from 'react-avatar';
function AccountTable() {

  return(
    <header className='App-header'>
    <div><br/>
      <div className='concertTab' style={{top: '8rem'}}>
        <Box className='concertTbl tab-con'style={{backgroundColor:'#FFC107', width:'20rem'}}>
          <h5 className='tab-con-label1'>Customer Account</h5>
        </Box>
        <Box className='concertTbl'>
        <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem', position: 'absolute', marginTop:'2rem'}}>Customer Account</h1><br></br>
          <div className='content-concert'>
          <table id="tbl" >
              <tr>
                <th>Username</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Type</th>
                <th>Contact Number</th>
                <th>Birthdate</th>
                <th>Age</th>
                <th>Email </th>
                <th></th>
              </tr>
              <tr>
                <td>mjerich</td>
                <td>Mark Jerich</td>
                <td>Taboada</td>
                <td>C</td>
                <td>09455209698</td>
                <td>05/08/2001</td>
                <td>21</td>
                <td>markjerich.taboada@cit.edu</td>
                <td>
                  <Link to={'/RecycleBin'}>
                  <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Block"/>
                  </Link>
                </td>
              </tr>  
              <tr>
                <td>marksss</td>
                <td>Markovian</td>
                <td>Bonjinx</td>
                <td>C</td>
                <td>09429785600</td>
                <td>05/08/2001</td>
                <td>21</td>
                <td>markjerich.taboada@cit.edu</td>
                <td>
                  <Link to={'/RecycleBin'}>
                  <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Block"/>
                  </Link>
                </td>
              </tr>  
              </table>
                   </div>
                    </Box>
      </div>  
      </div>
    </header>  


        
)
}



function Account() {
  return (
  <div className='App-header'>
    <div className='container-page'>
    <Avatar googleId="118096717852922241760" size="75" round={true} style={{top:'1.5rem', left: '120rem', position:'relative'}}/>
      <h1 style={{fontFamily:'Poppins', textAlign: 'right', right: '10rem', position:'relative', top: '-1.5rem'}}>PINK JEAN</h1>
      {AccountTable()}</div>
    <AppBar position="static" className='admin-menu-bar' style={{backgroundColor: "#FFC107", position: "absolute", top: "0", left:'0px', width: '21%', height:'100%'}}>
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
    
  );
}
export default Account;