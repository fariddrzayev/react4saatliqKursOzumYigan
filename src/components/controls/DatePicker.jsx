import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {

  const {name,label,value,onChange} = props
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(value);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <KeyboardDatePicker
        inputVariant="outlined"
          disableToolbar
          variant="inline"
          formate="MMM/dd/yyyy"
          name={name}
          id="date-picker-inline"
          label={label}
          value={selectedDate}
          onChange={onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
