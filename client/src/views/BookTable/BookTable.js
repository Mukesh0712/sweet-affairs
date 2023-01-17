import React, { useEffect } from 'react'
import {loginRequired} from './../../util/loginRequired'
import "./BookTable.css"

function BookTable() {
    useEffect(() =>{
            loginRequired()
    }, [])

    return (
        <>
            <h1>BookTable</h1>
        </>
    )
}

export default BookTable
