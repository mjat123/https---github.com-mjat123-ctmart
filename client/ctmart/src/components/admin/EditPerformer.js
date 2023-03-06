import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams, userNavigate} from 'react-router-dom';
import axios from 'axios';

function EditPerformer() {
  let history = useNavigate();
    
  const{performerID}=useParams()
  const[create_performer, setCreate_performer] = useState({
    performer_name:"",
    performer_type:""
  })
  const{performer_name,performer_type}=create_performer
  
  const onInputChange=(e)=>{
    setCreate_performer({ ...create_performer,[e.target.name]: e.target.value});
  };

  useEffect(()=>{
    loadPerformers();
  },[]);
  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8081/performer/putPerformer/${performerID}`,create_performer)
    // alert([performer_name]+" successfully added")
    console.log({create_performer})

    history("/Performer");
  }



  const loadPerformers=async()=>{
    const result = await axios.get(`http://localhost:8081/performer/getPerformer/${performerID}`);
    setCreate_performer(result.data);
  }


  return(
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Update Performer</h1>
        <label>Performer</label><br/>
        <input type="text" name="performer_name" label="pname" placeholder={performer_name} value={performer_name} onChange={(e)=>onInputChange(e)}/><br/>
        <label>Performer Type</label><br/>
        <input type="text" name="performer_type" label="ptype" placeholder={performer_type} value={performer_type} onChange={(e)=>onInputChange(e)}/><br/>
        <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnUpdatePerf" label="btnUpdatePerf" value="Update Performer" onClick={(e)=>onSubmit(e)}/><br/>
      </div>
      </div>
      </div>
    </header>  


        
)
}

export default EditPerformer;

