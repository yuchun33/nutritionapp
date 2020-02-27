import {getNutritionLog} from './index'
import {host} from './host.js'
import {OBTAIN_INGREDIENT_NUTRITION, ADD_INGREDIENT_TO_RECIPE, ADD_INGREDIENT_TO_LOG, UPDATE_INGREDIENT_INPUT, NO_OBTAIN_INGREDIENT, CHANGE_NEWINGREDIENT, DEFINE_UNIT_CHANGE, INGREDIENT_CHANGE, CLOSE_INGREDIENT_FORM, CLOSE_NUTRITION_TABLE, OPEN_INGREDIENT_FORM, CREATE_ERROR, CLOSE_INGREDIENT_MESSAGE} from './actionName' 


const displayNutrition = (list, defineUnit) => {
    let nutritionListSeq = ['熱量','總碳水化合物','粗蛋白','脂肪','飽和脂肪','反式脂肪','膽固醇'
    ,'膳食纖維','葡萄糖','果糖','半乳糖','麥芽糖','蔗糖','乳糖','鈉','鉀','鈣','鎂','鐵','鋅'
    ,'維生素A','維生素D','維生素E','維生素B1','維生素B2','維生素C']
    for(let i in list){
        list[i]['name'] = nutritionListSeq[i]
        list[i]['standard'] = list[i]['value']  
        if( list[i]['value'] == '-'){
            list[i]['define'] = list[i]['value']
        }else{
            list[i]['define'] = (list[i]['value'] * (defineUnit/100)).toFixed(1)
        }
    }
    return list
}

export function obtainIngredientNutrition(ingredient, nutritionDB, defineUnit) {    
    let nutritionList = displayNutrition([nutritionDB['修正熱量'],nutritionDB['總碳水化合物'],nutritionDB['粗蛋白'],nutritionDB['粗脂肪'],nutritionDB['飽和脂肪'],nutritionDB['反式脂肪'],nutritionDB['膽固醇']
    ,nutritionDB['膳食纖維'],nutritionDB['葡萄糖'],nutritionDB['果糖'],nutritionDB['半乳糖'],nutritionDB['麥芽糖'],nutritionDB['蔗糖'],nutritionDB['乳糖']
    ,nutritionDB['鈉'],nutritionDB['鉀'],nutritionDB['鈣'],nutritionDB['鎂'],nutritionDB['鐵'],nutritionDB['鋅']
    ,nutritionDB['維生素A總量(IU)'],nutritionDB['維生素D總量(IU)'],nutritionDB['維生素E總量'],nutritionDB['維生素B1'],nutritionDB['維生素B2'],nutritionDB['維生素C']], defineUnit)
    
    let nutrition = {
        protein: nutritionDB['粗蛋白'].value * (defineUnit/100),
        calories: nutritionDB['修正熱量'].value * (defineUnit/100),
        fat: nutritionDB['粗脂肪'].value * (defineUnit/100),
        carbohydrate: nutritionDB['總碳水化合物'].value * (defineUnit/100),
        water: 0
    }    
    return {
        type: OBTAIN_INGREDIENT_NUTRITION,
        ingredient,
        defineUnit,
        nutritionList,
        nutritionDB,
        nutrition
    }
}


function match(nutritionDB) {
    let nutrition = {
        '修正熱量':{
            unit: 'kcal',
            value: nutritionDB.calories
        },
        '總碳水化合物':{
            unit: 'g',
            value: nutritionDB.carbohydrate,
        },
        '粗蛋白':{
            unit: 'g',
            value: nutritionDB.protein,
        },
        '粗脂肪':{
            unit: 'g',
            value: nutritionDB.fat,
        },
        '飽和脂肪':{
            unit: 'g',
            value: nutritionDB.saturated_fat,
        },
        '反式脂肪':{
            unit: 'g',
            value: nutritionDB.trans_fat,
        }, 
        '膽固醇':{
            unit: 'mg',
            value: nutritionDB.cholesterol,
        },
        '膳食纖維':{
            unit: 'g',
            value: nutritionDB.dietary_fiber,
        },
        '葡萄糖':{
            unit: 'g',
            value: nutritionDB.glucose,
        },
        '果糖':{
            unit: 'g',
            value: nutritionDB.fructose,
        },
        '半乳糖':{
            unit: 'g',
            value: nutritionDB.galactose,
        },
        '麥芽糖':{
            unit: 'g',
            value: nutritionDB.maltose,
        },
        '蔗糖':{
            unit: 'g',
            value: nutritionDB.sucrose,
        },
        '乳糖':{
            unit: 'g',
            value: nutritionDB.lactose,
        },
        '鈉':{
            unit: 'mg',
            value: nutritionDB.sodium,
        },
        '鉀':{
            unit: 'mg',
            value: nutritionDB.potassium,
        },
        '鈣':{
            unit: 'mg',
            value: nutritionDB.calcium,
        },
        '鎂':{
            unit: 'mg',
            value: nutritionDB.magnusium,
        },
        '鐵':{
            unit: 'mg',
            value: nutritionDB.iron,
        },
        '鋅':{
            unit: 'mg',
            value: nutritionDB.zinc,
        },
        '維生素A總量(IU)':{
            unit: 'I.U.',
            value: nutritionDB.vitaminsA,
        },
        '維生素D總量(IU)':{
            unit: 'I.U.',
            value: nutritionDB.vitaminsD,
        },
        '維生素E總量':{
            unit: 'mg',
            value: nutritionDB.vitaminsE,
        },
        '維生素B1':{
            unit: 'mg',
            value: nutritionDB.vitaminsB1,
        },
        '維生素B2':{
            unit: 'mg',
            value: nutritionDB.vitaminsB2,
        },
        '維生素C': {
            unit: 'mg',
            value: nutritionDB.vitaminsC,
        },
    }
    return nutrition
}



