import { Component } from 'react'

export default class ErrorBoundaries extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

    static getDerivedStateFromError(){
        return {
            hasError:true
        }
    }
  render() {
    if(this.state.hasError){
        return <h2 className='text-danger text-center my-2'>Something went wrong!</h2>
    }
    return this.props.children
  }
}
