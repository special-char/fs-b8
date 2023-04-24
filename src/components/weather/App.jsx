import React, { Component, createRef } from 'react'
import './gl.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.myrefforC = createRef()
    this.state = {
      citys: [],
      finder: '',
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:3000/weather')
      const json = await res.json()
      this.setState({ citys: json })
    } catch (error) {}
  }

  handels = e => {
    e.preventDefault()

    this.setState(
      ({ citys }) => ({
        finder: citys.find(y => y.Cname === this.myrefforC.current.value),
      }),
      () => {
        this.myrefforC.current.value = ''
      },
    )
  }

  render() {
    const { finder } = this.state
    return (
      <div className="mainC">
        <div className="mainC1">
          <h2>weather app</h2>

          <form onSubmit={this.handels}>
            <input type="text" className="inp" ref={this.myrefforC} />
            <button type="submit" className="btnn">
              find
            </button>
          </form>

          <div className="log">
            {finder ? (
              <p>
                ther is a {finder.temp}C temprature in {finder.Cname}
              </p>
            ) : (
              <p>we could not finde your date</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}
