import React from 'react';
import {Link, useNavigate, userNavigate} from 'react-router-dom';

function Performer() {

  return(
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Performer</h1>
        <div className='wrapper'>
          <div className='column1'>
        <label>Performer</label><br/>
        <input type="text" name="pname" label="pname" placeholder='Enter Performer'/><br/>
        <label>Performer Type</label><br/>
        <input type="text" name="ptype" label="ptype" placeholder='Enter Performer Type'/><br/>
        <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnAddPerf" label="btnAddPerf" value="Add Performer"/>
        <Link to ={'/Concert'}>
        <input style={{position:"absolute", left: "1%"}} className="btnAdd" type="submit" name="btnAddPerf" label="btnAddPerf" value="Cancel"/><br/>
          </Link>
          </div>
          <div className='column2' style={{position:"relative", left: "-1%"}}>
          <table id="tbl" >
  <tr>
    <th>id</th>
    <th>Performer</th>
    <th>Performer Type</th>
  </tr>
  <tr>
    <td>00001</td>
    <td>Markovian</td>
    <td>Singer</td>
    <td>
      <Link to={'./EditPerformer'}>
      <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Update"/>
      </Link> 
    </td>
    <td><input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete"/></td>
  </tr>  
  <tr>
  <td>00001</td>
    <td>Markovian</td>
    <td>Singer</td>
    <td>      
      <Link to={'./EditPerformer'}>
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

export default Performer;

