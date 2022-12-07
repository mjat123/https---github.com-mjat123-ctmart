import * as React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link, useNavigate, userNavigate} from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from './assets/logo.png';



function ChooseTicket() {
  var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
      slideIndex = 1
    }
    if(n < 1) {
      slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  return (
    <div className='App-header'>
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src="/uploads/media/default/0001/03/66cf5094908491e69d8187bcf934050a4800b37f.jpeg" style={{width: '100%'}} />
        <div className="text">London, Ebgland</div>
      </div>
      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src="/uploads/media/default/0001/03/b7d624354d5fa22e38b0ab1f9b905fb08ccc6a05.jpeg" style={{width: '100%'}} />
        <div className="text">Sunset in Romania</div>
      </div>
      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src="/uploads/media/default/0001/03/5bfad15a7fd24d448a48605baf52655a5bbe5a71.jpeg" style={{width: '100%'}} />
        <div className="text">New York, USA</div>
      </div>
      <a className="prev" onclick="plusSlides(-1)">❮</a>
      <a className="next" onclick="plusSlides(1)">❯</a>
    </div>
    <br />
    <div style={{textAlign: 'center'}}>
      <span className="dot" onclick="currentSlide(1)" />
      <span className="dot" onclick="currentSlide(2)" />
      <span className="dot" onclick="currentSlide(3)" />
    </div>
  </div>
  );
} 

function Content(){

  return(
  <header className='App-header'>
    <div className="App">
      <div className='card-content'>
      <div className='wrapper'>
        <div className='column1'>
        <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '3rem',marginTop:"2rem"}}>BOOK CONCERT</h1>  
        <form style={{marginLeft: '5rem'}}>
        <label>Select Date</label><br/>
          <input type="date" id="concert_date" name="concert_date" style={{height: '50px'}}/><br/>
        </form>
        <form style={{marginLeft: '5rem'}}>
        <label>Select Concert</label><br/>
        <select style={{height: '50px'}} name="Select Dates" id="date">
          <option value="Markovian">Markovian</option>
          <option value="Aurora Festival">Aurora Festival</option>
          </select>
        </form>
        <Link to={'/BookConcert'}>
          <input style={{position:"relative", left: "4rem", width:"100px"}} className="btnAdd" type="submit" name="Go" value="Go"/><br/>
          </Link>
          <Link to={'/BookConcert/ProceedPayment'}>
          <input style={{position:"relative", left: "4rem", bottom:'-17rem'}} className="btnCreateAcc" type="submit" name="Proceed" value="Proceed"/><br/>
          </Link>
        </div>
        <div className='column2' style={{position:"relative", left: "-1%"}}>
        <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '1rem',marginTop:"2rem"}}>Available Concert</h1>
                <div className='content-rec' style={{width: '50rem', height:'40rem', margin: '1rem'}}>
                  <h2 style={{margin: '1rem'}}>Aurora Music Festival 2022</h2>
                  <h4 style={{color: 'white', textAlign: 'left', margin:'4.5rem'}}>City De Mare, SRP</h4><br/>
                  <Box className='rectangle' style={{margin:'1rem'}}>
                    <h5 style={{top:'0.5rem', fontWeight: 'bold',margin: '0.5rem'}}>November 19, 2022</h5>
                    <h5 style={{top:'2.5rem', margin: '0.5rem'}}>3:00 PM</h5>
                    </Box>
                    <h1 style={{color: 'white', textAlign: 'left', margin:'1rem',marginTop:'1rem'}}>TICKETS</h1>
                    <form style={{marginLeft: '1rem',marginTop:'-2rem'}}>
                      <label style={{color: 'white'}}>Select Ticket Type</label><br/>
                      <select style={{height: '50px'}} name="Select Dates" id="date">
                        <option value="VIP">VIP</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                      </select>
                      <p style={{color: 'white', position: 'absolute', margin:'0.5rem', marginLeft:'0.2rem'}}>Available Number of Tickets:</p>
                      <p style={{color: 'white', position: 'absolute', margin:'0.5rem',marginLeft:'13rem', fontWeight:'bold'}}>50</p>
                    </form>
                    <form style={{marginLeft: '1rem',marginTop:'1.5rem'}}>
                    <label style={{color: 'white'}}>Price</label><br/>
                    <input type="text" name="ticket_price" value="1000" style={{width:'150px'}}/><br/>
                    <label style={{color: 'white'}}>Quantity</label>
                    <input type="text" name="ticket_quantity" value="1" style={{width:'50px', marginLeft:'1rem'}}/>
                    <input type="submit" name="add" value="+" style={{width:'50px', background:'gray'}}/>
                    <input type="submit" name="minus" value="-" style={{width:'50px', background:'red'}}/>
                    </form>
                    
                </div>
            </div>
      </div>
      </div>
    </div>
  </header>  
    )
}

function BookConcert() {
  return (
    <header className='App-header'><title>Image Slider</title>
    <div className='App-header'>
    <div className='container-page'>{Content()}</div>
      <AppBar position="static" style={{backgroundColor: "#FFC107", position: "absolute", top: "0"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Box>
            <input className='logo-menubar' type="image" src="images/logo.png" alt="Submit"/>
            <Link to={'/CustomerHP'}><h4>CTMART</h4></Link>
            <Link to={'/BookConcert'}>
            <h5 className='label1' style={{ right: "27rem", color:"white", fontWeight:"800"}}>Book Concert</h5>
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
export default BookConcert;