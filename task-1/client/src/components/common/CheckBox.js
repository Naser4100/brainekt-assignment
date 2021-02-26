// Library/package import statement
import { useContext } from 'react'
import {
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Component main function
const CheckBox = (props) => {

  // Destructuring props value that passed to this component
  const {
    id,
    value,
    name
  } = props;

    // Destructuring const context and extract addFeature action
    const { addFeature } = useContext(CostContext);

    const handleInputChange = (event) => {
      // Calling the action to add new feature data to global state
      addFeature({
        id: event.target.id,
        featureName: event.target.name,
        featurePrice: event.target.value
      });
    }

  return (
    <div>
      {/* Reusable checkbox component */}
      <FormControlLabel
        control={
          <Checkbox
            style={{color: 'orange'}} // <== Inline styling
            id={id}
            value={value}
            onChange={handleInputChange}
            name={name}
          />
        }
        label={name}
      />
    </div>
  );
}

export default CheckBox;
