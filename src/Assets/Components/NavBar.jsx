import React from 'react'
import { Link } from 'react-router-dom'
import AIM from '../Images/AIM.png'

export default function NavBar() {
    return (
        <div>
            <header className='nav'>
                <div className="logo">
                    <img src={AIM} alt="" />
                </div>
                <div className="items">
                    <Link to="/profilecomplete">Student Data </Link>
                    <Link to="/profilemgmt">Profile</Link>
                    <Link to="/sign-up">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </div>
            </header>
        </div>
    )
}
