import React, { Component, createRef } from 'react'
import './components/gl.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.myrefforC = createRef()
    this.state = {
      citys: [
        {
          id: 1,
          Cname: 'c1',
          temp: 21,
        },
        {
          id: 2,
          Cname: 'c2',
          temp: 22,
        },
        {
          id: 3,
          Cname: 'c3',
          temp: 23,
        },
        {
          id: 4,
          Cname: 'c4',
          temp: 24,
        },
      ],
      finder: '',
    }
  }

  handels = e => {
    e.preventDefault()

    this.setState(
      ({ finder }) => ({
        finder: this.myrefforC.current.value,
      }),
      () => {
        this.myrefforC.current.value = ''
      },
    )
  }

  render() {
    console.log(this.state.citys)
    console.log(this.state.finder)
    return (
      <div className="mainC">
        <div className="mainC1">
          <h2>wether app</h2>

          <form onSubmit={this.handels}>
            <input type="text" className="inp" ref={this.myrefforC} />
            <button type="submit">find</button>
          </form>

          <div className="log">
            {this.state.citys.map(x => {
              if (x.Cname === this.state.finder) {
                ;<p>{x.temp}</p>
              } else {
                ;<p>we could not finde your value</p>
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}
