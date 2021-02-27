import React, { useContext } from 'react';

import {
  Typography,
  Slider,
} from '@material-ui/core';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

const NumberSlider = ({step, sliderTitle, pricePerUnit, min, max}) => {

  // Extracting add feature Action(function) from context
  const { addFeatureFromSlider } = useContext(CostContext);

  // A variable for storing new feature object that is going be include in featureList array
  let newFeatureObj;

  // This function trigger when slider value change
  const valueLabelFormat = (value) => {

    // Structuring newFeatureObj for passing to the action function
    newFeatureObj = { id: sliderTitle.replace(/\s/g, ""), featureName: sliderTitle, featurePrice: value * pricePerUnit };

    // value for displaying on the tooltip
    return value;
  }

    // Finally submit newFeature object the addFeatureFromSlider action
  const onClickHandler = () => {
    addFeatureFromSlider(newFeatureObj);
  }

  return (
    <div>
      <Typography id="discrete-slider-restrict" gutterBottom>
        {sliderTitle}
      </Typography>

      <Slider
        max={max}
        min={min}
        name='slider'
        step={step}
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="auto"
        onClick={onClickHandler}
      />
    </div>
  );
}
export default NumberSlider;
