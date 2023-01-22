import React, { useState } from 'react'
import swal from 'sweetalert'
import "./Navbar.css"
import { currentUser } from '../../util/currentUser'
import { myFoodPlateCount } from '../../util/myPlate'
import { Link } from "react-router-dom"


function Navbar({ user }) {

    const [foodItemCount, setFoodItemCount] = useState(myFoodPlateCount)

    async function logOut() {
        localStorage.removeItem('currentUser')
        await swal({
            icon: 'success',
            title: "Success",
            text: "Logout Successfully",
            button: "Ok!"
        })
        window.location.href = '/login'
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">

                <div class="container-fluid">

                    <img src='logo.png' alt='' className='logo' />
                    <Link class="navbar-brand" to="/">Sweet Affairs</Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/">About</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Contact</Link>
                            </li>

                            <li class="nav-item dropdown">

                                <Link class="nav-link active dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </Link>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/">Chicken</Link></li>
                                    <li><Link class="dropdown-item" to="/">Fish</Link></li>
                                    <li><Link class="dropdown-item" to="/">Egg</Link></li>
                                    <li><Link class="dropdown-item" to="/">Burger</Link></li>
                                    <li><Link class="dropdown-item" to="/">Pizza</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/">View More</Link></li>
                                </ul>

                            </li>

                        </ul>

                        <h5 className='username'>Hello {currentUser?.name}</h5>

                        <button type="button" class="btn btn-primary">
                            <Link to="/myPlate">
                                <i class="fa-solid fa-plate-wheat text-white"></i>
                                <span class="badge text-bg-danger ms-2">{foodItemCount}</span>
                            </Link>
                        </button>

                        <button type='button' className='btn btn-danger ms-3' onClick={logOut}>Logout</button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
