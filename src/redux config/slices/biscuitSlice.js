import { createSlice } from "@reduxjs/toolkit";

let initialCount={biscuitCount:10};

let biscuitSlice=createSlice({
    initialState:initialCount,
    name:"biscuit",
    reducers:{
        incrementBiscuit:(state,action)=>{state.biscuitCount+=action.payload},
        decrementBiscuit:(state,payload)=>{state.biscuitCount-=payload}
    }
})

export const {incrementBiscuit,decrementBiscuit}=biscuitSlice.actions;
export default biscuitSlice.reducer;