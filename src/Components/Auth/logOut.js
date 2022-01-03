import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../../redux/authActionCreators'

const mapDispatchToProps=(dispatch)=>{
    return{
        logout:()=>dispatch(logout())
    }
}

 class logOut extends Component {
    componentDidMount(){
        this.props.logout()
    }
    render() {
        return (
            <div>
                <Redirect to='/' />
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps) (logOut);
