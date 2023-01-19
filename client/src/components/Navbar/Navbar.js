import React, { useState } from 'react'
import { currentUser } from '../../util/currentUser'
import swal from 'sweetalert'
import "./Navbar.css"
import { myFoodPlateCount } from '../../util/myPlate'
import { Link} from "react-router-dom"


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

                    <a class="navbar-brand" href="./../Navbar">Sweet Affairs</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./../Navbar">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="./../Navbar">About</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="./../Navbar">Contact</a>
                            </li>

                            <li class="nav-item dropdown">

                                <a class="nav-link dropdown-toggle" href="./../Navba./../Navbar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </a>

                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="./../Navbar">Chicken</a></li>
                                    <li><a class="dropdown-item" href="./../Navbar">Fish</a></li>
                                    <li><a class="dropdown-item" href="./../Navbar">Egg</a></li>
                                    <li><a class="dropdown-item" href="./../Navbar">Burger</a></li>
                                    <li><a class="dropdown-item" href="./../Navbar">Pizza</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="./../Navbar">View More</a></li>
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
