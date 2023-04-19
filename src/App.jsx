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
      ({ citys }) => ({
        finder: citys.find(x => x.Cname === this.myrefforC.current.value),
      }),
      () => {
        this.myrefforC.current.value = ''
      },
    )
  }

  render() {
    /* console.log(this.state.citys)
    console.log(this.state.finder) */
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
            {/* {this.state.citys.map(x => {
              if (x.Cname === this.state.finder) {
                return (
                  
                )
              } else {
                ;
                return null
              }
            })} */}
          </div>
        </div>
      </div>
    )
  }
}
