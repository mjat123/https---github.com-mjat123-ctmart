import React, { useState } from 'react';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import PerformerServiceGet from '../services/PerformerService';

function PerformerPost(){
  const[performer_name, setPerformer_name] = useState('')
  const[performer_type, setPerformer_type] = useState('')

  const handleClickAdd=(e)=>{
    e.preventDefault()
    const performer={performer_name, performer_type}
    console.log(performer)
    fetch("http://localhost:8081/performer/postPerformer",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(performer)
    }).then(()=>{
      console.log("added")
      alert([performer_name]+" successfully added")
    })
  }

  return(
    <div>
          <label>Performer</label><br/>
    <input type="text" name="pname" label="pname" placeholder='Enter Performer' value={performer_name} onChange={(e)=>setPerformer_name(e.target.value)}/><br/>
    <label>Performer Type</label><br/>
    <input type="text" name="ptype" label="ptype" placeholder='Enter Performer Type' value={performer_type} onChange={(e)=>setPerformer_type(e.target.value)}/><br/>
    <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnAddVen" label="btnAddVen" value="Add Performer" onClick={handleClickAdd}/>
    <Link to ={'/Concert'}>
    <input style={{position:"absolute", left: "1%"}} className="btnAdd" type="submit" name="btnAddPerf" label="btnAddPerf" value="Cancel"/><br/>
      </Link>
      <p></p>
    </div>
  )
}


class Performer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      performer: []
    }
  }

  componentDidMount(){
    PerformerServiceGet.getPerformer().then((res)=>{
        this.setState({performer: res});
    });
  }
  
  render(){
  return(
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Performer</h1>
        <div className='wrapper'>
          <div className='column1'><PerformerPost/></div>

          <div className='column2' style={{position:"relative", left: "-1%"}}>
          <table id="tbl" >
            <thead>
  <tr>
    <th>id</th>
    <th>Perfromer_Name</th>
    <th>Performer_Type</th>
    <th></th>
    <th></th>
  </tr>
  </thead>
  <tbody>
  {
    this.state.performer.map(
      performer=>

        <tr key={performer.id}>
        <td>{performer.performerID}</td>
        <td>{performer.performer_name}</td>
        <td>{performer.performer_type}</td>
        <td>
          <Link to={'./EditPerformer'}>
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
    </header>  


        
)}
}

export default Performer;

