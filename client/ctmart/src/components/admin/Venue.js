import React from 'react';
import {Link, useNavigate, userNavigate} from 'react-router-dom';

function Venue() {

  return(
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Venue</h1>
        <div className='wrapper'>
          <div className='column1'>
        <label>Venue</label><br/>
        <input type="text" name="vname" label="vname" placeholder='Enter Venue'/><br/>
        <label>Capacity</label><br/>
        <input type="text" name="vcap" label="vcap" placeholder='Enter Capacity'/><br/>
        <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnAddVen" label="btnAddVen" value="Add Venue"/><br/>
          </div>
          <div className='column2' style={{position:"relative", left: "-1%"}}>
          <table id="tbl" >
  <tr>
    <th>id</th>
    <th>Venue</th>
    <th>Capacity</th>
  </tr>
  <tr>
    <td>00001</td>
    <td>SRP</td>
    <td>2000</td>
    <td>
      <Link to={'./EditVenue'}>
      <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Update"/>
      </Link>
      </td>
    <td><input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete"/></td>
  </tr>    
  </table>
          </div>
        </div>
      </div>
      </div>
    </header>  


        
)
}

export default Venue;

