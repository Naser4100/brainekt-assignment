// Reusable components
import CardLayout from '../common/CardLayout';
import SliderComp from '../common/SliderComp';
import CheckBox from '../common/CheckBox';

// Main component function
const SpecialFeature = ({ featureData }) => {

  // Destructuring featureData
  const {
    chatBotLive,
    videoStreaming,
  } = featureData;

  return (
    <CardLayout sectionTitle = 'Special Feature'>
      
      <SliderComp
        sliderTitle = {chatBotLive.name}
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
        name={videoStreaming.name}
        value={videoStreaming.price}
      />

    </CardLayout>
  )
}

export default SpecialFeature;
