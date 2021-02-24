import React, { useState} from 'react';

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

const NumberSlider = ({name, sliderTitle}) => {
  const classes = useStyles();

  const [subscription, setSubscription] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setSubscription(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-restrict" gutterBottom>
        {sliderTitle}
      </Typography>
      <Slider
        min={1}
        max={10}
        id='ecommerce_functionality'
        name={name}
        value={typeof subscription === 'number' ? subscription : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      />
    </div>
  );
}
export default NumberSlider;
