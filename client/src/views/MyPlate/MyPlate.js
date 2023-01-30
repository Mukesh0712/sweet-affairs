import React, { useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import "./MyPlate.css"
import Navbar from '../../components/Navbar/Navbar'
import { currentUser } from '../../util/currentUser'
import { loginRequired } from '../../util/loginRequired'
import { myFoodPlateItems } from "./../../util/myPlate"
import { itemsRequired } from '../../util/itemsRequired'


function MyPlate() {

    async function placeFoodOrder() {

        const response = await axios.post("/orderFoodItems", {
            userID: currentUser._id,
            tableNumber: localStorage.getItem("tableNumber") || 1,
            items: myFoodPlateItems
        })

        if (response.data.success) {
            await swal("Order Placed", response.data.message, "success")
            localStorage.removeItem("plate")
            window.location.href = "/"
        }

    }

    useEffect(() => {
        itemsRequired()
        loginRequired()
    }, [])

    return (
        <div>
            <Navbar />
            <h2 className='text-center'>My Plate 🍽️</h2>
            <div className='my-plate-container row'>
                {
                    myFoodPlateItems.map((item, index) => {

                        return (
                            <div className='plate-container'>

                                <div className='plate'>
                                    <h6 className='name'>Name : {item.name}</h6>
                                </div>

                                <div className='plate'>
                                    <h6 className='price'>Price : {item.price}</h6>
                                </div>

                                <div className='plate'>
                                    <h6 className='quantity'>Quantity : {item.quantity}</h6>
                                </div>

                            </div>
                        )

                    })
                }
            </div>

            <div className='confirm-btn'>
                <button className='btn btn-warning fs-5 fw-bold button' onClick={placeFoodOrder}>Confirm Order</button>
            </div>

        </div>
    )
}

export default MyPlate
