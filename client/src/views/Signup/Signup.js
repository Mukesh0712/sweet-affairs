import React from 'react'
import Swal from 'sweetalert2'

import "./Signup.css"

function Signup() {

    return (
        <div>
            <h1 className='text-center'>Signup</h1>

            <div className='row'>

                <div className='col-md-6'></div>

                <div className='col-md-6'>
                    <div className='form-container'>
                        <form>
                            <div>
                                <div class="mb-3 row">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Signup
