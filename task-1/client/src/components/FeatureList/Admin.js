// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';
import CheckBox from '../common/CheckBox';

// Main component function
const Admin = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'Admin'>
      
      <SliderComp
        sliderTitle = {featureData.cms.name}
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
        name={featureData.adminMultiLanguage.name}
        value={featureData.adminMultiLanguage.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='moderation_and_approval'
        name={featureData.moderationAndApproval.name}
        value={featureData.moderationAndApproval.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='reporting_analyst'
        name={featureData.reportingAnalyst.name}
        value={featureData.reportingAnalyst.price}
        handleInputChange = {handleInputChange}
      />

    </CardLayout>
  )
}

export default Admin;
