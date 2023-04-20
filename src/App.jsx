import React, { Component } from 'react'
import Card from './components/Card'

export default class App extends Component {
  render() {
    return (
      <div>
        <img src="" alt="" />
        <h3 className="border-b-4">
          Our best mobile app <span className="text-secondary"> Features</span>
        </h3>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}
