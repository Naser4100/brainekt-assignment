
// Reusable components
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';
import CheckBox from '../common/CheckBox';

// Component main function
const Admin = ({ featureData }) => {

  // Destructuring featureData
  const {
    cms,
    adminMultiLanguage,
    moderationAndApproval,
    reportingAnalyst,
  } = featureData;  

  return (
    <CardLayout sectionTitle = 'Admin'>
      
      <SliderComp
        sliderTitle = {cms.name}
        max={650}
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 250},
            {label: 'Advanced', value: 400},
            {label: 'Enterprise', value: 650}
          ]
        }
        />

      <CheckBox
        id='multi_language'
        name={adminMultiLanguage.name}
        value={adminMultiLanguage.price}
      />

      <CheckBox
        id='moderation_and_approval'
        name={moderationAndApproval.name}
        value={moderationAndApproval.price}
      />

      <CheckBox
        id='reporting_analyst'
        name={reportingAnalyst.name}
        value={reportingAnalyst.price}
      />

    </CardLayout>
  )
}

export default Admin;
