import React , {useContext}from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './mainStyles'
import Form from './Form';
import List from './List';
import { ExpenseTrackerContext} from '../context/context'

function Main() {
    const classes = useStyles()
    const {balance} = useContext(ExpenseTrackerContext)
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered By Sppechly"/>
            <CardContent>
                <Typography align="center" variant="h5">
                        Total Balance {balance}
                </Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                        Try Saying: Add Income for $100 in category Salary for Monday
                </Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                   <List/>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
