import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {
    const {name,label,value,onChange} = props
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  //   checkedF: true,
  //   checkedG: true,
  // });

  // const handleChange = (e) => {
  //   console.log(e.target)
  //   e.target.value = e.target.checked
  //   console.log(e.target)
  //   return {}
  //   // onChange(e.target)
  // };

  const handleChange = (name, value) => ({
    target: {
      name,value
    }
  })

  return (
    <FormControl>
     
      <FormControlLabel
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            onChange={ e => onChange( handleChange(name, e.target.checked) )}

            name={name}
            checked={value}
            label={label}
            color="secondary"
          />
        }
        label={label}
      />
      
    </FormControl>
  );
}
