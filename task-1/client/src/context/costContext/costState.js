import React,{ useReducer } from 'react';

// Import axios for making HTTP request to the server
import axios from 'axios';

// Importing Action type
import {
  ADD_FEATURE,
  ADD_FEATURE_FROM_SLIDER,
} from '../types'

// Context files
import CostContext from './costContext';

// reducer files
import CostReducer from './costReducer';


// Main State function
const CostState = (props) => {

  // Initial State of cost context
  const initialState={
    featureList: [],
  }

  const [state, dispatch] = useReducer(CostReducer, initialState)

  // Add new feature to featureList array
  const addFeature = async data => {
    try{
      // Dispatching and action that will change global context data
      dispatch({
        type: ADD_FEATURE, // Action type that define what need to be changed
        payload: data // New data that will added to context 
      });
    }catch (err) {  
      console.log(err);
    }
  }

    // Add new feature to featureList array from slider
    const addFeatureFromSlider = async data => {
      try{
        dispatch({
          type: ADD_FEATURE_FROM_SLIDER, // Action type that define what need to be changed
          payload: data // New data that will added to context
        });
      }catch (err) {  
        console.log(err);
      }
    }

  // Sending email, this will also save user data
  const sendEmail = async (userFormData) => {
    const config={ header:{ 'Content-Type':'application/json' }} // => Configure axios for sending JSON data
    try{
      const res = await axios.post(`/api/mail/send`, userFormData, config) // => Sending request
      alert(res.data.message); // Displaying the response message
    }catch (err) {  
      console.log(err);
    }
  }

  return (
    <CostContext.Provider value={{
      // <-- Providing state
      featureList: state.featureList,
      totalCost: state.totalCost,
      // -->

      // <-- Providing actions (function)
      addFeature,
      addFeatureFromSlider,
      sendEmail,
      // -->
  }}>
    {props.children}
  </CostContext.Provider >
  );
}

export default CostState;
