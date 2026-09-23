import React from 'react'
import CompC from './CompC'

function CompB({name}) {
  return (
    <>
     <h1>CompB</h1>
     <CompC name={name}/>
    </>
  )
}

export default CompB