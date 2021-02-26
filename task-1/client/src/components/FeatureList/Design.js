// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';

// Main component function
const Design = ({ featureData }) => {
  // Destructuring featureData
  const {
    design,
    responsiveDesign,
  } = featureData;

  return (
    <CardLayout sectionTitle = 'Design'>

      <CheckBox
        id='ux_ui'
        name={design.name}
        value={design.price}
      />

      <CheckBox
        id='responsive_design'
        name={responsiveDesign.name}
        value={responsiveDesign.price}
      />

    </CardLayout>
  )
}

export default Design;
