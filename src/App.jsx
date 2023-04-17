import React, { Component } from 'react'
import Input from './components/Input'
import Button from './components/Button'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form>
          <Input />
        </form>
      </div>
    )
  }
}
