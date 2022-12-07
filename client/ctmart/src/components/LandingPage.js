import React from 'react';
import './App.css';
import 'animate.css';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import video1 from '../assets/concert1.mp4';

function LandingPage() {

  return(
    <div className="App">
      <div className='App-header-landing'>
             
      <Link to={'/Login'}>
      <input className="my-element" type="image" src="images/logo.png" alt="Submit" width="1000px" pading="auto" /><br/>
          <h3>CTMART</h3>
        </Link>
        </div>


    </div>
    


        
)
}

export default LandingPage;

