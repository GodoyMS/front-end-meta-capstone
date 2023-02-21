import './App.css';
import {Routes,Route} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import {  useReducer,useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { fetchAPI } from './Api';
import ConfirmedBooking from './Pages/ConfirmedBooking';





export default function App() {
  const[selectedDate,setSelectedDate]=useState(new Date().toLocaleDateString());
  
 

  function updateTimes (state,action){
    if(action.type==="updateTimes"){
      return fetchAPI(state)
    }
    return ;    
  }

  function initializeTimes (){
    
    return fetchAPI(selectedDate);  }
  const[state,dispatch]=useReducer(updateTimes,initializeTimes())
  


  return (
   <Router>
    <Routes> 
      <Route path='/' element={<HomePage/>} />
      <Route path='/booking' element={<BookingPage availableTimes={state} setAvailableTimes={dispatch} selectedDate={selectedDate} onSelectedDate={setSelectedDate}  />}/>
      <Route path='/confirmedbooking' element={<ConfirmedBooking/>}/>
    </Routes>
    

   </Router>
  );
}

