import React, { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert'

import { currentUser } from './../../util/currentUser'
import "./Login.css"
import loginImg from "./../../images/Tasting-amico.png"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (currentUser) {
            window.location.href = '/'
        }
    }, [])


    async function loginUser() {
        const response = await axios.post('/login', {
            email: email,
            password: password,
        })

        if (response.data.success) {
            await swal({
                icon: 'success',
                title: "Success",
                text: response.data.message,
                button: "Ok!"
            })
            localStorage.setItem('currentUser', JSON.stringify(response.data.data))
            window.location.href = '/'
        }
        else {
            await swal({
                icon: 'error',
                title: "Error",
                text: response.data.message,
                button: "Try Again"
            })
            setEmail("")
            setPassword("")
            localStorage.removeItem('currentUser')
        }
    }

    async function signupBtn() {
        window.location.href = './../Signup'
    }

    return (
        <div className='login-container'>

            <div className='row login-row'>

                <div className='col-md-6 login-col-1'>
                    <div><img alt='login-img' src={loginImg} className='login-img' /></div>
                </div>

                <div className='col-md-6 login-col-2'>
                    <div className='form-container'>
                        <form>
                            <div className='form-group login-form'>

                                <div className='login-form-title'>
                                    <h2>Customer Login</h2>
                                    <hr />
                                </div>

                                <div className='login-form-input-container'>

                                    <div className='login-form-input-box'>
                                        <input type='email' className='login-form-input' id='mail'
                                            placeholder='Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>

                                    <div className='login-form-input-box'>
                                        <input type='password' className='login-form-input' id='password'
                                            placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>

                                    <div className='login-form-checkbox-forgot-btn'>
                                        <div className='login-form-checkbox'>
                                            <label>
                                                <input type="checkbox" checked="checkbox" name="remember" /> Remember me
                                            </label>
                                        </div>

                                        <div className='login-form-forgot'>
                                            <p className='login-form-forgot-pass'>Forgot your password?</p>
                                        </div>
                                    </div>
                                    <div className='login-form-button'>
                                        <button type='button' className='login-btn' onClick={loginUser}>LOGIN</button>
                                    </div>

                                    <div className='login-form-signup-btn'>
                                        <button type='button' className='signup-btn' onClick={signupBtn}>Don't have an account? Sign up</button>
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

export default Login
