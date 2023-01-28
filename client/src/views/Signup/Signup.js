import React, { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert'

import { currentUser } from './../../util/currentUser'
import "./Signup.css"
import signupImg from "./../../assets/Tasting-amico.png"
import { Link } from "react-router-dom"
import Navbar from '../../components/Navbar/Navbar'

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

            <Navbar />

            <div className='row signup-row'>

                <div className='col-md-6 signup-col-1'>
                    <img alt='signup-img' src={signupImg} className='signup-img' />
                </div>

                <div className='col-md-6 signup-col-2'>
                    <div className='form-container'>
                        <form>
                            <div className='form-group signup-form'>

                                <div className='signup-form-title'>
                                    <h2>Create Account</h2>
                                    <p>Please fill in this form to create an account.</p>
                                    <hr />
                                </div>

                                <div className='signup-form-input-container'>

                                    <div className='signup-form-input-box'>
                                        <i class="fa-solid fa-user signup-form-input-icon"></i>
                                        <input type='text' className='signup-form-input' id='name'
                                            placeholder='Full Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                                    </div>

                                    <div className='signup-form-input-box'>
                                        <i class="fa-solid fa-address-book signup-form-input-icon"></i>
                                        <input type='text' className='signup-form-input' id='phone'
                                            placeholder='Phone' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                                    </div>

                                    <div className='signup-form-input-box'>
                                        <i class="fa-solid fa-envelope signup-form-input-icon"></i>
                                        <input type='email' className='signup-form-input' id='mail'
                                            placeholder='Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>

                                    <div className='signup-form-input-box'>
                                        <i class="fa-solid fa-lock signup-form-input-icon"></i>
                                        <input type='password' className='signup-form-input' id='password'
                                            placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>

                                    <div className='signup-form-input-box'>
                                        <label>
                                            <input type="checkbox" checked="checkbox" name="remember" /> Remember me
                                        </label>

                                        <p>By creating an account you agree to our <Link to="/signup">Terms & Privacy</Link>.</p>
                                    </div>

                                    <div className='signup-form-button'>
                                        <button type='button' className='register-btn' onClick={signupUser}>SIGN UP</button>
                                    </div>

                                    <div className='signup-form-login-btn'>
                                        <button type='button' className='login-btn-bottom'>Already have an account? <Link to='/login'>Login</Link></button>
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
