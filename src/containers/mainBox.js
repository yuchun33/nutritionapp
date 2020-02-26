import MainBox from '../components/mainBox'
import {connect} from 'react-redux'
import {initNutritionLog} from '../actions'

const mapStateToProps = (state, ownProps) =>{
    return{
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        initNutritionLog: ()=>{
            dispatch(initNutritionLog())
        }
    }
}

const MainBoxContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(MainBox)

export default MainBoxContainer