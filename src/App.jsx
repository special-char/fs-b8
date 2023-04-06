import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

// Mounting
//  1. Constuctor
//  2. getDerivedstatefromprops
// 3. render

// Updating

// Unmounting

// Error

const greet = 'hello'

// Child1.getDerivedStateFromProps = (nextProps, prevState) => {
//   return {
//     username: `${greet} ${nextProps.name}`,
//   }
// }

class App extends Component {
  state = {
    name: 'yagnesh',
  }

  render() {
    return (
      <div>
        <Child1 name={this.state.name} />
        <Child2 />
        <button
          type="button"
          onClick={() => {
            this.setState({ name: 'Virat' })
          }}
        >
          Change Name from App
        </button>
      </div>
    )
  }
}

export default App
