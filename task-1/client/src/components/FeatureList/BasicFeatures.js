// Reusable component
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';
import NumberSlider from '../common/NumberSlider';

const BasicFeatures = ({ featureData }) => {

  // Destructuring featureData
  const {
    numberOfPage,
    blogFunction,
    multipleLanguage,
    optimizeAndSpeed,
    databaseIntegration,
    ecommerceFunctionality,
    avgEstimatedClicks,
  } = featureData;

  return (
    <CardLayout sectionTitle = 'Basic Feature'>

      <NumberSlider
        min={0}
        step={5}
        max={150}
        pricePerUnit={12}
        sliderTitle={numberOfPage.name}
      />

      <CheckBox
        id='blog_functionality'
        name={blogFunction.name}
        value={blogFunction.price}
      />

      <CheckBox
        id='multiple_language'
        name={multipleLanguage.name}
        value={multipleLanguage.price}

      />

      <SliderComp
        sliderTitle = {optimizeAndSpeed.name}
        max={400}
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 200},
            {label: 'Advanced', value: 400},
          ]
        }
        />

      <SliderComp
        sliderTitle = {databaseIntegration.name}
        name='database_integration'
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 25},
            {label: 'Advanced', value: 50},
            {label: 'Full development', value: 100}
          ]
          }
      />

      <SliderComp
        sliderTitle = {ecommerceFunctionality.name}
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 25},
            {label: 'Advanced', value: 50},
            {label: 'Enterprise', value: 100}
          ]
          }
      />

      <NumberSlider
        min={100}
        max={10000}
        step={250}
        pricePerUnit={0.10}
        sliderTitle={avgEstimatedClicks.name}
      />

    </CardLayout>
  )
}

export default BasicFeatures;