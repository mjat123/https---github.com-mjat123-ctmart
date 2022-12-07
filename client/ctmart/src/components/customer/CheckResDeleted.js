import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
function Prompt() {

  return(
<header className='App-header'>
    <div><br/>
      <div className='concertTab' style={{top: '8rem'}}>
        <Box className='concertTbl tab-con'style={{width: '300px'}}>
          <Link to={'/CheckReservation'}><h5 className='tab-con-label1'>Recent Reservations</h5></Link>
        </Box>
        <Box className='concertTbl tab-cus' style={{left:'19rem', backgroundColor:'#FFC107', width: '220px'}}>
          <Link to={'/CheckReservation/RecentlyDeleted'}><h5 className='tab-con-label2'>Recently Deleted</h5></Link>
        </Box>
        <Box className='concertTbl'>
        <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem', position: 'absolute', marginTop:'1rem'}}>Reservations</h1><br></br>
        <div className='content-concert'>
            <table id="tbl" >
              <tr>
                <th>ConcertID</th>
                <th>Concert Name</th>
                <th>Venue</th>
                <th>Performer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Price</th>
                <th></th>

              </tr>
              <tr>
                <td>ConcertID</td>
                <td>Concert Name</td>
                <td>Venue</td>
                <td>Performer</td>
                <td>Date</td>
                <td>Time</td>
                <td>Price</td>

                <td>
                  <Link to={'/CheckReservation'}>
                  <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Restore"/>
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
                <td>Price</td>
                <td>
                  <Link to={'/CheckReservation'}>
                  <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Restore"/>
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


function CheckRes() {
  return (
  <div className='App-header'>
    <div className='container-page'>{Prompt()}</div>
    <AppBar position="static" style={{backgroundColor: "#FFC107", position: "absolute", top: "0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box>
          <input className='logo-menubar' type="image" src="/images/logo.png" alt="Submit"/>
          <Link to={'/CustomerHP'}><h4>CTMART</h4></Link>
          <Link to={'/BookConcert'}>
          <h5 className='label1' style={{ right: "27rem"}}>Book Concert</h5>
          </Link>
          <Link to={'/CheckReservation'}>
          <h5 className='label1' style={{ right: "10.5rem" , color:"white", fontWeight:"800"}}>Check Reservation</h5>
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
export default CheckRes;