// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';
import CheckBox from '../common/CheckBox';

// Main component function
const CommonFeature = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'Common Feature'>

      <CheckBox
        id='wish_list'
        name={featureData.wishList.name}
        value={featureData.wishList.price}
        handleInputChange = {handleInputChange}
      />

      <CheckBox
        id='faq'
        name={featureData.faq.name}
        value={featureData.faq.price}
        handleInputChange = {handleInputChange}
      />
      <CheckBox
        id='coupon_card'
        name={featureData.couponCard.name}
        value={featureData.couponCard.price}
        handleInputChange = {handleInputChange}
      />

    </CardLayout>
  )
}

export default CommonFeature;
