import React from 'react'

function ListRendering1() {
    let fruit=["apple","pineapple","custurd apple","watermelon","papaya","mango","banana","strawberry"]
  return (
    <div>
        <ul>
            {
                fruit.map((currentFruit,index)=><li key={index}>{currentFruit}</li>)
            }
        </ul>
     
    </div>
  )
}

export default ListRendering1