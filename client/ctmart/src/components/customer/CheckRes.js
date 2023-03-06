import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate, useParams} from 'react-router-dom';
import RemoveCookie from '../../hook/RemoveCookie';
import axios from 'axios';

function Prompt() {

  return(
<header className='App-header'>
    <div><br/>
      <div className='concertTab' style={{top: '8rem'}}>
        <Box className='concertTbl tab-con'style={{backgroundColor:'#FFC107',width: '300px'}}>
          <Link to={'/CheckReservation'}><h5 className='tab-con-label1'>Recent Reservations</h5></Link>
        </Box>
        <Box className='concertTbl tab-cus' style={{left:'19rem',width: '220px'}}>
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
                <th>Date</th>
                <th>Time</th>
                <th>Price</th>
                <th></th>

              </tr>
              <tr>
                <td>3</td>
                <td>Aurora Festival</td>
                <td>City De Mare, SRP</td>
                <td>11/19/2022</td>
                <td>3:00 PM</td>
                <td>1000</td>

                <td>
                  <Link to={'/CheckReservation/RecentlyDeleted'}>
                  <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete"/>
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
    <div className='container-page'>{Prompt()}</div>
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
          <h5 className='label1' style={{ right: "10.5rem" , color:"white", fontWeight:"800"}}>Check Reservation</h5>
          </Link>
          <Link to={'/UpdateProfile'}>
          <h5 className='label1' style={{ right: "-2rem"}}>Update Profile</h5>
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
export default CheckRes;