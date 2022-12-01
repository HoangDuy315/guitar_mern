import React from 'react'
import { NavLink } from 'react-router-dom'
import about from '../assets/about.png'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-warning fw-bold mb-4'>ABOUT US</h1>
                        <p className="lead mb-4 fs-5">Dear customers, JSC TM-DV-SX GNAHYUD (GNAHYUD HD) 
                        was established in 2022 with the main product is the guitar, after nearly 1 year of operation, 
                        the company has a relationship. Trade with famous musical instrument brands in the world such as 
                        Germany, France, the Netherlands, Italy, USA, UK, Japan, Taiwan, China, Korea, etc. 
                        Product categories are also expanded. Richer and more diversified with musical instruments imported from the above countries such as acoustic pianos, electronic pianos, 
                        organs, guitars, drums, trumpets, other audio equipment and music accessories. Up to now, after many years of operation, with a staff, staff, enthusiastic, 
                        highly qualified, GnahYuD Company has been trusted by customers and has become one of the largest musical instruments in Ho Chi Minh City.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-warning px-3 rounded-pill">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={about} className='ms-4 ' alt="about us" height="500px" width="500px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About