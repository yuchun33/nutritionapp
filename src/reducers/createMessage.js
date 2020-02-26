const createMessage = (state={
    message: '',
    success: true
}, action) =>{
    switch (action.type) {
        case 'CREATE_ERROR': 
            return Object.assign({}, state, {
                message: action.message,
                success: false
            })
        case 'CLOSE_INGREDIENT_FORM':
            return Object.assign({}, state, {
                message: action.message,
                success: true
            })    
        default: 
            return state
    }
}

export default createMessage