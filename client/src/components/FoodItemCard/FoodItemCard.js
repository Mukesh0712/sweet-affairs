import React from 'react'

import "./FoodItemCard.css"

function FoodItemCard({ category, description, imgURL, price, title }) {
    return (
        <div className='col-md-3'>
            <div className='food-item-card'>
                <div>
                    <img alt='' src={imgURL} />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <p>{category}</p>
            </div>
        </div>
    )
}

export default FoodItemCard
