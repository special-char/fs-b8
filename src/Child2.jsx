import React, { Component } from 'react'

export default class Child2 extends Component {
  
  shouldComponentUpdate(props, state){
    return false
  }


  
  render() {
    
    console.log('c2C');
    return (
      <div>Child2</div>
    )
  }
}
