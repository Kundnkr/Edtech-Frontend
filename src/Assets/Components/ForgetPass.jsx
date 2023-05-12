import React, { useState } from 'react'
import pass from '../Images/pass.png'
import '../Stylesheet/ResetPass.css'
import axios from 'axios'

export default function ForgetPass() {
    let [password, setpassword] = useState({
        old_password: "",
        confirm_password: ""
    })

    let chnagehandler = (e) => {
        let value = e.target.value;
        setpassword({ ...password, [e.target.name]: value })
    }
    let submithandler = (e) => {

    }

    return (
        <>
            <section className='forgetPassword'>
                <div className="change_password">
                    <div>
                         <div className="Top-forget">
                            <img src={pass} alt="" />
                            <h1>Forgot Password</h1>
                            <p>Enter The Email address<br/> associated with your account</p>
                        </div>

                    </div>
                    <form onSubmit={submithandler}>
                        {/* <input type="password" placeholder='New Password' onChange={chnagehandler} name='old_password' />
                        <input type="password" placeholder='Confirm New Password' onChange={chnagehandler} name='confirm_password' /> */}
                        <div className="input-boxs">
                        {/* <label htmlFor="email">Enter your Email</label> */}
                        <input required type="email" name='email' placeholder="Enter your Email"/> 
                    </div>

                        <button>Send</button>
                    </form>

                </div>


            </section>


        </>
    )
}
