const ingredient = (state = {
    nutritionTable: false,
    recommandNutrition: true,
    ingredientForm: false,
    ingredient: '',
    nutritionList: [],
    defineUnit: 100,
    nutritionDb: {},
    nutrition: {
        calories: 0,
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        water: 0
    },
    querySuccess: true
}, action) => {
    switch (action.type) {
        case 'CLOSE_INGREDIENT_MESSAGE':
            return Object.assign({}, state, {
                querySuccess: true,
            })   
        case 'OPEN_INGREDIENT_FORM':
            return Object.assign({}, state, {
                ingredientForm: true
            })
        case 'NO_OBTAIN_INGREDIENT':             
            return Object.assign({}, state, {
                nutritionTable: false,
                querySuccess: false,
                message: action.message,
            })   
        case 'CLOSE_INGREDIENT_FORM':
            return Object.assign({}, state, {
                ingredientForm: false,
            })   
        case 'CLOSE_NUTRITION_TABLE':
            return Object.assign({}, state, {
                nutritionTable: false,
                ingredient: '',
            })   
        case 'INGREDIENT_CHANGE':
            return Object.assign({}, state, {
                ingredient: action.ingredient,
            })   
        case 'DEFINE_UNIT_CHANGE':
            return Object.assign({}, state, {
                defineUnit: action.defineUnit,
            })     
        case 'UPDATE_INGREDIENT_INPUT':
            return Object.assign({}, state, {
                ingredient: action.ingredientInput,
                defineUnit: action.defineUnitInput
            })            
        case 'ADD_INGREDIENT_TO_LOG':            
            return Object.assign({}, state, {
                nutritionTable: false,
                ingredient: ''
            })
        case 'ADD_INGREDIENT_TO_RECIPE':
            return Object.assign({}, state, {
                nutritionTable: false,
                ingredient: ''
            })
        case 'OBTAIN_INGREDIENT_NUTRITION':            
            return  Object.assign({}, state, {
                querySuccess: true,
                ingredient: action.ingredient,
                nutritionList: action.nutritionList,
                nutritionDB: Object.assign({},action.nutritionDB),
                defineUnit: action.defineUnit,
                nutrition: Object.assign({},action.nutrition),
                nutritionTable: true
            })
        default:
            return state
    }
}

export default ingredient
