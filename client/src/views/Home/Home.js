import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./Home.css"
import FoodItemCard from "./../../components/FoodItemCard/FoodItemCard"
import Navbar from '../../components/Navbar/Navbar'
import { loginRequired } from '../../util/loginRequired'
import { currentUser } from '../../util/currentUser'


function Home() {

    const [searchText, setSearchText] = useState("")
    const [currentFoodItems, setCurrentFoodItems] = useState([])

    async function fetchAllItems() {
        console.log("Fetching All Items");
        const response = await axios.get('/allFoodItems')
        console.log(response.data.data);
        setCurrentFoodItems(response.data.data)
    }

    async function fetchSpecificItems() {
        console.log("Fetching Specific Items");
        const response = await axios.get(`/foodItemByTitle?title=${searchText}`)
        console.log(response.data.data);
        setCurrentFoodItems(response.data.data)
    }

    useEffect(() => {
        if (searchText.length > 0) {
            fetchSpecificItems()
        }
        else {
            fetchAllItems()
        }
    }, [searchText])

    useEffect(() => {
        loginRequired()
    }, [])

    return (
        <div>
            <Navbar user={currentUser?.name} />

            <div className='search-container text-center'>
                <input type='text' placeholder='Search' className='fs-4'
                    value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
            </div>

            <div className='food-items-result'>
                <div className='row food-items-row'>
                    {
                        currentFoodItems?.map((foodItem, index) => {
                            return (<FoodItemCard category={foodItem.category} description={foodItem.description}
                                imgURL={foodItem.imgURL} price={foodItem.price} title={foodItem.title} key={index} />)
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Home
