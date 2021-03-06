import React from 'react'
import { NavLink } from 'react-router-dom'
import '../layout/style.css'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/AuthActions'

const SignedInLinks = (props) => {
    return(
        <div>
            <ul className="right">
                <li><NavLink to='/create'> <b>Make New Project</b></NavLink></li>
                <li><button className='button' onClick={props.signOut}>Log Out</button></li>
                <li><NavLink to='/' className="btn btn-floating lightblue lighten-1">{props.profile.initials}</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)