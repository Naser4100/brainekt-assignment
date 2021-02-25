import {
  ADD_FEATURE,
  RECALCULATE_PRICE
} from '../types'

const costReducer =  (state, action) => {
  switch(action.type) {
    case ADD_FEATURE:
      console.log(action.payload);
      return {
        ...state, // returning all the current state

        // First check for the feature if it's already in the feature list then remove it from the list 
        // Second/Else add the feature to featureList array
        featureList: state.featureList.some(feature => feature.id === action.payload.id) ? // Check for feature if it's exist
                    state.featureList.filter(feature => feature.id !== action.payload.id) : // if exists then remove from featureList
                    [...state.featureList, // If not exists the add the new feature to featureList array
                      { id: action.payload.id, 
                        featureName: action.payload.featureName,
                        featurePrice: +action.payload.featurePrice,
                      }
                    ],
        }
      // When new data pushed to featureList array this will re-calculate the total cost
    case RECALCULATE_PRICE:
      return {
        ...state,
        totalCost: state.featureList.reduce((acc, curr) => curr.featurePrice + acc, 0)
      };
    default:
      return state
  }
}

export default costReducer;
