import React, { Component} from 'react'
import {Grid, Link, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box, Tabs, Tab, Avatar, AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import {styled} from '@material-ui/core/styles'
import {Alert} from '@material-ui/lab';

const FormDialog = styled(Dialog)({
    width: '460px',
    margin: 'auto'
})

const InLineButton = styled(Button)({
    display: 'inline'
})
export class LoginForm extends Component{
    render(){
        let {closeLoginForm, handleLogin, openRegisterForm, user, loginFormChange, loginInGuest} = this.props
        return(
            <FormDialog open={user.loginForm} onClose={closeLoginForm} aria-labelledby="form-dialog-title">
                <DialogTitle >登入 NutritionLog</DialogTitle>
                {user.success?<></>:<Alert severity="warning" >{user.message}</Alert>}
                <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="username"
                      label="帳號"
                      fullWidth
                      required
                      onChange={loginFormChange}
                    />
                    <TextField
                      margin="dense"
                      name="password"
                      label="密碼"
                      type="password"
                      fullWidth
                      required
                      onChange={loginFormChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" varient="contained" onClick={loginInGuest}>以 guest 身份登入</Button>
                    <Button onClick={openRegisterForm} variant="outlined" color="primary">尚未註冊</Button>
                    <Button onClick={handleLogin} variant="outlined" color="primary">登入</Button>
                    
                </DialogActions>
                <DialogActions>
                
                </DialogActions>
                <DialogContent>
                    <Alert severity="warning" >此為練習作品，請勿輸入真實帳號密碼</Alert>
                </DialogContent>
          </FormDialog>
        )
    }
}


export class RegisterForm extends Component{
    render(){
        let {registerFormChange, closeRegisterForm, handleRegister, openLoginForm, user} = this.props
        return(
            <FormDialog open={user.registerForm} onClose={closeRegisterForm} aria-labelledby="form-dialog-title">
                <DialogTitle >註冊 NutritionLog</DialogTitle>
                {user.success?<></>:<Alert severity="warning" >{user.message}</Alert>}
                <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="username"
                      label="帳號"
                      onChange={registerFormChange}
                      required
                      fullWidth
                    />
                    <TextField
                      margin="dense"
                      name="password"
                      label="密碼"
                      type="password"
                      onChange={registerFormChange}
                      required
                      fullWidth
                    />
                    <TextField
                      margin="dense"
                      name="checkpassword"
                      label="確認密碼"
                      type="password"
                      onChange={registerFormChange}
                      required
                      fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={openLoginForm} variant="outlined" color="primary">已有帳號</Button>
                    <Button onClick={handleRegister} variant="outlined" color="primary">註冊</Button>
                </DialogActions>
                <DialogContent>
                    <Alert severity="warning" >此為練習作品，請勿輸入真實帳號密碼</Alert>
                </DialogContent>
          </FormDialog>
        )
    }
}

