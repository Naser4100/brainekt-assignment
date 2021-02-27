// Library/package imports
import React, { useContext } from 'react';

// Material-UI package import
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Slider
} from '@material-ui/core';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Custom CSS style
const useStyles = makeStyles({
  root: {
    width: 225,
  },
});

// Component main function
const SliderComponent = ({ marksProps, sliderTitle, max }) => {
  const classes = useStyles();

  // Extracting add feature Action(function) from context
  const { addFeatureFromSlider } = useContext(CostContext);

  // Structuring object for slider marks that shows the slider position and value for that particular position
  const marks = marksProps.map((mark) => {
    return {
      label: mark.label,
      value: mark.value
    }
  })
  
  // A variable for storing new feature object that is going be include in featureList array
  let newFeatureObj;

    // This function trigger when slider value change
  const valueLabelFormat = (value) => {

    // Getting index from the slider current position to structure newFeatureObj
    const name = marks.findIndex((mark) => mark.value === value);

    // Structuring newFeatureObj for passing to the action function
    newFeatureObj = { id: sliderTitle.replace(/\s/g, ""), featureName: sliderTitle, featurePrice: marks[name].value };
    
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  
  // Finally submit newFeature object the addFeatureFromSlider action
  const onSubmitHandler = () =>{
    addFeatureFromSlider(newFeatureObj)
  }

  return (
    <div className={classes.root}>

      <Typography id="discrete-slider-restrict" gutterBottom>
        {sliderTitle} {/*<==Show the slider title */}
      </Typography>

      <Slider
        max={max}
        name='slider'
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onClick={onSubmitHandler}
      />
    </div>
  );
}
export default SliderComponent;
