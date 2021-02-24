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
  const addFeature = async event => {
    try{
      dispatch({
      type: ADD_FEATURE,
      payload: event.target
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
  }}>
    {props.children}
  </CostContext.Provider >
  )
}
export default CostState;
