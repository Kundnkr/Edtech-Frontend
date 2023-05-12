import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../Stylesheet/Regsiter.css';
import AIM from '../Images/AIM.png'
import profilepic from '../Images/profilePic.gif'
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading'

let email = "";

export default function Register() {
    const Navigate = useNavigate();
    const [isloading, setisloading] = useState(false)
    const [data, setdata] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: ""
    })

    let handlechange = (e) => {
        const value = e.target.value;
        setdata({ ...data, [e.target.name]: value });
    }

    let handlesubmit = (e) => {
        setisloading(true)

        e.preventDefault();
        const userdata = {
            username: data.username,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            confirm_password: data.confirm_password
        }

        email = data.email;
        axios.post('https://testapp-9prn.onrender.com/api/register/', userdata).then((res) => {
            let registrationForm = document.getElementById('form');
            alert(res.data.msg);
            setisloading(false);
            if (res.data.status === 200) {
                Navigate('/otp-verify');
            }
            registrationForm.reset();
        }).catch((err) => {
            setisloading(false);
            console.log(err
            );
        })
    }
    return (
        <>
        {(isloading)?<Loading/>:""}
            <section className="registration-box">
            <div id='registration-from' className='registration-from' onSubmit={handlesubmit} >
                <form id='form' className="form-item">
                    <h1>Create an Account</h1>

                    <div className="input-box">
                        <input required type="text" name='username' id='username'  onChange={handlechange} />
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="input-box">
                        <input required type="text" name="first_name" id="first_name" maxlength="20" pattern="[A-Za-z.]{1,20}"  onChange={handlechange} />
                        <label htmlFor="first_name">First Name</label>
                    </div>

                    <div className="input-box">
                        <input required type="text" name='last_name' maxlength="20" pattern="[A-Za-z]{1,20}"  onChange={handlechange} />
                        <label htmlFor="last_name">Last Name</label>
                    </div>

                    <div className="input-box">
                        <input required type="email" name='email'  onChange={handlechange} />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="input-box">
                        <input required type="tel" name='phone' minlength="10" maxlength="10" pattern="[0-9]{1,10}"  onChange={handlechange} />
                        <label htmlFor="phone">Phone</label>
                    </div>

                    <div className="input-box">
                        <input type="password" minlength="6" maxlength="15" name='password' onChange={handlechange} required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-box">
                        <input required type="password" minlength="6" maxlength="15" name='confirm_password'  onChange={handlechange} />
                        <label htmlFor="">Confirm Password</label>
                    </div>
                   <div className="sign">
                      <button disabled = {isloading}>Sign Up</button>
                    </div>
                    <div className="Have-account">
                        <p>Already have a account? <a href="/login">Log in</a></p>
                    </div>
                </form>
            </div>
            <div className="content">
                <div className="disc">
                <img className='aimLogo' src={AIM} alt="" />
                    <img className='keyboy' src={profilepic} alt="" />
                </div>
            </div>
            
           
        </section>
        </>
    )
}

export { email };