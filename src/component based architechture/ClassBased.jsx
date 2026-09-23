import React  from 'react'
import FunctionalBased from './FunctionalBased';

class ClassBased extends React.Component {
    
  render() {
    return (
      <div>
        <h1>Class based component</h1>
        <FunctionalBased/>
      </div>
    )
  }
}

export default ClassBased;
