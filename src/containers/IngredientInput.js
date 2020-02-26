import IngredientInput from '../components/ingredientInput'
import {connect} from 'react-redux'
import {queryIngredient, ingredientChange, defineUnitChange} from '../actions/ingredient'

const mapStateToProps = (state, ownProps) => {
    return {
        nutrition: state.ingredient.nutrition,
        ingredientInput: state.ingredient.ingredient,
        defineUnit: state.ingredient.defineUnit,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleQueryIngredient: (ingredient, defineUnit) => {
            dispatch(queryIngredient(ingredient, defineUnit))
        },
        queryIngredient: (ingredient, defineUnit) =>{
            dispatch(queryIngredient(ingredient, defineUnit))
        },
        ingredientChange: (e)=>{
            dispatch(ingredientChange(e))
        },
        defineUnitChange: (e)=>{
            dispatch(defineUnitChange(e))
        }
    }
}

const IngredientInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientInput)

export default IngredientInputContainer