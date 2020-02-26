const user = (state={
    loginStatus: false,
    username: 'init',
    loginForm: false,
    registerForm: false,
    login: {
        username: '',
        password: ''
    },
    register: {
        username: '',
        password: '',
        checkpassword: ''
    },
    message: '',
    success: true
},action) => {
    switch (action.type) {
        case 'LOGIN_FORM_CHANGE': 
            return Object.assign({}, state, {
                login: Object.assign({}, state.login, {
                    [action.inputName]: action.inputValue 
                })
            })
        case 'REGISTER_FORM_CHANGE': 
            return Object.assign({}, state, {
                register: Object.assign({}, state.register, {
                    [action.inputName]: action.inputValue 
                })
            })
        case 'OPEN_REGISTER_FORM':
            return Object.assign({}, state, {
                success: true,
                message: '',
                registerForm: true,
                loginForm: false 
            })            
        case 'CLOSE_LOGIN_FORM':
            return Object.assign({}, state, {
                success: true,
                message: '',
                loginForm: false 
            })
        case 'CLOSE_REGISTER_FORM':
            return Object.assign({}, state, {
                success: true,
                message: '',
                registerForm: false 
            })
        case 'OPEN_LOGIN_FORM':
            return Object.assign({}, state, {
                success: true,
                message: '',
                loginForm: true,
                registerForm: false 
            })
        case 'HANDLE_LOGIN':
            return Object.assign({}, state, {
                username: action.username,
                loginStatus: true,
                loginForm: false,
                login: {
                    username: '',
                    password: ''    
                }
            })
        case 'HANDLE_REGISTER':
            return Object.assign({}, state, {
                username: action.username,
                loginStatus: true,
                registerForm: false,
                register: {
                    username: '',
                    password: ''    
                }
            })
        case 'REGISTER_ERROR':
            return Object.assign({}, state, {
                success: false,
                message: action.message
            })
        case 'LOGIN_ERROR':
            return Object.assign({}, state, {
                success: false,
                message: action.message
            })
        case 'LOGIN_IN_GUEST':
            return Object.assign({}, state, {
                login: {
                    username: action.username,
                    password: action.password
                }
            })
        case 'LOGOUT':
            return Object.assign({}, state, {
                loginStatus: false,
                login: {
                    username: '',
                    password: ''
                }
            })
        default:
            return state
    }
}

export default user