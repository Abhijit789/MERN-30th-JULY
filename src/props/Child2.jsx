import React from 'react'

function Child2(props) {
    // console.log(user);
    // console.log(style);
    console.log(props);
    let {user:{name,age},style:{color,height,width,boxShadow,border}}=props;

    let {user,style}=props;

    console.log(name);
    console.log(color);
    console.log(style);
    
    
    
    
    
    
  return (
    <div style={style}>Child2</div>
  )
}

export default Child2