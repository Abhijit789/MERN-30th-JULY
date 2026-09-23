import React from 'react'
import { cardLabels } from './constant'

function Card({menu}) {
    return (
        <div className="card p-2 col-5">
            <div className="row">
                <div className="col-4 d-flex">
                    <img className='img-fluid rounded-1 justify-content-center align-items-center' src={menu.image} />
                </div>
                <div className="col-8">
                    <ul className='list-group'>
                        <li className='list-group-item'>{cardLabels.DishName} : {menu.dishName}</li>
                        <li className='list-group-item'>{cardLabels.price} : {menu.price}</li>
                        <li className='list-group-item'>{cardLabels.category} : {menu.category}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Card