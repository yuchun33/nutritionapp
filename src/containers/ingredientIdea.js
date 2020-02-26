import IngredientIdea from '../components/ingredientIdea'
import {connect} from 'react-redux'
import {CLICK_TAB} from '../actions'
import {queryIngredient} from '../actions/ingredient'

const mapStateToProps = (state, ownProps) =>{
    return{
        ingredientIdea: state.ingredientIdea
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        queryIngredient: (ingredient, defineUnit)=>{
            dispatch(queryIngredient(ingredient, defineUnit))
        },
        CLICK_TAB: (category)=>{            
            dispatch(CLICK_TAB(category))
        }
    }
}

const IngredientIdeaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientIdea)

export default IngredientIdeaContainer