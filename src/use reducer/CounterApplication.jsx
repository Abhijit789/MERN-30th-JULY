import { useReducer } from 'react'
const initialState=0;
function reducer(state,action){
    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1
        case "incrementbyfive":
            return state+ action.payload;
        case "reset":
            return state=0;
        default :
            return state
    }
}
function CounterApplication() {
    let[count,dispatch]=useReducer(reducer,initialState);

    // dispatch handeler

    function increment(){
        dispatch({type:"increment"})
    }

    function incrementbyfive(){
        dispatch({type:"incrementbyfive",payload:5})
    }

    function decrement(){
        dispatch({type:"decrement"})
    }

    function reset(){
        dispatch({type:"reset"})
    }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                 <h3>{count}</h3>
                 <button className="btn btn-primary ms-2" onClick={increment}>Increment</button>
                 <button className="btn btn-primary ms-2" onClick={decrement}>Decrement</button>
                 <button className="btn btn-primary ms-2" onClick={incrementbyfive}>Increment 5</button>
                 <button className="btn btn-primary ms-2" onClick={reset}>Reset</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CounterApplication