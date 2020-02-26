import RecipeInput from '../components/recipeInput'
import {connect} from 'react-redux'
import {queryRecipeClip, changeRecipeName} from '../actions/recipe'

const mapStateToProps = (state, ownProps) =>{
    return{
        recipe: state.recipe
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        queryRecipeClip: (recipe)=>{
            dispatch(queryRecipeClip(recipe))
        },
        changeRecipeName: (e)=>{
            dispatch(changeRecipeName(e.target.value))
        }
    }
}

const RecipeInputContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(RecipeInput)

export default RecipeInputContainer