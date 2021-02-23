import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const BasicFeatures = () => {
  const classes = useStyles();
  const [basicFeatures, setBasicFeatures] = useState({
    numberOfPage: 0,
    blogFunctionality: 45,
    multipleLanguage: 65,
  });

  const [arr, setArr] = useState([]);

  const {numberOfPage, blogFunctionality, multipleLanguage } = basicFeatures;

  const addDataToCostArray = event => {
    let newArray = [...arr, { fname: event.target.name, featureValue: +event.target.value, id: event.target.id }];
    if (arr.some(feature => feature.id === event.target.id)) {
      newArray = newArray.filter(feature => feature.id !== event.target.id);
    }
    setArr(newArray);
    console.log(newArray);
  };

  

  const handleInputChange = (event) => {
    setBasicFeatures({
      ...basicFeatures, [event.target.name]: event.target.checked
    });
    addDataToCostArray(event);
  }

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Basic Features</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<TextField
              id="standard-number"
              label="Number"
              variant="outlined"
              size="small"
              value={numberOfPage}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />}
            label="Number of page"
          />
          <FormControlLabel
            control={<Checkbox id='naser' value={blogFunctionality} onChange={handleInputChange} name="Blog functionalities" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox id='abd' value={multipleLanguage} onChange={handleInputChange} name="Multiple language" />}
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  )
}

export default BasicFeatures;
