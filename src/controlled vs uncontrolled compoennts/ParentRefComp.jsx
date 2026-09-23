import React, { useRef } from 'react'
import ChildRefComp from './ChildRefComp';

function ParentRefComp() {
    let inputRef=useRef();

    function inputFocus(){
        inputRef.current.focus();

    }

    function clearField(){
        inputRef.current.value=""

    }
  return (
    <>
     <h2>Parent Ref component</h2>
     <ChildRefComp ref={inputRef}/>
     <button className="btn btn-primary m-3" onClick={(e) => inputFocus(e)}>Focus Input</button>
     <button className="btn btn-primary m-3" onClick={(e) => clearField(e)}>Clear Field</button>
    </>
  )
}

export default ParentRefComp