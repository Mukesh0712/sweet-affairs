import React, { useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import {loginRequired} from './../../util/loginRequired'
import "./MyOrders.css"

function MyOrders() {

    useEffect(() =>{
            loginRequired()
    }, [])

    return (
        <>
            <h1>My Orders</h1>
            <Footer/>
        </>
    )
}

export default MyOrders
