import React, { useState } from 'react'
import foregt from '../Images/foregt.jpg'
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
                <img src={foregt} alt="" />
                    <div>
                         <div className="Top-forget">
                            <h1>Forgot Password?</h1>
                            <p>No Worries ,we'll send you reset instructions.</p>
                            <form onSubmit={submithandler}>
                        {/* <input type="password" placeholder='New Password' onChange={chnagehandler} name='old_password' />
                        <input type="password" placeholder='Confirm New Password' onChange={chnagehandler} name='confirm_password' /> */}
                        <div className="input-boxs">
                        {/* <label htmlFor="email">Enter your Email</label> */}
                        <input required type="email" name='email' placeholder="Enter your Email"/> 
                    </div>
                    <div className="send-mail">                        
                      <button>Send Email</button>
                    </div>
                    <div className="bback-login">  
                        <a href = "/Login">back to log in</a>
                    </div>
                    </form>
                        </div>

                    </div>
                

                </div>


            </section>


        </>
    )
}
