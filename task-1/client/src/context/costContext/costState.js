import React,{ useReducer } from 'react';

import axios from 'axios';


import CostContext from './costContext';
import CostReducer from './costReducer';

import {
  ADD_FEATURE,
  RECALCULATE_PRICE,
  ADD_FEATURE_FROM_SLIDER,
} from '../types'

const CostState = (props) => {

  // Initial State for the feature list array
  const initialState={
    featureList: [],
    totalCost: 0
  }

  const [state, dispatch] = useReducer(CostReducer, initialState)

  // Add new feature to featureList array
  const addFeature = async data => {
    console.log(state.featureList);
    try{
      dispatch({
      type: ADD_FEATURE,
      payload: data
      });
      reCalculateCost();
    }catch (err) {  
      console.log(err);
    }
  }

    // Add new feature to featureList array from slider
    const addFeatureFromSlider = async data => {
      console.log(state.featureList);
      try{
        dispatch({
        type: ADD_FEATURE_FROM_SLIDER,
        payload: data
        });
        reCalculateCost();
      }catch (err) {  
        console.log(err);
      }
    }

   // Add new feature to featureList array
  const reCalculateCost = async () => {
    try{
      dispatch({
      type: RECALCULATE_PRICE,
      });
    }catch (err) {  
      console.log(err);
    }
  }

  // Add new feature to featureList array
  const sendEmail = async (userFormData) => {
    const config={ header:{ 'Content-Type':'application/json' }} // => Configure axios for sending JSON data
    try{
      const res = await axios.post(`/api/mail/send`, userFormData, config) // => Sending request
      alert(res.data.message);
    }catch (err) {  
      console.log(err);
    }
  }

  return (
    <CostContext.Provider value={{
      featureList: state.featureList,
      totalCost: state.totalCost,
      addFeature,
      addFeatureFromSlider,
      reCalculateCost,
      sendEmail,
  }}>
    {props.children}
  </CostContext.Provider >
  )
}
export default CostState;
