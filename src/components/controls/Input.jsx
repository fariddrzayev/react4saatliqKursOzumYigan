import {makeStyles, TextField} from '@material-ui/core';
import React from 'react'


function Input(props) {

    const {name, value,onChange, label,variant} = props;
    return (
        <TextField
        variant="outlined"
            label={label}
            value={value}
            onChange={onChange}
            name={name}
        />
    )
}

export default Input
