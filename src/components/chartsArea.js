import React, { Component } from 'react'
import {Card, Grid, Paper, List, ListItem, Box, TextField, Avatar, Typography, Button, MenuItem} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
import './chart.css'
import DayChart from '../containers/dayChart'
import MonthChart from '../containers/monthChart'

class ChartsArea extends Component {
    
    render(){
        
        return(
            <Grid container>
                <Grid item lg={12} md={6} xs={12}>
                    <Typography variant='h3'>日營養攝取紀錄</Typography>
                    <DayChart/>
                </Grid>
                <Grid item lg={12} md={6} xs={12}>
                    <Typography variant='h3'>月營養攝取紀錄</Typography>
                    <MonthChart/>
                </Grid>
            </Grid>
        )
    }
}

export default ChartsArea