import {getNutritionLog, getNutritionDayLog, getNutritionGoal} from './index'
import {host} from './host.js'

export function handleLogin(){
    return (dispatch, getState) => {
        if(getState().user.login.username!=''&& getState().user.login.password!=''){
            fetch(`${host}/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(getState().user.login)
            }).then((res)=>res.json())
            .then((json)=>{                
                if(json.success){
                    dispatch({
                        type: 'HANDLE_LOGIN',
                        username: json.username
                    })
                    dispatch(getNutritionLog(getState().user.username))
                    dispatch(getNutritionDayLog(getState().user.username))
                    dispatch(getNutritionGoal(getState().user.username))
                } else {
                    dispatch({
                        type: 'LOGIN_ERROR',
                        message: json.message,
                        success: false
                    })   
                }
    
            })
        } 
        else {
            dispatch({
                type: 'LOGIN_ERROR',
                message: '請輸入帳號密碼',
                success: false 
        })}
    }   
}

export function handleRegister(){
    return (dispatch, getState) => {
        var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        let username = getState().user.register.username
        let password = getState().user.register.password
        if(format.test(username) || format.test(password)){
            dispatch({
                type: 'REGISTER_ERROR',
                message: '請勿輸入特殊字元',
                success: false
            })   
        } else {
            if(getState().user.register.username!=''&& getState().user.register.password!=''){
                fetch(`${host}/register`,{
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        username: getState().user.register.username,
                        password: getState().user.register.password,
                        checkpassword: getState().user.register.checkpassword,
                    })
                }).then((res)=>res.json())
                .then((json)=>{            
                    if(json.success){
                        dispatch({
                            type: 'HANDLE_REGISTER',
                            username: json.username
                        })                    
                        dispatch(getNutritionLog(getState().user.username))
                        dispatch(getNutritionDayLog(getState().user.username))
                        dispatch(getNutritionGoal(getState().user.username))
                    } else {
                        dispatch({
                            type: 'REGISTER_ERROR',
                            message: json.message,
                            success: false
                        })   
                    }
                })      
            } else {
                dispatch({
                    type: 'REGISTER_ERROR',
                    message: '請輸入完整資料',
                    success: false
                })   
            }
        }
    }
}

export function loginInGuest(){
    return (dispatch, getState) => {
        dispatch({
            type: 'LOGIN_IN_GUEST',
            username: 'guest',
            password: 'guest',
        })        
        if(getState().user.login.username!=''&& getState().user.login.password!=''){
            fetch(`${host}/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(getState().user.login)
            }).then((res)=>res.json())
            .then((json)=>{                                
                if(json.success){
                    dispatch({
                        type: 'HANDLE_LOGIN',
                        username: json.username
                    })
                    dispatch(getNutritionLog(getState().user.username))
                    dispatch(getNutritionDayLog(getState().user.username))
                    dispatch(getNutritionGoal(getState().user.username))
                } else {
                    dispatch({
                        type: 'LOGIN_ERROR',
                        message: json.message,
                        success: false
                    })   
                }
    
            })
        } 
        else {
            dispatch({
                type: 'LOGIN_ERROR',
                message: '請輸入帳號密碼',
                success: false 
        })
    }}
}

export function openLoginForm(){
    return{
        type: 'OPEN_LOGIN_FORM'
    }
}

export function closeLoginForm(){
    return{
        type: 'CLOSE_LOGIN_FORM'
    }
}

export function openRegisterForm(){
    return{
        type: 'OPEN_REGISTER_FORM'
    }
}

export function closeRegisterForm(){
    return{
        type: 'CLOSE_REGISTER_FORM'
    }
}

export function loginFormChange(inputName, inputValue){
    return{
        type: 'LOGIN_FORM_CHANGE',
        inputName,
        inputValue
    }
}

export function registerFormChange(inputName, inputValue){    
    return{
        type: 'REGISTER_FORM_CHANGE',
        inputName,
        inputValue,
    }
}

export function handlelogout(){    
    return (dispatch, getState) => {
        fetch(`${host}/logout`,{
            credentials: 'include'
        })
    .then(()=>{
        return dispatch({
            type: 'LOGOUT'
        })
    })}
}