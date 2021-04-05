
import React, { useRef, useState } from 'react'
import './RegistrationForm.css';
import '../App.css';
import { useAuth } from "../firebase/AuthContext";
import { Alert } from 'react-bootstrap'

// import { Button } from './Button';

function RegistrationForm() {
    const userNameRef = useRef()
    const emailAddRef = useRef()
    const contactNumRef = useRef()
    const bDateRef = useRef()
    const aPassRef = useRef()
    const cPassRef = useRef()
    const { register, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (aPassRef.current.value !== cPassRef.current.value) {
            return setError('Password does not match');
        }
        try {
            setError('')
            setLoading(true);
            await register(emailAddRef.current.value, aPassRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            <div className="register">
                <div className="reg-img">
                </div>
                <div className="reg-container">
                    <div className="reg-form-container">
                        <div className="reg-title">
                            <h1>Register</h1>
                            {JSON.stringify(currentUser)}
                            {error && <Alert variant="danger">{error}</Alert>}
                        </div>
                        <form action="/" className="reg-form" onSubmit={handleSubmit}>
                            <label htmlFor='username' >
                                <input type='text' ref={userNameRef} name='username' id='username' className='reg input-txt' placeholder='Username' ></input>
                            </label>
                            <label htmlFor='email' >
                                <input type='email' ref={emailAddRef} name='email' id='email' className='reg input-txt' placeholder='Email Address' ></input>
                            </label>
                            <label htmlFor='contact' >
                                <input type='number' ref={contactNumRef} name='contact' id='contact' className='reg input-num' placeholder='Contact Number' ></input>
                            </label>
                            <label htmlFor='bdate' >
                                <input type='date' ref={bDateRef} name='bdate' id='bdate' className='reg input-date' placeholder='Birth Date' ></input>
                            </label>
                            <label htmlFor='password' >
                                <input type='password' ref={aPassRef} name='password' id='password' className='reg input-txt' placeholder='Password' ></input>
                            </label>
                            <label htmlFor='c-password' >
                                <input type='password' name='c-password' id='c-password' className='reg input-txt' ref={cPassRef} placeholder='Confirm Password' required></input>
                            </label>
                            <button disabled={loading} to='' type='submit' className='reg reg-btn reg-size'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm