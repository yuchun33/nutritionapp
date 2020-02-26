import MonthChart from '../components/monthChart'
import {connect,} from 'react-redux'
import {changeMonth, changeYear} from '../actions'

const mapStateToProps = (state, ownProps) =>{
    return {
        nutritionMonthLog: state.nutritionMonthLog

    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        changeMonth: (e)=>{
            dispatch(changeMonth(e.target.value))
        },
        changeYear: (e)=>{
            dispatch(changeYear(e.target.value))
        }
    }
}
const MonthChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MonthChart)

export default MonthChartContainer