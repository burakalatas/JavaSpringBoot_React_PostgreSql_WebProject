import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthenticationService from '../Service/AuthenticationService';

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Outlet />
        } else {
            return <Navigate to="/login" />
        }

    }
}

export default AuthenticatedRoute