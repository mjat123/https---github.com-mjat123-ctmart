import React, {useEffect, useState}  from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, useParams, userNavigate} from 'react-router-dom';
import Avatar from 'react-avatar';
import axios from 'axios';  



function ConcertCon() {
  let history = useNavigate();
  const{concertID}=useParams()
  const[concerts,setConcert] = useState([]);
  const[concert_isdeleted] = useState({
    isdeleted:"1"
  })
  const{isdeleted}=concert_isdeleted
  


  const loadConcert=async()=>{
    const result = await axios.get(`http://localhost:8081/concert/getIsdeleted/?isdeleted=0`);
    setConcert(result.data);
  }
  const onSubmitDelete=async(concertID)=>{
    await axios.put(`http://localhost:8081/concert/putConcertisdeleted/${concertID}`,concert_isdeleted)
    console.log((concertID))
    window.location.reload();
    loadConcert(); 
    
  }

  useEffect(()=>{
    loadConcert();
  },[]);

  const onUpdate=async(concertID)=>{

    // sessionStorage.setItem('concertID',[concert.concertID]);
    // sessionStorage.setItem('concert_name',[concert.concert_name]);
    // sessionStorage.setItem('venue',[concert.venue]);
    // sessionStorage.setItem('performer',[concert.performer]);
    // sessionStorage.setItem('concert_date',[concert.concert_date]);
    // sessionStorage.setItem('concert_time',[concert.concert_time]);
    // sessionStorage.setItem('ticket_id',[concert.ticket_id]);
  }
  
  return(
    <header className='App-header'>
    <div><br/>
    <h1 style={{fontFamily:'Poppins', textAlign: 'center'}}>CONCERT</h1>
      <div className='concertTab' style={{top: '8rem'}}>
        <Box className='concertTbl tab-con'style={{backgroundColor:'#FFC107'}}>
          <Link to={'/Concert'}><h5 className='tab-con-label1'>ViewTable</h5></Link>
        </Box>
        <Box className='concertTbl tab-cus'>
          <Link to={'/Concert/AddConcert'}><h5 className='tab-con-label3'>AddConcert</h5></Link>
        </Box>
        <Box className='concertTbl' style={{position:"relative", height: 'auto', padding:'2rem', top:'3rem'}}>
        <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem', position: 'absolute', marginTop:'1rem'}}>Concert</h1><br></br>
          <div className='content-concert' style={{position:"relative", height: 'auto', top:'-1rem'}}>
            <table id="tbl" >
              <thead>
              <tr>
                <th>ConcertID</th>
                <th>Concert Name</th>
                <th>Venue</th>
                <th>Performer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Ticket T</th>
                <th>Actions</th>
              </tr>
              </thead>
  <tbody>
        {
            concerts.map((concert,index)=>(
                <tr>
                
                <td>{concert.concertID}</td>
                <td>{concert.concert_name}</td>
                <td>{concert.venue}</td>
                <td>{concert.performer}</td>
                <td>{concert.concert_date}</td>
                <td>{concert.concert_time}</td>
                <td>{concert.ticket_id}</td>
                <td>
                  <Link  to={`./UpdateConcert/${concert.concertID}`} onClick={()=>onUpdate(concert.concertID)}>
                  <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Update"/>
                  </Link>
                  
                  <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete" onClick={()=>onSubmitDelete(concert.concertID)}/>
                </td>
              </tr>
            ))
        }




  </tbody>    
              </table>
                   </div>
                    </Box><br/>
                    <Link to={'/Venue'}>
                      <input type="submit" name="btnUpdate" label="btnUpdate" value="View Venue" style={{top:'5rem'}}/>
                    </Link>
                    <Link to={'/Performer'}>
                    <input type="submit" name="btnUpdate" label="btnUpdate" value="View Performer" style={{top:'5rem'}}/>
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
          <Link to={'/RecycleBin/ConcertTable'}>
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