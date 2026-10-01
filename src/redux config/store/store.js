import { configureStore } from "@reduxjs/toolkit"
import counterSlice from '../slices/counterSlice'
// import icecreamSlice from '../slices/icecreamSlice'
import biscuitSlice from '../slices/biscuitSlice'
let store=configureStore(
    {
        reducer:{
            counter:counterSlice,
            // icecream:icecreamSlice,
            biscuit:biscuitSlice
        }
    }
)

export default store