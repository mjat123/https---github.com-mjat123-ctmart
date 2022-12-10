import React, { Component } from 'react';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import ForgotPass from './components/ForgotPass';
import CreateAccount from './components/CreateAccount';
import EditPerformer from './components/admin/EditPerformer';
import Performer from './components/admin/Performer';
import Venue from './components/admin/Venue';
import EditVenue from './components/admin/EditVenue';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CustomerHP from './components/customer/CustomerHP';
import BookConcert from './components/customer/BookConcert';
import ProceedPayment from './components/customer/BookConcertProceed';
import SuccessBooked from './components/customer/SuccessfullyBook';
import CheckReservation from './components/customer/CheckRes';
import ResDeleted from './components/customer/CheckResDeleted';
import UpdateProfile from './components/customer/UpdateProf';
import ConfirmPass from './components/customer/ConfirmPass';
import AdminHP from './components/admin/AdminHP';
import Concert from './components/admin/Concert';
import Account from './components/admin/Account';
import RecycleBin from './components/admin/RecycleBin';
import RecConcert from './components/admin/RecConcert';
import RecPerfVen from './components/admin/RecPerfVen';
import UpdateConcert from './components/admin/UpdateConcert.js';
import AddConcert from './components/admin/AddConcert.js';






function App() {
  return (
    <div className='App'>
      <title style={{fontFamily: 'Poppins'}}>CTMART</title>
      <link rel="icon" href="http://example.com/favicon.png"></link>
      <Router>
        <Routes>
        <Route path='/' element={<LandingPage/> }/>
        <Route path='/Login' element={<Login /> }/>
        <Route path='/CreateAccount' element={<CreateAccount /> }/>
        <Route path='/ForgotPass' element={<ForgotPass /> }/>
        

        <Route path='/CustomerHP/:username' element={<CustomerHP /> }/>

        <Route path='/BookConcert' element={<BookConcert /> }/>
        <Route path='/BookConcert/ProceedPayment' element={<ProceedPayment/> }/>
        <Route path='/BookConcert/ProceedPayment/Success' element={<SuccessBooked/> }/>

        <Route path='/CheckReservation' element={<CheckReservation /> }/>
        <Route path='/CheckReservation/RecentlyDeleted'element={<ResDeleted/> }/>

        <Route path='/UpdateProfile' element={<UpdateProfile /> }/>
        <Route path='/UpdateProfile/ConfirmPass' element={<ConfirmPass /> }/>

        
        <Route path='/AdminHP/:username' element={<AdminHP /> }/>
        <Route path='/Concert' element={<Concert/> }/>
          <Route path='/Concert/UpdateConcert' element={<UpdateConcert/> }/>
          <Route path='/Concert/AddConcert' element={<AddConcert/> }/>
        <Route path='/Account' element={<Account /> }/>

        <Route path='/RecycleBin' element={<RecycleBin /> }/>
        <Route path='/RecycleBin/ConcertTable' element={<RecConcert /> }/>
        <Route path='/RecycleBin/PerfVenTable' element={<RecPerfVen /> }/>

        
        <Route path='/Performer' element={<Performer/> }/>
        <Route path='/Performer/EditPerformer' element={<EditPerformer /> }/>

        <Route path='/Venue' element={<Venue/> }/>
        <Route path='/Venue/EditVenue/:venueID' element={<EditVenue /> }/>

        </Routes>
      </Router>
</div>
  );
}

export default App;
