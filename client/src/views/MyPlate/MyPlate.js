import React, { useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import "./MyPlate.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { currentUser } from '../../util/currentUser'
import { loginRequired } from '../../util/loginRequired'
import { myFoodPlateItems } from "./../../util/myPlate"
import { itemsRequired } from '../../util/itemsRequired'
import { tableRequired } from '../../util/tableRequired'

function MyPlate() {

    useEffect(() => {
        itemsRequired()
        loginRequired()
        tableRequired()
    }, [])

    async function deletePlate(index) {
        myFoodPlateItems.splice(index, 1)
        localStorage.setItem('plate', JSON.stringify(myFoodPlateItems))
        await swal({
            icon: 'success',
            title: "Item Removed",
            text: "Item Removed From Plate",
            button: "Ok"
        })
        window.location.reload()
    }

    async function placeFoodOrder() {

        const response = await axios.post("/orderFoodItems", {
            userID: currentUser._id,
            tableNumber: localStorage.getItem("tableNumber") || 1,
            items: myFoodPlateItems,
        })

        if (response.data.success) {
            await swal("Order Placed", response.data.message, "success")
            localStorage.removeItem("plate")
            window.location.href = "/payment"
        }

    }

    async function clearPlate() {
        localStorage.removeItem("plate")
        await swal({
            icon: 'success',
            title: "Plate Cleared !",
        })
        window.location.href = "/menu";
    }

    return (
        <div>
            <Navbar />
            <h2 className='text-center'>My Plate 🍽️</h2>

            <div className='my-plate-container row'>
                {
                    myFoodPlateItems.map((item, index) => {

                        return (
                            <div className='plate-container col-12'>

                                <div className='plate-img-container'>
                                    <img className='plate-img' alt='food-img' src={item.imgURL} />
                                </div>

                                <div className='plate-text-container row'>
                                    <div className='plate'>
                                        <h6 className='plate-text'>Name : {item.name}</h6>
                                    </div>

                                    <div className='plate'>
                                        <h6 className='plate-text'>Price : {item.price} &#8377;</h6>
                                    </div>

                                    <div className='plate'>
                                        <h6 className='plate-text'>Quantity : {item.quantity}</h6>
                                    </div>

                                    <div className='plate'>
                                        <h6 className='plate-text'>Total Amount : {item.price * item.quantity} &#8377;</h6>
                                    </div>

                                </div>

                                <div className='dlt-plate'>
                                    <i class="fa-solid fa-trash" onClick={() => deletePlate(index)}></i>
                                </div>
                            </div>
                        )

                    })
                }

                <div className='confirm-btn'>
                    <button className='btn button' onClick={placeFoodOrder}>PLACE ORDER</button>
                    <button className='btn button-clr' onClick={clearPlate}>CLEAR PLATE</button>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default MyPlate
