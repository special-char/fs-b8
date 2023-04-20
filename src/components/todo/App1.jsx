import React, { Component, createRef } from 'react'

export default class App1 extends Component {
  constructor(props) {
    super(props)

    this.myref = createRef()
    this.state = {
      todol: [],
    }
  }

  async componentDidMount() {
    this.mainl('all')
  }

  mainl = async status => {
    try {
      let query = ''
      if (status !== 'all') {
        query = `?isdone=${status === 'completed'}`
      }
      const res = await fetch(`http://localhost:3000/todol${query}`)
      const json = await res.json()

      this.setState({ todol: json })
    } catch (error) {}
  }

  handels = async e => {
    try {
      e.preventDefault()

      const data = {
        text: this.myref.current.value,
        isdone: false,
      }

      const res = await fetch('http://localhost:3000/todol', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
          accept: 'application/json',
        },
      })

      const json = await res.json()

      this.setState(
        ({ todol }) => ({
          todol: [...todol, json],
        }),
        () => {
          this.myref.current.value = ''
        },
      )
    } catch (error) {}
  }

  deleth = async iteam => {
    try {
      const res = await fetch(`http://localhost:3000/todol/${iteam.id}`, {
        method: 'DELETE',
      })

      this.setState(({ todol }) => {
        const index = todol.findIndex(y => y.id === iteam.id)
        return { todol: [...todol.slice(0, index), ...todol.slice(index + 1)] }
      })
    } catch (error) {}
  }

  check = async iteam => {
    try {
      const res = await fetch(`http://localhost:3000/todol/${iteam.id}`, {
        method: 'put',
        body: JSON.stringify({ ...iteam, isdone: !iteam.isdone }),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      })

      const json = res.json()

      this.setState(({ todol }) => {
        const index = todol.findIndex(y => y.id === iteam.id)
        return {
          todol: [...todol.slice(0, index), json, ...todol.slice(index + 1)],
        }
      })
    } catch (error) {}
  }

  render() {
    console.log(this.state.todol)
    return (
      <div className="mainC">
        <h2>todo app</h2>
        <form onSubmit={this.handels}>
          <input type="text" ref={this.myref} />
          <button type="submit">add</button>
        </form>

        <div className="log">
          {this.state.todol.map(x => (
            <div>
              <input
                type="checkbox"
                onChange={() => this.check(x)}
                checked={x.isdone}
              />
              <p>{x.text}</p>
              <button type="button" onClick={() => this.deleth(x)}>
                delet
              </button>
            </div>
          ))}
        </div>

        <div className="filters">
          <button type="button" onClick={() => this.mainl('all')}>
            all
          </button>
          <button type="button" onClick={() => this.mainl('pending')}>
            pending
          </button>
          <button type="button" onClick={() => this.mainl('completed')}>
            completed
          </button>
        </div>
      </div>
    )
  }
}
