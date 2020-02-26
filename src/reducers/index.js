import {combineReducers} from 'redux'
import {nutritionDayLog, nutritionMonthLog} from './nutritionDayLog'
import recipe from './recipe'
import ingredient from './ingredient'
import newIngredient from './newIngredient'
import user from './user'
import ingredientIdea from './ingredientIdea'
import createMessage from './createMessage'

const nutritionApp = combineReducers({
    ingredient,
    recipe,
    nutritionDayLog,
    nutritionMonthLog,
    newIngredient,
    user,
    ingredientIdea,
    createMessage
})

export default nutritionApp