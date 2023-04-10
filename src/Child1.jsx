import React, { PureComponent } from 'react'
import shallowCompare from 'react-addons-shallow-compare'

export default class Child1 extends PureComponent {
  state = {
    username: '',
    todoItem: {},
  }

  constructor(props) {
    super(props)
    // this.state = {
    //   username: props.name,
    // }
    // api call
    // console.log('constructor')
    // console.log('constructor', document.getElementById('title'))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('nextProps', nextProps)
    // console.log('prevState', prevState)
    // console.log('getDerivedStateFromProps', document.getElementById('title'))
    return {
      username: nextProps.name,
    }
  }

  mouseMove = () => {
    console.log('mousemove')
  }

  componentDidMount() {
    // try {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   const json = await res.json()
    //   this.setState({ todoItem: json })
    // } catch (error) {}

    // // console.log('componentDidMount', document.getElementById('title'))

    // document.getElementById('title').style.color = 'green'

    document.addEventListener('mousemove', this.mouseMove)
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove)
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState)
  //     // if (this.props !== nextProps || this.tate !== nextState) {
  //     //   return true
  //     // }
  //     // return false
  //   }

  render() {
    console.log('child 1 component')

    throw new Error('something went wrong')
    return (
      <div>
        {/* <h1 style={{ color: 'red' }} id="title">
          {this.state.todoItem.title}
        </h1> */}
        <p>{this.state.username}</p>
        <button
          type="button"
          onClick={() => this.setState({ username: 'Rohit' })}
        >
          Change Name
        </button>
      </div>
    )
  }
}
