import React from 'react';
import "./Payment.css";
// import axios from 'axios'
// import swal from 'sweetalert'
import { myFoodPlateItems } from "./../../util/myPlate"

function Payment({price, title }) {

    async function checkout() {
        console.log(myFoodPlateItems);
        // const response = await axios.post("/orderFoodItems", {
        //     userID: currentUser._id,
        //     tableNumber: localStorage.getItem("tableNumber") || 1,
        //     items: myFoodPlateItems,
        // })

        // if (response.data.success) {
        //     await swal("Order Placed", response.data.message, "success")
        //     localStorage.removeItem("plate")
        //     window.location.href = "/"
        // }
    }

    return (
        <div className="payment">

            <div className='row payment-container'>

                <div className='mGrid'>

                    <div className='total'>
                        <p className=''>Total</p>

                        <p>500 💰</p>
                    </div>

                    <div className='detail'>

                        <p>Detail</p>

                        <ul>
                            <li>{myFoodPlateItems.title}</li>
                            <li>{myFoodPlateItems.price}</li>
                        </ul>

                        <ul>
                            <li>{title}</li>
                            <li>{price}</li>
                        </ul>

                        <button onClick={checkout}>Pay Now</button>

                    </div>

                </div>

                <div className='subContainer'>

                    <div className='card-name-visa'>
                        <p className='card-name'>Bank of India</p>

                        <div className='visa'>
                            <p>VISA</p>
                        </div>
                    </div>

                    <div className='cardNum'>
                        <label>Credit Card Number</label>
                        <br />
                        <input placeholder='1234 5678 9000 0000' type='tel' />
                    </div>

                    <div className='date-ccv'>
                        <div className='date'>
                            <label>Expiration</label>
                            <br />
                            <input type='month' />
                        </div>

                        <div className='ccv'>
                            <label>CCV</label>
                            <br />
                            <input placeholder='123' type='tel' />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}
export default Payment;
