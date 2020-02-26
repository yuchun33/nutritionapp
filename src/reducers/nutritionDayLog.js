let init = new Date()
let initYear = init.getFullYear()
let initMonth = init.getMonth() + 1
let initDate = init.getDate()
let today = initYear+initMonth.toString().padStart(2,'0')+initDate.toString().padStart(2,'0')


export const nutritionMonthLog = (state={
    year: initYear,
    month: initMonth,
    log:{
    },
    nutritionLogList: [
    ],
}, action) =>{
    switch(action.type){
        case 'GET_NUTRITION_LOG':            
            return Object.assign({}, state, {
                log: Object.assign({}, action.nutritionLog),
                nutritionLogList: [...action.nutritionLogList]
            })
        case 'CHANGE_MONTH': 
            return Object.assign({}, state, {
                month: action.month
            })
        case 'CHANGE_YEAR': 
            return Object.assign({}, state, {
                year: action.year
            })
        case 'HANDLE_LOGIN':
            return Object.assign({}, state, {
                log: {},
                nutritionLogList: []
            })
        case 'HANDLE_REGISTER':
            return Object.assign({}, state, {
                log: {},
                nutritionLogList: []
            })
        case 'LOGOUT':
            return Object.assign({}, state, {
                log: {},
                nutritionLogList: []
            })
        default: 
            return state
    }
}

export const nutritionDayLog = (state={
    year: initYear,
    month: initMonth,
    date: initDate,
    day: '星期四',
    assume: {
        calories: 0,
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        water: 0
    },
    goal: {
        calories: 1400,
        protein: 40,
        carbohydrate: 200,
        fat: 10,
        water: 2000
    },
    editStatus: false
}, action) => {
    switch (action.type) {
        case 'CHANGE_GOAL_VALUE':
            return Object.assign({}, state, {
                goal: Object.assign({}, state.goal, {
                    [action.ingredient]: action.value
                })
            })
        case 'GET_NUTRITION_GOAL':
            return Object.assign({}, state, {
                goal: Object.assign({}, action.goal)
            })
        case 'EDIT_GOAL':
            return Object.assign({}, state, {
                editStatus: action.bool
            })
        case 'GET_NUTRITION_DAY_LOG':
            return Object.assign({}, state, {
                assume: Object.assign({},state.assume, action.assume),
            })
        case 'ADD_INGREDIENT_TO_LOG':            
            return Object.assign({}, state, {
                assume: {
                    calories: action.nutrition.calories,
                    protein: action.nutrition.protein,
                    carbohydrate: action.nutrition.carbohydrate,
                    fat: action.nutrition.fat,
                    water: action.nutrition.water 
                }
            })
        case 'ADD_RECIPE_TO_LOG':{                   
            return Object.assign({}, state, {
                assume: {
                    calories: action.nutrition.calories,
                    protein: action.nutrition.protein,
                    carbohydrate: action.nutrition.carbohydrate,
                    fat: action.nutrition.fat,
                    water: action.nutrition.water 
                }
            })
        }
        case 'HANDLE_REGISTER':
            return Object.assign({}, state, {
                assume: {
                    calories: 0,
                    protein: 0,
                    carbohydrate: 0,
                    fat: 0,
                    water: 0
                },
            })
        case 'LOGOUT':
            return Object.assign({}, state, {
                assume: {
                    calories: 0,
                    protein: 0,
                    carbohydrate: 0,
                    fat: 0,
                    water: 0
                },
            })
        default:
            return state
        
    }
}
