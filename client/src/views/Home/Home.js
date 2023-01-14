import React from 'react'
import swal from 'sweetalert'

import {currentUser} from './../../util/currentUser'
import "./Home.css"

function Home() {

    async function logOut(){
        localStorage.removeItem('currentUser')
        await swal({
            icon: 'success',
            title: "Success",
            text: "Logout Successfully",
            button: "Ok!"
        })
        window.location.href = '/login'
    }

    if(!currentUser){
        window.location.href = '/login'
    }

    return (
        <div>
            <h1 className='text-center'>Home</h1>
            <h2>{currentUser?.name}</h2>

            <button type='button' className='btn btn-danger' onClick={logOut}>Logout</button>
        </div>
    )
}

export default Home
