// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';

// Main component function
const LocationAndDates = ({ featureData }) => {

  // Destructuring featureData
  const {
    calendar,
    booking,
    map,
    geoLocation,
  } = featureData;

  return (
    <CardLayout sectionTitle = 'Location and Dates'>

      <CheckBox
        id='calender'
        name={calendar.name}
        value={calendar.price}
      />

      <SliderComp
        sliderTitle = {booking.name}
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
        name={map.name}
        value={map.price}
      />

      <CheckBox
        id='geo_location'
        name={geoLocation.name}
        value={geoLocation.price}
      />

    </CardLayout>
  );
}

export default LocationAndDates;
