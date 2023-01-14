import React, { useState } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'

import "./Signup.css"

function Signup() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("Customer")

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
            alert(response.data.message)
            window.location.href = "/login"
        }
        else
        {
            alert(response.data.message)
            setName("")
            setPhone("")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <div>
            <h1 className='text-center'>Signup</h1>

            <div className='row'>

                <div className='col-md-6'>

                </div>

                <div className='col-md-6'>
                    <div className='form-container'>
                        <form>
                            <div className='form-group'>
                                <div>
                                    <label htmlFor='name'>Full Name</label>
                                    <input type='text' className='form-control' id='name'
                                        placeholder='Mukesh Pimpalkar' value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>

                                <div>
                                    <label htmlFor='phone'>Phone No.</label>
                                    <input type='text' className='form-control' id='phone'
                                        placeholder='12345678' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                                </div>

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
                                    <button type='button' className='btn btn-warning' onClick={signupUser}>Signup</button>
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
