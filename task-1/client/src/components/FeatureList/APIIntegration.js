// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';

// Main component function
const APIIntegration = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'API Integration'>

      <CheckBox
        id='api_integration'
        name={featureData.apiIntegration.name}
        value={featureData.apiIntegration.price}
        handleInputChange = {handleInputChange}
      />

    </CardLayout>
  )
}

export default APIIntegration;
