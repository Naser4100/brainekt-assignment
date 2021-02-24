// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';

// Main component function
const Design = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'Design'>

      <CheckBox
        id='ux_ui'
        name={featureData.design.name}
        value={featureData.design.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='responsive_design'
        name={featureData.responsiveDesign.name}
        value={featureData.responsiveDesign.price}
        handleInputChange = {handleInputChange}
      />

    </CardLayout>
  )
}

export default Design;
