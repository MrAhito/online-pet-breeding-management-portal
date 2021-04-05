import React, { Component } from 'react'
import { AuthProvider } from '../../firebase/AuthContext'
import Navigation from '../Navigation'
import RegistrationForm from '../RegistrationForm'

class Register extends Component {
    render() {
        return (<>
            <AuthProvider>
                <Navigation />
                <RegistrationForm />
            </AuthProvider>
        </>
        )
    }
}

export default Register
