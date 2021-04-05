
import React from 'react'
import { Button } from './Button'
import './Home.css';

function Home() {
    return (
        <>
            <div className="home">
                <div className="home-container">
                    <div className="home-image">

                    </div>
                    <Button to='/login' buttonStyle='loginBtn' buttonSize='btn-login'>LOGIN</Button>
                </div>
            </div>
        </>
    )
}

export default Home
