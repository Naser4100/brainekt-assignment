// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';

// Main component function
const APIIntegration = ({ featureData }) => {

  // Destructuring featureData
  const {
    apiIntegration,
  } = featureData;

  return (
    <CardLayout sectionTitle = 'API Integration'>

      <CheckBox
        id='api_integration'
        name={apiIntegration.name}
        value={apiIntegration.price}
      />

    </CardLayout>
  )
}

export default APIIntegration;