export function addIngredientToRecipe(ingredient) {    
    return (dispatch, getState) =>{
        let ingredient = getState().ingredient
        let ingredientInRecipe = {}        
        ingredientInRecipe['name'] = ingredient.ingredient        
        ingredientInRecipe['calories'] = (ingredient.nutrition['calories']* (ingredient.defineUnit/100)),
        ingredientInRecipe['protein'] = (ingredient.nutrition['protein'] * (ingredient.defineUnit/100)),
        ingredientInRecipe['fat'] = (ingredient.nutrition['fat'] * (ingredient.defineUnit/100)),
        ingredientInRecipe['carbohydrate'] = (ingredient.nutrition['carbohydrate'] * (ingredient.defineUnit/100),1),
        ingredientInRecipe['defineUnit'] = ingredient.defineUnit
        return dispatch({
            type: ADD_INGREDIENT_TO_RECIPE,
            ingredientInRecipe
        })
    }
}


export function addIngredientToLog(){
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
            },getState().ingredient.nutrition))
        })
        .then((res)=>(res.json()))
        .then((nutritionDB)=>{
            dispatch({
                type: ADD_INGREDIENT_TO_LOG,
                nutrition: nutritionDB
            })
            dispatch(getNutritionLog(getState().user.username))
        })
    }
}


export function updateIngredientInput(ingredient,defineUnit){
    return{
        type: UPDATE_INGREDIENT_INPUT,
        ingredientInput: ingredient,
        defineUnitInput: defineUnit,
    }
}

export function queryIngredient(ingredient, defineUnit) {        
    return (dispatch) => {
        var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if(format.test(ingredient)){
            dispatch({
                type: NO_OBTAIN_INGREDIENT,
                message: '請勿輸入特殊字元'
            })
        } else {
            fetch(`${host}/ingredientDb/${ingredient}`,{
                headers: {
                    'X-CSRF-TOKEN': '1234566778'
                },
                credentials: "include"
            })
            .then((res) => res.json())
            .then((json) => {              
                if(json.querySuccess){
                    if(json.source == 'db'){
                        let nutritionDB = JSON.parse(json.nutrition)                    
                        let nutrition = match(nutritionDB)                    
                        dispatch(obtainIngredientNutrition(ingredient, nutrition, defineUnit))                
                    } else {
                        let nutrition = JSON.parse(json.nutrition)                    
                        dispatch(obtainIngredientNutrition(ingredient, nutrition, defineUnit))                
                    }
                } else {
                    dispatch({
                        type: NO_OBTAIN_INGREDIENT,
                        message: json.message
                    })
                }  
            })
        }
        
    }
}

export function createIngredient(){
    return (dispatch, getState) => {
        var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        let ingredient = getState().newIngredient
        if(format.test(ingredient)){
            dispatch({
                type: CREATE_ERROR,
                message: '請勿輸入特殊字元'
            })
        } else {
            let newIngredient = Object.assign({}, getState().newIngredient)
            newIngredient['X-CSRF-TOKEN'] = '1234566778'
            fetch(`${host}/ingredientDb`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '1234566778'
                },
                body: JSON.stringify(newIngredient)
            })
            .then((res)=>res.json())
            .then((nutritionDB)=>{
                let nutrition = match(nutritionDB)
                dispatch(closeIngredientForm())
                dispatch(obtainIngredientNutrition(nutritionDB.ingredient, nutrition, nutritionDB.unit))
            })
        }

    }
}

export function changeNewingredient(name, value){
    return{
        type: CHANGE_NEWINGREDIENT,
        name,
        value
    }
}
export function defineUnitChange(e){
    return{
        type: DEFINE_UNIT_CHANGE,
        defineUnit: e.target.value
    }
}

export function ingredientChange(e){
    return{
        type: INGREDIENT_CHANGE,
        ingredient: e.target.value
    }
}


export function closeIngredientForm(){
    return({
        type: CLOSE_INGREDIENT_FORM
    })
}

export function closeNutritionTable(){
    return({
        type: CLOSE_NUTRITION_TABLE
    })
}

export function openingredientForm(){
    return (dispatch, getState) => {
        dispatch({
            type: OPEN_INGREDIENT_FORM,
            ingredientName: getState().ingredient.ingredient
        })
    }
}

export function closeIngredientMessage(){
    return{
        type: CLOSE_INGREDIENT_MESSAGE
    }
}