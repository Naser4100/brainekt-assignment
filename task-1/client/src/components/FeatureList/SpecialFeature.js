// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';
import CheckBox from '../common/CheckBox';

// Main component function
const SpecialFeature = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'Special Feature'>
      
      <SliderComp
        sliderTitle = {featureData.chatBotLive.name}
        max={400}
        marksProps = {
          [
            {label: 'None', value: 0},
            {label: 'Basic', value: 230},
            {label: 'Advanced', value: 400},
          ]
        }
        />

      <CheckBox
        id='video_streaming'
        name={featureData.videoStreaming.name}
        value={featureData.videoStreaming.price}
        handleInputChange = {handleInputChange}
      />

    </CardLayout>
  )
}

export default SpecialFeature;
