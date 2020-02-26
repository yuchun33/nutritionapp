import dayChart from '../components/dayChart'
import {connect} from 'react-redux'
import {initNutritionLog, editGoal, changeGoalValue} from '../actions'

const mapStateToProps = (state, ownProps) =>{
    return {
        nutritionDayLog: state.nutritionDayLog
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        initNutritionLog: ()=>{
            dispatch(initNutritionLog())
        },
        editGoal: (bool)=>{
            dispatch(editGoal(bool))
        },
        changeGoalValue: (e)=>{
            dispatch(changeGoalValue(e.target.name, e.target.value))
        }
    }
}

const dayChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(dayChart)

export default dayChartContainer