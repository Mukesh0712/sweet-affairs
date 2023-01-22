import React from 'react'
import "./MyPlate.css"
import Navbar from '../../components/Navbar/Navbar'
import { myFoodPlateItems } from "./../../util/myPlate"

function MyPlate() {
    return (
        <div>
            <Navbar />
            <h2 className='text-center'>My Plate 🍽️</h2>
            {
                myFoodPlateItems.map((item, index) => {
                    return (
                        <div className='container'>

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

                        </div>
                    )
                })
            }

            <div className='confirm-btn'>
                <button className='btn btn-warning fs-5 fw-bold button'>Confirm Order</button>
            </div>

        </div>
    )
}

export default MyPlate
