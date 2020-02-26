import React, {Component} from 'react';
import {hot} from "react-hot-loader";
import CssBaseline from "@material-ui/core/CssBaseline"
import {Grid, Paper, Container, Box, Tabs, Tab, Avatar, AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import {styled, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import MainBox from './containers/mainBox'
// import Bar from './containers/bar'
// import "./App.css";



const theme = createMuiTheme({
    typography: {
        letterSpacing: '1rem',
        h1: {
            fontSize: '2rem',
            fontWeight: '600',
            color: '#707070',
            fontFamily: 'Mali',
        },
        h2: {
            fontSize: '1.2rem',
            fontWeight: '500',
            letterSpacing: '0.1rem',
            color: '#343434'
        },
        h3: {
            fontSize: '1rem',
            fontWeight: '500',
            color: '#343434',
            marginTop: '1.2rem',
            marginBottom: '0.6rem'
        },
    },
    palette: {
        primary: {
            main: "#D3E8F6",
            contrastText: "#707070"
        },
        secondary: {
            main:  '#FBCD50',
            contrastText: "#707070"
        },
        info: {
            main: '#707070',
            light: '#A8A8A8'
        }
    }
})
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount(){
        this.setState({
            loading: false
        })
    }
    render(){
        const {loading} = this.state

        if(loading){
            return null
        }

        return(
            <React.Fragment>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                <MainBox/>
                
                </ThemeProvider>
            </React.Fragment>
        )
    }
}

export default hot(module)(App);