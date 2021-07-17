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
    },
    pageHeader: {
        padding: theme.spacing(4),
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
    },
    formPart: {
        margin: theme.spacing(5)
    }
}))

function Main() {
    const classes = useStyle()

    return (
        <div >
            <Paper square elevation={0}>
                <div className={classes.pageHeader}>
                    <Card className={classes.pageIcon}>
                        <PeopleOutlineIcon fontSize='large'  />
                    </Card>
                    <div className={classes.pageTitle}>
                        <Typography variant="h6" component="div">New Employee</Typography>
                        <Typography variant="subtitle2" component="div" style={{opacity: '0.6'}}>Form design with validation</Typography>
                    </div>

                </div>
            </Paper>
        </div>
    )
}

export default Main
