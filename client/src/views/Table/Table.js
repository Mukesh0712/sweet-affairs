import React, { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert'
import { currentUser } from './../../util/currentUser'
import Navbar from '../../components/Navbar/Navbar'
import "./Table.css"

function Table() {

    const [availabletables, setAvailableTables] = useState([])

    useEffect(() => {
        const fetchTables = async () => {
            const response = await axios.get("/availableTables")
            console.log(response.data.data);
            localStorage.setItem('table', JSON.stringify(response.data.data))
            setAvailableTables(response.data.data)
        }
        fetchTables()
    }, [])

    async function bookTable() {
        console.log('Table Booked');
        const response = await axios.post('/bookTable', {
            tableNumber: localStorage.getItem("table"),
            userID: currentUser._id
        })
        localStorage.setItem('')
        console.log(response.data.success);
    }

    return (
        <div className='tables row'>

            <Navbar />

            <p className='avl-table'>Available Tables</p>

            {availabletables &&
                availabletables?.map((availabletable) => {
                    return (
                        <div className='col-md-4'>
                            <p className='table-name'>Table : {availabletable.tableNumber}
                                <img className='table-img' alt='' src='https://media.istockphoto.com/id/1286120728/vector/home-furnishings-table-with-chairs.jpg?s=612x612&w=0&k=20&c=o8yKNC-r0xuhNI-BV_MRdY4d9YsFMBRbBqyR5bromac=' />
                                <button type='button' className='book-btn' onClick={bookTable}>BOOK TABLE</button>
                            </p>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Table
