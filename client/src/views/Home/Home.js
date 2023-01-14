import React, {useState, useEffect} from 'react'
import axios from "axios"
import swal from 'sweetalert'

import {currentUser} from './../../util/currentUser'
import "./Home.css"

function Home() {

    const [searchText, setSearchText] = useState("")

    async function fetchAllItems(){
        
    }

    async function fetchSpecificItems(){
        console.log("Fetching Specific Items");
    }

    useEffect(()=>{
        if(searchText.length > 0){
            fetchSpecificItems()
        }
        else
        {
            fetchAllItems()
        }
    }, [searchText])

    async function logOut(){
        localStorage.removeItem('currentUser')
        await swal({
            icon: 'success',
            title: "Success",
            text: "Logout Successfully",
            button: "Ok!"
        })
        window.location.href = '/login'
    }

    if(!currentUser){
        window.location.href = '/login'
    }

    return (
        <div>
            <h1 className='text-center'>Home</h1>
            <h2>{currentUser?.name}</h2>

            <div className='search-container text-center'>
                <input type='text' placeholder='Search' className='fs-4' 
                    value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            </div>

            <button type='button' className='btn btn-danger' onClick={logOut}>Logout</button>
        </div>
    )
}

export default Home
