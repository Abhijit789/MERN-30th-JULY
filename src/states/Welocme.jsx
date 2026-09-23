import React from 'react'

function Welocme() {
  return (
    <>
     <div className="container">
        <div className="row">
            <div className="col">
                <p className='p-3 bg-warning text-light fw-bold fst-italic'>
                    <i className='ms-3 fa fa-user text-primary'></i>
                    User Profile
                </p>
            </div>
        </div>
        <div className="row">
             <div className="card col-6">
                 <div className="card-header">
                     <div className="card-title">
                        <p className='h-4 text-center'>Profile Card</p>
                     </div>
                 </div>
                 
                     <div className="card-body">
                        <div className="card-text">
                            Name :  Gangadhar
                        </div>
                     </div>
             </div>
        </div>
     </div>
    </>
  )
}

export default Welocme