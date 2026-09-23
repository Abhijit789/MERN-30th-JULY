import React, { Component } from 'react'
import ChildClass from './ChildClass';

class ComponentLieCycleClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      console.log("hey i am a constructor from parent class A");
      
    }

    componentDidMount(){
        console.log("hey i am a componentDidMount from parent class A");
    }
    
    componentDidUpdate(){
        console.log("component is updated");
        
    }

    shouldComponentUpdate(prevProps,prevState){
        console.log("prevState",prevState.count);
        console.log("current ",this.state.count);

        return true;
        
        
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    console.log("Render Method From Parent A",this.state.count);
    
    return (
      <>
      <div className="container my-5">
       <h1>Parent Class A</h1>
        <h4>count {this.state.count}</h4>
        <button className='btn btn-primary' onClick={this.increment}>Increment Parent Count</button>
        </div>
        <ChildClass/>
      </>
    )
  }
}

export default ComponentLieCycleClass;
