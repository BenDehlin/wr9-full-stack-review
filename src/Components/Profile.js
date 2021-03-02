import {useState} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const Profile = (props) => {
    // const [someState, setSomeState] = useState()
    console.log(props)
    // if(!props.user){
    //     return <Redirect to='/' />
    // }
    if(!props.user){
        return <Redirect to={{
            pathname: '/',
            state: {from: props.location}
        }} />
    }
    return(
        <div>
            <h1>My Email: {props?.user?.email}</h1>
           
            {props.user ? (
                <h1>My email: {props.user.email}</h1>
            ):(
                <h1>Please Log In</h1>
            )}
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    return reduxState.authReducer
} 

export default connect(mapStateToProps)(Profile)