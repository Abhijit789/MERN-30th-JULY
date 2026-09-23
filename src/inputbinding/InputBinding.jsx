import React, { useState } from 'react'

function InputBinding() {
    let[inputData,setInputData]=useState({
        name:"",
        email:"",
        contact:"",
        company:"",
        designation:""
    })
    let[error,setError]=useState({
        name:"",
        email:"",
        contact:"",
        company:"",
        designation:""
    })
    let[isSubmitted,setIsSubmitted]=useState(false)
    let[store,setStore]=useState({})

    // let prefix="user";

    // let user={
    //     [prefix+"Name"]:"Gangadhar"
    // }
    // console.log(user);
    


    function changeHandle(e){
        e.preventDefault();

        let{name,value}=e.target;
        // console.log(e);
        // console.log(value,name);
        setInputData((prev)=>({
            ...prev,
            [name]:value
        }))
        
        
        

    }

    function handleSubmit(e){
        e.preventDefault();
        setStore(inputData);
        // alert("Your Form Is Submitted!!")
        setIsSubmitted(!isSubmitted)

        if(!inputData.name && !inputData.email && !inputData.contact && !inputData.company && !inputData.designation)
        setError((prev)=>({
            ...prev,
            name:"Name is Required",
            email:"Email is Required",
            contact:"Contact is Required",
            company:"Company is Required",
            designation:"Designation is Required",

        }))
        

    }

    console.log("Submit Data",store);
    console.log("onchange",inputData);
    
    

    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-6">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="mb-2">
                            <input type="text" onChange={(e)=>{changeHandle(e)}} placeholder='Name' name='name' className='form-control' id="inp1" />
                            <p className='text-danger'>{error.name?error.name:""}</p>
                            </div>
                            <div className="mb-2">
                            <input type="text" onChange={(e)=>{changeHandle(e)}} placeholder='Email' name='email' className='form-control' id="inp2" />
                            <p className='text-danger'>{error.email?error.email:""}</p>
                            </div>
                            <div className="mb-2">
                            <input type="text" onChange={(e)=>{changeHandle(e)}} placeholder='contact' name='contact' className='form-control' id="inp3" />
                            <p className='text-danger'>{error.contact?error.contact:""}</p>
                            </div>
                            <div className="mb-2">
                            <input type="text" onChange={(e)=>{changeHandle(e)}} placeholder='Company' name='company' className='form-control' id="inp4" />
                            <p className='text-danger'>{error.company?error.company:""}</p>
                            </div>
                            <div className="mb-2">
                            <input type="text" onChange={(e)=>{changeHandle(e)}} placeholder='Designation' name='designation' className='form-control' id="inp5" />
                            <p className='text-danger'>{error.designation?error.designation:""}</p>
                            </div>
                            <div className="mb-2">
                                <input className='btn btn-primary' type="submit" value="Submit" disabled={isSubmitted?true:false}  />
                                <input className='btn btn-danger ms-2' type="reset" value="Reset" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputBinding