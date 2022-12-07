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
    <div>
    <h1 style={{fontFamily:'Poppins', textAlign: 'centar'}}>CONCERT</h1>
      <div className='concertTab' style={{top: '8rem'}}>

      <Box className='concertTbl tab-con'>
        <Link to={'/Concert'}><h5 className='tab-con-label1'>ViewTable</h5></Link>
      </Box>
      
      <Box className='concertTbl tab-acc'>
        <Link to={'/Concert/UpdateConcert'}><h5 className='tab-con-label2'>UpdateConcert</h5></Link>
      </Box>
      <Box className='concertTbl tab-cus' style={{backgroundColor:'#FFC107'}}>
        <Link to={'/Concert/AddConcert'}><h5 className='tab-con-label3'>AddConcert</h5></Link>
      </Box>
        <Box className='concertTbl' style={{backgroundColor:'white'}}>{AddConcert()}</Box>
          
      </div>  
      </div>
    </header>  


        
)
}
function AddConcert() {

  return(

    <div className="App">
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '4rem',marginTop:"2rem"}}>Add Concert</h1>
        <div className='wrapper' style={{margin:"2rem",marginTop:"0rem"}}>
          <div className='column1'>
          <label>Concert Name</label><br/>
          <input type="text" name="concert_name" label="concert_name" placeholder='Enter Concert Name'/><br/>
          <label>Performer</label><br/>
          <select name="perfomrID" id="performerID">
            <option value="perf1">Volvo</option>
            <option value="perf2">Saab</option>
            <option value="perf3">Opel</option>
            <option value="perf4">Audi</option>
          </select><br/>
          <label>Venue</label><br/>
          <select name="venueID" id="venueID">
            <option value="ven1">Volvo</option>
            <option value="ven2">Saab</option>
            <option value="ven3">Opel</option>
            <option value="ven4">Audi</option>
          </select><br/>
          <label>Birthday</label><br/>
          <input type="date" id="birthday" name="birthday" placeholder='Birthday'/><br/>
          <label>Time</label><br/>
          <input type="time" id="time" name="time" placeholder='Time'/><br/>
          <label>Ticket</label><br/>
          <select name="ticketID" id="ticketID">
            <option value="type1">10</option>
            <option value="type2">12</option>
            <option value="type3">14</option>
            <option value="type">15</option>
          </select><br/>
          </div>
          <div className='column2' style={{position:"relative", left: "-1%", marginRight:"2rem"}}>
          <table id="tbl" >
  <tr>
    <th>TicketID</th>
    <th>VIP</th>
    <th>Gold</th>
    <th>Silver</th>
  </tr>
  <tr>
    <td>1</td>
    <td>50</td>
    <td>200</td>
    <td>500</td>
  </tr>  
  <tr>
  <td>2</td>
    <td>50</td>
    <td>200</td>
    <td>500</td>
  </tr>    
  </table>
          </div>
          <Link to={'/Concert'}>
          <input style={{position:"relative", left: "65%", width:"253px"}} className="btnAdd" type="submit" name="btnUpProf" label="btnUpProf" value="Add Concert"/><br/>
          </Link>
        </div>
      </div>  
)
}

function AdminHP() {
  return (
  <div className='App-header'>
    <div className='container-page'>
    <Avatar googleId="118096717852922241760" size="75" round={true} style={{top:'1.5rem', left: '120rem', position:'relative'}}/>
      <h1 style={{fontFamily:'Poppins', textAlign: 'right', right: '10rem', position:'relative', top: '-1.5rem'}}>PINK JEAN</h1>
      {ConcertCon()}</div>
    <AppBar position="static" className='admin-menu-bar' style={{backgroundColor: "#FFC107", position: "absolute", top: "0", left:'0px', width: '21%', height:'100%'}}>
      <Container maxWidth="xl" style={{opacity:'1'}}>
        <Toolbar disableGutters style={{opacity:'1'}}>
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
export default AdminHP;