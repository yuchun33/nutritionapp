import RecipeArea from '../components/recipeArea'
import {connect} from 'react-redux'
import {addRecipeToDB, addRecipeToLog, closeRecipeTable, closeRecipeMessage} from '../actions/recipe'

const mapStateToProps = (state, ownProps) =>{
    return{
        recipe: state.recipe
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        addRecipeToDB: ()=>{
            dispatch(addRecipeToDB())
        },
        addRecipeToLog: ()=>{
            dispatch(addRecipeToLog())
        },
        closeRecipeTable: ()=>{
            dispatch(closeRecipeTable())
        },
        closeRecipeMessage: ()=>{
            dispatch(closeRecipeMessage())
        }
    }
}

const RecipeAreaContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(RecipeArea)

export default RecipeAreaContainer