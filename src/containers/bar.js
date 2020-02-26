import Bar from '../components/bar'
import {connect} from 'react-redux'
import {handleLogin, openLoginForm, loginInGuest, handlelogout} from '../actions/user'

const mapStateToProps = (state, ownProps) =>{
    return{
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        handleLogin: (userName)=>{
            dispatch(handleLogin(userName))
        },
        openLoginForm: ()=>{
            dispatch(openLoginForm())
        },
        loginInGuest: ()=>{
            dispatch(loginInGuest())
        },
        handlelogout: ()=>{
            dispatch(handlelogout())
        }
    }
}
let BarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Bar)

export default BarContainer