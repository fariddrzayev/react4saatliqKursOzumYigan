import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, Grid } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles(theme =>({
   root: {
       backgroundColor: '#fff',
       transform: 'translateZ(0)'
   },
   icons: {
    // color: 'blue'
   },
   searchBar: {
     color: '#000'
   }
}))

export default function Header() {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid className={classes.searchBar}>
              
              <InputBase 
                placeholder="Search top"
                startAdornment={<SearchIcon fontSize="small" />}
              />
            </Grid>
            <Grid item sm>
              
            </Grid>

            <Grid item>
              <IconButton>
                <NotificationsNoneIcon className={classes.icons} fontSize="small" />
              </IconButton>
              <IconButton>
                <ChatBubbleOutlineIcon className={classes.icons} fontSize="small"/>
              </IconButton>
              <IconButton>
                <PowerSettingsNewIcon className={classes.icons} fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  );
}
