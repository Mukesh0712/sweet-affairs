import React, { useState, useEffect } from 'react'
import {currentUser} from './../../util/currentUser'
import axios from "axios"

import Swal from 'sweetalert2'

import "./Login.css"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        if(currentUser){
            window.location.href = '/'
        }
    }, [])


    async function loginUser() {
        const response = await axios.post('/login', {
            email: email,
            password: password,        })

        console.log(response.data);

        if (response.data.success) {
            alert(response.data.message)
            localStorage.setItem('currentUser', JSON.stringify(response.data.data))
            window.location.href = '/'
        }
        else
        {
            alert('Error : ' +  response.data.message)
            setEmail("")
            setPassword("")
            localStorage.removeItem('currentUser')
        }
    }

    return (
        <div>
            <h1 className='text-center'>Login</h1>

            <div className='row'>

                <div className='col-md-6'>

                </div>

                <div className='col-md-6'>
                    <div className='form-container'>
                        <form>
                            <div className='form-group'>

                                <div>
                                    <label htmlFor='email'>Email Id</label>
                                    <input type='email' className='form-control' id='mail'
                                        placeholder='abc@gmail.com' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' className='form-control' id='password'
                                        placeholder='123' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                </div>

                                <div>
                                    <button type='button' className='btn btn-warning' onClick={loginUser}>Login</button>
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
