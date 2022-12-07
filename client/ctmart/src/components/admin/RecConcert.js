import * as React from 'react';
import './admin.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import Avatar from 'react-avatar';

function RecycleBinTable() {

  return(
    <header className='App-header'>
    <div>
      <div className='concertTab' style={{top: '8rem'}}>
      <Box className='concertTbl tab-con'style={{width:'20rem'}}>
          <Link to={'/RecycleBin'}><h5 className='tab-con-label1'>Customer Account</h5></Link>
        </Box>
        <Box className='concertTbl tab-acc'style={{backgroundColor:'#FFC107', width:'15rem', left: '20.4rem'}}>
          <Link to={'/RecycleBin/ConcertTable'}><h5 className='tab-con-label2'>Concert</h5></Link>
        </Box>
        <Box className='concertTbl tab-cus'style={{width:'20rem', left: '35.8rem'}}>
          <Link to={'/RecycleBin/PerfVenTable'}><h5 className='tab-con-label3'>Performer & Venue</h5></Link>
        </Box>
        <Box className='concertTbl'>
        <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem', position: 'absolute', marginTop:'2rem'}}>Concert Table</h1><br></br>
          <div className='content-concert'>
            <table id="tbl" >
              <tr>
                <th>ConcertID</th>
                <th>Concert Name</th>
                <th>Venue</th>
                <th>Performer</th>
                <th>Date</th>
                <th>Time</th>
                <th>TicketID</th>
                <th></th>
              </tr>
              <tr>
                <td>ConcertID</td>
                <td>Concert Name</td>
                <td>Venue</td>
                <td>Performer</td>
                <td>Date</td>
                <td>Time</td>
                <td>TicketID</td>
                <td>
                  <Link to={'/Concert'}>
                  <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Restore"/>
                  </Link> 
                </td>
              </tr>  
              <tr>
                <td>ConcertID</td>
                <td>Concert Name</td>
                <td>Venue</td>
                <td>Performer</td>
                <td>Date</td>
                <td>Time</td>
                <td>TicketID</td>
                <td>
                  <Link to={'/Concert'}>
                  <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Restore"/>
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


function RecycleBin() {
  return (
  <div className='App-header'>
    <div className='container-page'>      
    <Avatar googleId="118096717852922241760" size="75" round={true} style={{top:'1.5rem', left: '120rem', position:'relative'}}/>
      <h1 style={{fontFamily:'Poppins', textAlign: 'right', right: '10rem', position:'relative', top: '-1.5rem'}}>PINK JEAN</h1>
      {RecycleBinTable()}</div>
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
export default RecycleBin;