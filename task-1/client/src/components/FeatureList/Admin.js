// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';

// Main component function
const Admin = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature(event);
  }

  return (
    <CardLayout sectionTitle = 'Admin'>
      
      <SliderComp
        sliderTitle = {featureData.searchFeature.name}
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 25},
            {label: 'Advanced', value: 50},
            {label: 'Enterprise', value: 100}
          ]
        }
        />

    </CardLayout>
  )
}

export default Admin;
