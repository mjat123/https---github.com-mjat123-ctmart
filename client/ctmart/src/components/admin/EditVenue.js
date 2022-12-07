import React from 'react';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function EditPerformer() {

    let history = useNavigate();

    const handleSubmit =(e) => {
      e.preventDefault();
      history("/Venue");
  
  }

  return(
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Update Venue</h1>
        <label>Choose Venue</label><br/>
        <select name="ticketID" id="ticketID">
            <option value="type1">10</option>
            <option value="type2">12</option>
            <option value="type3">14</option>
            <option value="type">15</option>
          </select><br/>
        <label>Venue</label><br/>
        <input type="text" name="vname" label="vname" placeholder='Enter Venue'/><br/>
        <label>Capacity</label><br/>
        <input type="text" name="vtype" label="vtype" placeholder='Enter Capacity'/><br/>
        <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnUpdateVen" label="btnUpdateVen" value="Update Venue" onClick={(e)=>handleSubmit(e)}/><br/>
      </div>
      </div>
      </div>
    </header>  


        
)
}

export default EditPerformer;

