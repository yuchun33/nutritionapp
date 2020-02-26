const newIngredient = (state = {
    ingredient: '',
    unit: 100,
    calories: null,
    carbohydrate: null,
    protein: null,
    fat: null,
    saturated_fat: null,
    trans_fat: null,
    cholesterol: null,
    dietary_fiber: null,
    glucose: null,
    fructose: null,
    galactose: null,
    maltose: null,
    sucrose: null,
    lactose: null,
    sodium: null,
    potassium: null,
    calcium: null,
    magnusium: null,
    iron: null,
    zinc: null,
    vitaminsA: null,
    vitaminsD: null,
    vitaminsE: null,
    vitaminsB1: null,
    vitaminsB2: null,
    vitaminsC: null,
}, action) => {
    switch (action.type) {
        case 'CHANGE_NEWINGREDIENT':
            return Object.assign({}, state, {
                [action.name]: action.value
            })
        case 'CREATE_INGREDIENT':            
            return Object.assign({}, state, action.newIngredient)
        case 'OPEN_INGREDIENT_FORM':
            return Object.assign({}, state, {
                ingredient: action.ingredientName
            })
        default: return state
    }
}


export default newIngredient