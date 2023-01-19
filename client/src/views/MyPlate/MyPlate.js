import React from 'react'
import "./MyPlate.css"
import Navbar from '../../components/Navbar/Navbar'

import { myFoodPlateItems } from "./../../util/myPlate"

function MyPlate() {
    return (
        <div>
            <Navbar />
            <h2 className='text-center'>MyPlate</h2>
            {
                myFoodPlateItems.map((item, index) => {
                    return (
                        <div>
                            <h6>Name : {item.name}</h6>
                            <h6>Price : {item.price}</h6>
                            <h6>Quantity : {item.quantity}</h6>

                            <hr/>
                        </div>
                    )
                })
            }

            <button className='btn btn-warning'>Confirm Order</button>
        </div>
    )
}

export default MyPlate
