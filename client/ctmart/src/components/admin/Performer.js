import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams, userNavigate} from 'react-router-dom';
import axios from 'axios';
import SetCookie from '../../hook/SetCookie';

export default function Performer(){
  //initializing
  let history = useNavigate();
  const{performerID}=useParams()
  const[performers,setPerformer] = useState([]);
  const[create_performer, setCreate_performer] = useState({
    performer_name:"",
    performer_type:""
  })
  const[performer_isdeleted] = useState({
    isdeleted:"1"
  })
  const{isdeleted}=performer_isdeleted
  const{performer_name,performer_type}=create_performer

  const onInputChange=(e)=>{
    setCreate_performer({ ...create_performer,[e.target.name]: e.target.value});
  };
  //setting u restrictions and path
  const onSubmit=async(e)=>{
    e.preventDefault();
    try{

      if((performer_name).length!=0 && (performer_type).length!=0){

        const result = await axios.post("http://localhost:8081/performer/postPerformer",create_performer)
        SetCookie('usrin', JSON.stringify(result.data));
        console.log((result.data));
        // alert([performer_name]+" successfully added")
        window.location.reload();
        history("/Performer");
      }else{alert("Missing Field");}

    }catch(e){
      alert([performer_name]+" Not Valid.");
    }
  }
  // updating upon clicking any rows and gets the value of performerID
  const onSubmitDelete=async(performerID)=>{
    await axios.put(`http://localhost:8081/performer/putPerformerisdeleted/${performerID}`,performer_isdeleted)
    console.log((performerID))
    loadPerformer(); 
    history("/Performer");
  }
  
  useEffect(()=>{
    loadPerformer();
  },[]);

  const loadPerformer=async()=>{
    const result = await axios.get("http://localhost:8081/performer/getIsdeleted/?isdeleted=0");
    setPerformer(result.data);
  }

  

  return(
      <header className='App-header'>
      <div className="App">
        <div className='card'>
        <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Performer</h1>
          <div className='wrapper'>
            <div className='column1'>
            <label>Performer</label><br/>
      <input type="text" name="performer_name" label="pname" placeholder='Enter Performer' value={performer_name} onChange={(e)=>onInputChange(e)} /><br/>
      <label>Performer Type</label><br/>
      <input type="text" name="performer_type" label="ptype" placeholder='Enter Performer Type' value={performer_type} onChange={(e)=>onInputChange(e)} /><br/>
      <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnAddVen" label="btnAddVen" value="Add Performer" onClick={(e)=>onSubmit(e)}/>
      <Link to ={'/Concert'}>
      <input style={{position:"absolute", left: "1%"}} className="btnAdd" type="submit" name="btnAddPerf" label="btnAddPerf" value="Cancel"/><br/>
        </Link>
            </div>
  
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
              performers.map((performer,index)=>(
                  <tr>
                  
                  <td>{performer.performerID}</td>
                  <td>{performer.performer_name}</td>
                  <td>{performer.performer_type}</td>
                  <td>
            <Link to={`./EditPerformer/${performer.performerID}`}>
            <input className="btnUp" type="submit" name="btnUpdate" label="btnUpdate" value="Update"/>
            </Link>
            </td>
          <td>  

            <input className="btnDel" type="submit" name="btnDel" label="btnDel" value="Delete"onClick={()=>onSubmitDelete(performer.performerID)}/>
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
      </header>  
  
  
          
  )}




