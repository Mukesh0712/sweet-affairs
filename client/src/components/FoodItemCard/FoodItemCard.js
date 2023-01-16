import React, { useState } from 'react'

import "./FoodItemCard.css"

function FoodItemCard({ category, description, imgURL, price, title }) {

    const [quantity, setQuantity] = useState(1)

    async function addToPlate() {
        const plateObject = {
            name: title,
            price: price,
            quantity: quantity
        }

        //add to plate in localStorage

        const existingPlate = JSON.parse(localStorage.getItem('plate')) || []

        existingPlate.push(plateObject)

        localStorage.setItem('plate', JSON.stringify(existingPlate))
    }

    return (
        <div className='col-md-4 food-item-container'>

            <div className='food-item-card row'>

                <div className='food-item-img-container'>
                    <img alt='' src={imgURL} className='food-item-img' />
                </div>

                <h4>{title}</h4>

                <p>{description}</p>

                <h5>Price : {price}₹</h5>

                <div>
                    <div>
                        <span onClick={(e) => { setQuantity(quantity - 1) }}>-</span>
                        <h2>{quantity}</h2>
                        <span onClick={(e) => { setQuantity(quantity + 1) }}>+</span>
                    </div>

                    <div className='text-center'>
                        <button type='button' className='btn-add-to-plate' onClick={addToPlate}>Add To Plate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItemCard
