import React, { useRef } from 'react'
import './Login.css'

function Login() {
    const emailAddRef = useRef()
    const aPassRef = useRef()
    return (
        <>
            <div className="register">
                <div className="log-img">
                </div>
                <div className="log-container">
                    <div className="reg-form-container">
                        <div className="reg-title">
                            <h1>LOG IN</h1>
                        </div>
                        <form action="/" className="reg-form">
                            <label htmlFor='email' >
                                <input type='email' ref={emailAddRef} name='email' id='email' className='reg input-txt' placeholder='Email Address' required></input>
                            </label>
                            <label htmlFor='password' >
                                <input type='password' ref={aPassRef} name='password' id='password' className='reg input-txt' placeholder='Password' required></input>
                            </label>
                            <button to='' type='submit' className='reg reg-btn reg-size'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
