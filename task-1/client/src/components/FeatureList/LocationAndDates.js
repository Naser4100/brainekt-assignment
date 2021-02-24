// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';

// Main component function
const LocationAndDates = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'Location and Dates'>
      <CheckBox
        id='calender'
        name={featureData.calendar.name}
        value={featureData.calendar.price}
        handleInputChange = {handleInputChange}
      />

      <SliderComp
        sliderTitle = {featureData.booking.name}
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 25},
            {label: 'Advanced', value: 50},
            {label: 'Enterprise', value: 100}
          ]
          }
        />

      <CheckBox
        id='map'
        name={featureData.map.name}
        value={featureData.map.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='geo_location'
        name={featureData.geoLocation.name}
        value={featureData.geoLocation.price}
        handleInputChange = {handleInputChange}
      />

    </CardLayout>
  )
}

export default LocationAndDates;
