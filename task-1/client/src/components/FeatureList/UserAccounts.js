// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';

// Main component function
const UserAccount = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'User Account'>

      <CheckBox
        id='dashboard'
        name={featureData.dashboard.name}
        value={featureData.dashboard.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='userProfile'
        name={featureData.userProfile.name}
        value={featureData.userProfile.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='review_rating'
        name={featureData.reviewRating.name}
        value={featureData.reviewRating.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='messaging_system'
        name={featureData.messagingSystem.name}
        value={featureData.messagingSystem.price}
        handleInputChange = {handleInputChange}
      />
      
      <SliderComp
        sliderTitle = {featureData.searchFeature.name}
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 50},
            {label: 'Advanced', value: 100}
          ]
          }
        />

      <CheckBox
        id='gallery_and_photo'
        name={featureData.gallery.name}
        value={featureData.gallery.price}
        handleInputChange = {handleInputChange}
      />

    </CardLayout>
  )
}

export default UserAccount;
