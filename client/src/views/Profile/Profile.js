import React, {useEffect} from 'react'
import { loginRequired } from '../../util/loginRequired'
import "./Profile.css"

function Profile() {

    useEffect(() =>{
        loginRequired()
}, [])

    return (
        <>
            <h1>My Profile</h1>
        </>
    )
}

export default Profile
