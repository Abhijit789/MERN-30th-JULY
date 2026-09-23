import React from 'react'
import CompD from './CompD'

function CompC({name}) {
  return (
    <>
    <h1>CompC</h1>
    <CompD name={name}/>
    </>
  )
}

export default CompC