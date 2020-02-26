const ingredientIdea = (state={
    display : [],
    vegetable: [],
    meat: [],
    seafood: [],
    milkAndEgg: []
}, action) =>{
    switch (action.type) {
        case 'CLICK_TAB':
            return Object.assign({}, state,{
                display: state[action.category]
            })
        case 'GET_INGREDIENT_IDEA':
            return Object.assign({}, state,{
                [action.category]: action.ingredients
            })
        default:
            return state
    }
}

export default ingredientIdea