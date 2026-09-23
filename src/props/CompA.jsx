import React from 'react'
import CompB from './CompB'

function CompA({name}) {
  return (
    <>
    <h1>CompA</h1>
    <CompB name={name}/>
    </>
  )
}

export default CompA