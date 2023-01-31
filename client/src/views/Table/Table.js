import React, { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert'
import { loginRequired } from '../../util/loginRequired'
import { currentUser } from './../../util/currentUser'
import Navbar from '../../components/Navbar/Navbar'
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
        console.log('Table Booked');
        const response = await axios.post('/bookTable', {
            tableNumber: tableNumber,
            userID: currentUser._id
        })

        console.log(response.data.data);

        if (response.data.data.booked) {
            await swal("Table Booked Successfully", response.data.message, "success")
            localStorage.setItem("bookedTable", JSON.stringify(response.data.data))
        }
        else{
            await swal("Error", response.data.message, "error")
        }
    }

    async function unbookTable(tableNumber){
        console.log("Unbooked Table");
        const response =  await axios.post('/unBookTable', {tableNumber: tableNumber})

        console.log(response.data.data);
        localStorage.removeItem("bookedTable")

        await swal({
            icon: 'success',
            title: "success",
            text: response.data.message,
        })

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
                                <button type='button' className='book-btn' onClick={() => { bookTable(availabletable.tableNumber) }}>BOOK TABLE</button>
                                <button type='button' className='book-btn' onClick={() => { unbookTable(availabletable.tableNumber) }}>UN-BOOK TABLE</button>
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
