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

    function decrement(){

        let value = 0
        if(quantity <= value){
            value = 1
        }
        else
        {
            value = quantity
        }
        setQuantity(value - 1)
    }

    return (
        <div className='col-md-3 food-item-container'>

            <div className='food-item-card col-md-4'>

                <div className='food-item-card-img-container'>
                    <img alt='' src={imgURL} className='food-item-card-img' />
                </div>

                <div className='food-item-card-details-container'>
                    <div className='food-item-card-text'>
                        <p>{title}</p>
                        <hr/>
                    </div>
                    
                    <div className='food-item-card-desc'>
                        <p>{description}</p>
                    </div>

                    <div className='food-item-card-category-quantity'>
                        <div className='food-item-card-category'>
                            <p>{category}</p>
                        </div>

                        <div className='food-item-card-quantity'>
                            <span onClick={() => { decrement() }} className='food-item-card-quantity-inc-dec hover-red'><i class="fa-solid fa-minus"></i></span>
                            <button type='search' className='food-item-card-quantity-num'>{quantity}</button>
                            <span onClick={(e) => { setQuantity(quantity + 1) }} className='food-item-card-quantity-inc-dec hover-green'><i class="fa-solid fa-plus"></i></span>
                        </div>
                    </div>

                    <div className='food-item-card-price-btn'>
                        <div className='food-item-card-price'>
                            <p>Price : {price}₹ </p>
                        </div>

                        <div className='food-item-card-btn'>
                            <button type='button' className='food-item-card-btn-add' onClick={addToPlate}>Add To Plate</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FoodItemCard
