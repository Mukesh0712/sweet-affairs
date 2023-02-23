import React, { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert'
import { loginRequired } from '../../util/loginRequired'
import { currentUser } from './../../util/currentUser'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./Table.css"

function Table() {

    const [availabletables, setAvailableTables] = useState([])

    useEffect(() => {
        async function fetchTables() {
            const response = await axios.get("/availableTables")
            console.log(response.data.data);
            setAvailableTables(response.data.data)
        }
        fetchTables()
        loginRequired()
    }, [])

    async function bookTable(tableNumber) {
        const response = await axios.post('/bookTable', {
            tableNumber: tableNumber,
            userID: currentUser._id
        })

        if (response.data.success) {
            await swal({
                icon: 'success',
                title: "Booked Table",
                text: response.data.message,
            })
            localStorage.setItem('bookedTable', JSON.stringify(response.data.data))
            window.location.reload()
        }
        else {
            await swal({
                icon: 'error',
                title: "Choose Another Table !",
                text: response.data.message,
            })
            window.location.reload()
        }
    }

    async function unbookTable(tableNumber) {
        const response = await axios.post('/unBookTable', { tableNumber: tableNumber })
        await swal({
            icon: 'success',
            title: "Unbooked Table",
            text: response.data.message,
        })
        localStorage.removeItem('bookedTable')
        window.location.reload()
    }

    return (
        <div className='tables row'>

            <Navbar />

            <p className='avl-table'>Available Tables</p>

            {availabletables &&
                availabletables?.map((availabletable) => {
                    return (
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                            <p className='table-name'>Table : {availabletable.tableNumber}
                                <hr />
                                <img className='table-img' alt='' src='https://media.istockphoto.com/id/1286120728/vector/home-furnishings-table-with-chairs.jpg?s=612x612&w=0&k=20&c=o8yKNC-r0xuhNI-BV_MRdY4d9YsFMBRbBqyR5bromac=' />
                                <div className='book-btn-container'>
                                    <button type='button' className='book-btn' onClick={() => { bookTable(availabletable.tableNumber) }}>BOOK</button>
                                    <button type='button' className='book-btn' onClick={() => { unbookTable(availabletable.tableNumber) }}>UNBOOK</button>
                                </div>
                            </p>
                            <br />
                        </div>
                    )
                })
            }

            <Footer/>
        </div>
    )
}

export default Table
