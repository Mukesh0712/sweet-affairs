import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./Table.css"

function Table() {

    const [availabletables, setAvailableTables] = useState([])

    useEffect(() => {
        const fetchTables = async () => {
            const response = await axios.get("/availableTables")
            console.log(response.data.data);
            setAvailableTables(response.data.data)
        }
        fetchTables()
    }, [])

    return (
        <div className='tables'>
            {availabletables &&
                availabletables?.map((availabletable)=>{
                    return (<p className='table'>Table : {availabletable.tableNumber} </p>)
                })
            }
        </div>
    )
}

export default Table
