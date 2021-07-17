import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MuiSelect(props) {
  const classes = useStyles();
  const [department, setDepartment] = React.useState('');
  const {name, label, value, onChange} = props

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };
  const getDepartmentColllection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

  return (
    <div>
   
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={onChange}
          label={label}
          name={name}
        >
          <MenuItem value="">None</MenuItem>
         
          { getDepartmentColllection().map(
              item => ( <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
          )}
         
        </Select>
      </FormControl>
    </div>
  );
}
