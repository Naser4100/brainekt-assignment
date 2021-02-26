// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';

// Main component function
const UserAccount = ({ featureData }) => {

  // Destructuring featureData
  const {
    dashboard,
    userProfile,
    reviewRating,
    messagingSystem,
    searchFeature,
    gallery
  } = featureData;

  return (
    <CardLayout sectionTitle = 'User Account'>

      <CheckBox
        id='dashboard'
        name={dashboard.name}
        value={dashboard.price}
      />

      <CheckBox
        id='userProfile'
        name={userProfile.name}
        value={userProfile.price}
      />

      <CheckBox
        id='review_rating'
        name={reviewRating.name}
        value={reviewRating.price}
      />

      <CheckBox
        id='messaging_system'
        name={messagingSystem.name}
        value={messagingSystem.price}
      />
      
      <SliderComp
        sliderTitle = {searchFeature.name}
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
        name={gallery.name}
        value={gallery.price}
      />

    </CardLayout>
  );
}

export default UserAccount;
