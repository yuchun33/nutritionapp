import {getNutritionLog} from './index'
import {host} from './host.js'
import {CHANGE_RECIPE_INGREDIENT, CHANGE_RECIPE_INGREDIENT_DEFINEUNIT, ADD_RECIPE_TO_LOG, GET_INGREDIENT_OF_RECIPE, NO_OBTAIN_RECIPE, CHANGE_RECIPE_NAME, CLOSE_RECIPE_TABLE, CLOSE_RECIPE_MESSAGE, DELETE_INGREDIENT_IN_RECEIPE} from './actionName'

export function changeRecipeIngredient(e, index){
    return{
        type: CHANGE_RECIPE_INGREDIENT,
        e,
        index
    }
}

export function changeRecipeIngredientDefineUnit(e, index){
    return{
        type: CHANGE_RECIPE_INGREDIENT_DEFINEUNIT,
        e,
        index
    }
}
export function addRecipeToLog(){
    return (dispatch, getState) => {
        let username = getState().user.username
        fetch(`${host}/nutrition/${username}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.assign({},{
                year: getState().nutritionDayLog.year,
                month: getState().nutritionDayLog.month,
                day: getState().nutritionDayLog.date,
            },getState().recipe.nutritionInRecipe))
        })
        .then((res)=>(res.json()))
        .then((nutritionDB)=>{
            dispatch({
                type: ADD_RECIPE_TO_LOG,
                nutrition: nutritionDB
            })
            dispatch(getNutritionLog(getState().user.username))
        })
    }
}


export function queryRecipeClip(recipe){    
    return (dispatch, getState) =>{
        var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if(format.test(recipe)){
            dispatch({
                type: NO_OBTAIN_RECIPE,
                message: '請勿輸入特殊字元'
            })
        } else {
            fetch(`${host}/recipeDb/?&name=${recipe}`,{
                method: 'GET',
                credentials: "include"
            })
            .then((res)=>(res.json()))
            .then((json)=>{            
                if(json.querySuccess){                
                    let ingredientInRecipe = JSON.parse(json.ingredient)                    
                    let nutritionInRecipe = {
                        'calories': 0,
                        'protein': 0,
                        'carbohydrate': 0,
                        'fat': 0,
                        'water': 0
                    }
                    for(let index in ingredientInRecipe){
                        nutritionInRecipe.calories += ingredientInRecipe[index].calories
                        nutritionInRecipe.protein += ingredientInRecipe[index].protein
                        nutritionInRecipe.carbohydrate += ingredientInRecipe[index].carbohydrate
                        nutritionInRecipe.fat += ingredientInRecipe[index].fat
                    }
                    dispatch({
                        type: GET_INGREDIENT_OF_RECIPE,
                        recipe,
                        nutritionInRecipe,
                        ingredientInRecipe
                    })
                } else {                
                    dispatch({
                        type: NO_OBTAIN_RECIPE,
                        message: json.message
                    })
                }
            })
        }   
    }
}
export function addRecipeToDB(){
    return (dispatch, getState) =>{
        fetch(`${host}/recipeDb/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                recipeName: getState().recipe.recipeName,
                ingredientInRecipe: getState().recipe.ingredientInRecipe
            })
        })
    }}

export function changeRecipeName(recipeName){    
    return{
        type: CHANGE_RECIPE_NAME,
        recipeName
    }
}

export function closeRecipeTable(){
    return({
        type: CLOSE_RECIPE_TABLE
    })
}


export function closeRecipeMessage(){    
    return{
        type: CLOSE_RECIPE_MESSAGE
    }
}


export function deleteIngredient(index){
    return{
        type: DELETE_INGREDIENT_IN_RECEIPE,
        index
    }
}