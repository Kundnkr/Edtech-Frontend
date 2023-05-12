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
                        <img src={pass} alt="" />
                        <h1>Forget Password</h1>

                    </div>
                    <form onSubmit={submithandler}>
                        <input type="password" placeholder='Password' onChange={chnagehandler} name='old_password' />
                        <input type="password" placeholder='Confirm Password' onChange={chnagehandler} name='confirm_password' />
                        <button>Change Password</button>
                    </form>

                </div>


            </section>


        </>
    )
}
