import React, { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert'

import { currentUser } from './../../util/currentUser'
import "./Signup.css"
import signupImg from "./../../images/Catering service.png"

function Signup() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("Customer")

    useEffect(() => {
        if (currentUser) {
            window.location.href = '/'
        }
    }, [])

    async function signupUser() {
        const response = await axios.post('/signup', {
            name: name,
            phone: phone,
            email: email,
            password: password,
            role: role
        })

        console.log(response.data);

        if (response.data.success) {
            await swal({
                icon: 'success',
                title: "Success",
                text: response.data.message,
                button: "Ok!"
            })
            window.location.href = "/login"
        }
        else {
            swal({
                icon: 'error',
                title: "Error",
                text: response.data.message,
                button: "Try Again!"
            })
            setName("")
            setPhone("")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <div className='signup-container'>

            <div className='row signup-row'>

                <div className='col-md-6 signup-col-1'>
                    <img alt='Catering service' src={signupImg} className='signup-img' />
                </div>

                <div className='col-md-6 signup-col-2'>
                    <div className='form-container'>
                        <form>
                            <div className='form-group signup-form'>

                                <div className='signup-form-title'>
                                    <h2>Signup</h2>
                                    <p>Please fill in this form to create an account.</p>
                                    <hr />
                                </div>

                                <div className='signup-form-input-container'>

                                    <div className='signup-form-input-box'>
                                        <input type='text' className='signup-form-input' id='name'
                                            placeholder='Full Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                                    </div>

                                    <div className='signup-form-input-box'>
                                        <input type='text' className='signup-form-input' id='phone'
                                            placeholder='Phone' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                                    </div>

                                    <div className='signup-form-input-box'>
                                        <input type='email' className='signup-form-input' id='mail'
                                            placeholder='Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>

                                    <div className='signup-form-input-box'>
                                        <input type='password' className='signup-form-input' id='password'
                                            placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>

                                    <div className='signup-form-input-box'>
                                        <label>
                                            <input type="checkbox" checked="checkbox" name="remember" /> Remember me
                                        </label>

                                        <p>By creating an account you agree to our <a href="./Signup.js">Terms & Privacy</a>.</p>
                                    </div>

                                    <div className='signup-form-button'>
                                        <button type='button' className='register-btn' onClick={signupUser}>Register</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Signup
