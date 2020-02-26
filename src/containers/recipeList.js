import RecipeList from '../components/recipeList'
import {connect} from 'react-redux'
import {changeRecipeIngredient, changeRecipeIngredientDefineUnit, deleteIngredient} from '../actions/recipe.js'

const mapStateToProps = (state, ownProps) => {
    return{
        ingredient: state.ingredient,
        ingredientInRecipe: state.recipe.ingredientInRecipe,
        nutritionInRecipe: state.recipe.nutritionInRecipe
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        changeRecipeIngredient: (e,index) => {
            dispatch(changeRecipeIngredient(e, index))
        },
        changeRecipeIngredientDefineUnit: (e, index) => {
            dispatch(changeRecipeIngredientDefineUnit(e, index))
        },
        deleteIngredient: (index)=>{
            console.log(index)
            dispatch(deleteIngredient(index))
        }
    }
}

const RecipeListContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(RecipeList)

export default RecipeListContainer