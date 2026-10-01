import { createSlice } from "@reduxjs/toolkit"

let initialState={count:0}

let counterSlice=createSlice({
    initialState,
    name:"counter",
    reducers:{
        increment:(state)=>{state.count+=1},
        decrement:(state)=>{state.count-=1},
    }
})

export const {increment,decrement}=counterSlice.actions;

export default counterSlice.reducer;