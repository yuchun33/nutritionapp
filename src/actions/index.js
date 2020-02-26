import {host} from './host'
import {HANDLE_LOGIN, GET_NUTRITION_LOG,GET_NUTRITION_DAY_LOG, CHANGE_MONTH, CHANGE_YEAR, CLOSED_INGREDIENT_TABLE, GET_INGREDIENT_IDEA, CLICK_TAB_ACTION_NAME, EDIT_GOAL, GET_NUTRITION_GOAL, CHANGE_GOAL_VALUE} from './actionName'

export function initNutritionLog(){
    return (dispatch, getState) => {
        fetch(`${host}/init`,{
            credentials: 'include'
        }).then(res => res.json())
        .then((json)=>{
            if(json.loginStatus){
                dispatch({
                    type: HANDLE_LOGIN,
                    username: json.username
                })
            }
            dispatch(getNutritionDayLog(getState().user.username))
            dispatch(getNutritionLog(getState().user.username))
            dispatch(getIngredientIdea())
            dispatch(getNutritionGoal(getState().user.username))
        })

    }
}

export function getNutritionLog(username){    
    return (dispatch, getState) =>{
        let year =  getState().nutritionMonthLog.year
        let month =  getState().nutritionMonthLog.month
        fetch(`${host}/nutrition/${username}/?&year=${year}&month=${month}`,{
            method: 'GET',
        }).then(res=>{            
            return res.json()
        }).then(json=>{
            let nutritionLog = {}
            let nutritionLogList = []
            let item, key
            for (let i =1; i<=31; i++){
                key = year + month.toString().padStart(2,'0') + i.toString().padStart(2,'0')
                nutritionLog[key] = {
                    calories: 0,
                    protein: 0,
                    carbohydrate: 0,
                    fat: 0,
                    water: 0
                }
                nutritionLogList.push({
                    year: year,
                    month: month,
                    day: i,
                    calories: 0,
                    protein: 0,
                    carbohydrate: 0,
                    fat: 0,
                    water: 0                    
                })     
            }
            for(let index in json){
                item = json[index];

                nutritionLogList[item.day-1].year = item.year
                nutritionLogList[item.day-1].month = item.month
                nutritionLogList[item.day-1].day = item.day
                nutritionLogList[item.day-1].calories = item.calories
                nutritionLogList[item.day-1].protein = item.protein
                nutritionLogList[item.day-1].carbohydrate = item.carbohydrate
                nutritionLogList[item.day-1].fat = item.fat
                nutritionLogList[item.day-1].water = item.water

                key = item.year + item.month.toString().padStart(2,'0') + item.day.toString().padStart(2,'0')
                nutritionLog[key] = {
                    calories: item.calories,
                    protein: item.protein,
                    carbohydrate: item.carbohydrate,
                    fat: item.fat,
                    water: item.water
                }

            }
            dispatch({ 
                type: GET_NUTRITION_LOG,
                nutritionLog: Object.assign({},nutritionLog),
                nutritionLogList
            })
        })
    }
}

export function getNutritionDayLog(username){
    return (dispatch, getState) =>{
        let year =  getState().nutritionDayLog.year
        let month =  getState().nutritionDayLog.month
        let date = getState().nutritionDayLog.date
        fetch(`${host}/nutrition/${username}/?&year=${year}&month=${month}&day=${date}`,{
            method: 'GET',
        }).then(res=>{           
            return res.json()
        }).then(json=>{
            let assume            
            if(json.length>0){
                let data = json[0]
                assume = {
                    calories: data.calories,
                    protein: data.protein,
                    carbohydrate: data.carbohydrate,
                    fat: data.fat,
                    water: data.water  
                }  
            } else {
                assume = {
                    calories: 0,
                    protein: 0,
                    carbohydrate: 0,
                    fat: 0,
                    water: 0 
                }  
            }
          
            dispatch({
                type: GET_NUTRITION_DAY_LOG,
                assume
            })
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
}

export function changeMonth(month){
    return (dispatch, getState) =>{
        dispatch({
            type: CHANGE_MONTH,
            month
        })
        dispatch(getNutritionLog(getState().user.username))
    }
}


export function changeYear(year){
    return (dispatch, getState) =>{
        dispatch({
            type: CHANGE_YEAR,
            year
        })
        dispatch(getNutritionLog(getState().user.username))
    }
}

export function closeIngredientTable(boolen) {
    return {
        type: CLOSED_INGREDIENT_TABLE,
        ingredientTableStatus: boolen
    }
}

export function getIngredientIdea(){
    return (dispatch, getState)=>{
        fetch(`${host}/ingredientIdea/seafood`)
        .then((res)=>res.json())
        .then((json)=>{
            dispatch({
                type: GET_INGREDIENT_IDEA,
                category: 'seafood',
                ingredients: json
            })
        })
        fetch(`${host}/ingredientIdea/fruit`)
        .then((res)=>res.json())
        .then((json)=>{            
            dispatch({
                type: GET_INGREDIENT_IDEA,
                category: 'fruit',
                ingredients: json
            })
        })
        fetch(`${host}/ingredientIdea/vegetable`)
        .then((res)=>res.json())
        .then((json)=>{            
            dispatch({
                type: GET_INGREDIENT_IDEA,
                category: 'vegetable',
                ingredients: json
            })
            dispatch(CLICK_TAB('vegetable'))
        })
        fetch(`${host}/ingredientIdea/meat`)
        .then((res)=>res.json())
        .then((json)=>{            
            dispatch({
                type: GET_INGREDIENT_IDEA,
                category: 'meat',
                ingredients: json
            })
        })
    }
}

export function CLICK_TAB(category){
    return{
        type: CLICK_TAB_ACTION_NAME,
        category
    }
}


export function editGoal(bool){
    return (dispatch, getState) => {
        if(bool == false){
            fetch(`${host}/nutrition/goal/${getState().user.username}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    goal: getState().nutritionDayLog.goal
                })
            },
            )
            .then((res)=>res.json())
            .then((json)=>{
                dispatch({
                    type: EDIT_GOAL,
                    bool
                })   
            })
        } else {    
            dispatch({
                type: EDIT_GOAL,
                bool
            })   
        }
    }
}

export function getNutritionGoal(username){
    return (dispatch, getState) => {
        fetch(`${host}/nutrition/goal/${username}`)
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json);
            
            let goal = {
                calories: json.calories,
                protein: json.protein,
                fat: json.fat,
                carbohydrate: json.carbohydrate,
            }
            dispatch({
                type: GET_NUTRITION_GOAL,
                goal
            })
        })
    }
}

export function changeGoalValue(ingredient, value){
    return{
        type: CHANGE_GOAL_VALUE,
        ingredient,
        value
    }
}