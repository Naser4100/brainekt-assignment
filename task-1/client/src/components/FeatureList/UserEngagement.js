// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';

// Main component function
const UserEngagement = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);


  // Add or remove feature from context
  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'User Engagement'>

      <CheckBox
        id='email'
        name={featureData.email.name}
        value={featureData.email.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='push_notification'
        name={featureData.pushNotification.name}
        value={featureData.pushNotification.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='social_sharing'
        name={featureData.socialSharing.name}
        value={featureData.socialSharing.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='forum'
        name={featureData.forum.name}
        value={featureData.forum.price}
        handleInputChange = {handleInputChange}
      />
      
      <CheckBox
        id='comments'
        name={featureData.comments.name}
        value={featureData.comments.price}
        handleInputChange = {handleInputChange}
      />

    </CardLayout>
  )
}

export default UserEngagement;
