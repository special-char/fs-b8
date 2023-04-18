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
          Cname: 'ahemdabad',
          temp: 21,
        },
        {
          id: 2,
          Cname: 'surat',
          temp: 22,
        },
        {
          id: 3,
          Cname: 'mumbai',
          temp: 23,
        },
        {
          id: 4,
          Cname: 'goa',
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
          <h2>weather app</h2>

          <form onSubmit={this.handels}>
            <input type="text" className="inp" ref={this.myrefforC} />
            <button type="submit" className="btnn">
              find
            </button>
          </form>

          <div className="log">
            {this.state.citys.map(x => {
              if (x.Cname === this.state.finder) {
                return (
                  <p>
                    ther is a {x.temp}C temprature in {x.Cname}
                  </p>
                )
              } else {
                ;<p>we could not finde your value</p>
              }
              return null
            })}
          </div>
        </div>
      </div>
    )
  }
}
