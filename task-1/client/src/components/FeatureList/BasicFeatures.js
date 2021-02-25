// import { useState, useContext } from 'react';
// import {
//   FormControl,
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   Typography,
//   Slider,
//   Card,
//   CardContent,
// } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// import CostContext from '../../context/costContext/costContext';

// // Feature data
// import featureData from '../../featuresData.json'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   formControl: {
//     margin: theme.spacing(3),
//   },
//   card: {
//     marginBottom: 12,
//   }
// }));

// const BasicFeatures = () => {
//   const { addFeature, featureList } = useContext(CostContext);

//   const classes = useStyles();

//   const [basicFeatures, setBasicFeatures] = useState({
//     numberOfPage: 0,
//     blogFunctionality: 45,
//     multipleLanguage: 65,
//   });

//   const [arr, setArr] = useState([]);

//   const {numberOfPage, blogFunctionality, multipleLanguage } = basicFeatures;

//   const addDataToCostArray = event => {
//     let newArray = [...arr, { fname: event.target.name, featureValue: +event.target.value, id: event.target.id }];
//     if (arr.some(feature => feature.id === event.target.id)) {
//       newArray = newArray.filter(feature => feature.id !== event.target.id);
//     }
//     setArr(newArray);
//     console.log(newArray);
//   };

//   const handleSliderChange = (event, newValue) => {
//     setBasicFeatures({
//       numberOfPage: newValue
//     });
//   };



//   const handleInputChange = (event) => {
//     setBasicFeatures({
//       ...basicFeatures, [event.target.name]: event.target.checked
//     });
//     addFeature(event);
//   }

//   const setValueToArray = (event) => {
//     // addFeature(event);
//   }

//   return (
//     <Card variant='outlined' className={classes.card}>
//       <CardContent>
//         <Typography variant="h5" component="h2">
//           Basic features
//         </Typography>

//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormGroup>

//             {/* Number of page slider */}
//             <Typography className={classes.root}>{featureData.numberOfPage.name}</Typography>
//             <Slider
//               min={0}
//               max={150}
//               id='number_of_page'
//               name='number_of_page'
//               value={typeof numberOfPage === 'number' ? numberOfPage : 0}
//               onChange={handleSliderChange}
//               onMouseUp={setValueToArray}
//               aria-labelledby="input-slider"
//             />

//             {/* Blog functionalities checkbox */}
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   id='blog_functionality'
//                   value={featureData.blogFunction.price}
//                   onChange={handleInputChange}
//                   name={featureData.blogFunction.name}
//                 />
//               }
//               label={featureData.blogFunction.name}
//             />

//             {/* Multiple language checkbox */}
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   id='multi_language'
//                   value={featureData.multipleLanguage.price}
//                   onChange={handleInputChange}
//                   name={featureData.multipleLanguage.name}
//                   />
//                 }
//               label={featureData.multipleLanguage.name}
//             />

//             {/* Optimize and speed */}
//             <Typography className={classes.root}>Optimize and speed</Typography>
//             <Slider
//               min={0}
//               max={150}
//               id='optimize_and_speed'
//               name={featureData.optimizeAndSpeed.name}
//               value={typeof numberOfPage === 'number' ? numberOfPage : 0}
//               onChange={handleSliderChange}
//               onMouseUp={setValueToArray}
//               aria-labelledby="input-slider"
//             />

//             {/* Database integration */}
//             <Typography className={classes.root}>Database integration</Typography>
//             <Slider
//               min={0}
//               max={150}
//               id='database_integration'
//               name={featureData.databaseIntegration.name}
//               value={typeof numberOfPage === 'number' ? numberOfPage : 0}
//               onChange={handleSliderChange}
//               onMouseUp={setValueToArray}
//               aria-labelledby="input-slider"
//             />

//             {/* Ecommerce functionality*/}
//             <Typography className={classes.root}>Ecommerce Functionality</Typography>
//             <Slider
//               min={0}
//               max={150}
//               id='ecommerce_functionality'
//               name={featureData.ecommerceFunctionality.name}
//               value={typeof numberOfPage === 'number' ? numberOfPage : 0}
//               onChange={handleSliderChange}
//               onMouseUp={setValueToArray}
//               aria-labelledby="input-slider"
//             />

//             {/* Avg Estimated Clicks per month*/}
//             <Typography className={classes.root}>Avg Estimated click per month</Typography>
//             <Slider
//               min={0}
//               max={150}
//               id='avg_est_click'
//               name={featureData.avgEstimatedClicks.name}
//               value={typeof numberOfPage === 'number' ? numberOfPage : 0}
//               onChange={handleSliderChange}
//               onMouseUp={setValueToArray}
//               aria-labelledby="input-slider"
//             />


//           </FormGroup>
//         </FormControl>
//       </CardContent>
//     </Card>
//   )
// }

// export default BasicFeatures;

import { useContext, useState } from 'react';
import {Slider, Typography } from '@material-ui/core';

import CostContext from '../../context/costContext/costContext';

import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';

const BasicFeatures = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const [basicFeatures, setBasicFeatures] = useState({
    numberOfPage: 0,
    sliderData: 0,
  });

  const {numberOfPage, sliderData } = basicFeatures;

  const [arr, setArr] = useState([]);


  const handleSliderChange = (event, newValue, name) => {
    setBasicFeatures({
      sliderData: newValue
    });
    // addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  };

    const setValueToArray = (event) => {
    // addFeature(event);
    console.log(sliderData);
  }

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'Basic Feature'>

      {/* Typography for slider */}
      <Typography >{featureData.numberOfPage.name}</Typography>
      <Slider
        min={0}
        max={150}
        id='ecommerce_functionality'
        name={featureData.numberOfPage.name}
        value={typeof numberOfPage === 'number' ? numberOfPage : 0}
        
        onMouseUp={(e) => console.log(e)}
        aria-labelledby="input-slider"
      />

      <CheckBox
        id='blog_functionality'
        name={featureData.blogFunction.name}
        value={featureData.blogFunction.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='multiple_language'
        name={featureData.multipleLanguage.name}
        value={featureData.multipleLanguage.price}
        handleInputChange = {handleInputChange}
      />

      {/* Typography for slider */}
      <Typography >{featureData.optimizeAndSpeed.name}</Typography> 
      <Slider
        min={0}
        max={150}
        id='ecommerce_functionality'
        name={featureData.optimizeAndSpeed.name}
        value={typeof numberOfPage === 'number' ? numberOfPage : 0}
        onChange={handleSliderChange}
        //onMouseUp={setValueToArray}
        aria-labelledby="input-slider"
      />

      <SliderComp
        sliderTitle = {featureData.databaseIntegration.name}
        onChange={handleSliderChange}
        onMouseUp={setValueToArray}
        name='database_integration'
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 25},
            {label: 'Advanced', value: 50},
            {label: 'Full development', value: 100}
          ]
          }
      />

<hr/>
      <SliderComp
        sliderTitle = {featureData.ecommerceFunctionality.name}
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 25},
            {label: 'Advanced', value: 50},
            {label: 'Enterprise', value: 100}
          ]
          }
      />

      {/* Typography for slider */}
      <Typography >{featureData.avgEstimatedClicks.name}</Typography> 
      <Slider
        min={0}
        max={150}
        id='ecommerce_functionality'
        name={featureData.avgEstimatedClicks.name}
        value={typeof numberOfPage === 'number' ? numberOfPage : 0}
        onChange={handleSliderChange}
        onMouseUp={setValueToArray}
        aria-labelledby="input-slider"
      />

    </CardLayout>
  )
}

export default BasicFeatures;