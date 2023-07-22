import React from 'react'
import img from '../assets/once.jpg'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
    return (
        <div id="wrapper" style={{ backgroundColor: "black" }} className="font-poppins" >
            <h1 className='chotu_meow' style={{ color: "white" }}>This page could not be found</h1>
            <h1 className='chotu_meow' style={{ color: "white" }}>
                <Link to="/">Go-back-to-main-page</Link>
            </h1>
            <img src={img} style={{ height: "43.3rem" }} />
            <div id="info">

            </div>
        </div >
    )
}

export default PageNotFound;