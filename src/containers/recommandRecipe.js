import RecommandRecipeList from '../components/recommandRecipe'
import {connect} from 'react-redux'
import {queryRecipeClip} from '../actions/recipe'

const mapStateToProps = (state, ownProps) =>{
    return{}
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        queryRecipeClip: (recipe)=>{
            dispatch(queryRecipeClip(recipe))
        }
    }
}

const RecommandRecipeListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecommandRecipeList)

export default RecommandRecipeListContainer