import React from 'react'

function Registration() {
  return (
    <>
     <div className="container my-4">
        <div className="row">
            <p className='h3'>Registration Form</p>
        </div>
        <div className="row">
            <div className="col-4">
                <form action="">
                    <div className='mb-2'>
                    <input type="text" placeholder='Name' name="" id="" className='form-control' />
                    </div>
                    <div className='mb-2'>
                    <input type="email" placeholder='Email' name="" id="" className='form-control' />
                    </div>
                    <div className='mb-2'>
                    <input type="password" placeholder='password' name="" id="" className='form-control' />
                    </div>
                    <div className='mb-2'>
                    <input type="submit" value="Submit" name="" id="" className='btn btn-primary' />
                    <input type="reset" value="Reset" name="" id="" className='btn btn-danger ms-2' />
                    </div>
                </form>
            </div>
        </div>
     </div>
    </>
  )
}

export default Registration