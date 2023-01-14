import React, { useState } from 'react'

import "./FoodItemCard.css"

function FoodItemCard({ category, description, imgURL, price, title }) {

    const [quantity, setQuantity] = useState(1)

    async function addToPlate(){
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
        <div className='col-md-3'>
            <div className='food-item-card'>
                <div>
                    <img alt='' src={imgURL} />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>₹ {price} /- Only</p>
                <span>{category}</span>

                <div>
                    <span onClick={(e)=>{setQuantity(quantity - 1)}}>-</span> 
                    <h2>{quantity}</h2> 
                    <span onClick={(e)=>{setQuantity(quantity + 1)}}>+</span>
                </div>
            </div>
            <div className='text-center'>
                <button type='button' className='btn-add-to-plate' onClick={addToPlate}>Add To Plate</button>
            </div>
        </div>
    )
}

export default FoodItemCard
