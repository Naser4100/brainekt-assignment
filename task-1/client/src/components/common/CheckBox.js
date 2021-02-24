import {
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

const CheckBox = (props) => {

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
