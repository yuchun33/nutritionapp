import NutritionForm from '../components/nutritionForm'
import {connect} from 'react-redux'
import {createIngredient, closeIngredientForm, changeNewingredient} from '../actions/ingredient'

const mapStateToProps = (state, ownProps) =>{
    return{
        newIngredient: state.newIngredient,
        ingredientForm: state.ingredient.ingredientForm,
        createMessage: state.createMessage
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        createIngredient: ()=>{
            dispatch(createIngredient())
        },
        closeIngredientForm: ()=>{
            dispatch(closeIngredientForm())
        },
        changeNewingredient: (e)=>{
            dispatch(changeNewingredient(e.target.name, e.target.value))
        }
    }
}
let NutritionFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NutritionForm)

export default NutritionFormContainer