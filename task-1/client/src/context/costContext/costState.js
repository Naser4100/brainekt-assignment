import React,{ useReducer } from 'react';

import CostContext from './costContext';
import CostReducer from './costReducer';

import {
  ADD_FEATURE,
  RECALCULATE_PRICE
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

  return (
    <CostContext.Provider value={{
      featureList: state.featureList,
      totalCost: state.totalCost,
      addFeature,
      reCalculateCost,
  }}>
    {props.children}
  </CostContext.Provider >
  )
}
export default CostState;
