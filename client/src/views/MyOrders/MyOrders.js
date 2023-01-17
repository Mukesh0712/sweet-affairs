import React, { useEffect} from 'react'
import {loginRequired} from './../../util/loginRequired'
import "./MyOrders.css"

function MyOrders() {

    useEffect(() =>{
            loginRequired()
    }, [])

    return (
        <>
            <h1>My Orders</h1>
        </>
    )
}

export default MyOrders
