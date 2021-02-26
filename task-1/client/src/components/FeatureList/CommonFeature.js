// Reusable components
import CardLayout from '../common/CardLayout';
import CheckBox from '../common/CheckBox';

// Main component function
const CommonFeature = ({ featureData }) => {

  // Destructuring featureData
  const {
    wishList,
    faq,
    couponCard,
  } = featureData;

  return (
    <CardLayout sectionTitle = 'Common Feature'>

      <CheckBox
        id='wish_list'
        name={wishList.name}
        value={wishList.price}
      />

      <CheckBox
        id='faq'
        name={faq.name}
        value={faq.price}
      />

      <CheckBox
        id='coupon_card'
        name={couponCard.name}
        value={couponCard.price}
      />

    </CardLayout>
  )
}

export default CommonFeature;
