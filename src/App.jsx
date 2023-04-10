import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

// Mounting
//  1. Constuctor
//  2. getDerivedstatefromprops
//  3. render
//  4. componentDidMount

// Updating
// 1. getDerivedStateFromProps
// 2. ShouldComponentUpdate
// 3. render
// 4. getSnapshotBeforeUpdate
// 5. componentDidUpdate

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
    counter: 0,
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('errorInfo', errorInfo)
  }

  render() {
    console.log('app component')
    const { name, counter, error } = this.state

    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <div>
        <p style={{ color: 'red' }}>{name}</p>
        <p style={{ color: 'red' }}>{counter}</p>
        {counter < 5 && <Child1 name={name} />}
        <Child2 />
        <button
          type="button"
          onClick={() => {
            this.setState({ name: 'Virat' })
          }}
        >
          Change Name from App
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 })
          }}
        >
          Change test from App
        </button>
      </div>
    )
  }
}

export default App
