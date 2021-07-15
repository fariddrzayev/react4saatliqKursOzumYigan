import {makeStyles, TextField} from '@material-ui/core';
import React from 'react'

const style = makeStyles(theme => ({
    main: {
        // marginLeft: theme.spacing(3),
        // marginRight: theme.spacing(3),
        // marginTop:  theme.spacing(2),
        // marginBottom:  theme.spacing(2),
        // width: '60%'
    }
}))
function Input(props) {
    const {label,variant} = props;
    const classes = style();
    return (
        <TextField className={classes.main}
            variant={variant}
            label={label}
        />
    )
}

export default Input
