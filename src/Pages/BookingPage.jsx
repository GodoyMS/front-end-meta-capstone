import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

import {  useFormik } from "formik";
import * as Yup from 'yup';
import { string, number } from "yup";


const BookingPage = ({availableTimes,setAvailableTimes,selectedDate,onSelectedDate}) => {
   // eslint-disable-next-line
    const[date,setDate]=useState(''); 
    const[time,setTime]=useState('');
    const[guests,setGuests]=useState('');
    const[occasion,setOccasion]=useState('');
    const[isSubmitted,setIsSubmitted]=useState(false);
    const[redirectHome,setRedirectHome]=useState(false);

    const formik = useFormik({
      initialValues: {date:"",time:"",guests:"",occasion:""},    
  
      validationSchema: Yup.object({
        date: string().required('Required date'),
        time: string().required('Required time'),
        guest:number().min(1,'Minimum number is 1').required('Required guests'),
        occasion:string().required('Required occasion')
  
      }),
      
    });

  



    if(isSubmitted){
      return <Navigate to={'/confirmedbooking'}/>    }

    if(redirectHome){
      return <Navigate to={'/'}/>

    }

      async function submitForm(ev) {
        ev.preventDefault();
        setIsSubmitted(true);
        
    }

    async function handleRedirectHome() {
      setRedirectHome(true);
      
  }


 




    



    console.log(date+time+guests+occasion)
  return (
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        
        

  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
 
    
    <div className="mx-auto max-w-lg text-center">
      <button onClick={handleRedirectHome} className='flex gap-2 ' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span>Go home</span>
      </button>
     
     
      <h1 className="text-2xl font-bold sm:text-3xl">Reserve a table now!</h1>

      <p className="mt-4 text-gray-500">
        Please complete the form to reserve a table
      </p>
    </div>

    <form onSubmit={submitForm} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>

        <div className="relative">
        <label htmlFor="res-date" className="pl-4 text-gray-500">Choose a date</label>
          <input
            value={selectedDate}
             onChange={ev => {onSelectedDate(ev.target.value);setAvailableTimes({type:'updateTimes'})}}
             id='res-date'
            type="date"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="Enter email"
            {...formik.getFieldProps('date')}
          />     
          <div data-testid="date-test-error" className='pl-4 text-red-700'>{formik.errors.date ? formik.errors.date: ''} </div>  
        </div>
      </div>

      <div>
        <label htmlFor="res-time" className='pl-4  text-gray-500'>Choose time</label>

        <div className="relative">
          <select  id='res-time' value={time} onChange={(e)=>setTime(e.target.value)} {...formik.getFieldProps('time')} className="w-full rounded-lg border-gray-200  p-4 text-sm shadow-sm"    >
          <option value='' >Please select an option</option>
          {!!availableTimes &&  availableTimes.map(time => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
            
          </select>    
          <div data-testid="time-test-error" className='pl-4 text-red-700'>{formik.errors.time && formik.touched.time ? formik.errors.time: ''} </div>  
         </div>
      </div>

      <div>
        <label htmlFor="guests" className='pl-4  text-gray-500'>Number of guests</label>

        <div className="relative">
          <input  value={guests}  onChange={(e)=>setGuests(e.target.value)}  {...formik.getFieldProps('guest')} id='guests'  type="number" placeholder="1" min="1" max="10" className="w-full rounded-lg border-gray-200  p-4 text-sm shadow-sm" />
                    
        </div>
        <div data-testid="guest-test-error" className='pl-4 text-red-700'>{formik.errors.guest && formik.touched.guest ? formik.errors.guest: ''} </div>     

      </div>

      <div>
        <label htmlFor="occasion" className='pl-4  text-gray-500'>Ocassion</label>

        <div className="relative">
          <select  id='occasion'  value={occasion} onChange={(e)=>setOccasion(e.target.value)} {...formik.getFieldProps('occasion')} type="text" className="w-full rounded-lg border-gray-200  p-4 text-sm shadow-sm"    >
          <option value='' >Please select an option</option>
            <option value='Birthday' >Birthday</option>
            <option value='Anniversary' >Anniversary</option>           
            <option value='Engagement' >Engagement</option>           

          </select>         

          <div data-testid="occasion-test-error" className='pl-4 text-red-700'>{formik.errors.occasion && formik.touched.occasion ? formik.errors.occasion: ''} </div>  

        </div>
      </div>

      <div className="flex items-center justify-center">        

        <button
        style={{cursor:'pointer'}}
          type="submit"
          data-testid="button-test-submit"
          
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" >
            Book
            </button>
          
         
        

      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
  )
}

export default BookingPage