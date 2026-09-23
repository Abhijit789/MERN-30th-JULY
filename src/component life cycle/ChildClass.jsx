import React, { Component } from 'react'

class ChildClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      console.log("hey this is constructor from child class B");
      
    }

    componentDidMount(){
        console.log("hey this is componentDidMount method from child class B");
        
    }

    componentDidUpdate(){
        console.log("child b is updated");
        
    }
    shouldComponentUpdate(prevProps,prevState){
        console.log("prevState",prevState.count);
        console.log("current ",this.state.count);

        return true;
        
        
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    console.log("render method from child class B");
    
    return (
      <>
      <div className="container my-5">
       <h1>Child Class</h1>
        <h4>count {this.state.count}</h4>
        <button className='btn btn-primary' onClick={this.increment}>Increment Child Count</button>
        </div>
      </>
    )
  }
}

export default ChildClass;
