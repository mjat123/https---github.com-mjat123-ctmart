import React, {useEffect, useState}  from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';  

function ConcertCon() {
  return(
    <header className='App-header'>
    <div>
    <h1 style={{fontFamily:'Poppins', textAlign: 'centar'}}>CONCERT</h1>
      <div className='concertTab' style={{top: '8rem'}}>

      <Box className='concertTbl tab-con'>
        <Link to={'/Concert'}><h5 className='tab-con-label1'>ViewTable</h5></Link>
      </Box>
      
      <Box className='concertTbl tab-acc' style={{backgroundColor:'#FFC107'}}>
      <Link to={'./UpdateConcert/:concertID'}><h5 className='tab-con-label2'>UpdateConcert</h5></Link>
      </Box>
        <Box className='concertTbl tab-cus'>
        <Link to={'/Concert/AddConcert'}><h5 className='tab-con-label3'>AddConcert</h5></Link>
        </Box>
        <Box className='concertTbl'style={{backgroundColor:'white'}}>{UpdateCon()}</Box>
      </div>  
      </div>
    </header>  
        
)
}
function UpdateCon() {
  let history = useNavigate();
  const{concertID}=useParams();

  const[performers,setPerformer] = useState([]);
  const[venues,setVenue] = useState([]);
 
  const[create_concert, setCreate_concert] = useState({
    concert_name:"",
    performer:"",
    venue:"",
    concert_date:"",
    concert_time:"",
    ticket_id:""
  })

  const{concert_name, performer, venue, concert_date, concert_time,ticket_id}=create_concert
  
  const onInputChange=(e)=>{
    setCreate_concert({ ...create_concert,[e.target.name]: e.target.value});
  };


  const loadPerformer=async()=>{
    const res1 = await axios.get(`http://localhost:8081/performer/getIsdeleted/?isdeleted=0`);
    setPerformer(res1.data);
    console.log(res1.data);
  }
  const loadVenue=async()=>{
    const res = await axios.get("http://localhost:8081/venue/getIsdeleted/?isdeleted=0");
    setVenue(res.data);
    console.log((res.data));
  }
  useEffect(()=>{
    loadPerformer();
    loadVenue();
    loadConcert();
  },[]);

  const onSubmit=async(e)=>{
    e.preventDefault();
    try{

      if([create_concert].length!==0){
        console.log(concertID)
        const res = await axios.put(`http://localhost:8081/concert/putConcert/${concertID}`, create_concert)
        console.log(res.data)
        // alert([concert_name]+" successfully added")
        history("/Concert");
      }else{alert("Missing Field");}

    }catch(e){
      alert([concert_name]+" Not Valid.");
    }
  }
  const loadConcert=async()=>{
    const result = await axios.get(`http://localhost:8081/concert/getConcert/${concertID}`);
    setCreate_concert(result.data);
  }

  return(

    <div className="App">
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '4rem',marginTop:"2rem"}}>Update Concert</h1>
        <div className='wrapper' style={{margin:"2rem",marginTop:"0rem"}}>
        <div className='column1'>
          <label>Concert Name</label><br/>
          <input type="text" name="concert_name" label="concert_name" placeholder={concert_name} value={concert_name} onChange={(e)=>onInputChange(e)} /><br/>
          <label>Available Performer</label><br/>
          <select name="performer" placeholder={performer} value={performer} onChange={(e)=>onInputChange(e)}> 
          {
            performers.map((performer,index)=>(
              
            <option value={performer.performer_name}>{performer.performer_name}</option>
          ))}
          </select><br/>
          <label>Available Venue</label><br/>
          <select name="venue" value={venue} placeholder={venue} onChange={(e)=>onInputChange(e)}>
          {
            venues.map((venue,index)=>(
              
            <option value={venue.venue_name}>{venue.venue_name}</option>
          ))}
          </select><br/>
          <label>Concert Date</label><br/>
          <input type="date" name="concert_date" value={concert_date} placeholder={concert_date}onChange={(e)=>onInputChange(e)}/><br/>
          <label>Time</label><br/>
          <input type="time" name="concert_time" value={concert_time} placeholder={concert_time} onChange={(e)=>onInputChange(e)}/><br/>
          <label>Ticket</label><br/>
          <select name="ticket_id" value={ticket_id} placeholder={ticket_id} onChange={(e)=>onInputChange(e)}>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="13">14</option>
            <option value="14">15</option>
          </select><br/>
          </div>
          <div className='column2' style={{position:"relative", left: "-1%", marginRight:"2rem"}}>
          <table id="tbl" >
  <tr>
    <th>typeID</th>
    <th>venueID</th>
    <th>qVIP</th>
    <th>pVIP</th>
    <th>qGOLD</th>
    <th>pGOLD</th>
    <th>qSILVER</th>
    <th>pSILVER</th>
  </tr>
  <tr>
    <td>1</td>
    <td>27</td>
    <td>50</td>
    <td>1000.00</td>
    <td>300</td>
    <td>800.00</td>
    <td>1650</td>
    <td>250.00</td>
  </tr>     
  </table>
          </div><p>{concert_name}{performer}{venue}{concert_date}{concert_time}{ticket_id}</p>
          <Link to={'/Concert'}>
          <input style={{position:"relative", left: "30%", width:"253px"}} className="btnAdd" type="submit" name="btnUpProf" label="btnUpProf" value="Update Concert" onClick={(e)=>onSubmit(e)}/>
          </Link>
          <Link to={'/Concert'}>
          <input style={{position:"relative", top:"-5.3rem", left: "57rem", width:"253px"}} className="btnAdd" type="submit" name="btnUpdate" label="btnUpdate" value="Cancel"/><br/> 
          </Link>
        </div>
      </div>  
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