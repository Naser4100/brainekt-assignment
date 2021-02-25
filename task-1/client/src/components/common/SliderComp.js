import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Slider
} from '@material-ui/core';

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

const SliderComponent = ({marksProps, sliderTitle, onChange,onMouseUp, max, id}) => {
  const classes = useStyles();

  const marks = marksProps.map((mark) => {
    return {
      label: mark.label,
      value: mark.value
    }
  })
  
  function valueText(value) {
    return `${value}`;
  }

  let arr;
  
  const valueLabelFormat = (value) => {
    const name = marks.findIndex((mark) => mark.value === value);
    arr = { id: marks[name].value, featureName: marks[name].label, featurePrice: marks[name].value };
    console.log(arr);
    return marks.findIndex((mark) => mark.value === value) + 1;
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
        // onChange={onChange}
        // onClick={valueLabelFormat}
        // onMouseUp={onMouseUpHandler}
      />
    </div>
  );
}
export default SliderComponent;
