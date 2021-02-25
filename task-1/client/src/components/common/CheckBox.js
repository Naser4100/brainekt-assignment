// Library import statement
import {
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

// Main functional component
const CheckBox = (props) => {

  // Destructuring props value passed to this component
  const {
    handleInputChange,
    id,
    value,
    name
  } = props;

  return (
    <div>
      {/* Reusable checkbox component */}
      <FormControlLabel
        control={
          <Checkbox
            style={{color: 'orange'}}
            id={id}
            value={value}
            color='orange'
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
