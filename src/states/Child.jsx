import React from 'react'

function Child({greet,handleGreet}) {
    
  return (
    <>
     <h3>Parent is greeting child</h3>
     <h3>Hey John , {greet}</h3>
     <button onClick={handleGreet}>Greet In Evening</button>
    </>
  )
}

export default Child
