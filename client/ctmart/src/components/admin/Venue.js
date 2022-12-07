
import React, {useState} from 'react';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import VenueServiceGet from '../services/VenueService';

function VenuePost(){
  const[venue_name,setVenue_name] = useState('')
  const[capacity,setCapacity]= useState('')
  
  const handleClickAdd=(e)=>{
    e.preventDefault()
    const venue={venue_name,capacity}
    console.log(venue)
    fetch("http://localhost:8081/venue/postVenue",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(venue)
    }).then(()=>{
      console.log("added")
      alert([venue_name]+" successfully added")
    })
  }

  return(
    <div >
    <label>Venue</label><br/>
    <input type="text" name="vname" label="vname" placeholder='Enter Venue' value={venue_name} onChange={(e)=>setVenue_name(e.target.value)}/><br/>
    <label>Capacity</label><br/>
    <input type="text" name="vcap" label="vcap" placeholder='Enter Capacity' value={capacity} onChange={(e)=>setCapacity(e.target.value)}/><br/>
    <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnAddVen" label="btnAddVen" value="Add Venue" onClick={handleClickAdd}/>
    <Link to ={'/Concert'}>
    <input style={{position:"absolute", left: "1%"}} className="btnAdd" type="submit" name="btnAddPerf" label="btnAddPerf" value="Cancel"/><br/>
      </Link>
      <p></p>
      </div>
  )
}


class Venue extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      venue: []
    }
  }

  componentDidMount(){
    VenueServiceGet.getVenue().then((res)=>{
        this.setState({venue: res});
    });
  }

  render(){
  return(
    <div className='App-header'>
    <div className="App">
      <div className='card'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Venue</h1>
        <div className='wrapper'>
          <div className='column1'><VenuePost/></div>
          <div className='column2' style={{position:"relative", left: "-1%"}}>
          <table id="tbl" >
            <thead>
  <tr>
    <th>id</th>
    <th>Venue</th>
    <th>Capacity</th>
    <th></th>
    <th></th>
  </tr>
  </thead>
  <tbody>
    {
      this.state.venue.map(
        venue=>
        <tr key={venue.id}>
        <td>{venue.venueID}</td>
        <td>{venue.venue_name}</td>
        <td>{venue.capacity}</td>
        <td>
          <Link to={'./EditVenue'}>
          <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Update"/>
          </Link>
          </td>
        <td>
        <Link to={'/RecycleBin/PerfVenTable'}>
          <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete"/>
        </Link>
        </td>
      </tr>
      )
    }

  </tbody>    
  </table>
          </div>
        </div>
      </div>
      </div>
      <footer> charmaine</footer> 
    </div>
            
)}
}
export default Venue;

{/* <input type="text" name="vname" label="vname" placeholder='Enter Venue' value={venue_name} onChange={(e)=>setVenue_name(e.target.value)}/><br/>
        <label>Capacity</label><br/>
        <input type="text" name="vcap" label="vcap" placeholder='Enter Capacity' value={capacity} onChange={(e)=>setCapacity(e.target.value)}/><br/> */}