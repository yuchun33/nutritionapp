import NutritionTable from '../components/nutritionTable'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return{
        nutritionList: state.ingredient.nutritionList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{

    }
}

const NutritionTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NutritionTable)

export default NutritionTableContainer