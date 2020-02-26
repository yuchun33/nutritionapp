import {LoginForm, RegisterForm} from '../components/loginForm'
import {connect} from 'react-redux'
import {openLoginForm, closeLoginForm, openRegisterForm, closeRegisterForm, handleLogin, handleRegister, loginFormChange, registerFormChange, loginInGuest} from '../actions/user.js'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openRegisterForm: ()=>{
            dispatch(openRegisterForm())
        }, 
        closeRegisterForm: ()=>{
            dispatch(closeRegisterForm())
        }, 
        openLoginForm: ()=>{
            dispatch(openLoginForm())
        }, 
        closeLoginForm: ()=>{
            dispatch(closeLoginForm())
        },
        handleLogin: ()=>{
            dispatch(handleLogin())
        },
        handleRegister: ()=>{
            dispatch(handleRegister())
        },
        loginFormChange: (e)=>{
            dispatch(loginFormChange(e.target.name,e.target.value))
        },
        registerFormChange: (e)=>{
            dispatch(registerFormChange(e.target.name,e.target.value))
        },
        loginInGuest: ()=>{
            dispatch(loginInGuest())
        }
    }
}

export const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export const RegisterFormContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
