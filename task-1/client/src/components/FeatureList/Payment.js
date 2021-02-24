// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';
import NumberSlider from '../common/NumberSlider';

// Main component function
const Payment = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'Payment'>

      <CheckBox
        id='dashboard'
        name={featureData.shoppingCart.name}
        value={featureData.shoppingCart.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='payment_process'
        name={featureData.paymentProcess.name}
        value={featureData.paymentProcess.price}
        handleInputChange = {handleInputChange}
      />

      <NumberSlider
        name={featureData.membershipSubscription.name}
        sliderTitle={featureData.membershipSubscription.name}
      />

    </CardLayout>
  )
}

export default Payment;
