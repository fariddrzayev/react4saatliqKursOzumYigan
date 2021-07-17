import React, { useState } from 'react'
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

    const initialValues = {
        id: 0,
        fullName: '',
        email: '',
        mobile: '',
        city: '',
        gender: 'male',
        department: '',
        datepicker: new Date(),
        isPermanent: false,
    }

    const handleOnChange = e => {
        const {name, value} = e.target


        console.log(name, value)
        setValues({
            ...values,
            [name] : value
        })
    }
    const [values, setValues] = useState(initialValues)


    return (
        <div className={classes.main}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={6}>
                        <Input variant='outlined' name="fullName"  label='Full Name' value={values.fullName} onChange={handleOnChange}/>
                        <Input variant='outlined' name="email" value={values.email} onChange={handleOnChange} label='Email'/>
                        <Input variant='outlined' name="mobile" value={values.mobile} onChange={handleOnChange} label='Mobile'/>
                        <Input variant='outlined' name="city" value={values.city} onChange={handleOnChange} label='City'/>
                    </Grid>
                    <Grid item xs={6}>
                        <Radio name="gender" label='Gender' value={values.gender} onChange={handleOnChange}  />
                        <Select name="department" label='Department' value={values.department} onChange={handleOnChange}/>


                        <DatePicker name="datepicker" label='Date' value={values.datepicker} onChange={handleOnChange} />
                        <Checkbox name="isPermanent" value={values.isPermanent} onChange={handleOnChange} label="Permanent Employee"/>

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
