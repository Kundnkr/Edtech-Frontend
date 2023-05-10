import React from 'react'
import { Link } from 'react-router-dom'
import AimWhite from '../Images/AimWhite.png'

export default function NavBar() {
    return (
        <div>
            <header className='nav'>
                <div className="logo">
                    <img src={AimWhite} alt="" />
                </div>
                <div className="items">
                <div className="dropdown">
                    <Link className='dropdownCourses'>COURSES</Link>
                    <div className="dropdowmItem">
                            <Link className='webdev' to="/courses">Web Development</Link>
                            <div className="webdev-s-c">
                                <Link>Front-End Development</Link>
                                <Link>Back-End Development</Link>
                                <Link>Full Stack Development</Link>
                            </div>
                        <Link className='digitalmarketing' to="/courses">Digital Marketing</Link>
                        <div className="digitalmarketing-s-c">
                            <Link>Seach Engine Marketing</Link>
                            <Link>Content Marketing</Link>
                            <Link>Email Marketing</Link>
                        </div>
                        <Link className='bussinessmanagement' to="/courses">Bussiness Management</Link>
                        <div className="bussinessmanagement-s-c">
                            <Link>Strategic management</Link>
                            <Link>Operations management</Link>
                            <Link>Risk management</Link>
                        </div>
                        <Link className='dataanalytics' to="/courses">Data Analytics</Link>
                        <div className="dataanalytics-s-c">
                            <Link>Business intelligence</Link>
                            <Link>Big data analytics</Link>
                        </div>
                        <Link className='qualityassurance' to="/courses">Quality Assurance</Link>
                        <div className="qualityassurance-s-c">
                            <Link>Quality planning</Link>
                            <Link>Quality control</Link>
                            <Link>Quality improvement</Link>
                        </div>
                    </div>
                </div>
                    <Link to="/profilecomplete">Student Data </Link>
                    <Link to="/profilemgmt">Profile</Link>
                    <Link to="/sign-up">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </div>
            </header>
        </div>
    )
}
