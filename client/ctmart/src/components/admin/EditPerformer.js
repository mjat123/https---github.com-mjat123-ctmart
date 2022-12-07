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
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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

