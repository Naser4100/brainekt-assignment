import {
  ADD_FEATURE,
  RECALCULATE_PRICE,
  ADD_FEATURE_FROM_SLIDER,
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
    case ADD_FEATURE_FROM_SLIDER:
      let updateFeatuer = state.featureList.findIndex(f => f.id === action.payload.id);
      if(updateFeatuer >= 0){
        //state.featureList.filter(feature => feature.id !== action.payload.id)
        state.featureList[updateFeatuer].featurePrice = action.payload.featurePrice
      }

      console.log(state.featureList[updateFeatuer]);
      return {
        ...state,
        featureList: state.featureList.some(feature => feature.id === action.payload.id) ?
                      [...state.featureList, state.featureList[updateFeatuer]]:
                      [...state.featureList,
                        {
                          id: action.payload.id,
                          featureName: action.payload.featureName,
                          featurePrice: +action.payload.featurePrice,
                        }
                      ]
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
