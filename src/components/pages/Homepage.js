import React, { Component } from 'react'
import Login from '../Login1'
// import Home from '../Home'
import Navigation from '../Navigation'

class Homepage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Login />
            </>
        )
    }
}

export default Homepage
