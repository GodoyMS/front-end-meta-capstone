import React from 'react'
import { useReducer } from 'react';
import { fetchAPI } from './Api';






function updateTimes (state,action){
  return state;
  
}
function initializeTimes (){
  fetchAPI()
  
}



export {updateTimes,initializeTimes}


