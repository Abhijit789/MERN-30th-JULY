
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/counterSlice';
import { incrementBiscuit } from '../slices/biscuitSlice';
// import { incrementIcecreame } from '../slices/icecreamSlice';

function CounterApplication() {
    let count=useSelector(state=>state.counter.count);
    // let iceCreamCount=useSelector(state=>state.icecream.iceCreame);
    let biscuitCount=useSelector(state=>state.biscuit.biscuitCount);

    console.log(count);
    
    //  console.log(iceCreamCount,"icecreame");
     
    let dispatch=useDispatch();

    function incrementCount(){
        dispatch(increment())
    }

    function incrementBCount(){
        dispatch(incrementBiscuit(10))
    }
  return (
    <>
        <h1 className='m-3'>Counter Count {count}</h1>
        <button className='btn btn-primary m-3' onClick={incrementCount}>Increment Count</button>

        <h2>Icecreame count : {biscuitCount}</h2> 
        <button className='btn btn-primary m-3' onClick={incrementBCount}>Increment Count</button>

    </>
  )
}

export default CounterApplication