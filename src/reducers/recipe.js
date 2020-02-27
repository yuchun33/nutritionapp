const recipe = (state = {
    recipeTable: false,
    recommandRectipe: true,
    ingredientInRecipe: [],
    nutritionInRecipe: {
        'calories': 0,
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'water': 0,
    },
    recipeName: '',
    querySuccess: true,
    message: ''
}, action) => {
    switch(action.type) {
        case 'DELETE_INGREDIENT_IN_RECEIPE':
            let updateIngredientInRecipe = state.ingredientInRecipe.filter((ingredient, index)=> index!=action.index)
            let updateNutritionInRecipe = Object.assign({}, state.nutritionInRecipe)            
            updateNutritionInRecipe.calories -= state.ingredientInRecipe[action.index].calories
            updateNutritionInRecipe.protein -= state.ingredientInRecipe[action.index].protein
            updateNutritionInRecipe.carbohydrate -= state.ingredientInRecipe[action.index].carbohydrate
            updateNutritionInRecipe.fat -= state.ingredientInRecipe[action.index].fat        
            return Object.assign({}, state, {
                ingredientInRecipe: updateIngredientInRecipe,
                nutritionInRecipe: Object.assign({}, updateNutritionInRecipe)
            })
        case 'CLOSE_RECIPE_MESSAGE':
            return Object.assign({}, state, {
                querySuccess: true,
            })
        case 'NO_OBTAIN_RECIPE':             
        return Object.assign({}, state, {
                querySuccess: false,
                recipeTable: false,
                message: action.message,
            })   
        case 'CHANGE_RECIPE_NAME':
            return Object.assign({}, state, {
                recipeName: action.recipeName
            })
        case 'CLOSE_RECIPE_TABLE':
            return Object.assign({}, state, {
                recipeTable: false,
                recipeName: '',
                ingredientInRecipe: [],
                nutritionInRecipe: {
                    'calories': 0,
                    'protein': 0,
                    'carbohydrate': 0,
                    'fat': 0,
                    'water': 0,
                },
            })   
        case 'ADD_RECIPE_TO_LOG':
            return Object.assign({}, state, {
                recipeTable: false,
                recipeName: '',
                ingredientInRecipe: [],
                nutritionInRecipe: {
                    'calories': 0,
                    'protein': 0,
                    'carbohydrate': 0,
                    'fat': 0,
                    'water': 0,
                }
            })
        case 'ADD_RECIPE_TO_DB':
            return Object.assign({}, state, {
                recipeTable: false,
                recipeName: '',
                recipeName: action.recipeName,
                ingredientInRecipe: [],
                nutritionInRecipe: {
                    'calories': 0,
                    'protein': 0,
                    'carbohydrate': 0,
                    'fat': 0,
                    'water': 0,
                }
            })
        case 'ADD_INGREDIENT_TO_RECIPE':{
            let updateNutritionRecipes = Object.assign({}, state.nutritionInRecipe)            
            updateNutritionRecipes['name'] += action.ingredientInRecipe['name'],
            updateNutritionRecipes['calories'] += action.ingredientInRecipe['calories'],
            updateNutritionRecipes['protein'] += action.ingredientInRecipe['protein'],
            updateNutritionRecipes['carbohydrate'] += action.ingredientInRecipe['carbohydrate'],
            updateNutritionRecipes['fat'] += action.ingredientInRecipe['fat']
            return Object.assign({}, state, {
                recipeTable: true,
                nutritionInRecipe: updateNutritionRecipes,
                ingredientInRecipe: [...state.ingredientInRecipe, action.ingredientInRecipe]
            })
        }
        case 'GET_INGREDIENT_OF_RECIPE':{            
            return Object.assign({}, state, {
                recipeTable: true,
                querySuccess: true,
                recipeName: action.recipe,
                nutritionInRecipe: action.nutritionInRecipe,
                ingredientInRecipe: [...action.ingredientInRecipe]
            })
        }
        case 'CHANGE_RECIPE_INGREDIENT':{
            let updateIngredientInRecipe = Object.assign({}, state.ingredientInRecipe[action.index], {
                [action.e.target.name]: action.e.target.value,
            })
            let updateRecipe = [...state.ingredientInRecipe]
            updateRecipe[action.index] = updateIngredientInRecipe           
            return Object.assign({}, state, {
                ingredientInRecipe: [...updateRecipe]
            })
        }

        case 'CHANGE_RECIPE_INGREDIENT_DEFINEUNIT':{
            let ratio = 1
            let updateDefineUnit = state.ingredientInRecipe[action.index]['defineUnit']
            
            if (action.e.target.value/state.ingredientInRecipe[action.index]['defineUnit'] != 0 && action.e.target.value/state.ingredientInRecipe[action.index]['defineUnit'] > 0){
                updateDefineUnit = action.e.target.value,
                ratio = action.e.target.value/state.ingredientInRecipe[action.index]['defineUnit']
            }            
            let updateIngredientInRecipe = Object.assign({}, state.ingredientInRecipe[action.index], {
                [action.e.target.name]: updateDefineUnit,
                'calories': (state.ingredientInRecipe[action.index]['calories'] * ratio),
                'protein': (state.ingredientInRecipe[action.index]['protein'] * ratio),
                'carbohydrate': (state.ingredientInRecipe[action.index]['carbohydrate'] * ratio),
                'fat': (state.ingredientInRecipe[action.index]['fat'] * ratio)
            })
            let updateRecipe = [...state.ingredientInRecipe]


            updateRecipe[action.index] = updateIngredientInRecipe 
            let totalCalories = 0, totalProtein = 0, totalFat = 0, 
            totalCarbohydrate = 0
            for (let index in updateRecipe){
                totalCalories += Number(updateRecipe[index].calories)
                totalProtein += Number(updateRecipe[index].protein)
                totalFat += Number(updateRecipe[index].fat)
                totalCarbohydrate += Number(updateRecipe[index].carbohydrate)
            }                      
            return Object.assign({}, state, {
                nutritionInRecipe: Object.assign({}, state.nutritionInRecipe, {
                    'calories': totalCalories,
                    'protein': totalProtein,
                    'carbohydrate': totalCarbohydrate,
                    'fat': totalFat
                }),
                ingredientInRecipe: [...updateRecipe]
            })
        }
        default: 
            return state
    }
}

export default recipe