// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';

// Main component function
const UserEngagement = ({ featureData }) => {

  // Destructuring featureData
  const {
    email,
    pushNotification,
    socialSharing,
    forum,
    comments,
  } = featureData;

  return (
    <CardLayout sectionTitle = 'User Engagement'>

      <CheckBox
        id='email'
        name={email.name}
        value={email.price}
      />

      <CheckBox
        id='push_notification'
        name={pushNotification.name}
        value={pushNotification.price}
      />

      <CheckBox
        id='social_sharing'
        name={socialSharing.name}
        value={socialSharing.price}
      />

      <CheckBox
        id='forum'
        name={forum.name}
        value={forum.price}
      />
      
      <CheckBox
        id='comments'
        name={comments.name}
        value={comments.price}
      />

    </CardLayout>
  )
}

export default UserEngagement;
