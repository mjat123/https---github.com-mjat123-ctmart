import React from 'react';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function EditPerformer() {

    let history = useNavigate();

    const handleSubmit =(e) => {
      e.preventDefault();
      history("/Performer");
  
  }

  return(
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Update Performer</h1>
        <label>Choose Performer</label><br/>
        <select name="ticketID" id="ticketID">
            <option value="type1">10</option>
            <option value="type2">12</option>
            <option value="type3">14</option>
            <option value="type">15</option>
          </select><br/>
        <label>Performer</label><br/>
        <input type="text" name="pname" label="pname" placeholder='Enter Performer'/><br/>
        <label>Performer Type</label><br/>
        <input type="text" name="ptype" label="ptype" placeholder='Enter Performer Type'/><br/>
        <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnUpdatePerf" label="btnUpdatePerf" value="Update Performer" onClick={(e)=>handleSubmit(e)}/><br/>
      </div>
      </div>
      </div>
    </header>  


        
)
}

export default EditPerformer;

