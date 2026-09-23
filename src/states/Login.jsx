import React, { useState } from 'react'
import Welocme from './Welocme';
import Registration from './Registration';

function Login() {
    const [isLogdIn, setIsLogdIn] = useState(true);



    function loginToggle() {
        setIsLogdIn(!isLogdIn)

    }
    let ui;

    console.log(isLogdIn);
    if (isLogdIn) {
        ui = <Welocme />
    } else {
        ui = <Registration />
    }

    return (
        <>
            {
                isLogdIn ? (<div className="container my-4">
                    <div className="row">
                        <p className='h3'>Login Form</p>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <form action="">
                                <div className='mb-2'>
                                    <input type="email" placeholder='Email' name="" id="" className='form-control' />
                                </div>
                                <div className='mb-2'>
                                    <input type="password" placeholder='password' name="" id="" className='form-control' />
                                </div>
                                <div className='mb-2'>
                                    <input type="button" onClick={() => { loginToggle() }} value="Submit" name="" id="" className='btn btn-primary' />
                                    <input type="reset" value="Reset" name="" id="" className='btn btn-danger ms-2' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>) : <div>{ui}</div>
            }
        </>
    )
}

export default Login