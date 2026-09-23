import React, { useState } from 'react'

function PasswordInput() {
    let [show, setShow] = useState(false);
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <form action="">
                            <input type={show ? "text" : "password"} className='form-control' />

                        </form>

                        <button className='btn btn-warning my-2 mx-2' onClick={() => { setShow(!show) }}><i className={show ? "fas fa-eye" : "fas fa-eye-slash"}></i>{show ? "Show Password" : "Hide Password"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordInput