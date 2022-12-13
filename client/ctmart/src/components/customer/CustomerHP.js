import * as React from 'react';
import './pages.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import video1 from './assets/dj.mp4';
import video2 from './assets/ben&ben.mp4';
import video3 from './assets/multitude.mp4';
import video4 from './assets/sarah.mp4';
import SliderPage from 'react-slider-page';

function VideoPage(){
  return(
    <div><>................</>
      <SliderPage>
        <section>
          <div>
          <video src={video1} autoPlay loop muted></video>
          </div>
          
        </section>
        <section>
          <div>
          <video src={video2} autoPlay loop muted></video>
          </div>
        </section>
        <section>
          <div>
          <video src={video3} autoPlay loop muted></video>
          </div>
        </section>
        <section>
          <div>
          <video src={video4} autoPlay loop muted></video>
          </div>
        </section>
      </SliderPage>
</div>
  );
}


function CustomerHP() {
  
  return (
    <header className='App-header'>
  <div className='App-header'>
 
  <div className='container-page'>{VideoPage()}</div>
    <AppBar position="static" style={{backgroundColor: "#FFC107", position: "absolute", top: "0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box>
          <input className='logo-menubar' type="image" src="/images/logo.png" alt="Submit"/>
          <Link to={'/CustomerHP'}><h4>CTMART </h4></Link>
          <Link to={'/BookConcert'}>
          <h5 className='label1' style={{ right: "27rem"}}>Book Concert</h5>
          </Link>
          <Link to={'/CheckReservation'}>
          <h5 className='label1' style={{ right: "10.5rem"}}>Check Reservation</h5>
          </Link>
          <Link to={'/UpdateProfile'}>
          <h5 className='label1' style={{ right: "-2rem"}}>Update Profile</h5>
          </Link>
          <Link to={'/'}>
          <h5 className='label1' style={{ right: "-9.3rem"}}>Logout</h5>
          </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </div>
  </header>

  );
}
export default CustomerHP;