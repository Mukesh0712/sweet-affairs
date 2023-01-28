import React, {useEffect} from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import { loginRequired } from '../../util/loginRequired'
import { currentUser } from '../../util/currentUser'


function Home() {

    useEffect(() => {
        loginRequired()
    }, [])

    return (
        <div>
            <Navbar user={currentUser?.name} />

            <h2>Home</h2>
        </div>
    )
}

export default Home
