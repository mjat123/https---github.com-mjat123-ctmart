
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams, userNavigate} from 'react-router-dom';
import axios from 'axios';
import SetCookie from '../../hook/SetCookie';


export default function VenuePost(){

  //initializing
    let history = useNavigate();
  const{venueID}=useParams()
  const[venues,setVenue] = useState([]);
  const[create_venue, setCreate_venue] = useState({
    venue_name:"",
    capacity:""
  })
  const[venue_isdeleted] = useState({
    isdeleted:"1"
  })
  const{isdeleted}=venue_isdeleted
  const{venue_name,capacity}=create_venue

  const onInputChange=(e)=>{
    setCreate_venue({ ...create_venue,[e.target.name]: e.target.value});
  };

  //setting up restrictions and path
  const onSubmit=async(e)=>{
    e.preventDefault();
    try{

      if((venue_name).length!=0 && (capacity).length!=0){

        const result = await axios.post("http://localhost:8081/venue/postVenue",create_venue)
        SetCookie('usrin', JSON.stringify(result.data));
        console.log((result.data));
        // alert([venue_name]+" successfully added")
        window.location.reload();
        history("/Venue");
      }else{alert("Missing Field");}

    }catch(e){
      alert([venue_name]+" Not Valid.");
    }
  }
  //update isdeleted to 1
  const onSubmitDelete=async(venueID)=>{
    await axios.put(`http://localhost:8081/venue/putVenueisdeleted/${venueID}`,venue_isdeleted)
    console.log((venueID))
    loadVenue(); 
    history("/Venue");
  }
  
  useEffect(()=>{
    loadVenue();
  },[]);

  const loadVenue=async()=>{
    const result = await axios.get("http://localhost:8081/venue/getIsdeleted/?isdeleted=0");
    setVenue(result.data);
    console.log((result.data))
  }

  


  return(
    <div className='App-header'>
    <div className="App">
      <div className='card'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Venue</h1>
        <div className='wrapper'>
          <div className='column1' onSubmit={(e)=>onSubmit(e)} >
    <form>
    <label>Venue Name</label><br/>
    <input type="text" name="venue_name" label="vname" placeholder='Enter Venue' value={venue_name} onChange={(e)=>onInputChange(e)} required fieldName='venue_name'/><br/>
    <label>Capacity</label><br/>
    <input type="text" name="capacity" label="vcap" placeholder='Enter Capacity' value={capacity}onChange={(e)=>onInputChange(e)} required fieldName='capacity'/><br/>
    <Link to={'/Venue'}>
    <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnAddVen" label="btnAddVen" value="Add Venue" onClick={(e)=>onSubmit(e)}/>
    </Link>
    <Link to ={'/Concert'}>
    <input style={{position:"absolute", left: "1%"}} className="btnAdd" type="submit" name="btnAddPerf" label="btnAddPerf" value="Cancel"/><br/>
      </Link></form>
          </div>
          <div className='column2' style={{position:"relative", left: "-1%"}}>
          <table id="tbl" >
            <thead>
  <tr>
    <th>id</th>
    <th>Venue</th>
    <th>Capacity</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
        {
            venues.map((venue,index)=>(
                <tr>
                
                <td>{venue.venueID}</td>
                <td>{venue.venue_name}</td>
                <td>{venue.capacity}</td>
                <td>
                  <Link  to={`./EditVenue/${venue.venueID}`}>
                  <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Update"/>
                  </Link>
                  <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete" onClick={()=>onSubmitDelete(venue.venueID)}/>
                </td>
              </tr>
            ))
        }




  </tbody>    
  </table>
          </div>
        </div>
      </div>
      </div>
    </div>
            
)}
