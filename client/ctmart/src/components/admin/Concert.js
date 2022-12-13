import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import Avatar from 'react-avatar';



function ConcertCon() {

  return(
    <header className='App-header'>
    <div><br/>
    <h1 style={{fontFamily:'Poppins', textAlign: 'center'}}>CONCERT</h1>
      <div className='concertTab' style={{top: '8rem'}}>
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
                <th>ConcertID</th>
                <th>Concert Name</th>
                <th>Venue</th>
                <th>Performer</th>
                <th>Date</th>
                <th>Time</th>
                <th>TicketID</th>
                <th></th>
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
                  <Link to={'./UpdateConcert'}>
                  <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Update"/>
                  </Link> 
                </td>
                <td>
                  <Link to={'/RecycleBin/ConcertTable'}>
                  <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete"/>
                  </Link>
                </td>
              </tr> 
              </table>
                   </div>
                    </Box><br/>
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
    <header className='App-header'>
  <div className='App-header'>
    <div className='container-page'>{ConcertCon()}</div>
    <AppBar position="static" className='admin-menu-bar' style={{backgroundColor: "#FFC107", position: "absolute", top: "0", left:'0px', width: '21%', height:'100%'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box>
          <input className='admin-logo' type="image" src="/images/logo.png" alt="Submit"/>
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
          <Link to={'/Concert'}>
          <h5 className='admin-label3' style={{opacity:'1'}}>TICKET</h5>
          <Box className='tab3'>
          <h5 className='admin-label' style={{opacity:'1'}}>TICKET</h5>
          </Box>
          </Link>
          <Link to={'/Account'}>
          <h5 className='admin-label4' style={{opacity:'1'}}>CUSTOMER ACCOUNT</h5>
          <Box className='tab4'>
          <h5 className='admin-label' style={{opacity:'1'}}>CUSTOMER ACCOUNT</h5>
          </Box>
          </Link>
          <Link to={'/RecycleBin'}>
          <h5 className='admin-label5' style={{opacity:'1'}}>RECYCLE BIN</h5>
          <Box className='tab5'>
          <h5 className='admin-label' style={{opacity:'1'}}>RECYCLE BIN</h5>
          </Box>
          </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  </header>
    
  );
}
export default AdminHP;