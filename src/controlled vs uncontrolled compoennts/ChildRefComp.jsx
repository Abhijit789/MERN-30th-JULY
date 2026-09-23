import React, { forwardRef } from 'react'

// function ChildRefComp({ref}) {
//     console.log(ref);
    
//   return (
//     <>
//      <h2>Child Ref Compoenent</h2>
//      <input type="text" className='from-control col-6' />
//     </>
//   )
// }

// export default ChildRefComp

let ChildRefComp=forwardRef((props,ref)=>{
    console.log(ref);

    return (
        <>
          <input type="text" ref={ref} />
        </>
    )
    
})

export default ChildRefComp;