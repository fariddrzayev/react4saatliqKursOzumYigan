import React from 'react'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import {makeStyles, Paper, Card, Typography, TextField, Grid} from '@material-ui/core';
import { TextFields } from '@material-ui/icons';
import Input from './controls/Input';
import Radio from './controls/Radio';
import Select from './controls/Select';
import DatePicker from './controls/DatePicker';
import Checkbox from './controls/Checkbox';
import Button from './controls/Button'




const useStyle = makeStyles(theme => ({
    main: {
        // padding: '20px',
        margin: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(3),
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        }
    },
    pageHeader: {
        padding: theme.spacing(3),
        display: 'flex'
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1',
        borderRadius: '10px'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4)
    }
}))

function Main() {
    const classes = useStyle()

    return (
        <div className={classes.main}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid xs={6}>
                        <Input variant='outlined' label='Full Name'/>
                        <Input variant='outlined' label='Email'/>
                        <Input variant='outlined' label='Mobile'/>
                        <Input variant='outlined' label='City'/>
                    </Grid>
                    <Grid xs={6}>
                        <Radio />
                        <Select name="department" label='Department'/>
                        <DatePicker />
                        <Checkbox label="Permanent Employee"/>

                        <div>
                        <Button name="Submit" color="primary"/>
                        <Button name="Reset" color="default"/>
                        </div>
                        {/* <Grid container>
                            <Grid xs={2}>
                            </Grid>
                            <Grid xs={3}>
                            </Grid>
                        </Grid> */}

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Main
