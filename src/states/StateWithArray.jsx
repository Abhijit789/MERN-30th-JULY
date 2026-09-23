import React, { useState } from 'react'

function StateWithArray() {
    let [items, setItems] = useState(["apple", "pineapple", "watermelon", "papaya", "banana", "strawberry"])

    function addItem(item){
        setItems([...items,item])
    }
    return (
        <>
        <ul>
          {
            items.map((item,index)=><li key={index}>{item} <button onClick={()=>{addItem(item)}}>Add Item</button></li>)
            
          }
          </ul>
        </>
    )
}

export default StateWithArray