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
export default function RadioButtonsGroup() {
    const [value, setValue] = React.useState('female');
    const classes = style();
    const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={classes.main} component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row  aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}