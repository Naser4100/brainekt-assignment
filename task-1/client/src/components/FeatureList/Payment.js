// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';
import NumberSlider from '../common/NumberSlider';

// Main component function
const Payment = ({ featureData }) => {

  // Destructuring featureData
  const {
    shoppingCart,
    paymentProcess,
    membershipSubscription,
  } = featureData;

  return (
    <CardLayout sectionTitle = 'Payment'>

      <CheckBox
        id='dashboard'
        name={shoppingCart.name}
        value={shoppingCart.price}
      />

      <CheckBox
        id='payment_process'
        name={paymentProcess.name}
        value={paymentProcess.price}
      />

      <NumberSlider
        name={membershipSubscription.name}
        sliderTitle={membershipSubscription.name}
      />

    </CardLayout>
  );
}

export default Payment;
