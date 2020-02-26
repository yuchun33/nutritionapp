import IngredientArea from '../components/ingredientArea'
import {connect} from 'react-redux'
import {closeNutritionTable, addIngredientToLog, addIngredientToRecipe, openingredientForm, closeIngredientMessage} from '../actions/ingredient'

const mapStateToProps = (state, ownProps) => {
    return {
        ingredient: state.ingredient,
        nutritionTable: state.ingredient.nutritionTable
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeNutritionTable: ()=>{
            dispatch(closeNutritionTable())
        },
        addIngredientToLog: () => { 
            dispatch(addIngredientToLog())
        },
        addIngredientToRecipe: () => {
            dispatch(addIngredientToRecipe())
        },
        openingredientForm: ()=>{
            dispatch(openingredientForm())
        },
        closeIngredientMessage: ()=>{
            dispatch(closeIngredientMessage())
        }
    }
}

const IngredientAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientArea)

export default IngredientAreaContainer