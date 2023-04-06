import React, { Component } from 'react'

export default class Child1 extends Component {
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
    console.log('constructor')
    console.log('constructor', document.getElementById('title'))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps', nextProps)
    console.log('prevState', prevState)
    console.log('getDerivedStateFromProps', document.getElementById('title'))
    return {
      username: nextProps.name,
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const json = await res.json()
      this.setState({ todoItem: json })
    } catch (error) {}

    console.log('componentDidMount', document.getElementById('title'))

    document.getElementById('title').style.color = 'green'

    document.addEventListener('copy', () => {
      console.log('coppied')
    })
  }

  render() {
    console.log('render')
    console.log('render', document.getElementById('title'))
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
