import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    // padding: theme.spacing(2)
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles();
  const {name, color} = props;

  return (
    // <div className={classes.root}>
      <Button className={classes.button}variant="contained" color={color}>{name}</Button>
      
    // </div>
  );
}
