import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Slider
} from '@material-ui/core';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

// const marks = [
//   {
//     value: 0,
//     label: '0°C',
//   },
//   {
//     value: 50,
//     label: '20°C',
//   },
//   {
//     value: 100,
//     label: '37°C',
//   },
// ];

// function valuetext(value) {
//   return `${value}°C`;
// }

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

const SliderComponent = ({marksProps, sliderTitle, min, max, name}) => {
  const classes = useStyles();

  const { addFeatureFromSlider } = useContext(CostContext)

  const marks = marksProps.map((mark) => {
    return {
      label: mark.label,
      value: mark.value
    }
  })
  
  function valueText(value) {
    return `${value}`;
  }

  let obj
  const valueLabelFormat = (value) => {

    const name = marks.findIndex((mark) => mark.value === value);
      obj = { id: sliderTitle.replace(/\s/g, ""), featureName: sliderTitle, featurePrice: marks[name].value };
    
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  
  const submit = () =>{
    addFeatureFromSlider(obj)
        console.log(obj)
  }

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-restrict" gutterBottom>
        {sliderTitle}
      </Typography>
      <Slider
        max={max}
        name='slider'
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onClick={submit}
      />
    </div>
  );
}
export default SliderComponent;
