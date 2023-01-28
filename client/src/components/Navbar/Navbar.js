import React, { useState } from 'react'
import swal from 'sweetalert'
import "./Navbar.css"
import { currentUser } from '../../util/currentUser'
import { myFoodPlateCount } from '../../util/myPlate'
import { Link } from "react-router-dom"

function Navbar({ user }) {

    const [foodItemCount, setFoodItemCount] = useState(myFoodPlateCount)

    async function logOut() {
        if (currentUser) {
            localStorage.removeItem('currentUser')
            localStorage.removeItem('plate')
            await swal({
                icon: 'success',
                title: "Success",
                text: "Logout Successfully",
                button: "Ok!"
            })
            window.location.href = '/login'

        }
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg nav-bg mb-3">

                <div class="container-fluid">

                    <Link class="navbar-brand ms-2" to="/">SWEET AFFAIRS</Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-0 mb-2 mt-2 mb-lg-0 ms-auto pt-2 ">

                            <li class="nav-item me-4">
                                <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>

                            <li class="nav-item me-4">
                                <Link class="nav-link active" to="/">ABOUT</Link>
                            </li>

                            <li class="nav-item me-4">
                                <Link class="nav-link active" to='/menu' role="button" >MENU</Link>
                            </li>

                            <li class="nav-item me-4">
                                <Link class="nav-link active" to="/tables">TABLES</Link>
                            </li>

                            <li class="nav-item me-4">
                                <Link class="nav-link active" to="/">CONTACT</Link>
                            </li>

                            <li class="nav-item me-4">
                                <p className='username nav-link'>Welcome, {currentUser?.name}</p>
                            </li>

                            <li class="nav-item me-4">
                                <button type='button' className='btn logout-btn text-white fw-bold' onClick={logOut}>LOG OUT</button>
                            </li>

                            <li class="nav-item me-4">
                                <button type="button" class="btn position-relative">
                                    <Link to="/myPlate">
                                        <i class="fa-solid fa-cart-shopping text-black"></i>
                                        <span class="nav-link active position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill badge-bg text-white fw-bold">{foodItemCount}</span>
                                    </Link>
                                </button>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
