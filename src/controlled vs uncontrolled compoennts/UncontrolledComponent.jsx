import React, { useRef } from 'react'

function UncontrolledComponent() {
    let reference=useRef()

    function getCreate(e){
        // console.log(reference.current.style);
        let {style}=reference.current;
        console.log(style);
        style.height="200px";
        style.width="200px";
        style.borderRadius="25px";
        style.boxShadow="0px 0px 5px grey,0px 0px 10px grey,0px 0px 15px grey,0px 0px 20px grey"
        
    }
  return (
    <>
     <div className="container my-5" ref={reference}></div>
     <button onClick={getCreate} className='btn btn-warning'>Create Box</button>
    </>
  )
}

export default UncontrolledComponent