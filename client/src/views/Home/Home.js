import React, {useEffect} from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import { loginRequired } from '../../util/loginRequired'
import { currentUser } from '../../util/currentUser'
import Footer from '../../components/Footer/Footer'

function Home() {

    useEffect(() => {
        loginRequired()
    }, [])

    return (
        <div>
            <Navbar user={currentUser?.name} />

            <h2>Home</h2>

            <Footer/>
        </div>
    )
}

export default Home
