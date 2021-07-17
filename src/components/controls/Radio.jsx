import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core';

const style = makeStyles(theme => ({
    main: {
        // margin: theme.spacing(3)
    }
}))
export default function RadioButtonsGroup(props) {
   const {name,label,onChange} = props
    const [value, setValue] = React.useState('male');
    const classes = style();
  //   const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <FormControl className={classes.main} component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row  aria-label="gender" name={name} value={value} onChange={onChange}>
        <FormControlLabel value="male" selected control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}