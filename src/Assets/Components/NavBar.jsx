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
                    <Link to="/profilecomplete">PROFILE COMPLETE</Link>
                    <Link to="/profilemgmt">PROFILE</Link>
                    <Link to="/sign-up">SIGN UP</Link>
                    <Link to="/login">LOGIN</Link>
                    <Link to="/loading">Loading</Link>
                </div>
            </header>
        </div>
    )
}
