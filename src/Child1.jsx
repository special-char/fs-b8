import React, { Component  } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
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
    /* console.log('constructor')
    console.log('constructor', document.getElementById('title')) */
  }

  static getDerivedStateFromProps(props, state) {
    /* console.log('nextProps', nextProps)
    console.log('prevState', prevState)
    console.log('getDerivedStateFromProps', document.getElementById('title')) */
    return {
      username: props.name,
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
      /* console.log('coppied') */
    })
  }

    shouldComponentUpdate(nextProps,nextState){
/*       if (this.props!== nextProps || this.state!== nextState) {
        return true
      } */ 
      
      return shallowCompare(this, nextProps, nextState) 
    }

  render() {
    /* console.log('render')
    console.log('render', document.getElementById('title')) */
    
    console.log('c1C');
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
