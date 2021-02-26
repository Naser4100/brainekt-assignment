// Action type import statement
import {
  ADD_FEATURE,
  ADD_FEATURE_FROM_SLIDER,
} from '../types'

const costReducer =  (state, action) => {
  switch(action.type) {
    case ADD_FEATURE:
      return {
        // returning all the current state
        ...state, 

        // 1st => Now for the changing global context data we need to find for feature if that already in the feature list array
        featureList: state.featureList.some(feature => feature.id === action.payload.id) ?

                    // 2nd => If it's exists then remove from featureList array
                    state.featureList.filter(feature => feature.id !== action.payload.id) : 

                    // 3rd => If not exists the add the new feature to featureList array
                    [...state.featureList, 
                      { id: action.payload.id, 
                        featureName: action.payload.featureName,
                        featurePrice: +action.payload.featurePrice,
                      }
                    ],
        }

    case ADD_FEATURE_FROM_SLIDER:
      // 1st => Finding the index if a feature already exist in the feature list for updating
      let updateFeature = state.featureList.findIndex(feature => feature.id === action.payload.id); // This will return -1 if it's not found

      if(updateFeature >= 0){

        // 2nd => If exist then update that particular feature according new value 
        state.featureList[updateFeature].featurePrice = action.payload.featurePrice
      }

      return {
        // returning all the current state
        ...state,

        // 3rd => Now for the changing global context data we need to find for feature if that already in the feature list array
        featureList: state.featureList.some(feature => feature.id === action.payload.id) ?// <== *ternary if* ==> //

                    // 4th => If it's exists then update it's value from 'updateFeature' variable values
                    [...state.featureList, state.featureList[updateFeature]] :// <== *ternary else* ==> //

                      // 5th => Else add the new feature to featureList array 
                      [...state.featureList,
                        {
                          id: action.payload.id,
                          featureName: action.payload.featureName,
                          featurePrice: +action.payload.featurePrice,
                        }
                      ]
      }
    default:
      return state
  }
}

export default costReducer;
