import React, {Component} from 'react';
import {Grid, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box, Tabs, Tab, Avatar, AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import {styled} from '@material-ui/core/styles'
import {LoginFormContainer, RegisterFormContainer} from '../containers/loginForm'
const MyAppBar = styled(AppBar)({
    boxShadow: 'none',
    flexGrow: 1,
    background: 'rgba(255, 255, 255, 0)',
    padding: '10px 20px'
})


class Bar extends Component{
    render(){
        let {openLoginForm, handleLogin, user,loginInGuest, handlelogout} = this.props
        return(
            <>
            <MyAppBar position="absolute">
            <Grid container spacing={1} justify='space-between' alignItems="center">
                <Grid item>
                    <Typography variant="h1">
                        <i>NutritionLog</i>
                    </Typography>
                </Grid>
                <Grid item>
                    {user.loginStatus?
                        <><Button color="inherit" variant="body1">{user.username}</Button>/<Button color="inherit" onClick={handlelogout}>登出</Button></>:
                        <Button color="inherit" onClick={openLoginForm}>登入/註冊</Button>
                    }
                </Grid>
            </Grid>
            </MyAppBar>
            {user.loginForm ? <LoginFormContainer/> : <></>}
            {user.registerForm ? <RegisterFormContainer/> : <></>}
            </>

        )
    }
}

export default Bar